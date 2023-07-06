import { IediteProps } from "@/interfaces/componentProps.interface"
import { zodResolver } from "@hookform/resolvers/zod"
import { parseCookies } from "nookies"
import { MdClose } from "react-icons/md"
import { SubmitHandler, useForm } from "react-hook-form";
import { addComent, taddComent } from "@/schemas/comments.schema";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { Button_17, Button_18, Button_2, Button_7 } from "@/components/buttons";

export const ModalEditeCommente = ({closeFunction,id}:IediteProps) => {
  const token = parseCookies().motorsShopToken
  const {register, handleSubmit, formState: {errors}, setValue} = useForm<taddComent>({
    resolver: zodResolver(addComent),
    shouldUnregister: false
  });

  const editeCommentFunction = async (data:taddComent) =>{
    const response = await api.patch(`comments/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if(response.status == 200){
      toast.success('perfil atualizado')
    }else{
      toast.error('algo deu errado reloge e tente novamente')
    }
  }

  const onSubmit: SubmitHandler<taddComent> = data => {
    editeCommentFunction(data)
  };


  return(
    <div className='fixed inset-0 flex justify-center items-center w-screen bg-bg-50 z-50'>
      <div className='w-full max-w-[520px] bg-white rounded py-[20px] px-[30px] overflow-y-auto max-h-[96%] custom-scrollbar'>
        <div>
          <div className='w-full flex justify-between '>
            <h2 className='text-[1rem] font-bold leading-[1.25rem] mb-[15px]'>Editar comentario </h2>
            <button onClick={() => closeFunction()}>
              <MdClose className='text-grey-3 text-[20px] font-extrabold'/>
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[12px]'>
            <textarea
              {...register('text')}
              placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
              className="w-full h-[128px] px-4 py-4 text-grey-1 placeholder-grey-3 placeholder-top border-[1px] border-grey-7 outline-[1.5px] outline-brand-2"
            />
            <p className="text-sm/5 text-red-700">{errors.text?.message}</p>

            <div className="flex gap-[10px] self-end">
              <Button_17 text="Cancelar" onClick={() => closeFunction()}/>
              <Button_2 text="Editar" type="submit"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
