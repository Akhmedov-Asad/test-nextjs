import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next JS',
  description: 'Generated by create next app',
}

import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <ul>
            <li>
              <Link href='/'>
                Home
              </Link>
            </li>
            <li>
            <Link href='/about'>
                About
              </Link>
            </li>
            <li>
            <Link href='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
