import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Banner } from '@/components/banner'
import { ButtonFilter } from '@/components/buttonFilter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    <Banner/>
    <ButtonFilter/>
   </>
  )
}
