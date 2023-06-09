import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Banner } from '@/components/banner'
import { ButtonFilter } from '@/components/buttonFilter'
import { AdCard } from '@/components/adCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    <Banner/>
    <div className='flex flex-row-reverse'>
    <div className='flex flex-row flex-wrap gap-12 mt-[54px]'>
      <AdCard/>
      <AdCard/>
      <AdCard/>
    </div>
    <ButtonFilter/>
    </div>
   </>
  )
}
