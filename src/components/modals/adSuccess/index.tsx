import { AdContext } from '@/contexts/adContext';
import { useContext, useEffect, useRef } from 'react';
import {GrClose} from 'react-icons/gr';

export const ModalAdSuccess = () => {
  const {toogleModalAdSuccess, isOpenModalAdSuccess} = useContext(AdContext)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if(!ref.current) return;

      if(!event.target) return;
      
      if(!ref.current.contains(event.target as HTMLElement)) {
        toogleModalAdSuccess()
      }
    }
    
    if (isOpenModalAdSuccess) {
      window.addEventListener("mousedown", handleClick);
  
      return () => {
        window.removeEventListener("mousedown", handleClick);
      }
    }
  }, [isOpenModalAdSuccess, toogleModalAdSuccess]);

  return (
    <div className={`bg-grey-4 bg-opacity-50 ${isOpenModalAdSuccess ? 'flex' : 'hidden'} justify-center items-start fixed z-50 h-screen w-screen top-0 right-0`}>
      <div className='min-w-[16rem] max-w-[33rem] w-4/5 bg-grey-whiteFixed rounded-lg mt-20' ref={ref}>
        <header className='flex justify-between items-center h-14 px-6 py-4'>
          <h2 className='heading-7-500'>Sucesso!</h2>
          <GrClose className='cursor-pointer text-grey-4' onClick={() => toogleModalAdSuccess()}/>
        </header>
        <div className='px-6 py-9 flex flex-col gap-4'>
          <p className='heading-7-500 text-grey-1'>Seu anúncio foi criado com sucesso!</p>
          <p className='body-1-400 text-grey-2'>Agora você poderá ver seus negócios crescendo em grande escala</p>
        </div>
      </div>
    </div>
  )
}