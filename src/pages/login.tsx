import Header from "@/components/Header/header"
import { FooterComponete } from "@/components/footer";
import { FormLogin } from "@/components/formLogin";
import { ModalEditAddress } from "@/components/modalEditAddress";

export default function Login() {
  return (
    <>
      <Header />
      <FormLogin />
      <FooterComponete/>
    </>
  )
}