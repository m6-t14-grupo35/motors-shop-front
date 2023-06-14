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

export const Button_2 = ({text, onClick, type = undefined}: IbuttonProps) => {
  return(
    <button
    type={type}
    className="w-fit px-[1.75rem] py-[0.75rem] rounded bg-brand-1 hover:bg-grey-1 text-[1rem] font-bold leading-[1.25rem] text-white"
    onClick={() => onClick()}>
      {text}
    </button>
  )
}
