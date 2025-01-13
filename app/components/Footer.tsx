import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center">
      <motion.p 
        className="text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        © 2025 The Lost Shadow. All rights reserved.
      </motion.p>
    </footer>
  )
}

export default Footer

