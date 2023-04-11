import Swal from 'sweetalert2';

import ButtonDesafios from '../components/ButtonDesafios';
import Container from '../components/Container';
import InputDesafios from '../components/InputDesafios';

const Desafio3 = () => {
   let n = 1;

   function fibonacciRecursiva(n: number): number[] {
      if (n < 1) return [0];
      if (n === 1) {
         return [0, 1];
      } else {
         let array = fibonacciRecursiva(n - 1);
         array.push(array[array.length - 1] + array[array.length - 2]);
         return array;
      }
   }

   function fibonacciIterativa() {
      let array: number[] = [];
      let x = 0;

      if (n < 0) {
         x = 0;
      } else {
         x = n;
      }

      for (let i = 0; i < x + 1; i++) {
         if (i < 2) {
            array.push(i);
         } else {
            array.push(array[i - 2] + array[i - 1]);
         }
      }

      let result = array.map(item => item.toString()).join(', ');

      Swal.fire({
         heightAuto: false,
         title: result,
      });
   }

   return (
      <Container enunciado="Desafio 3 - quantidade de números após 0:">
         <InputDesafios type={'number'} onChange={e => (n = Number(e.target.value))} />
         <ButtonDesafios
            onClick={() =>
               Swal.fire({
                  heightAuto: false,
                  title: fibonacciRecursiva(n)
                     .map(item => item.toString())
                     .join(', '),
               })
            }
         >
            Fibonacci Recursiva
         </ButtonDesafios>
         <ButtonDesafios onClick={fibonacciIterativa}>Fibonacci Iterativa</ButtonDesafios>
      </Container>
   );
};

export default Desafio3;
