import { IbuttonProps } from "@/interfaces/componentProps.interface"

export const Button_1 = ({text, onClick}: IbuttonProps) => {

  return(
    <button
    className="w-fit px-[1.75rem] py-[0.75rem] rounded bg-grey-0 hover:bg-grey-1 text-[1rem] font-bold leading-[1.25rem] text-white"
    onClick={() => onClick()}>
      {text}
    </button>
  )
}
