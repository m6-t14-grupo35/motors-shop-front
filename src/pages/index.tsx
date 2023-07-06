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
import { useContext, useEffect } from 'react'
import { AdContext } from '@/contexts/adContext'
import { GetServerSideProps, NextPage } from 'next'
import { iAd, TypeFuels } from '@/interfaces/cards.interfaces'
import { api } from '@/services/api'

const inter = Inter({ subsets: ["latin"] });


interface HomeProps {
  ads: iAd[]
}

const Home: NextPage<HomeProps> = ({ ads }: HomeProps) => {
  const {adList, setAdList} = useContext(AdContext)
  useEffect(() => {
    setAdList([...ads])
  
  }, [setAdList, ads])
  return (
   <>
    <Header />
    <Banner/>
    <div className='layout flex max-w-[1600px] mt-[50px] justify-between flex-col md:flex-row-reverse'>
    <div className="my-2 overflow-x-auto mx-[60px] mb-[80px]">
      <div className="flex md:flex-wrap gap-12 md:justify-normal transition-all">
        {adList.length === 0 ? (
          <div className="flex justify-center items-center flex-col">
            <h1 className='text-random-12 heading-2-600'>Não estamos conseguindo achar nenhum anúncio no momento, anuncie algo ou tente mais tarde!</h1>
            <Image src={"/carro-quebrado.png"} width={300} height={300} alt={"Erro!"} />
          </div>
        ): 
        adList.map(ad => {return <AdCard key={ad.id} ad={ad} />})
        }
      </div>
    </div>
      <ButtonFilter />
    </div>
    <NavigateBar page={3} count={65}/>
    <FooterComponete/>
   </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get<iAd[]>("ads");
  return {
    props: { ads: response.data }
  }
}

export default Home