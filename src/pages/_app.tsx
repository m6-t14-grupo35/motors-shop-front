import '@/styles/globals.css'
import '../styles/typography.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from '@/contexts/authContext'
import 'react-toastify/dist/ReactToastify.css'
import { UserProvider } from '@/contexts/userContext'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AuthProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </AuthProvider>
    </>
  )
}
