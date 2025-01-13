import { useRef, useEffect } from 'react';

const BackgroundElements = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        class Cloud {
            lightningVisible = false;
            lightningFrames = 0;
            lightningPath = [];

            constructor(public x: number, public y: number, public size: number, public speed: number) {}

            drawLightning() {
                this.lightningPath = []; // reset the path for new lightning
                let x = this.x;
                let y = this.y + this.size / 2; // Starting y from bottom of cloud
                this.lightningPath.push({ x, y });
                while (y < canvas.height) {
                    const dx = (Math.random() - 0.5) * 30;
                    const dy = Math.random() * 15 + 10;
                    x += dx;
                    y += dy;
                    this.lightningPath.push({ x, y });
                }
                this.lightningVisible = true;
                this.lightningFrames = 30; // control the duration of lightning visibility
            }

            renderLightning() {
                if (!this.lightningVisible) return;
                ctx.beginPath();
                ctx.moveTo(this.lightningPath[0].x, this.lightningPath[0].y);
                this.lightningPath.forEach(point => {
                    ctx.lineTo(point.x, point.y);
                });
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 3;
                ctx.stroke();
                this.lightningFrames--;
                if (this.lightningFrames <= 0) {
                    this.lightningVisible = false;
                }
            }

            update() {
                this.x += this.speed * (Math.random() > 0.5 ? 1 : -1);
                if (this.x < 0 || this.x > canvas.width) {
                    this.speed = -this.speed; // reverse direction if hitting bounds
                }

                this.renderLightning(); // render existing lightning if visible

                // Intermittently draw new lightning
                if (Math.random() < 0.001) {
                    this.drawLightning();
                }
            }
        }

        const clouds = Array.from({length: 10}, () => new Cloud(Math.random() * canvas.width, 50, Math.random() * 70 + 30, Math.random() * 2 + 1));

        function animate() {
            ctx.fillStyle = '#3f3a57'; // Setting the original background color
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            clouds.forEach(cloud => {
                cloud.update();
            });
            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.fillStyle = '#3f3a57'; // Reapply background color on resize
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        });
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
        </div>
    );
}

export default BackgroundElements;