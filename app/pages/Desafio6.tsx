import { ArrowLongRightIcon } from '@heroicons/react/20/solid';

import Container from '../components/Container';

const Desafio6 = () => {
   const array_a = ['azeitona', 'azulejo', 'azedo'];
   const array_d = ['dialogo', 'diagonal', 'diafragma', 'diagrama'];
   const array_o = ['obstruir', 'obcecado', 'obstetra', 'obstaculo', 'obter', 'obtuso'];

   function maiorPrefixoComum(array: string[]) {
      if (!array[0] || array.length == 1) return array[0] || '';

      let i = 0;
      while (array[0][i] && array.every(item => item[i] === array[0][i])) i++;

      return array[0].substring(0, i);
   }

   return (
      <Container enunciado="Desafio 6 - Maior prefixo comum em uma array de strings, caso não tenha retorne uma string vazia.">
         <div className="flex flex-col">
            <div className="flex gap-2">
               <p>{array_a.join(', ')}</p>
               <ArrowLongRightIcon className="h-5 w-5 translate-y-1" />
               <p>{maiorPrefixoComum(array_a)}</p>
            </div>

            <div className="flex gap-2">
               <p>{array_d.join(', ')}</p>
               <ArrowLongRightIcon className="h-5 w-5 translate-y-1" />
               <p>{maiorPrefixoComum(array_d)}</p>
            </div>

            <div className="flex gap-2">
               <p>{array_o.join(', ')}</p>
               <ArrowLongRightIcon className="h-5 w-5 translate-y-1" />
               <p>{maiorPrefixoComum(array_o)}</p>
            </div>
         </div>
      </Container>
   );
};

export default Desafio6;
