import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Banner } from '@/components/banner'
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
    {/* <ButtonFilter/> */}
   </>
  )
}
