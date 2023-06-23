import { retrievePasswordSchema, tRetrievePasswordData } from "@/schemas/user.schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"

export const FormSendEmail = () => {
  const {handleSubmit, register, formState:{errors}} = useForm<tRetrievePasswordData>({
    mode: "onBlur",
    resolver: zodResolver(retrievePasswordSchema)
  })

  const submit = (data: tRetrievePasswordData) => {
    console.log(data)
  }

  return (
    <>
      <div className='w-full h-screen bg-grey-8 flex items-center justify-center pt-20'>
        <div className='w-[93%] bg-grey-10 min-w-[16rem] max-w-[25.7rem] h-fit rounded py-11 px-7 my-20'>
          <form onSubmit={handleSubmit(submit)}>
            <fieldset className='flex flex-col'>
              <label className='input-label mb-7'>Informe um e-mail para a recuperação de senha</label>
              <input className='input input-placeholder' placeholder='samuel@kenzie.com.br' type='email' {...register('email')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.email?.message}</p>}
            </fieldset>
            <div className='flex justify-between mt-7 gap-4'>
              <Link href={'/login'} className='w-full'><button type='button' className='rounded w-full h-10 cursor-pointer text-grey-2 button-big-text border border-grey-4'>Voltar</button></Link>
              <button type='submit' className="bg-brand-1 rounded w-full h-10 cursor-pointer text-grey-whiteFixed button-big-text mb-6">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}