'use client';
import Swal from 'sweetalert2';

import ButtonDesafios from '../components/ButtonDesafios';
import Container from '../components/Container';
import InputDesafios from '../components/InputDesafios';

const Desafio4 = () => {
  let numeros = '';

  function calcular(numeros: string) {
    let passou = false;
    let array = numeros.split(' ').map(item => Math.floor(Number(item)));
    for (let i = 0; !passou; i++) {
      if (array && !array.includes(i) && i > -1) {
        passou = true;

        Swal.fire({
          heightAuto: false,
          title: i.toString(),
        });
      }
    }
  }

  return (
    <Container enunciado="Desafio 4 - menor número inteiro que não está na lista (separe os números com um espaço)">
      <InputDesafios onChange={e => (numeros = e.target.value)} />
      <ButtonDesafios onClick={() => calcular(numeros!)}>Calcular</ButtonDesafios>
    </Container>
  );
};

export default Desafio4;
