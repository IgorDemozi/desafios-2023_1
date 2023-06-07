import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export type option = {
  value: string | number
  texto: string
}

interface SelectDesafiosProps {
  value: string | number
  onChange: any
  options: option[]
  label: string
}

export default function SelectDesafios({ value, onChange, options, label }: SelectDesafiosProps) {
  return (
    <div className="flex items-center gap-2 justify-self-end">
      <p className="font-medium">{label}</p>
      <div className="w-32">
        <Listbox value={value} onChange={onChange}>
          <div className="relative">
            <Listbox.Button
              className={`relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-[0_5px_20px_rgba(134,136,162,0.212)] focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-myTheme-ListBoxButton sm:text-sm`}
            >
              <span className="block truncate">{value}</span>
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
              <Listbox.Options className="absolute bottom-full mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
                {options.map((option, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? `bg-myTheme-ListBoxOptionActive text-myTheme-ListBoxOptionText` : 'text-gray-900'
                      }`
                    }
                    value={option.value}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {option.texto}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 text-myTheme-ListBoxCheckIcon`}
                          >
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
    </div>
  )
}
