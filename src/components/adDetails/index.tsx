export const AdDetails = () => {
  return (
    <>
      <div className='min-w-[16rem] max-w-[46rem] w-[93.6%] h-60 mx-3 bg-grey-10 rounded mb-5 px-9 py-7'>
        <h2 className='heading-6-600 mb-5 mt-3'>BMW Veloz Azul</h2>
        <div className='md:flex md:justify-between'>
          <div className='flex w-fit mb-5'>
            <p className='body-2-500 mr-3 bg-brand-4 text-brand-1 rounded px-2'>2013</p>
            <p className='body-2-500 bg-brand-4 text-brand-1 rounded px-2'>0 KM</p>
          </div>
          <div className='mb-5'>
            <p className='heading-7-500'>R$ 00.000,00</p>
          </div>
        </div>
        <button className='font-semibold text-grey-whiteFixed text-sm bg-brand-1 rounded w-28 h-10 cursor-pointer'>Comprar</button>
      </div>
    </>
  )
}
