import { AuthContext } from "@/contexts/authContext";
import { tUserRegisterData, userRegisterSchema } from "@/schemas/user.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

export const FormRegister = () => {
  const {register: registerUser} = useContext(AuthContext)
  const [isSellerSelected, setIsSellerSelected] = useState(false)

  const {register, handleSubmit, formState:{errors}, setValue, reset} = useForm<tUserRegisterData>({
    mode: "onBlur",
    resolver: zodResolver(userRegisterSchema)
  });

  const handleBuyerClick = () => {
    setIsSellerSelected(false)
    setValue('is_seller', false)
  };

  const handleSellerClick = () => {
    setIsSellerSelected(true)
    setValue('is_seller', true)
  };

  const submit = (data: tUserRegisterData) => {
    registerUser(data)
    reset()
  }

  return (
    <>
      <div className='w-full h-full bg-grey-8 flex items-center justify-center pt-20'>
        <div className='w-[93%] bg-grey-10 min-w-[16rem] max-w-[25.7rem] h-fit rounded py-11 px-7 my-20'>
          <h2 className='heading-5-500 mb-6'>Cadastro</h2>
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

            <h3 className='body-2-500 mb-5'>Informações de endereço</h3>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>CEP</label>
              <input className='input input-placeholder' placeholder='00000.000' type='number' {...register('zip_code')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.zip_code?.message}</p>}
            </fieldset>

            <div className='flex gap-3'>
              <fieldset className='flex flex-col mb-5'>
                <label className='input-label mb-2'>Estado</label>
                <input className='input input-placeholder' placeholder='Digitar Estado' type='text' {...register('state')}/>
                {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.state?.message}</p>}
              </fieldset>

              <fieldset className='flex flex-col mb-5'>
                <label className='input-label mb-2'>Cidade</label>
                <input className='input input-placeholder' placeholder='Digitar cidade' type='text' {...register('city')}/>
                {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.city?.message}</p>}
              </fieldset>
            </div>

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
            </div>

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

            <button type='submit' className="bg-brand-1 rounded w-full h-10 cursor-pointer text-grey-whiteFixed button-big-text mt-5">Finalizar cadastro</button>
          </form>
        </div>
      </div>
    </>
  )
}