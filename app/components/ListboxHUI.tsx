import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useLocation, useNavigate } from 'react-router-dom';

const desafios = [
   { nome: 'Desafio 1', endereco: '/' },
   { nome: 'Desafio 2', endereco: '/desafio2' },
   { nome: 'Desafio 3', endereco: '/desafio3' },
   { nome: 'Desafio 4', endereco: '/desafio4' },
   { nome: 'Desafio 5', endereco: '/desafio5' },
   { nome: 'Desafio 7', endereco: '/desafio7' },
];

export default function ListboxHUI() {
   const navigate = useNavigate();
   const location = useLocation();
   const selecaoInicial = desafios.find(item => item.endereco === location.pathname);
   const [desafioSelecionado, setDesafioSelecionado] = useState(selecaoInicial);

   useEffect(() => {
      if (desafioSelecionado) navigate(desafioSelecionado.endereco);
   }, [desafioSelecionado]);

   return (
      <div className="w-72">
         <Listbox value={desafioSelecionado} onChange={setDesafioSelecionado}>
            <div className="relative mt-1">
               <Listbox.Button className="relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
                  <span className="block truncate">{desafioSelecionado!.nome}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                     <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
               </Listbox.Button>
               <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm bottom-full ">
                     {desafios.map((desafio, index) => (
                        <Listbox.Option
                           key={index}
                           className={({ active }) =>
                              `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                 active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                              }`
                           }
                           value={desafio}
                        >
                           {({ selected }) => (
                              <>
                                 <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                    {desafio.nome}
                                 </span>
                                 {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                 ) : null}
                              </>
                           )}
                        </Listbox.Option>
                     ))}
                  </Listbox.Options>
               </Transition>
            </div>
         </Listbox>
      </div>
   );
}
