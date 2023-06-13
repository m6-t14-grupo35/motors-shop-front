import { CommentComponent } from "@/components/comment";
import { FooterComponete } from "@/components/footer";
import { MoreImages } from "@/components/moreImages";
import { SellerInfos } from "@/components/sellerInfos";

export default function adPage () {
  const comentarios = [{username:"Ismael Silva", date:"2023-05-10T17:53:02.298399Z", text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
  {username:"juscelino kubitschek", date:"1960-05-10T17:53:02.298399Z", text:"amanhã eu vejo."},
  {username:"luiz k.", date:new Date(), text:"ja foi batido?"},]
  return(
    <>
      <div className="h-[1500px] bg-green-300 flex justify-center items-center flex-col gap-4">
        <MoreImages/>
        <SellerInfos name='Ismael Silva' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'/>


        {/* <CommentComponent userName='Ismael Silva' date="2023-05-10T17:53:02.298399Z" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/> */}
        <div className="flex flex-col gap-[24px] bg-white py-[36px] px-[34px] rounded">
          <h2 className="heading-6-600 text-grey-1">Comentários</h2>
          <div className="flex flex-col gap-[44px]">
            {comentarios.map((comentario, index) => <CommentComponent key={`comment${index}`} userName={comentario.username} date={comentario.date} text={comentario.text}/>)}
          </div>
        </div>

        


      </div>
      <FooterComponete/>
    </>
  )
}
