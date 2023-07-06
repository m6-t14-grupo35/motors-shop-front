import { getInitials } from "@/utils/functions"
import { Button_2 } from "../buttons"
import { ImakeCommentProps } from "@/interfaces/componentProps.interface"
import { useState } from "react";
import { CommentSuggestion } from "../commentSuggestion";
import { api } from "@/services/api";
import { parseCookies } from "nookies";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addAdSchema } from "@/schemas/ad.schemas";
import { addComent, taddComent } from "@/schemas/comments.schema";
import { toast } from "react-toastify";

export const MakeComment = ({userName, userImage, adId}: ImakeCommentProps) =>{
  const sugestions = ['Gostei muito!', 'incrível', 'Recomendarei para meus amigos!',];
  const [commentText, setCommentText] = useState('');
  const [isSubject, setIsSubject] = useState(false)
  const token = parseCookies().motorsShopToken

  const postComment = async(data:taddComent) => {
    const response = await api.post(`comments/${adId}`, data, {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    setIsSubject(false)
    setCommentText('')

    console.log(response)
  }

  const verifyErros = () => {
    if(isSubject){
      if(commentText == ''){
        return "Deve escrever algo para comentar"
      }else if(commentText.length > 255){
        return "tamanho maximo de 255 caracteres"
      }
    }

    return null
  }

  const personError = verifyErros()

  // @ts-ignore
  const submitFunction = (event) => {
    event.preventDefault()
    if(personError == null){
      const data = {
        text: commentText
      }
      console.log(data);

      postComment(data)
    }else{
      toast.error('verifique seu commentario e tente novamente')
    }
  }
  
  return(
    <div className="py-[36px] px-[34px] lg:px-[44px] bg-white rounded w-full max-w-[751px]">
      <div className="flex flex-col gap-[24px] w-full">

        <div className="flex items-center gap-[8px]">
          <div className="w-[32px] h-[32px]">
            {userImage
              ?
                // eslint-disable-next-line @next/next/no-img-element
                <img src={userImage} alt={`imagem de ${userName}`} className="w-full h-full object-cover"/>
              :
                <div className={`bg-brand-1 rounded-[50%] w-full h-full flex justify-center items-center`}>
                  <p className='font-normal text-[14px] text-white'>
                    {getInitials(userName)}
                  </p>
                </div>
            }
          </div>

          <p className="text-grey-1 body-2-500">{userName.length >= 25 ? userName.slice(0,25) + '...' : userName}</p>

        </div>

        <form onSubmit={(event)=>submitFunction(event)} className="flex flex-col gap-[24px] lg:gap-0 lg:mb-[-55px] w-full">
          <textarea
            value={commentText}
            onChange={e => {setCommentText(e.target.value)}}
            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
            className="w-full h-[128px] px-4 py-4 text-grey-1 placeholder-grey-3 placeholder-top border-[1px] border-grey-7 outline-[1.5px] outline-brand-2"
          />
          <p className="text-sm/5 text-red-700">{personError}</p>

          <button
          onClick={() => setIsSubject(true)}
          type='submit'
          className="w-fit px-[1.75rem] py-[0.75rem] rounded
          bg-brand-1 hover:bg-grey-1 text-[1rem] font-bold
           leading-[1.25rem] text-white
           lg:relative lg:left-[520px] lg:bottom-[58px]"
          >
            Comentar
          </button>
        </form>

        <ul className="flex gap-[8px] max-w-full flex-wrap">
            {sugestions.map((sugestion, index) => <CommentSuggestion text={sugestion} key={`sugestion${index}`} onclick={() => setCommentText(sugestion)}/>)}
        </ul>

      </div>
    </div>
  )
}
