export const MoreImages = () => {
  const CarImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRIzFGdxgkQINjrTVNZt0LrMtrtGU5S89LXCTMcNXs-ejn8Kj7A3kqfFL2pN8NHkYqew&usqp=CAU',
    'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960',
    'https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/cars-subcontent/04-images/chevrolet-cruze-final.png?imwidth=960',
    'https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/2019-cruze-premier/2021/01-images/marzo/chevrolet-cruze-garantia.png?imwidth=960',
    'https://www.motortrend.com/uploads/sites/10/2019/03/2019-chevrolet-cruze-lt-sedan-angular-front.png',
    'https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2019-chevrolet-cruze-red-hot.jpg',
  ]

  return (
    <div className="bg-white flex justify-center items-center h-fit w-fit rounded">
      <div className="mx-[35px] lg:mx-[44px] my-[36px] w-[281px] lg:w-[352px] h-[287px] lg:h-[305px] flex flex-col justify-between">
        <h4 className="text-[1.25rem] font-semibold leading-[1.56rem]">Fotos</h4>

        <div className='flex flex-col justify-between gap-[50px] lg:gap-[32px]'>
          <div className='flex justify-between'>
            {CarImages.map((image, index) =>{
              if(index <= 2){
                return(
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={image} alt='imagem do corro anunciado' key={`image${index}`} className='w-[90px] h-[90px] lg:w-[108px] lg:h-[108px] object-contain bg-grey-7 rounded'/>
                )
              }
            })}
          </div>

          <div className='flex justify-between'>
            {CarImages.map((image, index) =>{
              if(index > 2){
                return(
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={image} alt='imagem do corro anunciado' key={`image${index}`} className='w-[90px] h-[90px] lg:w-[108px] lg:h-[108px] object-contain bg-grey-7 rounded'/>
                )
              }
            })}
          </div>


        </div>

      </div>
    </div>
  )
}
