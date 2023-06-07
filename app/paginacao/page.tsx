'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

import Container from '../components/Container'
import SelectDesafios, { option } from '../components/SelectDesafios'

type toDo = {
   userId: number
   id: number
   title: string
   completed: boolean
}

const PaginaçaoExemplo = () => {
   const [dados, setDados] = useState<toDo[]>([])
   const [itensPorPagina, setItensPorPagina] = useState(20)
   const [paginaAtual, setPaginaAtual] = useState(1)

   const totalDePaginas = Math.ceil(dados.length / itensPorPagina)
   const paginas = [...Array(totalDePaginas + 1).keys()].slice(1)

   const indexUltimoDado = paginaAtual * itensPorPagina
   const indexPrimeiroDado = indexUltimoDado - itensPorPagina

   const itensVisiveis = dados.slice(indexPrimeiroDado, indexUltimoDado)

   const options: option[] = [
      { value: 10, texto: '10' },
      { value: 15, texto: '15' },
      { value: 20, texto: '20' },
   ]

   useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/todos').then(res => setDados(res.data))
   }, [])

   return (
      <Container enunciado="Exemplo de paginação">
         <div className="h-[400px] w-full overflow-auto">
            {itensVisiveis.map(item => (
               <p className="my-1" key={item.id}>
                  {item.title}
               </p>
            ))}
         </div>

         <div className="flex items-center gap-6">
            <button
               className="font-semibold underline"
               onClick={() => setPaginaAtual(paginaAtual > 1 ? paginaAtual - 1 : 1)}
            >
               Anterior
            </button>

            <div className="flex flex-wrap gap-1">
               {paginas.map(item => (
                  <button
                     className={`h-full w-8 rounded ring-2 ring-inset ring-black hover:bg-myTheme-ButtonHover ${
                        item === paginaAtual && 'bg-myTheme-Button font-bold underline'
                     }`}
                     key={item}
                     onClick={() => setPaginaAtual(item)}
                  >
                     {item}
                  </button>
               ))}
            </div>

            <button
               className="font-semibold underline"
               onClick={() => setPaginaAtual(paginaAtual < paginas.length ? paginaAtual + 1 : paginas.length)}
            >
               Próximo
            </button>

            <SelectDesafios
               label="Itens por página:"
               value={itensPorPagina}
               onChange={setItensPorPagina}
               options={options}
            />
         </div>
      </Container>
   )
}

export default PaginaçaoExemplo
