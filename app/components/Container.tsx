import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

import Link from 'next/link'
import { desafios } from '../desafiosInfo'
import ListboxHUI from './ListboxHUI'
import SelectDesafios, { option } from './SelectDesafios'

const Container = ({ enunciado, children }: { enunciado: string; children: ReactNode }) => {
  const router = useRouter()
  const index = desafios.findIndex(item => item.endereco === usePathname())
  const corAtual = document.documentElement.classList.toString().split(' ').pop()?.split('-').pop()
  const [cor, setCor] = useState(corAtual)

  const cores = ['Azul', 'Verde', 'Vermelho', 'Amarelo']
  const options: option[] = cores.map(item => {
    return { value: item, texto: item }
  })

  let linkDesafioAnterior = ''
  let linkProximoDesafio = ''

  if (index === 0) {
    linkDesafioAnterior = desafios[desafios.length - 1].endereco
  } else {
    linkDesafioAnterior = desafios[index - 1].endereco
  }

  if (index >= desafios.length - 1) {
    linkProximoDesafio = desafios[0].endereco
  } else {
    linkProximoDesafio = desafios[index + 1].endereco
  }

  useEffect(() => {
    if (cor === '') setCor('Azul')

    const arrowNavigate = (event: KeyboardEvent) => {
      if (event.target === event.currentTarget && (event.code === 'ArrowLeft' || event.code === 'KeyA')) {
        router.push(linkDesafioAnterior)
      }
      if (event.target === event.currentTarget && (event.code === 'ArrowRight' || event.code === 'KeyD')) {
        router.push(linkProximoDesafio)
      }
    }

    document.body.addEventListener('keyup', arrowNavigate)

    return () => {
      document.body.removeEventListener('keyup', arrowNavigate)
    }
  }, [])

  useEffect(() => {
    const temaAtual = document.documentElement.classList.toString().split(' ').pop()
    if (temaAtual) document.documentElement.classList.replace(temaAtual, `theme-${cor}`)
  }, [cor])

  return (
    <div className="box-border flex h-full min-h-[560px] w-full flex-col justify-between gap-4">
      <div className="flex flex-col flex-wrap gap-2">
        <p className="font-semibold underline">{enunciado}</p>
        <div className="flex flex-wrap gap-3">{children}</div>
      </div>

      <div className="grid w-full grid-cols-2 grid-rows-2 gap-2 min-[654px]:flex min-[654px]:flex-wrap min-[654px]:items-center min-[654px]:justify-between">
        <Link
          href={linkDesafioAnterior}
          className="col-start-1 row-start-2 flex w-fit items-center rounded bg-myTheme-Button p-1 px-4 text-center hover:bg-myTheme-ButtonHover hover:ring-2 hover:ring-inset hover:ring-black"
        >
          <span>Anterior</span>
        </Link>

        <ListboxHUI />

        <SelectDesafios label="Tema:" value={cor!} onChange={setCor} options={options} />

        <Link
          href={linkProximoDesafio}
          className="flex w-fit items-center justify-self-end rounded bg-myTheme-Button p-1 px-4 hover:bg-myTheme-ButtonHover hover:ring-2 hover:ring-inset hover:ring-black"
        >
          <span>Próximo</span>
        </Link>
      </div>
    </div>
  )
}

export default Container
