import Header from "@/components/Header/header";
import { FooterComponete } from "@/components/footer";
import { ListCard } from "@/components/listCard";
import { ProfileListCard } from "@/components/userListCard";
import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";

const user = {
  name: "Caio",
  email: "caio@mail.com",
};

export default function User() {
  const {toogleModal} = useContext(UserContext)

  return (
    <div className="bg-grey-8">
      <Header isLoggedIn={true} user={user} />
      <div className="bg-brand-1 w-screen h-[357px]"></div>
      <div className="absolute top-0 w-screen left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center items-center flex-col">
          <div className="bg-grey-10 flex flex-col gap-[24px] w-4/5 max-w-[1240px] mx-11 px-[29px] py-[40px] mt-[155px] rounded">
            <div className="w-[104px] h-[104px] rounded-full bg-brand-1 flex justify-center items-center text-white text-4xl">
              A
            </div>

              {/* <button className="h-10 w-12 rounded bg-orange-500 cursor-pointer" onClick={() => toogleModal()}>Modal</button> */}
              <div className="flex">
                <p className="heading-6-600">Anunciante Anônimo</p>
                <h2 className="bg-brand-4 text-brand-1 rounded py-1 px-2 body-2-400">
                  Anunciante
                </h2>
              </div>
              <p className="body-1-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>

          </div>
          <div className="flex-col justify-center md:pl-[60px] w-screen gap-[40px] mx-[60px]">
            <h1 className="heading-5-600 pl-[60px] md:pl-0 py-[100px]">Anúncios</h1>
            <ProfileListCard />
          </div>
          <FooterComponete />
        </div>
      </div>
    </div>
  );
}
