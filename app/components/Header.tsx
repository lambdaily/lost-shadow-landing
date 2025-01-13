import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 absolute w-full z-30">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="https://media.discordapp.net/attachments/835692347677081650/1328206769847144448/logo.png?ex=6785dc72&is=67848af2&hm=bc4c4e06fb4570563324c5158224a9c11ffeda95251d4ea7abb9626a2708617e&=&format=webp&quality=lossless"
            alt="The Lost Shadow Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </Link>
        <div className="space-x-4">
          <Link href="#features" className="hover:text-gray-300 transition duration-300">Features</Link>
          <Link href="#" className="hover:text-gray-300 transition duration-300">About</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header

