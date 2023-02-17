import { useState } from "react";
import { remeras } from "../../data";


const SeccionRemeras = ({ }) => {
    
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [colorSeleccionado, setColorSeleccionado] = useState('');


    const cambiarCategoria = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoriaSeleccionada(e.target.value);
    };

    const cambiarColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setColorSeleccionado(e.target.value);
    };




    const productosFiltrados = remeras.filter(producto => {
        if (!categoriaSeleccionada && !colorSeleccionado) {
            return true;
        } else if (categoriaSeleccionada && !colorSeleccionado) {
            return producto.categoria === categoriaSeleccionada;
        } else if (!categoriaSeleccionada && colorSeleccionado) {
            return producto.color === colorSeleccionado;
        } else {
            return producto.categoria === categoriaSeleccionada && producto.color === colorSeleccionado;
        }
    });

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Nuestros Productos verano 2023</h1>
                <h2 className="text-3xl tracking-tight text-gray-500">Hombre</h2>
                <div className="flex justify-between">
                    <div>
                        <select id="categoria" value={categoriaSeleccionada} onChange={cambiarCategoria} className='border-none'>
                            <option value="">Todos los productos</option>
                            <option value="remera">Remeras</option>
                            <option value="gorra">Gorras</option>
                        </select>
                    </div>
                    <div>
                        <select id="color" value={colorSeleccionado} onChange={cambiarColor} className='border-none'>
                            <option value="">Todos los colores</option>
                            <option value="negro">Negro</option>
                            <option value="blanco">Blanco</option>
                            <option value="beige">Beige</option>
                        </select>
                    </div>
                </div>
                <div id="remeras-section">
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {productosFiltrados.map(producto => (
                            <div key={producto.id} className="group relative ">
                                <div className="w-full min-h-80 bg-gray-100 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden  lg:h-80 lg:aspect-none hover:opacity-75 ">
                                    <img
                                        src={producto.imageSrc}
                                        alt={producto.name}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <p >
                                                <span aria-hidden="true" className="absolute inset-0 h-5" />
                                                {producto.name}
                                            </p>
                                        </h3>
                                        <p className="mt-1 text-sm font-medium text-gray-900">{producto.price}</p>
                                    </div>
                                    <button  className="px-3 py-1 text-sm font-medium  rounded-md h-10 w-10 cursor-pointer hover:bg-slate-200 focus:bg-green-300">
                                        <svg fill="none" stroke="black" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div >
    );
};

export default SeccionRemeras;


