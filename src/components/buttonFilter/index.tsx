import { useEffect, useState } from 'react'
import { Filter } from '../filter'

export const ButtonFilter = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [renderButton, setRenderButton] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const handleToggleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
    setRenderButton(!renderButton);
  }

  return (
    <div className='flex flex-col justify-center items-center my-2'>
    {
      renderButton && <button className='button-big-text text-grey-whiteFixed bg-brand-2 rounded w-[279px] h-12  cursor-pointer md:hidden' onClick={handleToggleFilter}>Filtros</button>
    }
    {
      (isOpenFilter || screenWidth >= 768) && (
        <div className='w-full md:block'>
          <div className='flex flex-col items-start w-full max-w-sm px-3 py-3'>
            <Filter toggleFilter={handleToggleFilter} />
          </div>
        </div>
      )
    }
  </div>
  )
}