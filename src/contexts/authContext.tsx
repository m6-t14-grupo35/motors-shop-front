import { tUserLoginData, tUserRegisterData } from "@/schemas/user.schemas";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";
import { setCookie } from "nookies";
import { ModalRegister } from "@/components/modalRegister";

interface IProps {
  children: ReactNode
}

interface IAuthProviderData {
  register: (data: tUserRegisterData) => void
  login: (data: tUserLoginData) => void
}

export const AuthContext = createContext({} as IAuthProviderData);

export const AuthProvider = ({children}: IProps) => {
  const router = useRouter()
  const [isOpenModal, setIsOpenModal] = useState(false)

  const toogleModalRegister = () => {
    setIsOpenModal(!isOpenModal)
  }

  if (isOpenModal) {
    return <ModalRegister toogleModal={toogleModalRegister}/>
  }

  const register = (data: tUserRegisterData) => {
    api.post('users/', data)
    .then(() => {
      setIsOpenModal(true)
    })
    .catch((error) => {
      toast.error('Erro ao cadastrar usuário')
      console.log(error)
    })
  }

  const login = async (data: tUserLoginData) => {
    api.post('auth/', data)
    .then((response) => {
      setCookie(null, 'motorsshop.token', response.data.token, {
        path: "/"
      })
    })
    .then(() => {
      toast.success('Usuário logado com sucesso!')
      router.push('/')
    })
    .catch((error) => {
      toast.error('Erro ao logar')
      console.log(error)
    })
  }
  
  return (
    <AuthContext.Provider value={{register, login}}>
      {children}
    </AuthContext.Provider>
  )
}