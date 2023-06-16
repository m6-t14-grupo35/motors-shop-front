import { IsellerInfosProps } from "@/interfaces/componentProps.interface";
import { Button_1 } from "../buttons"
import { useRouter } from 'next/navigation'
import { getInitials } from "@/utils/functions";

export const SellerInfos = ({photograph, name, description}: IsellerInfosProps) => {
  const router = useRouter()

  return(
    <div className="bg-white rounded w-full max-w-[351px] lg:max-w-[440px] lg:w-[440px] max-h-fit py-[40px] px-[28px] lg:px-[44px]">
      <div className="max-w-[295px] lg:max-w-[352px] flex flex-col gap-[28px] justify-center items-center">
        <div className='rounded-[50%] w-[77px] h-[77px] lg:w-[104px] lg:h-[104px]'>
          {photograph
            ?
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photograph} alt={`imagem de ${name}`} className="w-full h-full object-cover"/>
            :
              <div className={`bg-brand-1 rounded-[50%] w-full h-full flex justify-center items-center`}>
                <p className='font-semibold text-[30px] text-white'>
                  {getInitials(name)}
                </p>
              </div>
          }
        </div>
        <h5 className="text-center text-[1.25rem] font-semibold leading-[1.56rem] text-grey-1">{name}</h5>
        <p className="text-center text-[1rem] font-normal leading-[1.75rem] text-grey-2">{description}</p>
        <Button_1 text='Ver todos anuncios' onClick={() => router.push('/')}/>
      </div>
    </div>
  )
}
