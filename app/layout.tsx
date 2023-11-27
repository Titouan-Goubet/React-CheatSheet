import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React Cheatsheet',
  description: 'Discover our React CheatSheet: a concise guide packed with code snippets, tips, and best practices for React developers. Ideal for quick reference and skill enhancement!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#fbe2e3] absolute top-24 right-44 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10 dark:bg-[#664a3b]'></div>
        <div className='bg-[#dbd7fb] absolute top-24 right-44 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] lg:left-[-28rem] xl:left-[-15rem] 2xl-[-5rem] -z-10 dark:bg-[#474fa8]'></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
