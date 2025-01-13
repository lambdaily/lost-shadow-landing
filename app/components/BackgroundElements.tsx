import { motion } from 'framer-motion'

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute bg-white opacity-10 rounded-full"
          style={{
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 200 - 100],
          }}
          transition={{
            duration: Math.random() * 60 + 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-500 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-6 h-6 bg-blue-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
          x: [0, -150, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-green-500 rounded-full"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.5, 1, 0.5],
          x: [0, 200, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}

export default BackgroundElements

