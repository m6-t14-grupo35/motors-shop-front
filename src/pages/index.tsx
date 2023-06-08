import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Banner } from '@/components/banner'
import { FooterComponete } from '@/components/footer'
import { NavigateBar } from '@/components/navigateBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

   <>
   <Banner/>
   <div className='bg-blue-500 h-[500px]'></div>
   <NavigateBar page={2} count={50}/>
   <FooterComponete/>
   </>
  )
}
