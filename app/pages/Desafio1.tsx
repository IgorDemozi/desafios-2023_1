import Container from '../components/Container';

const Desafio1 = () => {
   let array: string[] = [];

   for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         array.push('FizzBuzz');
      } else if (i % 5 === 0) {
         array.push('Buzz');
      } else if (i % 3 === 0) {
         array.push('Fizz');
      } else {
         array.push(i.toString());
      }
   }

   return (
      <Container enunciado="Desafio 1 - Escreva uma função que escreva os números de 1 a 100, mas trocando os múltiplos de 3 por “Fizz”, os múltiplos de 5 por “Buzz” e os múltiplos de 3 e 5 por “FizzBuzz”">
         {array.map((item, index) => (
            <p key={index}>{item}</p>
         ))}
      </Container>
   );
};

export default Desafio1;
