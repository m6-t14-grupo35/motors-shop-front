interface INavigateBarProps {
  page:number
  count:number
}

export const NavigateBar = ({page, count}:INavigateBarProps) => {
  const paginateItensnumber = 12
  const lastPage = Math.ceil(count/paginateItensnumber)

  return(
    <div className="w-full h:[12.5rem] sm:h-fi py-[22px]">
      <div className="text-[1.5rem] font-semibold leading-[1.875rem]  flex flex-col items-center justify-center h-[90%] sm:h-fit gap-[30px] sm:flex-row">
        {page > 1 ?
        <p className="text-brand-1 font-bold cursor-pointer">&lt; Anterior</p>
        :
        null}

        <p className="text-grey-3"><strong>{page}</strong> de {lastPage}</p>

        {page != lastPage ?
        <p
        onClick={()=>{page+=1}}
        className="text-brand-1 font-bold cursor-pointer"
        >  Seguinte &gt;</p>
        :
        null}
      </div>
    </div>
  )
}
