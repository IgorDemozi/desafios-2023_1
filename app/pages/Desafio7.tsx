import Swal from 'sweetalert2';

import ButtonDesafios from '../components/ButtonDesafios';
import Container from '../components/Container';
import InputDesafios from '../components/InputDesafios';

const Desafio7 = () => {
   let n = 0;

   function calcular(n: number) {
      let cont = 0;

      if (n < 0) n = n * -1;

      do {
         if (n % 2 === 0) {
            n = n / 2;
            cont++;
         } else {
            n--;
            cont++;
         }
      } while (n !== 0);

      Swal.fire({
         heightAuto: false,
         title: `${cont} passos para chegar a 0`,
      });
   }

   return (
      <Container enunciado="Desafio 7 - quantos passos até o número chegar a zero?">
         <InputDesafios type={'number'} onChange={e => (n = Number(e.target.value))} />
         <ButtonDesafios onClick={() => calcular(n)}>Calcular</ButtonDesafios>
      </Container>
   );
};

export default Desafio7;
