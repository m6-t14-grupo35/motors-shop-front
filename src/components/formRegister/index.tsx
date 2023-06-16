export const FormRegister = () => {
  return (
    <>
      <div className='w-full h-full bg-grey-8 flex items-center justify-center'>

        <div className='w-[93%] bg-grey-10 min-w-[16rem] max-w-[25.7rem] h-fit rounded py-11 px-7'>
          <h2 className='heading-5-500 mb-6'>Cadastro</h2>
          <form>
            <h3 className='body-2-500'>Informações pessoais</h3>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Nome</label>
              <input className='input input-placeholder' placeholder='Ex: Samuel Leão' type='text'/>
            </fieldset>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Email</label>
              <input className='input input-placeholder' placeholder='Ex: samuel@kenzie.com.br' type='email'/>
            </fieldset>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>CPF</label>
              <input className='input input-placeholder' placeholder='000.000.000-00' type='number'/>
            </fieldset>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Celular</label>
              <input className='input input-placeholder' placeholder='(DDD) 90000-0000' type='text'/>
            </fieldset>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Data de nascimento</label>
              <input className='input input-placeholder' placeholder='00/00/00' type='number'/>
            </fieldset>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Descrição</label>
              <textarea placeholder='Digitar descrição' className='rounded pl-3 pt-3 border border-grey-7 placeholder:text-grey-3 h-12 outline-1 outline-brand-2'/>

            <h3 className='body-2-500'>Informações de endereço</h3>
            </fieldset>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>CEP</label>
              <input className='input input-placeholder' placeholder='00000.000' type='number'/>
            </fieldset>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Estado</label>
              <input className='input input-placeholder' placeholder='Digitar Estado' type='text'/>
            </fieldset>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Cidade</label>
              <input className='input input-placeholder' placeholder='00/00/00' type='text'/>
            </fieldset>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Rua</label>
              <input className='input input-placeholder' placeholder='Digitar rua' type='text'/>
            </fieldset>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Número</label>
              <input className='input input-placeholder' placeholder='Digitar número' type='text'/>
            </fieldset>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Complemento</label>
              <input className='input input-placeholder' placeholder='Ex: apart 307' type='text'/>
            </fieldset>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Tipo de conta</label>
              <button className='button-big-text border border-grey-4 rounded'>Comprador</button>
              <button className='button-big-text border border-grey-4 rounded'>Anunciante</button>
            </fieldset>
            <fieldset className='flex flex-col mb-5'>
              <label className='input-label mb-2'>Senha</label>
              <input className='input input-placeholder' placeholder='Digitar senha' type='password'/>
            </fieldset>
            <fieldset className='flex flex-col mb-3'>
              <label className='input-label mb-2'>Confirmar senha</label>
              <input className='input input-placeholder' placeholder='Digitar senha' type='password'/>
            </fieldset>
            <p className='body-2-500 text-right cursor-pointer mb-5'>Esqueci minha senha</p>
            <button type='submit' className="bg-brand-1 rounded w-full h-10 cursor-pointer text-grey-whiteFixed button-big-text mb-6">Finalizar cadastro</button>
          </form>
        </div>

      </div>
    </>
  )
}