import { IcommentProps } from "@/interfaces/componentProps.interface"
import { calculateElapsedTime, getInitials } from "@/utils/functions"

export const CommentComponent = ({userImage, userName, date, text}:IcommentProps) => {

  return(
    <div className="bg-white flex max-w-[351px] rounded" >
      <div className="flex flex-col gap-[12px] max-w-[283px]">
        <div className="flex items-center gap-[8px] w-fit">
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

          <p className="text-grey-1 body-2-500">{userName.length >= 14 ? userName.slice(0,12) + '...' : userName}</p>
          <p className="text-grey-3 body-2-400">{`•  ${calculateElapsedTime(date)}`}</p>

        </div>

        <p className="text-grey-2 body-2-400">{text}</p>
      </div>
    </div>
  )
}
