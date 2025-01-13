  'use client'

  import { motion } from 'framer-motion'
  import Image from 'next/image'
  import Link from 'next/link'

  const menuItems = [
    { title: "MULTIPLAYER", href: "#" },
    { title: "OPTIONS", href: "#" },
    { title: "QUIT GAME", href: "#" },
  ]

  const Hero = () => {
    return (
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            className="absolute left-0 transform -translate-y-1/2 w-1/4 h-full z-10"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="https://media.discordapp.net/attachments/835692347677081650/1328212545651216477/Proyecto_nuevo1.png?ex=6785e1d3&is=67849053&hm=1487b682cc0756724f37ae3d4adbff0f8a2ebd49e318f07ed1a167e3b0f52afd&=&format=webp&quality=lossless"
              alt="Left Tree"
              layout="fill"
              objectFit="contain"
              objectPosition="left center"
            />
          </motion.div>
          <motion.div
            className="absolute right-0 transform -translate-y-1/2 w-1/4 h-full z-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="https://media.discordapp.net/attachments/835692347677081650/1328212545873641482/Proyecto_nuevo.png?ex=6785e1d3&is=67849053&hm=7e01b1fa89dde1272fb438db02967047b5ab6a9abdc7516c146f581e913275e2&=&format=webp&quality=lossless"
              alt="Right Tree"
              layout="fill"
              objectFit="contain"
              objectPosition="right center"
            />
          </motion.div>
          <motion.div
            className="relative z-20 w-full flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="https://media.discordapp.net/attachments/835692347677081650/1328230810918064188/banner1.png?ex=6785f2d6&is=6784a156&hm=343d3f581d5488c138a94458b44be6dc2cc9b6f92ef21e402b40d6ade448677d&=&format=webp&quality=lossless"
              alt="The Lost Shadow Banner"
              width={800}
              height={453}
              className="w-[60%] h-auto"
            />
          </motion.div>
          <motion.div
            className="text-center mt-8 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block text-2xl font-bold text-white hover:text-purple-400 transition duration-300"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Image
              src="https://media.discordapp.net/attachments/835692347677081650/1328206769847144448/logo.png?ex=6785dc72&is=67848af2&hm=bc4c4e06fb4570563324c5158224a9c11ffeda95251d4ea7abb9626a2708617e&=&format=webp&quality=lossless"
              alt="The Lost Shadow Logo"
              width={100}
              height={100}
              className="mx-auto"
            />
          </motion.div>
        </div>
      </section>
    )
  }

  export default Hero

