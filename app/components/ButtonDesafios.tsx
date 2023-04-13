import { MouseEventHandler, ReactNode } from 'react';

const ButtonDesafios = ({
   children,
   onClick,
}: {
   children: ReactNode;
   onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
   return (
      <button
         className="bg-blue-400 p-1 px-4 rounded hover:bg-blue-500 hover:ring-2 hover:ring-black hover:ring-inset"
         onClick={onClick}
      >
         {children}
      </button>
   );
};

export default ButtonDesafios;
