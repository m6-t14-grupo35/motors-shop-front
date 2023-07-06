import { IbuttonProps } from "@/interfaces/componentProps.interface"

export const Button_1 = ({text, onClick}: IbuttonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return(
    <button
    className="w-fit px-[1.75rem] py-[0.75rem] rounded bg-grey-0 hover:bg-grey-1 text-[1rem] font-bold leading-[1.25rem] text-white"
    onClick={() => handleClick()}>
      {text}
    </button>
  )
}

export const Button_2 = ({text, onClick, type = undefined}: IbuttonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return(
    <button
    type={type}
    className="w-fit h-fit px-[1.75rem] py-[0.75rem] rounded bg-brand-1 hover:bg-grey-1 text-[1rem] font-bold leading-[1.25rem] text-white"
    onClick={() => handleClick()}
    >
      {text}
    </button>
  )
}

export const Button_3 = ({text, onClick, type = undefined, height = 1}: IbuttonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return(
    <button
    type={type}
    className={`w-fit px-[1.75rem] ${height === 1 ? 'py-[0.75rem]' : 'py-[1rem]'} rounded hover:opacity-70  text-[1rem] font-bold leading-[1.25rem] bg-grey-6 text-grey-2`}
    onClick={() => handleClick()}>
      {text}
    </button>
  )
}

export const Button_7 = ({text, onClick, type = undefined, height = 1}: IbuttonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return(
    <button
    type={type}
    className={`w-fit px-[1.75rem] ${height === 1 ? 'py-[0.75rem]' : 'py-[1rem]'} rounded bg-brand-4 hover:opacity-70  text-[1rem] font-bold leading-[1.25rem] text-brand-1`}
    onClick={() => handleClick()}>
      {text}
    </button>
  )
}

export const Button_17 = ({text, onClick, type = undefined, height = 1}: IbuttonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return(
    <button
      type={type}
      className={`w-fit px-[1.75rem] ${height === 1 ? 'py-[0.75rem]' : 'py-[1rem]'} rounded hover:opacity-70  text-[1rem] font-bold leading-[1.25rem] bg-alert-3 text-alert-1`}
      onClick={() => handleClick()}
    >
      {text}
    </button>
  )
}

export const Button_18 = ({text,onClick, type = undefined, height = 1}: IbuttonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return(
    <button
      type={type}
      className={`w-fit px-[1.75rem] ${height === 1 ? 'py-[0.75rem]' : 'py-[1rem]'} rounded hover:opacity-70  text-[1rem] font-bold leading-[1.25rem] bg-alert-2 text-alert-1`}
      onClick={() => handleClick()}
    >
      {text}
    </button>
  )
}

export const Button_24 = ({text, type = undefined, height = 1}: IbuttonProps) => {
  return(
    <button
      type={type}
      className={`w-fit px-[1.75rem] ${height === 1 ? 'py-[0.75rem]' : 'py-[1rem]'} rounded hover:opacity-70  text-[1rem] font-bold leading-[1.25rem] bg-brand-3 text-brand-4`}
    >
      {text}
    </button>
  )
}
