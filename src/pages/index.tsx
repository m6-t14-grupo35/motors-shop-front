import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Banner } from '@/components/banner'
import { FooterComponete } from '@/components/footer'
import { NavigateBar } from '@/components/navigateBar'
import { MoreImages } from '@/components/moreImages'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

   <>
   <Banner/>
    <div className='bg-blue-500 h-[700px] flex items-center justify-center'>
      <MoreImages/>
    </div>
   <NavigateBar page={3} count={65}/>
   <FooterComponete/>
   </>
  )
}
