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
         className="bg-blue-300 p-1 px-4 rounded hover:bg-blue-400 hover:ring-2 hover:ring-black hover:ring-inset"
         onClick={onClick}
      >
         {children}
      </button>
   );
};

export default ButtonDesafios;
