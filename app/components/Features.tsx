import { motion } from 'framer-motion'

const features = [
  { title: "Immersive Storyline", description: "Dive into a rich, mysterious narrative that will keep you engaged for hours." },
  { title: "Stunning Visuals", description: "Experience a beautifully crafted world with atmospheric lighting and shadow effects." },
  { title: "Challenging Puzzles", description: "Test your wit with intricate puzzles that blend seamlessly with the game world." },
]

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Game Features
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="bg-gray-800 bg-opacity-50 p-6 rounded-lg transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 50 }}
            whileHover={{ boxShadow: "0px 0px 20px rgba(123, 97, 255, 0.3)" }}
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features

