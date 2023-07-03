import Header from "@/components/Header/header"
import { FooterComponete } from "@/components/footer"
import { FormResetPassword } from "@/components/formResetPassword"
import { useRouter } from "next/router"

export default function SendEmailResetPassword () {
  const router = useRouter()
  const {token} = router.query

  return (
    <>
      <Header isLoggedIn={false}/>
      <FormResetPassword token={token as string}/>
      <FooterComponete/>
    </>
  )
}