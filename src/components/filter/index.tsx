import { AdContext } from "@/contexts/adContext";
import { iAd } from "@/interfaces/cards.interfaces";
import { apiKenzieKars } from "@/services/api";
import { useContext, useEffect, useState } from "react";
import {AiOutlineClose} from "react-icons/ai";
import { GetServerSideProps } from "next";
import { api } from "@/services/api";

interface IFilterProps {
  toggleFilter: () => void,
}

interface iAdProps {
  ads: iAd[]
}

interface ICar {
  id: string,
  brand: string,
  name: string,
  fuel: number,
  value: number,
  year: string
}

export const Filter = ({toggleFilter}: IFilterProps) => {
  const {adList, setFilteredAdList} = useContext(AdContext)
  const [brands, setBrands] = useState([] as string[]);
  const [models, setModels] = useState([] as string[]);
  const carsColors = ["Azul", "Branca", "Cinza", "Prata", "Preta", "Verde"];
  const [years, setYears] = useState([] as string[]);
  const fuels = ["Diesel", "Etanol", "Gasolina", "Flex"];
  const [km, setKm] = useState([] as string[]);
  const [prices, setPrices] = useState([] as string[]);
  
  const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const firstWord = (word: string) => {
    return word.split(" ")[0];
  }

  useEffect(() => {
    (async () => {
      try {
        const responseBrands = await apiKenzieKars.get("/cars");
        const brand = responseBrands.data;
        const brandsData = Object.keys(brand);
        const brandsCapitalize = brandsData.map((brand) => capitalizeFirstLetter(brand));
        setBrands(brandsCapitalize);
        
        const uniqueName = [] as string[];
        const uniqueYear = [] as string[];
        const cars = brandsData.map(async (brand) => {
          const responseModels = await apiKenzieKars.get(`/cars?brand=${brand}`);
          const carsRequest = responseModels.data;
          const names = carsRequest.map((item: ICar) => firstWord(item["name"]));
          names.map((name: string) => {
            if(!uniqueName.includes(name)) {
              uniqueName.push(name);
            }            
          })

          const years = carsRequest.map((item: ICar) => item["year"]);
          years.map((year: string) => {
            if(!uniqueYear.includes(year)) {
              uniqueYear.push(year);
            }
          })
          uniqueYear.sort((a:string, b:string) => Number(b) - Number(a));

          setModels(uniqueName);
          setYears(uniqueYear);
        })
    
      } catch (error) {
        console.log(error);
      }
    })();

  }, []);
  

  return (
    <>
      <header className="flex justify-between w-full my-2 md:hidden" >
        <p className="heading-7-500">Filtro</p>
        <AiOutlineClose className="text-grey-4 cursor-pointer" onClick={toggleFilter}/>
      </header>
      
      <h2 className="heading-4-600 my-5">Marca</h2>
      {brands.length &&
        //@ts-ignore
        brands.map((brand) => <button onClick={() => {setFilteredAdList([adList.filter(ad => brand === ad.brand)])
        
        }} className="heading-6-500 text-grey-3" key={brand}>{brand}</button>
      )}
      
      <h2 className="heading-4-600 my-5">Modelo</h2>
      {models.length &&
        //@ts-ignore
        models.map((model)=> <button onClick={() => {setAdList(ads.filter(ad => ad.model.toLowerCase() == model))
        
        }} className="heading-6-500 text-grey-3" key={model}>{model}</button>
      )}
      
      <h2 className="heading-4-600 my-5">Cor</h2>
      {carsColors.map((color) => 
        //@ts-ignore
      <p onClick={() => setAdList(ads.filter(ad => ad.color == color))} className="heading-6-500 text-grey-3" key={color}>{color}</p>)}
      
      <h2 className="heading-4-600 my-5">Ano</h2>
      {years.length &&
        years.map((year) => 
        //@ts-ignore
        <p onClick={() => setAdList(ads.filter(ad => ad.year.toString() == year))} className="heading-6-500 text-grey-3" key={year}>{year}</p>)
      }

      <h2 className="heading-4-600 my-5">Combustível</h2>
      {fuels.map((fuel) => <p onClick={() => 
        //@ts-ignore
        setAdList(ads.filter(ad => ad.fuel == fuel))} className="heading-6-500 text-grey-3" key={fuel}>{fuel}</p>)}

      <h2 className="heading-4-600 my-5">Km</h2>
      <div className="flex justify-between w-full">
        <button className="bg-grey-5 w-36 h-9 heading-7-600 text-grey-3 cursor-pointer">Mínima</button>
        <button className="bg-grey-5 w-36 h-9 heading-7-600 text-grey-3 cursor-pointer">Máxima</button>
      </div>
      
      <h2 className="heading-4-600 my-5">Preço</h2>
      <div className="flex justify-between w-full mb-7">
        <button className="bg-grey-5 w-36 h-9 heading-7-600 text-grey-3 cursor-pointer">Mínima</button>
        <button className="bg-grey-5 w-36 h-9 heading-7-600 text-grey-3 cursor-pointer">Máxima</button>
      </div>

      <div className='w-full flex justify-center'>
        <button className="button-big-text text-grey-whiteFixed bg-brand-2 rounded w-[279px] h-12 cursor-pointer" type="submit">Ver anúncios</button>
      </div>
    </>
  )
}

