import Image from 'next/image'

export const AdPhoto = () => {
  return (
    <>
      <div className='min-w-[16rem] max-w-[46rem] h-80 mx-3 bg-grey-10 flex justify-center items-center rounded mt-10 mb-4'>
        <Image src="/images/carro-banner.png" alt="carro esportivo azul" width={300} height={250}/>
      </div>
    </>
  )
}