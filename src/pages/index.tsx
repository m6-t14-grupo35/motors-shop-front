import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Banner } from '@/components/banner'
import { FooterComponete } from '@/components/footer'
import { NavigateBar } from '@/components/navigateBar'
import { MoreImages } from '@/components/moreImages'
import { ButtonFilter } from '@/components/buttonFilter'
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

const user = {
  name: "Caio",
  email: "caio@mail.com",
};

export default function Home() {
  return (
   <>
    <Header isLoggedIn={true} user={user}/>;
    <Banner/>
    <ButtonFilter/>
      <div className='bg-blue-500 h-[700px] flex items-center justify-center'>
        <MoreImages/>
      </div>
    <NavigateBar page={3} count={65}/>
    <FooterComponete/>
   </>
  )
}
