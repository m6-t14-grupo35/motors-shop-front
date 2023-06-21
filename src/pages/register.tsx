import Header from "@/components/Header/header"
import { FooterComponete } from "@/components/footer";
import { FormRegister } from "@/components/formRegister";
import { ModalRegister } from "@/components/modalRegister";
import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";

export default function Register() {
  const {toogleModalRegister} = useContext(AuthContext)
  return (
    <>
      <Header isLoggedIn={false}/>
      <FormRegister/>
      <FooterComponete/>
      <ModalRegister toogleModal={toogleModalRegister}/>
    </>
  )
}