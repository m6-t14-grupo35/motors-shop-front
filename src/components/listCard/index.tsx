import { AdCard } from "../adCard"

export const ListCard = () => {
  return (
    <div className='flex flex-row-reverse'>
      <div className='flex flex-row flex-wrap gap-12 mt-[54px]'>
        <AdCard/>
        <AdCard/>
        <AdCard/>
      </div>
    </div>
  )
}