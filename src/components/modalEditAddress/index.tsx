import { UserContext } from "@/contexts/userContext";
import { addressUpdateSchema, tUpdateAddressData, tUserRegisterData } from "@/schemas/user.schemas";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseCookies } from "nookies";
import { useContext, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form";
import {GrClose} from 'react-icons/gr';
import { toast } from "react-toastify";

export const ModalEditAddress = () => {
  const [user, setUser] = useState<null | tUserRegisterData>(null)
  const token = parseCookies().motorsShopToken
  
  const {register, handleSubmit, setValue, formState:{errors}} = useForm<tUpdateAddressData>({
    mode: 'onBlur',
    resolver: zodResolver(addressUpdateSchema)
  })

  
  const sttUser = () => {
    if (token) {
      api.get('users/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        setUser(response.data[0])
      })
      .catch((error) => {
        console.log(error)
        if(error.response.status == 401){
          toast.error('Sua seção expirou')
        }
      })
    }
  }

  
  const {isOpenModalAddress, toogleModalAddress, updateAddress} = useContext(UserContext)
  const ref = useRef<HTMLDivElement>(null)
  const [isregistreddatas, setIsregistreddatas] = useState(true)


  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if(!ref.current) return;

      if(!event.target) return;
      
      if(!ref.current.contains(event.target as HTMLElement)) {
        toogleModalAddress()
      }
    }
    
    if (isOpenModalAddress) {
      sttUser()
      window.addEventListener("mousedown", handleClick);
      
      return () => {
        window.removeEventListener("mousedown", handleClick);
      }
    }
  }, [isOpenModalAddress]);
  
  if (user && isregistreddatas) {
    Object.keys(user).forEach((key) => {
      //@ts-ignore
      setValue(key, user[key])
      
    })
    setIsregistreddatas(false)
  }

  const submit = (data: tUpdateAddressData) => {
    updateAddress(data, token)
  }
  
  return (
    <div className={`bg-grey-4 bg-opacity-50 ${isOpenModalAddress ? 'flex' : 'hidden'} justify-center items-start fixed z-50 h-screen w-screen top-0 right-0`}>
      <div className='min-w-[16rem] max-w-[33rem] w-4/5 bg-grey-whiteFixed rounded-lg mt-20 overflow-auto scroll-smooth max-h-[80%]' ref={ref}>
        <header className='flex justify-between items-center h-14 px-6 py-4'>
          <h2 className='heading-7-500'>Editar endereço</h2>
          <GrClose className='cursor-pointer text-grey-4' onClick={() => toogleModalAddress()}/>
        </header>
        <div className='px-6 py-9 flex flex-col gap-4'>
          <h3>Informações de endereço</h3>
          <form onSubmit={handleSubmit(submit)}>

            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>CEP</label>
              <input className='input input-placeholder' defaultValue={user?.zip_code} placeholder='00000.000' type='number' {...register('zip_code')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.zip_code?.message}</p>}
            </fieldset>

            <div className='flex gap-3'>
              <fieldset className='flex flex-col mb-5'>
                <label className='input-label mb-2'>Estado</label>
                <input className='input input-placeholder' defaultValue={user?.state} placeholder='Digitar Estado' type='text' {...register('state')}/>
                {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.state?.message}</p>}
              </fieldset>

              <fieldset className='flex flex-col mb-5'>
                <label className='input-label mb-2'>Cidade</label>
                <input className='input input-placeholder' defaultValue={user?.city} placeholder='Digitar cidade' type='text' {...register('city')}/>
                {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.city?.message}</p>}
              </fieldset>
            </div>

            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Rua</label>
              <input className='input input-placeholder' defaultValue={user?.street} placeholder='Digitar rua' type='text' {...register('street')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.street?.message}</p>}
            </fieldset>
            
            <div className='flex gap-3'>
              <fieldset className='flex flex-col mb-5'>
                <label className='input-label mb-2'>Número</label>
                <input className='input input-placeholder' defaultValue={user?.number} placeholder='Digitar número' type='number' {...register('number')}/>
                {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.number?.message}</p>}
              </fieldset>

              <fieldset className='flex flex-col mb-5'>
                <label className='input-label mb-2'>Complemento</label>
                <input className='input input-placeholder' defaultValue={user?.complement} placeholder='Ex: apart 307' type='text' {...register('complement')}/>
                {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.complement?.message}</p>}
              </fieldset>

            </div>
            <div className="flex gap-4 mt-3">
              <button type="button" onClick={() => toogleModalAddress()} className="h-10 bg-grey-6 button-big-text rounded w-full cursor-pointer text-grey-2">Cancelar</button>
              <button type="submit" className="h-10 bg-brand-1 button-big-text rounded w-full cursor-pointer text-grey-whiteFixed">Salvar alterações</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}