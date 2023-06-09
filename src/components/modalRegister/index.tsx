import { AuthContext } from '@/contexts/authContext';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef } from 'react';
import {GrClose} from 'react-icons/gr';

interface IPropsModalRegister {
  toogleModal: () => void
}

export const ModalRegister = ({toogleModal}: IPropsModalRegister) => {
  const {isOpenModal} = useContext(AuthContext)
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
  }, [isOpenModal, toogleModal]);
  
  const redirect = () => {
    toogleModal()
    router.push('/login')
  }

  return (
    <div className={`bg-grey-4 bg-opacity-50 ${isOpenModal ? 'flex' : 'hidden'} justify-center items-start fixed z-50 h-screen w-screen top-0 right-0`}>
      <div className='min-w-[16rem] max-w-[33rem] w-4/5 bg-grey-whiteFixed rounded-lg mt-20' ref={ref}>
        <header className='flex justify-between items-center h-14 px-6 py-4'>
          <h2 className='heading-7-500'>Sucesso!</h2>
          <GrClose className='cursor-pointer text-grey-4' onClick={() => toogleModal()}/>
        </header>
        <div className='px-6 py-9 flex flex-col gap-4'>
          <p className='heading-7-500 text-grey-1'>Sua conta foi criada com sucesso!</p>
          <p className='body-1-400 text-grey-2'>Agora você poderá ver seus negócios crescendo em grande escala</p>
          <button className='h-10 bg-brand-1 w-[8.25rem] rounded text-sm font-semibold text-grey-whiteFixed' onClick={() => redirect()}>Ir para o login</button>
        </div>
      </div>
    </div>
  )
}