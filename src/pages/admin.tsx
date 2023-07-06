import Header from "@/components/Header/header";
import { IstateProvisorio } from "@/interfaces/componentProps.interface";
import { ModalAddAd } from "@/components/modals/addAd";
import { useState } from "react";
import { FooterComponete } from "@/components/footer";
import { AdminListCard } from "@/components/adminListCard";
import { ListCard } from "@/components/listCard";

const user = {
  name: "Caio",
  email: "caio@mail.com",
};


export default function Admin() {
  const [modal, setModal] = useState<IstateProvisorio>(null)
  return (
    <div className="bg-grey-8">
      <>
        {modal === "add" && <ModalAddAd closeFunction={() => setModal(null)}/>}
      </>
      <Header isLoggedIn={true} user={user} />
      <div className="bg-brand-1 w-screen h-[357px]"></div>

      <div className="absolute top-0 w-screen left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center items-center flex-col">
          <div className="bg-grey-10 flex flex-col gap-[24px] w-4/5 max-w-[1240px] mx-11 px-[29px] py-[40px] mt-[155px] rounded">
            <div className="w-[104px] h-[104px] rounded-full bg-brand-1 flex justify-center items-center text-white text-4xl">
              A
            </div>
              <div className="flex">
                <p className="heading-6-600">Anunciante Anônimo</p>
                <h2 className="bg-brand-4 text-brand-1 rounded py-1 px-2 body-2-400">
                  Anunciante
                </h2>
              </div>
              <p className="body-1-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s
              </p>
              <button onClick={() => setModal("add")} className="flex items-center justify-center w-[160px] h-[48px] py-[12px] px-[28px] border-brand-1 border-2 rounded text-brand-1 bg-white">Criar Anúncio</button>
          </div>
          <div className="flex-col justify-center md:pl-[60px] w-screen gap-[40px] py-[50px] mx-[60px]">
            <div className="flex md:flex-wrap gap-12 md:justify-normal transition-all">
              {ads.map((ad: any) => {return <AdCard key={ad.id} ad={ad} />})}
            </div>
          </div>
          </div>
          <FooterComponete />
        </div>
      </div>
  </div>
  )
}
