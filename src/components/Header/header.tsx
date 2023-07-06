import Image from "next/image";
import { MenuIcon } from "../hamburger/hamburguer";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import nookies, { parseCookies } from "nookies";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { api } from "@/services/api";
import { iUser } from "@/interfaces/cards.interfaces";
import { ModalRegister } from "../modalRegister";
import Cookies from "js-cookie";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const [user, setUser] = useState<iUser | null>(null);
  const token = Cookies.get('motorsShopToken')
  const userId = Cookies.get("motorsShopIdUser")
  const getUser = useCallback(async () => {
      const response = await api
        .get(`users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setUser(response.data)
    }, [token, userId])

  const [openDropdown, setOpenDropdown] = useState<boolean>(false)
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }
  const closeDropdown = () => {
    setOpenDropdown(false)
  }

  useEffect(() => {
    getUser().catch(console.error)
  }, [getUser]);

  return (
    <>
      <header
        id="header"
        className="flex-row fixed top-0 left-0 h-20 z-30 bg-white w-screen flex items-center justify-between border-b-2 grey-6 px-16 flex-wrap"
      >
        <div className="layout md:items-center flex flex-col md:flex-row justify-between w-full">
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <Image
                src={"/Logo.svg"}
                width={153}
                height={52}
                alt="Motors Shop"
                className="cursor-pointer"
              />
            </Link>

            <div
              id="menuIcon"
              onClick={() => {
                setToggle(!toggle);
                const header = document.getElementById("header");
                toggle
                  ? header?.classList.add("md:h-20", "h-screen") &&
                    header.classList.remove("h-20")
                  : header?.classList.remove("md:h-20", "h-screen") &&
                    header?.classList.add("h-20");
                const hamburger = document.getElementById("menuIcon");
                toggle
                  ? hamburger?.classList.add(
                      "before:rotate-45",
                      "after:-rotate-45",
                      "before:translate-y-[0px]",
                      "after:translate-y-[0px]",
                      "bg-white"
                    ) &&
                    hamburger?.classList.remove(
                      "before:-translate-y-2",
                      "after:translate-y-2",
                      "bg-black"
                    )
                  : hamburger?.classList.remove(
                      "before:rotate-45",
                      "after:-rotate-45",
                      "before:translate-y-[0px]",
                      "after:translate-y-[0px]",
                      "bg-white"
                    ) &&
                    hamburger?.classList.add(
                      "before:-translate-y-2",
                      "after:translate-y-2",
                      "bg-black"
                    );
                const nav = document.getElementById("navOptions");
                toggle
                  ? nav?.classList.remove("hidden") &&
                    nav?.classList.add("flex", "bg-white")
                  : nav?.classList.add("hidden") &&
                    nav?.classList.remove("flex", "bg-white");
              }}
              className="
            md:hidden
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
            className="hidden flex-col md:flex md:flex-row md:border-l-2 md:grey-6 md:items-center space-x-0 md:space-x-11 space-y-11 md:space-y-0 md:pl-11"
          >
            {user !== null ? (
              <div onClick={toggleDropdown} className="flex justify-center items-center w-[139px] h-[32px] gap-[8px] relative">
                <div className="h-8 w-8 rounded-full bg-purple-950 gray-0 text-white flex items-center justify-center text-center">
                  {user?.name.charAt(0)}
                </div>
                <p>{user?.name}</p>
                {openDropdown && (
                  <div id="myDropdown" className="absolute flex flex-col top-full bg-white rounded shadow-sm min-w-[200px] h-[202px] gap-[16px] mt-[21px] pl-[22px]">
                    <Link href={"/"} ><button className="body-1-400">Editar Perfil</button></Link>
                    <Link href={"/"} ><button className="body-1-400">Editar Endereço</button></Link>
                    <Link href={"/admin"} ><button className="body-1-400"></button>Meus Anúncios</Link>
                    <Link href={"/"}><button  onClick={() => {
                      Cookies.remove("motorsShopToken")
                      Cookies.remove("motorsShopIdUser")
                    }} className="body-1-400">Sair</button></Link>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href={"/login"}>
                  <button className="body-1-600 text-grey-2">
                    Fazer Login
                  </button>
                </Link>
                <Link href={"/register"}>
                  <button className="w-full md:w-auto body-1-600 border-grey-0 rounded border h-12 py-3 px-7 text-grey-0 ml-0 md:m-auto">
                    Cadastrar
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
