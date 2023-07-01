import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Banner } from '@/components/banner'
import { FooterComponete } from '@/components/footer'
import { NavigateBar } from '@/components/navigateBar'
import { MoreImages } from '@/components/moreImages'
import { ButtonFilter } from '@/components/buttonFilter'
import { AdCard } from '@/components/adCard'
import Header from "@/components/Header/header";
import { ListCard } from '@/components/listCard'
import { AdPhoto } from '@/components/adPhoto'
import { AdDetails } from '@/components/adDetails'
import { AdDescription } from '@/components/adDescription'

const inter = Inter({ subsets: ["latin"] });

const user = {
  name: "Caio",
  email: "caio@mail.com",
};

export default function Home() {
  return (
   <>
    <Header isLoggedIn={true} user={user}/>
    <Banner/>
    <div className='layout flex max-w-[1600px] mt-[50px] justify-between flex-col md:flex-row-reverse'>
      <ListCard/>
      <ButtonFilter/>
    </div>
    {/* <div className='bg-blue-500 h-[700px] flex items-center justify-center'>
    </div> */}
    <NavigateBar page={3} count={65}/>
    <FooterComponete/>
   </>
  )
}
