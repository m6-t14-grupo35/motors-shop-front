import Header from "@/components/Header/header"
import { FooterComponete } from "@/components/footer"
import { FormSendEmail } from "@/components/formSendEmail"

export default function SendEmailResetPassword () {
  return (
    <>
      <Header isLoggedIn={false}/>
      <FormSendEmail/>
      <FooterComponete/>
    </>
  )
}