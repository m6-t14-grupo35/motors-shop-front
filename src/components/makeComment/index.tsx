import { getInitials } from "@/utils/functions"
import { Button_2 } from "../buttons"
import { ImakeCommentProps } from "@/interfaces/componentProps.interface"
import { useState } from "react";
import { CommentSuggestion } from "../commentSuggestion";

export const MakeComment = ({userName, userImage}: ImakeCommentProps) =>{
  const sugestions = ['Gostei muito', 'incrível', 'Recomendarei para meus amigos!',];
  const [commentText, setCommentText] = useState('');

  const selectSugestion = (sugestion:string) => {
    setCommentText(sugestion);
  };

  const colocarRequisiçãoAqui = () => {
    console.log('você clicou no botão de postar comentario')
  }

  return(
    <div className="py-[36px] px-[34px] lg:px-[44px] bg-white rounded max-w-full">
      <div className="flex flex-col gap-[24px] max-w-[283px] lg:max-w-[751px] lg:w-[751px]">

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

        <form action={colocarRequisiçãoAqui()} className="flex flex-col gap-[24px]">
          <input type="text"
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
            className="w-full h-[128px] px-4 py-4 text-grey-1 placeholder-grey-3 placeholder-top border-[1px] border-grey-7 "
          />

          <button
          type='submit'
          className="w-fit px-[1.75rem] py-[0.75rem] rounded
          bg-brand-1 hover:bg-grey-1 text-[1rem] font-bold
           leading-[1.25rem] text-white
           lg:absolute lg:left-[750px] lg:bottom-[-1090px]"
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