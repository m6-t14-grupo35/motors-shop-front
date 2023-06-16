import Image from 'next/image'

export const AdPhoto = () => {
  return (
    <>
      <div className='w-full max-w-[751px] h-80 bg-grey-10 flex justify-center items-center rounded mt-10 mb-4 px-9'>
        <Image src="/images/carro-banner.png" alt="carro esportivo azul" width={300} height={250}/>
      </div>
    </>
  )
}
