import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ButtonDesafios from './ButtonDesafios';
import ListboxHUI from './ListboxHUI';

const Container = ({ enunciado, children }: { enunciado: string; children: ReactNode }) => {
   const navigate = useNavigate();
   const location = useLocation();

   function desafioAnterior() {
      switch (location.pathname) {
         case '/':
            navigate('/desafio7');
            return;
         case '/desafio2':
            navigate('/');
            return;
         case '/desafio7':
            navigate('/desafio5');
            return;
      }

      let n = Number(location.pathname.split('')[8]);
      navigate(`/desafio${n - 1}`);
   }

   function proximoDesafio() {
      switch (location.pathname) {
         case '/':
            navigate('/desafio2');
            return;
         case '/desafio7':
            navigate('/');
            return;
         case '/desafio5':
            navigate('/desafio7');
            return;
      }

      let n = Number(location.pathname.split('')[8]);
      navigate(`/desafio${n + 1}`);
   }

   return (
      <div className="flex flex-wrap h-full w-auto bg-blue-50 p-4 rounded gap-4">
         <div className="flex flex-col justify-between h-full w-full gap-4">
            <div className="flex flex-col flex-wrap gap-2">
               <p className="font-semibold underline">{enunciado}</p>
               <div className="flex gap-3 flex-wrap">{children}</div>
            </div>

            <div className="flex justify-between w-full">
               <ButtonDesafios onClick={desafioAnterior}>Anterior</ButtonDesafios>
               <ListboxHUI />
               <ButtonDesafios onClick={proximoDesafio}>Próximo</ButtonDesafios>
            </div>
         </div>
      </div>
   );
};

export default Container;
