import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import Carrito from './carrito/carrito';


const navigation = [
  { name: 'Inicio', href: '', current: true },
  { name: 'Mujer', href: '#', current: false },
  { name: 'Hombre', href: '#', current: false },
  { name: 'Niños', href: '#', current: false },
  { name: 'Iniciar Sesion', href: '#', current: false },
  { name: 'Registrarse', href: '#', current: false },

]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const [carritoVisible, setCarritoVisible] = useState(false);

  const handleCartButtonClick = () => {
    setShowCart(!showCart);
  };

  return (
    <Disclosure as="nav" className="bg-[#181818] fixed z-50 w-screen animate-waving-hand  ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
                <div className="flex flex-shrink-0 items-cente">
                  <h1 className="text-3xl text-white ">OverLife</h1>
                </div>
                <div className="hidden sm:ml-6 sm:block" >
                  <div className="flex flex-row space-x-4">
                    <ul className='flex flex-row space-x-4 text-center items-center justify-center ' >
                      <li>
                        <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          Inicio
                        </Link>
                      </li>
                      <li>
                        <Link to="mujer" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          Mujer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hombre" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          Hombre
                        </Link>
                      </li>
                      <li>
                        <Link to="/niños" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          Niños
                        </Link>
                      </li>
                      <li>
                        <Link to="/iniciar-sesion" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          Iniciar Sesion
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <button
                    className="px-3 py-1 text-sm font-medium rounded-md h-12 w-12 cursor-pointer   hover:opacity-60 "
                    id="carrito"
                    onClick={() => setCarritoVisible(!carritoVisible)}>
                    <svg fill="none" stroke="White" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                    </svg>
                  </button>
                  {carritoVisible && <Carrito />}
                </div>
               
               
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
