import { tRetrievePasswordData, tUpdatePasswordData, tUserLoginData, tUserRegisterData } from "@/schemas/user.schemas";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";
import { setCookie } from "nookies";

interface IProps {
  children: ReactNode
}

interface IAuthProviderData {
  register: (data: tUserRegisterData) => void
  login: (data: tUserLoginData) => void
  isOpenModal: boolean
  toogleModalRegister: () => void
  sendEmail: (data: tRetrievePasswordData) => void
  resetPassword: (data: tUpdatePasswordData, token: string) => void
  me: (token: string) => void
}

export const AuthContext = createContext({} as IAuthProviderData);

export const AuthProvider = ({children}: IProps) => {
  const router = useRouter()
  const [isOpenModal, setIsOpenModal] = useState(false)

  const toogleModalRegister = () => {
    setIsOpenModal(!isOpenModal)
  }

  const me = (token: string) => {
    api.get('users/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setCookie(null, 'motorsshop.idUser', response.data[0].id)
    })
    .catch((error) => {
      console.log(error)
    })
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
      me(response.data.token)
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

  const sendEmail = (data: tRetrievePasswordData) => {
    api.post('users/resetPassword', data)
    .then(() => {
      toast.success('E-mail enviado com sucesso!')
      router.push('/')
    })
    .catch((error) => {
      console.log(error)
      toast.error('Erro ao enviar o e-mail, tente novamente')
    })
  }

  const resetPassword = (data: tUpdatePasswordData, token: string) => {
    api.patch(`users/resetPassword/${token}`, {password: data.newPassword})
    .then(() => {
      toast.success('Senha atualizada com sucesso!')
      router.push('/login')
    })
    .catch((error) => {
      console.log(error)
      toast.error('Erro ao atualizar a senha, tente novamente')
    })
  }
  
  return (
    <AuthContext.Provider value={{register, login, isOpenModal, toogleModalRegister, sendEmail, resetPassword, me}}>
      {children}
    </AuthContext.Provider>
  )
}