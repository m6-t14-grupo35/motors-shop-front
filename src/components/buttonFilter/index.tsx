import { useState } from 'react'
import { Filter } from '../filter'
import { ListCard } from '../listCard';

export const ButtonFilter = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  
  const handleToggleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  }

  return (
    <div className='flex flex-col justify-center items-center my-2'>
      <button className={`button-big-text text-grey-whiteFixed bg-brand-2 rounded w-[279px] h-12 cursor-pointer md:hidden flex items-center justify-center ${isOpenFilter === false ? 'flex' : 'hidden'}`} onClick={handleToggleFilter}>Filtros</button>
 
      
      <div className={`w-full md:flex justify-center md:place-content-evenly ${isOpenFilter === true ? 'flex' : 'hidden'}`}>
        <div className='flex flex-col max-h-[90rem] overflow-x-auto scroll-smooth items-start w-[96.3%] max-w-[28rem] px-3 py-3'>
            <Filter toggleFilter={handleToggleFilter} />
        </div>
        
        <div className='hidden md:flex'>
          <ListCard/>
        </div>
      </div>

    </div>
  )
}