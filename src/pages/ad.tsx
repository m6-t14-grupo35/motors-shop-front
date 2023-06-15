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
    <>
      <Header/>
      <div className="bg-green-300 flex justify-center items-center flex-col gap-4 py-20">
        <AdPhoto/>
        <AdDetails />
        <AdDescription/>
        <MoreImages/>
        <SellerInfos name='Ismael Silva' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'/>
        <MakeComment userName={user.userName}/>
        <CommentsSection comments={comentarios}/>
      </div>
      <FooterComponete/>
    </>
  )
}
