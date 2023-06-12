import Image from "next/image";
import { MenuIcon } from "../hamburger/hamburguer";
import { useState } from "react";

interface IUser {
  name: String;
  email: String;
}
const Header = (isLoggedIn: boolean, user: IUser) => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <header
        id="header"
        className="flex-column sm:flex-row fixed top-0 left-0 h-20 z-30 bg-white w-screen flex align-center justify-between border-b-2 grey-6 px-16 flex-wrap"
      >
        <Image src={"/Logo.svg"} width={153} height={52} alt="Motors Shop" />
        <div className="flex items-center flex-column sm:flex-row flex-wrap">
          <div
            id="menuIcon"
            onClick={() => {
              setToggle(!toggle);
              const header = document.getElementById("header");
              toggle
                ? header?.classList.add("sm:h-20", "h-screen") &&
                  header.classList.remove("h-20")
                : header?.classList.remove("sm:h-20", "h-screen") &&
                  header?.classList.add("h-20");
              const hamburger = document.getElementById("menuIcon");
              toggle
                ? hamburger?.classList.add(
                    "before:rotate-45",
                    "after:-rotate-45",
                    "before:translate-y-0",
                    "after:translate-y-0",
                    "bg-white",
                  ) &&
                  hamburger?.classList.remove(
                    "before:-translate-y-2",
                    "after:translate-y-2",
                    "bg-black"
                  )
                : hamburger?.classList.remove(
                    "before:rotate-45",
                    "after:-rotate-45",
                    "before:translate-y-0",
                    "after:translate-y-0",
                    "bg-white",
                  ) &&
                  hamburger?.classList.add(
                    "before:-translate-y-2",
                    "after:translate-y-2",
                    "bg-black"
                  );
              const nav = document.getElementById("navOptions");
              toggle
                ? nav?.classList.remove("hidden", "border-l-2", "grey-6","space-x-11") &&
                  nav?.classList.add("flex")
                : nav?.classList.add("hidden", "border-l-2", "grey-6","space-x-11") &&
                  nav?.classList.remove("flex");
            }}
            className="
          sm:hidden
          flex
          w-8 
          h-1 
          bg-black 
          rounded 
          transition-all 
          duration-150 
          before:content-[''] 
          before:transition-all 
          before:duration-150 
          before:absolute 
          before:w-8 
          before:h-1
          before:bg-black 
          before:rounded 
          before:-translate-y-2
          after:content-[''] 
          after:absolute 
          after:w-8 
          after:h-1 
          after:bg-black 
          after:rounded 
          after:translate-y-2
          after:transition-all 
          after:duration-150"
          ></div>
        </div>
        <div
          id="navOptions"
          className="hidden flex-col sm:flex sm:flex-row border-l-2 grey-6 sm:items-center space-x-11 pl-11"
        >
          <button className="body-1-600 text-grey-2">Fazer Login</button>
          <button className="w-full body-1-600 border-grey-0 rounded border h-12 py-3 px-7 text-grey-0 ml-0">
            Cadastrar
          </button>
        </div>
      </header>
    </>
  );
};



///////////// Lógica para quando estiver logado
// {
//   (isLoggedIn ? (
//     <div className="flex row border-l-2 grey-6 align-middle justify-center">
//       <Image width={32} height={32} className="rounded-full" src="/vercel.svg" alt="Logo Perfil"/>
//       <p>{user.name}</p>
//     </div>
//   ) : (
//     <div>
//       <button className="">Fazer Login</button>
//       <button className="">Cadastrar</button>
//     </div>
//   ))
// }

export default Header;
