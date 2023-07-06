import Header from "@/components/Header/header";
import { AdDescription } from "@/components/adDescription";
import { AdDetails } from "@/components/adDetails";
import { AdPhoto } from "@/components/adPhoto";
import { CommentsSection } from "@/components/commentsSection";
import { FooterComponete } from "@/components/footer";
import { MakeComment } from "@/components/makeComment";
import { ModalAdSuccess } from "@/components/modals/adSuccess";
import { ModalAddAd } from "@/components/modals/addAd";
import { DeleteAccountConfirmation } from "@/components/modals/deleteAccounteConfirmation";
import { DeleteAdConfirmation } from "@/components/modals/deleteAdConfimation";
import { ModalEditeAd } from "@/components/modals/editeAd";
import { ModalEditeProfile } from "@/components/modals/editeProfile";
import { MoreImages } from "@/components/moreImages";
import { SellerInfos } from "@/components/sellerInfos";
import { IadOptional, IcommentProps, IstateProvisorio } from "@/interfaces/componentProps.interface";
import React, { useContext, useState } from 'react';

export default function adPage () {
  const user = {userName: "Chapolin Colorado", userImage:undefined}
  const comentarios:IcommentProps[] = [{userName:"Ismael Silva", date:"2023-05-10T17:53:02.298399Z", text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
  {userName:"juscelino kubitschek", date:"1960-05-10T17:53:02.298399Z", text:"amanhã eu vejo."},
  {userName:"luiz k.", date:new Date(), text:"ja foi batido?"},]
  const adProvisorio: IadOptional = {id:"983493a7-99be-422e-8991-9c568754eda2", brand:"uma marca", model:"um modelo", year:2023, fuel:"gasolina", km:5000, color:"uma cor", priceFIPE:52000, price:40000, description:"esse uma descrição bem curta" }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [seletorProvisorio, setSeletorProvisorio] = useState<IstateProvisorio>(null)
  const fecharProvisorio = () => {
    setSeletorProvisorio(null)
  }

  const openConfirmation = () => {
    setSeletorProvisorio('deleteProfile')
  }

  return(
    <div className="bg-bg-1">
        <Header/>
        <>
        <div className="fixed top-20 z-50">
          <button className="h-14 w-14 bg-yellow-400 rounded-[50%] border-[4px] border-orange-400" onClick={() => setSeletorProvisorio('add')}>modal Ad</button>
          <button className="h-14 w-14 bg-yellow-400 rounded-[50%] border-[4px] border-orange-400" onClick={() => setSeletorProvisorio('edite')}>modal Edite</button>
          <button className="h-14 w-14 bg-yellow-400 rounded-[50%] border-[4px] border-orange-400" onClick={() => setSeletorProvisorio('editeProfile')}>Edite profile</button>
          <button className="h-14 w-14 bg-yellow-400 rounded-[50%] border-[4px] border-orange-400" onClick={() => setSeletorProvisorio('deleteProfile')}>Delete profile</button>
          <button className="h-14 w-14 bg-yellow-400 rounded-[50%] border-[4px] border-orange-400" onClick={() => setSeletorProvisorio('deleteAd')}>Delete anuncio</button>
        </div>
        {seletorProvisorio === "add" && <ModalAddAd closeFunction={() =>fecharProvisorio()}/>}
        {seletorProvisorio === "edite" && <ModalEditeAd closeFunction={() =>fecharProvisorio()} adId="826a4c17-071b-4d0b-b1c6-ddc55ad23db5"/>}
        {seletorProvisorio === "editeProfile" && <ModalEditeProfile openConfirmation={() => openConfirmation()} closeFunction={() =>fecharProvisorio()}/>}
        {seletorProvisorio === "deleteProfile" && <DeleteAccountConfirmation closeFunction={() =>fecharProvisorio()}/>}
        {seletorProvisorio === "deleteAd" && <DeleteAdConfirmation closeFunction={() =>fecharProvisorio()} adId='string'/>}
        </>
      <div className="bg-brand-1 w-screen h-[596px] sm:h-[610px] md:h-[630px] lg:h-[656px]"></div>

      <div className="absolute top-0 w-screen left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center items-center flex-col gap-[10px] py-20 ">

          <div className="flex flex-col gap-[20px] items-center lg:flex-row lg:justify-between lg:items-start w-[93.6%] max-w-[1238px]">

            <div className="flex flex-col items-center lg:w-full max-w-[751px]">
              <AdPhoto/>
              <AdDetails />
              <AdDescription/>
            </div>

            <div className="flex flex-col items-center sw768:items-start gap-[52px] md:flex-row md:justify-between lg:flex-col lg:gap-[34px] lg:mt-10 w-full lg:w-[440px] max-w-[751px]">
              <MoreImages/>
              <SellerInfos name='Ismael Silva' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'/>
            </div>

          </div>

          <div className="flex flex-col items-center gap-[20px] lg:flex-row lg:justify-between lg:items-start w-[93.6%] max-w-[1238px]">
            <div className="flex flex-col items-center gap-[39px] lg:w-full max-w-[751px]">
              <CommentsSection comments={comentarios}/>
              <MakeComment adId="826a4c17-071b-4d0b-b1c6-ddc55ad23db5" userName={user.userName}/>
            </div>
            <div className=" w-[5px] ">

            </div>
          </div>

        </div>
        <FooterComponete/>
      </div>
      <ModalAdSuccess/>
    </div>
  )
}

