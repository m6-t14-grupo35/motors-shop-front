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
  adId:string
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
  defaultValue?: any
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
  km?: number
  color?: string
  priceFIPE?: number
  price?: number
  description?: string
  cover?: string
  image_1?: string
  image_2?: string
  image_3?: string
  image_4?: string
  image_5?: string
}

export interface IediteAdProps {
  adId: string
  closeFunction: () => void
}

export interface IediteProps {
  id: string
  closeFunction: () => void
}

export type IstateProvisorio = null | "add" | "edite" | "editeProfile" | "deleteProfile" | "deleteAd"

export interface IconfirmationDeleteAccount {
  closeFunction: () => void
  openConfirmation: () => void
}

