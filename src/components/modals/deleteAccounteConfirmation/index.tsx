import { Button_17, Button_3 } from "@/components/buttons"
import { api } from "@/services/api"
import { parseCookies } from "nookies"
import { MdClose } from "react-icons/md"
import { toast } from "react-toastify"

export const DeleteAccountConfirmation = ({closeFunction}:{closeFunction: () => void}) => {

  const deleteAccount = async() => {
    const token = parseCookies().motorsShopToken

    const response = await api.delete("users/", {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })

    if(response.status == 204){
      toast.success('Sua conta foi excluida')
      closeFunction()
    }else{
      toast.error('algo deu errado relogue e tente novamente')
    }
  }



  return (
    <div className='fixed inset-0 flex justify-center items-center w-screen bg-bg-50 z-50'>
      <div className='flex flex-col w-full max-w-[520px] bg-white rounded gap-[20px] py-[20px] px-[30px] overflow-y-auto max-h-[96%] custom-scrollbar p-[50px]'>
            <div className='w-full flex justify-between '>
              <h2 className='text-[1rem] font-bold leading-[1.25rem] mb-[15px]'>Excluir Conta</h2>
              <button onClick={() => closeFunction()}>
                <MdClose className='text-grey-3 text-[20px] font-extrabold'/>
              </button>
            </div>

            <p className="heading-7-500 mb-[-10px]">Tem certeza que deseja excluir sua conta?</p>

            <p className="body-1-400">
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.
            </p>

            <div className='flex flex-wrap gap-[10px] justify-between sw370:justify-end w-full mt-[30px]'>
              <Button_3 onClick={() => closeFunction()} type="button" text="Cancelar" height={2}/>
              <Button_17 onClick={() => deleteAccount()} type="button" text="Sim, excluir conta" height={2}/>
            </div>
      </div>
    </div>
    )
}
