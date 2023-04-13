import { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ButtonDesafios from './ButtonDesafios';
import ListboxHUI from './ListboxHUI';

const Container = ({ enunciado, children }: { enunciado: string; children: ReactNode }) => {
   const navigate = useNavigate();
   const location = useLocation();
   const areaListener = new AbortController();

   useEffect(() => {
      const arrowNavigate = (event: KeyboardEvent) => {
         if (event.code === 'ArrowLeft') {
            areaListener.abort();
            desafioAnterior();
         }
         if (event.code === 'ArrowRight') {
            areaListener.abort();
            proximoDesafio();
         }
      };

      window.addEventListener('keyup', arrowNavigate, { signal: areaListener.signal });
   });

   function desafioAnterior() {
      switch (location.pathname) {
         case '/':
            navigate('/desafio8');
            return;
         case '/desafio2':
            navigate('/');
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
         case '/desafio8':
            navigate('/');
            return;
      }

      let n = Number(location.pathname.split('')[8]);
      navigate(`/desafio${n + 1}`);
   }

   return (
      <div className="flex flex-wrap h-full w-auto bg-blue-100 p-4 rounded gap-4">
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
