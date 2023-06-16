import Header from "@/components/Header/header";
import { AdDescription } from "@/components/adDescription";
import { AdDetails } from "@/components/adDetails";
import { AdPhoto } from "@/components/adPhoto";
import { Button_2 } from "@/components/buttons";
import { CommentComponent } from "@/components/comment";
import { CommentsSection } from "@/components/commentsSection";
import { FooterComponete } from "@/components/footer";
import { MakeComment } from "@/components/makeComment";
import { MoreImages } from "@/components/moreImages";
import { SellerInfos } from "@/components/sellerInfos";
import { IcommentProps } from "@/interfaces/componentProps.interface";

export default function adPage () {
  const user = {userName: "Chapolin Colorado", userImage:undefined}
  const comentarios:IcommentProps[] = [{userName:"Ismael Silva", date:"2023-05-10T17:53:02.298399Z", text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
  {userName:"juscelino kubitschek", date:"1960-05-10T17:53:02.298399Z", text:"amanhã eu vejo."},
  {userName:"luiz k.", date:new Date(), text:"ja foi batido?"},]
  return(
    <div className="bg-bg-1">
        <Header/>
      <div className="bg-brand-1 w-screen h-[516px] sm:h-[530px] md:h-[550px] lg:h-[576px]"></div>

      <div className="absolute top-0 w-screen left-1/2 transform -translate-x-1/2 bg-red-400">
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
              <MakeComment userName={user.userName}/>
            </div>
            <div className=" w-[5px] ">

            </div>
          </div>

        </div>
        <FooterComponete/>
      </div>
    </div>
  )
}
