import Header from "@/components/Header/header"
import { FooterComponete } from "@/components/footer";
import { FormRegister } from "@/components/formRegister";

export default function Register() {
  return (
    <>
      <Header isLoggedIn={false}/>
      <FormRegister/>
      <FooterComponete/>
    </>
  )
}