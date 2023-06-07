'use client'
import Swal from 'sweetalert2'

import ButtonDesafios from '../components/ButtonDesafios'
import Container from '../components/Container'
import InputDesafios from '../components/InputDesafios'

const Desafio2 = () => {
  let a = ''
  let b = ''

  function comparar(a: string, b: string) {
    const x = a
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')

    const y = b
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')

    if (x === y) {
      Swal.fire({
        heightAuto: false,
        title: 'SÃO anagramas',
      })
    } else {
      Swal.fire({
        heightAuto: false,
        title: 'NÃO são anagramas',
      })
    }
  }

  return (
    <Container enunciado="Desafio 2 - comparar as palavras pra verificar se são anagramas:">
      <InputDesafios onChange={e => (a = e.target.value)} />
      <InputDesafios onChange={e => (b = e.target.value)} />
      <ButtonDesafios onClick={() => comparar(a!, b!)}>São anagramas?</ButtonDesafios>
    </Container>
  )
}

export default Desafio2
