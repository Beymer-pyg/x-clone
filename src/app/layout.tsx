import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clon twitter X',
  description: 'Mejorando las habilidades a cada segundo :3'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='dark'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
