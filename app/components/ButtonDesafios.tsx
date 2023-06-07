'use client'

import { MouseEventHandler, ReactNode } from 'react'

const ButtonDesafios = ({
   children,
   onClick,
}: {
   children: ReactNode
   onClick?: MouseEventHandler<HTMLButtonElement>
}) => {
   return (
      <button
         className="rounded bg-myTheme-Button p-1 px-4 hover:bg-myTheme-ButtonHover hover:ring-2 hover:ring-inset hover:ring-black"
         onClick={onClick}
      >
         {children}
      </button>
   )
}

export default ButtonDesafios
