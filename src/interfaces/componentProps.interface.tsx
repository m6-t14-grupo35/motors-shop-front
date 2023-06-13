export interface IbuttonProps {
  text: string
  onClick: () => void
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
