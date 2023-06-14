export interface IbuttonProps {
  text: string
  onClick?: () => void
  type?: "button" | "submit" | "reset" | undefined
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
