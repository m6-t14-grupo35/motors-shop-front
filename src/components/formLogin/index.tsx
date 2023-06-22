import { tUserLoginData, userLoginSchema } from "@/schemas/user.schemas"
import Link from "next/link"
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { useContext } from "react"
import { AuthContext } from "@/contexts/authContext"

export const FormLogin = () => {
  const {login} = useContext(AuthContext)

  const {register, handleSubmit, formState:{errors}} = useForm<tUserLoginData>({
    mode: "onBlur",
    resolver: zodResolver(userLoginSchema)
  });

  const submit = (data: tUserLoginData) => {
    login(data)
  }

  return (
    <>
      <div className='w-full h-fit bg-grey-8 flex items-center justify-center pt-20'>

        <div className='w-[93%] bg-grey-10 min-w-[16rem] max-w-[25.7rem] h-fit rounded py-11 px-7 my-20'>
          <h2 className='heading-5-500 mb-6'>Login</h2>
          <form onSubmit={handleSubmit(submit)}>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Usuário</label>
              <input className='input input-placeholder' placeholder='Digitar usuário' type='email' {...register('email')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.email?.message}</p>}
            </fieldset>

            <fieldset className='flex flex-col mb-3'>
              <label className='input-label mb-2'>Senha</label>
              <input className='input input-placeholder' placeholder='Digitar senha' type='password' {...register('password')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.password?.message}</p>}
            </fieldset>

            <p className='body-2-500 text-right cursor-pointer mb-5'>Esqueci minha senha</p>
            <button type='submit' className="bg-brand-1 rounded w-full h-10 cursor-pointer text-grey-whiteFixed button-big-text mb-6">Entrar</button>
          </form>
          <p className='body-2-400 text-center mb-6'>Ainda não possui conta?</p>
          <Link href={"/register"}><button  className='button-big-text rounded w-full h-10 cursor-pointer border border-grey-4'>Cadastrar</button></Link>
        </div>

      </div>
    </>
  )
}