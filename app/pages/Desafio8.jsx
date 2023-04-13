import Swal from "sweetalert2";

import ButtonDesafios from "../components/ButtonDesafios";
import Container from "../components/Container";

const Desafio8 = () => {
   function ListNode(value, next) {
      this.value = value === undefined ? 0 : value;
      this.next = next === undefined ? null : next;
   }

   const node_A4 = new ListNode('A');
   const node_A3 = new ListNode('S', node_A4);
   const node_A2 = new ListNode('A', node_A3);
   const node_A1 = new ListNode('C', node_A2);

   const node_B9 = new ListNode('G');
   const node_B8 = new ListNode('I', node_B9);
   const node_B7 = new ListNode('R', node_B8);
   const node_B6 = new ListNode('A', node_B7);
   const node_B5 = new ListNode('F', node_B6);
   const node_B4 = new ListNode('A', node_B5);
   const node_B3 = new ListNode('R', node_B4);
   const node_B2 = new ListNode('I', node_B3);
   const node_B1 = new ListNode('G', node_B2);

   function verificaPalindromo(root) {
      let current = root;
      let string = "";

      while (current) {
         string += current.value;
         current = current.next;
      }

      let gnirts = string.split('').reverse().join('');

      Swal.fire({
         heightAuto: false,
         title: `${string === gnirts}`,
      });
   }

   return (
      <Container enunciado="Desafio 8 - Escreva uma função que receba a referência ao nó raiz de uma lista ligada e devolva um booleano indicando se a palavra formada pelos valores da lista ligada é um palíndromo ou não.">
         <ButtonDesafios onClick={() => verificaPalindromo(node_A1)}>Calcular (A)</ButtonDesafios>
         <ButtonDesafios onClick={() => verificaPalindromo(node_B1)}>Calcular (B)</ButtonDesafios>
      </Container>
   )
}

export default Desafio8