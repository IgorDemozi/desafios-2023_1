import Swal from 'sweetalert2';

import ButtonDesafios from '../components/ButtonDesafios';
import Container from '../components/Container';
import InputDesafios from '../components/InputDesafios';

const Desafio5 = () => {
   let n = 0;

   function calcular(n: number) {
      if (n < 0) {
         Swal.fire({
            heightAuto: false,
            title: 'Algo deu errado...',
            text: 'Não se pode converter um número negativo!',
            icon: 'error',
         });

         return;
      }

      let binario = n
         .toString(2)
         .split('')
         .map(item => Number(item));

      let gray: number[] = [];
      gray[0] = binario[0];

      for (let i = 1; i < binario.length; i++) {
         if (binario[i] === binario[i - 1]) {
            gray.push(0);
         } else {
            gray.push(1);
         }
      }

      Swal.fire({
         heightAuto: false,
         title: gray.join('').toString(),
      });
   }

   return (
      <Container enunciado="Desafio 5 - converter número inteiro positivo em código de Gray">
         <InputDesafios type={'number'} onChange={e => (n = Number(e.target.value))} />
         <ButtonDesafios onClick={() => calcular(n)}>Calcular</ButtonDesafios>
      </Container>
   );
};

export default Desafio5;
