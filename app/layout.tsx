import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lost Shadow',
  description: 'Juego creado en Paraguay',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
