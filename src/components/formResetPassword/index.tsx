import { AuthContext } from "@/contexts/authContext"
import { tUpdatePasswordData, updatePasswordSchema } from "@/schemas/user.schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { useForm } from "react-hook-form"

interface IFormResetPasswordProps {
  token: string
}

export const FormResetPassword = ({token}: IFormResetPasswordProps) => {
  const {resetPassword} = useContext(AuthContext)

  const {handleSubmit, register, formState:{errors}} = useForm<tUpdatePasswordData>({
    mode: "onBlur",
    resolver: zodResolver(updatePasswordSchema)
  })

  const submit = (data: tUpdatePasswordData) => {
    console.log(data)
    resetPassword(data, token)
  }

  return (
    <>
      <div className='w-full h-screen bg-grey-8 flex items-center justify-center pt-20'>
        <div className='w-[93%] bg-grey-10 min-w-[16rem] max-w-[25.7rem] h-fit rounded py-11 px-7 my-20'>
          <h2 className='heading-5-500 mb-6'>Recuperação de senha</h2>
          <form onSubmit={handleSubmit(submit)}>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Nova senha</label>
              <input className='input input-placeholder' placeholder='Digitar nova senha' type='password' {...register('newPassword')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.newPassword?.message}</p>}
            </fieldset>

            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Confirmação da senha</label>
              <input className='input input-placeholder' placeholder='Digitar confirmação de senha' type='password' {...register('confirmation')}/>
              {errors && <p aria-label='error' className='text-red-700 text-[0.875rem] mt-1'>{errors.confirmation?.message}</p>}
            </fieldset>

            <button type='submit' className="bg-brand-1 rounded w-full h-10 cursor-pointer text-grey-whiteFixed button-big-text my-3">Atualizar senha</button>
          </form>
        </div>
      </div>
    </>
  )
}