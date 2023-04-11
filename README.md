# Desafios:

1 - Escreva uma função que escreva os números de 1 a 100, mas trocando os múltiplos de 3 por “Fizz”, os múltiplos de 5 por “Buzz” e os múltiplos de 3 e 5 por “FizzBuzz”.

2 - Escreva uma função que receba duas strings e retorne um booleano que indique se as duas palavras são anagramas ou não. Ex.: autor e outra são anagramas, mas autor e outro não.

3 - Escreva uma implementação recursiva e uma iterativa da sequência de Fibonacci (https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci).

4 - Escreva uma função que recebe como input um array de números inteiros (em qualquer ordem) e retorna o menor inteiro positivo que não está presente nesse array.

5 - O código de Gray é um sistema de números escritos em base binária, no qual dois valores adjacentes diferem entre si por apenas 1 bit. Por exemplo, os códigos de Gray de 2 bits são: 00, 01, 11 e 10. Escreva uma função que recebe como input um inteiro positivo N e imprime na tela todos os códigos de Gray de N bits, respeitando a ordem de adjacência.

6 - Escreva uma função que receba um array de strings e retorne uma string correspondente ao maior prefixo em comum entre essas strings, caso não tenha retorne uma string vazia.

7 - Escreva uma função que receba um número inteiro e retorne quantos passos são necessários para reduzi-lo a 0, onde um passo é dividir o número por dois quando o número for par e subtrair 1 quando o número for ímpar.

8 - Escreva uma função que receba a referência ao nó raiz de uma lista ligada e devolva um booleano indicando se a palavra formada pelos valores da lista ligada é um palíndromo ou não.
Considere a lista ligada como a estrutura formada por nós da seguinte função:

```javascript
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

// exemplo de lista ligada
const node4 = new ListNode('A');
const node3 = new ListNode('S', node4);
const node2 = new ListNode('A', node3);
const node1 = new ListNode('C', node2);

// node1 -> node2 -> node3 -> node4
//     C ->     A ->     S ->     A

function verificaPalindromo(root) {...}
verificaPalindromo(node1); // false
```