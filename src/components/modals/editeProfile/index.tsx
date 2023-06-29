import { tUserEditeData, tUserRegisterData, userEditeSchema } from "@/schemas/user.schemas";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseCookies } from "nookies";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { MdClose } from "react-icons/md";
import { Button_1, Button_18, Button_2, Button_3 } from "@/components/buttons";
import { IconfirmationDeleteAccount } from "@/interfaces/componentProps.interface";

export const ModalEditeProfile = ({closeFunction, openConfirmation}:IconfirmationDeleteAccount) =>{
  const [isSellerSelected, setIsSellerSelected] = useState<boolean>(false)
  const token = parseCookies().motorsShopToken

  const {register, handleSubmit, formState:{errors}, setValue, reset} = useForm<tUserRegisterData>({
    mode: "onBlur",
    resolver: zodResolver(userEditeSchema)
  });

  const handleBuyerClick = () => {
    setIsSellerSelected(false)
    setValue('is_seller', false)
  };

  const handleSellerClick = () => {
    setIsSellerSelected(true)
    setValue('is_seller', true)
  };

  const submit = async (data: tUserEditeData) => {
    const response = await api.patch("users/", data, {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })

    if(response.status == 200){
      toast.success('Perfil atualizado com sucesso')
      console.log(response);
    }else{
      toast.error('algo deu errado')
      console.log(response);
    }
  }

  return(
    <div className='fixed inset-0 flex justify-center items-center w-screen bg-bg-50 z-50'>
      <div className='w-full max-w-[520px] bg-white rounded py-[20px] px-[30px] overflow-y-auto max-h-[96%] custom-scrollbar'>
          <div className='w-full flex justify-between '>
            <h2 className='text-[1rem] font-bold leading-[1.25rem] mb-[15px]'>Criar anúncio </h2>
            <button onClick={() => closeFunction()}>
              <MdClose className='text-grey-3 text-[20px] font-extrabold'/>
            </button>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <h3 className='body-2-500 mb-5'>Informações pessoais</h3>

            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Nome</label>
              <input className='input input-placeholder' placeholder='Ex: Samuel Leão' type='text' {...register('name')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.name?.message}</p>}
            </fieldset>

            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Email</label>
              <input className='input input-placeholder' placeholder='Ex: samuel@kenzie.com.br' type='email' {...register('email')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.email?.message}</p>}
            </fieldset>

            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>CPF</label>
              <input className='input input-placeholder' placeholder='000.000.000-00' type='number' {...register('cpf')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.cpf?.message}</p>}
            </fieldset>

            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Celular</label>
              <input className='input input-placeholder' placeholder='(DDD) 90000-0000' type='text' {...register('phone_number')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.phone_number?.message}</p>}
            </fieldset>

            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Data de nascimento</label>
              <input className='input input-placeholder' placeholder='00/00/00' type='date' pattern="\d{4}-\d{2}-\d{2}" {...register('birthdate')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.birthdate?.message}</p>}
            </fieldset>

            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Descrição</label>
              <textarea rows={3} placeholder='Digitar descrição' className='rounded pl-3 pt-3 border border-grey-7 placeholder:text-grey-3 outline-1 outline-brand-2' {...register('description')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.description?.message}</p>}
            </fieldset>

            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Tipo de conta</label>

              <div className="flex gap-3">
                <button type='button' className={`button-big-text border rounded w-1/2 h-10 ${isSellerSelected ? 'border-grey-4' : 'text-grey-whiteFixed bg-brand-1'}`} onClick={() => handleBuyerClick()}>Comprador</button>

                <button type='button' className={`button-big-text border border-grey-4 rounded w-1/2 h-10 ${isSellerSelected ? 'text-grey-whiteFixed bg-brand-1' : 'border-grey-4'}`} onClick={() => handleSellerClick()}>Anunciante</button>
              </div>

            </fieldset>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Senha</label>
              <input className='input input-placeholder' placeholder='Digitar senha' type='password' {...register('password')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.password?.message}</p>}
            </fieldset>

            <fieldset className='flex flex-col mb-3'>
              <label className='input-label mb-2'>Confirmar senha</label>
              <input className='input input-placeholder' placeholder='Digitar senha' type='password' {...register('confirmation')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.confirmation?.message}</p>}
            </fieldset>

            <div className="flex flex-wrap sw515:justify-between gap-y-[8px]">
              <Button_3 text="Cancelar" type="button" onClick={() => closeFunction()}/>
              <Button_18 text="Excluir Perfil" type="button" onClick={() => openConfirmation()}/>
              <Button_2 text="Salvar alterações" type="submit"/>
            </div>
          </form>
      </div>
    </div>
  )
}
