import Image from 'next/image'

export const AdPhoto = () => {
  return (
    <>
      <div className='min-w-[16rem] max-w-[46rem] w-4/5 h-80 mx-5 bg-grey-10 flex justify-center items-center rounded mt-10 mb-4 px-9'>
        <Image src="/images/carro-banner.png" alt="carro esportivo azul" width={300} height={250}/>
      </div>
    </>
  )
}