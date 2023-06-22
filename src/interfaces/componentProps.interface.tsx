import { type } from "os"

export interface IbuttonProps {
  text: string
  onClick?: () => void
  type?: "button" | "submit" | "reset" | undefined
  height?: 1 | 2
}

export interface IsellerInfosProps {
  photograph?:string | null
  name:string
  description:string
}

export interface IcommentProps {
  userImage?: string
  userName: string
  date: string
  text: string
}

export interface ImakeCommentProps {
  userImage?: string
  userName: string
}

export interface IcommentSuggestionProps {
  text: string
  onclick: () => void
  key:string
}

export interface InputProps {
  type: string;
  id: string;
  label?: string;
  placeholder?: string;
  children?: React.ReactNode;
  required?: boolean;
  error?: string;
  value?: string;
}

export interface IaddImageInputProps {
  number: number
  children: React.ReactNode;
}


type Ifuels = "gasolina" | "alchool" | 'outros'

export interface IadOptional {
  id:string
  brand?: string
  model?: string
  year?: number
  fuel?: Ifuels
  milage?: number
  collor?: string
  priceFIPE?: number
  selePrice?: number
  description?: string
}

export interface IediteAdProps {
  ad: IadOptional
  closeFunction: () => void
}
