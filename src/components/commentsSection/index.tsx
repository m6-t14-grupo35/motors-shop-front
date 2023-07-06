import { IcommentProps } from "@/interfaces/componentProps.interface"
import { CommentComponent } from "../comment"
import { parseCookies } from "nookies"

export const CommentsSection = ({comments}:{comments:IcommentProps[]}) => {
  const userIdCookie = parseCookies().motorsShopIdUser
  return(
    <div  className="flex flex-col gap-[24px] bg-white py-[36px] px-[34px] lg:px-[44px] rounded max-w-[751px]">

    <h2 className="heading-6-600 text-grey-1">Comentários</h2>
    <div className="flex flex-col gap-[44px]">
      {comments.map((comment, index) => <CommentComponent key={`comment${index}`} userName={comment.userName} date={comment.date} text={comment.text} userId={userIdCookie}/>)}
    </div>
  </div>
  )
}
