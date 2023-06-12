import { useState } from 'react'
import { Filter } from '../filter'

export const ButtonFilter = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  
  const handleToggleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  }

  return (
    <div className='flex flex-col justify-center items-center my-2'>
      <button className={`button-big-text text-grey-whiteFixed bg-brand-2 rounded w-[279px] h-12 cursor-pointer md:hidden flex items-center justify-center ${isOpenFilter === false ? 'flex' : 'hidden'}`} onClick={handleToggleFilter}>Filtros</button>
 
      <div className={`w-full md:flex ${isOpenFilter === true ? 'flex' : 'hidden'}`}>
        <div className='flex flex-col max-h-[100rem]  overflow-x-auto scroll-smooth items-start w-full max-w-sm px-3 py-3'>
            <Filter toggleFilter={handleToggleFilter} />
        </div>
      </div>
  </div>
  )
}