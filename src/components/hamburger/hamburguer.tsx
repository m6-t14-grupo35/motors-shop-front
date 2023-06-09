import { useState } from "react"
import { ReactNode } from "react"

export const MenuIcon = () => {
  return(
      <div className="w-16 
      h-2 
      bg-black 
      rounded 
      transition-all 
      duration-150 
      before:content-[''] 
      before:transition-all 
      before:duration-150 
      before:absolute 
      before:w-16 
      before:h-2 
      before:bg-black 
      before:rounded 
      before:-translate-y-4 
      after:content-[''] 
      after:absolute 
      after:w-16 
      after:h-2 
      after:bg-black 
      after:rounded 
      after:translate-y-4 
      after:transition-all 
      after:duration-150">
      </div>

  )
}