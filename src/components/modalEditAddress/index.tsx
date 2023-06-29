import { UserContext } from "@/contexts/userContext";
import { addressUpdateSchema, tUpdateAddressData } from "@/schemas/user.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef } from "react"
import { useForm } from "react-hook-form";
import {GrClose} from 'react-icons/gr';

interface IPropsModalEditAddress {
  toogleModal: () => void
}

export const ModalEditAddress = ({toogleModal}: IPropsModalEditAddress) => {
  const {register, handleSubmit, formState:{errors}} = useForm<tUpdateAddressData>({
    mode: 'onBlur',
    resolver: zodResolver(addressUpdateSchema)
  })
  
  const {isOpenModal} = useContext(UserContext)
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if(!ref.current) return;

      if(!event.target) return;
      
      if(!ref.current.contains(event.target as HTMLElement)) {
        toogleModal()
      }
    }
    
    if (isOpenModal) {
      window.addEventListener("mousedown", handleClick);
  
      return () => {
        window.removeEventListener("mousedown", handleClick);
      }
    }
  }, [isOpenModal]);

  const submit = (data: tUpdateAddressData) => {
    console.log(data)
  }

  return (
    <div className={`bg-grey-4 bg-opacity-50 ${isOpenModal ? 'flex' : 'hidden'} justify-center items-start fixed z-50 h-screen w-screen top-0 right-0`}>
      <div className='min-w-[16rem] max-w-[33rem] w-4/5 bg-grey-whiteFixed rounded-lg mt-20' ref={ref}>
        <header className='flex justify-between items-center h-14 px-6 py-4'>
          <h2 className='heading-7-500'>Editar endereço</h2>
          <GrClose className='cursor-pointer text-grey-4' onClick={() => toogleModal()}/>
        </header>
        <div className='px-6 py-9 flex flex-col gap-4'>
          <h3>Informações de endereço</h3>
          <form onSubmit={handleSubmit(submit)}>

            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>CEP</label>
              <input className='input input-placeholder' placeholder='00000.000' type='number' {...register('zipCode')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.zipCode?.message}</p>}
            </fieldset>

            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Estado</label>
              <input className='input input-placeholder' placeholder='Digitar Estado' type='text' {...register('state')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.state?.message}</p>}
            </fieldset>

            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Cidade</label>
              <input className='input input-placeholder' placeholder='00/00/00' type='text' {...register('city')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.city?.message}</p>}
            </fieldset>

            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Rua</label>
              <input className='input input-placeholder' placeholder='Digitar rua' type='text' {...register('street')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.street?.message}</p>}
            </fieldset>
            
            <div className='flex gap-3'>
              <fieldset className='flex flex-col mb-5'>
                <label className='input-label mb-2'>Número</label>
                <input className='input input-placeholder' placeholder='Digitar número' type='number' {...register('number')}/>
                {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.number?.message}</p>}
              </fieldset>

              <fieldset className='flex flex-col mb-5'>
                <label className='input-label mb-2'>Complemento</label>
                <input className='input input-placeholder' placeholder='Ex: apart 307' type='text' {...register('complement')}/>
                {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.complement?.message}</p>}
              </fieldset>

              <button type="button" onClick={() => toogleModal()}>Cancelar</button>
              <button type="submit">Salvar alterações</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}