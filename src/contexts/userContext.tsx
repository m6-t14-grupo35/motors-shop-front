import { tUpdateAddressData } from "@/schemas/user.schemas";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

interface IProps {
  children: ReactNode
}

interface IUserProviderData {
  isOpenModalAddress: boolean
  toogleModalAddress: () => void
  setIsOpenModalAddress: Dispatch<SetStateAction<boolean>>
  updateAddress: (data: tUpdateAddressData, token: string) => void
}

export const UserContext = createContext({} as IUserProviderData);

export const UserProvider = ({children}: IProps) => {
  const [isOpenModalAddress, setIsOpenModalAddress] = useState(false)
  const router = useRouter()

  const toogleModalAddress = () => {
    setIsOpenModalAddress(!isOpenModalAddress)
  }

  const updateAddress = (data: tUpdateAddressData, token: string) => {
    api.patch('users/', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(() => {
      toast.success('Endereço editado com sucesso!')
      toogleModalAddress()
    })
    .catch((error) => {
      console.log(error)
      toast.error('Não foi possível editar o endereço. Tente novamente')
    })
  }

  return (
    <UserContext.Provider value={{isOpenModalAddress, setIsOpenModalAddress, toogleModalAddress, updateAddress}}>
      {children}
    </UserContext.Provider>
  )
}