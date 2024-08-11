import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hacker Portfolio',
  description: 'A personal portfolio website with a hacker theme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-black text-green-500 font-mono`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}