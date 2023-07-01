import { IcommentSuggestionProps } from "@/interfaces/componentProps.interface"

export const CommentSuggestion = ({text, onclick, key}: IcommentSuggestionProps) => {
  return(
    <li key={key} onClick={onclick} className="text-grey-3 text-[0.75rem] font-medium leading-[1.5rem] bg-grey-7 w-fit h-fit rounded-[24px] px-[12px] flex-nowrap">
      {text}
    </li>
  )
}
