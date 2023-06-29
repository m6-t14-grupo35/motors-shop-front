import { tAddressData, tAddressPatialData } from "@/schemas/address.schemas";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

interface IProps {
  children: ReactNode
}

interface IUserProviderData {
  isOpenModal: boolean
  toogleModal: () => void
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
}

export const UserContext = createContext({} as IUserProviderData);

export const UserProvider = ({children}: IProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const router = useRouter()

  const toogleModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  const updateAddress = (data: tAddressPatialData, token: string) => {
    api.patch(`addresses/${token}`, data)
    .then(() => {
      toast.success('Endereço editado com sucesso!')
      toogleModal()
    })
    .catch((error) => {
      console.log(error)
      toast.error('Não foi possível editar o endereço. Tente novamente')
    })
  }

  return (
    <UserContext.Provider value={{isOpenModal, setIsOpenModal, toogleModal}}>
      {children}
    </UserContext.Provider>
  )
}