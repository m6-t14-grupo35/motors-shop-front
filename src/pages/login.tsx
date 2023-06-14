import Header from "@/components/Header/header"
import { FooterComponete } from "@/components/footer";
import { FormLogin } from "@/components/formLogin";

export default function Login() {
  return (
    <>
      <Header isLoggedIn={false}/>
      <FormLogin/>
      <FooterComponete/>
    </>

  )
}