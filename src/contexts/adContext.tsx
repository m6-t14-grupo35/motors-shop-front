import { ReactNode, createContext, useState, Dispatch, SetStateAction } from "react";
import { iAd } from "@/interfaces/cards.interfaces";


const cars = [
  {
		id: "d55cf00c-dc10-477a-a0c8-fc65773ca808",
		brand: "Fiat",
		model: "Argo",
		year: 1988,
		fuel: "Gasolina",
		km: 20000,
		color: "vermelho",
		price: 90000.99,
		priceFIPE: 80000,
	  description: "O carro mais desejado dos 90's em perfeito estado.",
		is_sold: false,
		user_id: "8ed17c42-b839-4ce2-9fe7-17d63921b5b0",
		created_at: "2023-06-28T19:56:39.927Z"
	},
  {
    id: "d55cf00c-dc10-477a-a0c8-fc65773ca808",
		brand: "Chevrolet",
		model: "SL",
		year: 1988,
		fuel: "Gás",
		km: 20000,
		color: "vermelho",
		price: 90000.99,
		priceFIPE: 100000,
	  description: "O carro mais desejado dos 90's em perfeito estado.",
		is_sold: false,
		user_id: "8ed17c42-b839-4ce2-9fe7-17d63921b5b0",
		created_at: "2023-06-28T19:56:39.927Z"
  }
]

interface IProps {
  children: ReactNode
}

interface IAdProviderData {
	adList: iAd[]
	setAdList: Dispatch<SetStateAction<iAd[]>>

	filteredAdList: iAd[]
	setFilteredAdList: Dispatch<SetStateAction<iAd[]>>
	toogleModalAdSuccess: () => void
	isOpenModalAdSuccess: boolean
}

export const AdContext = createContext({} as IAdProviderData)

export const AdProvider = ({children}: IProps) => {
	const [adList, setAdList] = useState<iAd[]>([])
	const [filteredAdList, setFilteredAdList] = useState<iAd[]>([])
	const [isOpenModalAdSuccess, setIsOpenModalAdSuccess] = useState(false)
	const toogleModalAdSuccess = () => {
    setIsOpenModalAdSuccess(!isOpenModalAdSuccess)
  }

	return(
		<AdContext.Provider value={{adList, setAdList, toogleModalAdSuccess, isOpenModalAdSuccess, filteredAdList, setFilteredAdList}} >
			{children}
		</AdContext.Provider>
	)
}