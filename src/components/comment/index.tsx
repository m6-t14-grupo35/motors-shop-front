import { IcommentProps } from "@/interfaces/componentProps.interface";
import { calculateElapsedTime, getInitials } from "@/utils/functions";
import { useEffect, useState } from "react";
import { RiMore2Line, RiPencilLine, RiDeleteBinLine } from 'react-icons/ri';
import { DeleteCommentConfirmation } from "../modals/deleteCommentConfimation";

export const CommentComponent = ({ userImage, userName, date, text }: IcommentProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true)
  };

  const handleEditClick = () => {

  };

  return (
    <>
    {showDeleteModal && <DeleteCommentConfirmation id="dsfsdfsdfsdfs" closeFunction={() => setShowDeleteModal(false)}/>}
    <div className="bg-white flex w-full max-w-[751px] rounded relative">
      {showMenu && (
        <div className="absolute right-0 top-[40px] z-10 bg-white border border-gray-300 rounded shadow-md">
          <button
            className="flex items-center gap-2 p-2 hover:bg-gray-100"
            onClick={handleDeleteClick}
          >
            <RiDeleteBinLine />
            <span>Excluir</span>
          </button>
          <button
            className="flex items-center gap-2 p-2 hover:bg-gray-100"
            onClick={handleEditClick}
          >
            <RiPencilLine />
            <span>Editar</span>
          </button>
        </div>
      )}
      <div className="flex flex-col gap-[12px] max-w-full lg:max-w-full lg:w-full">
        <div className="flex items-center gap-[8px] w-fit flex-wrap">
          <div className="w-[32px] h-[32px] min-w-[32px]">
            {userImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={userImage}
                alt={`imagem de ${userName}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className={`bg-brand-1 rounded-[50%] w-full h-full flex justify-center items-center`}
              >
                <p className="font-normal text-[14px] text-white">
                  {getInitials(userName)}
                </p>
              </div>
            )}
          </div>

          <p className="text-grey-1 body-2-500 lg:hidden">
            {userName.length >= 14 ? userName.slice(0, 12) + "..." : userName}
          </p>
          <p className="text-grey-1 body-2-500 hidden lg:block">
            {userName.length >= 35 ? userName.slice(0, 33) + "..." : userName}
          </p>
          <p className="text-grey-3 body-2-400">{`•  ${calculateElapsedTime(
            date
          )}`}</p>
        </div>

        <p className="text-grey-2 body-2-400">{text}</p>
      </div>

      <button
        className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100"
        onClick={handleMenuClick}
      >
        <RiMore2Line />
      </button>
    </div>
    </>
  );
};
