import { useState } from "react";
import Remera1 from "./img/remeraMujer2.png";
import Remera2 from "./img/remeraMujer3.png";
import Remera3 from "./img/remeraMujer4.png";
import Remera4 from "./img/remeraMujer5.png";
import Remera5 from "./img/remeraMujer6.png";
import Remera6 from "./img/remeraMujer7.png";
import Remera7 from "./img/remeraMujer8.png";
import Gorra1 from "../../img/gorra1.png";
import Gorra2 from "../../img/gorra2.png";
import Gorra3 from "../../img/gorra3.png";
import Gorra4 from "../../img/gorra4.png";

interface Remera {
    id: number;
    name: string;
    imageSrc: string;
    price: number;
    color: string;
    categoria: string;
}

const remeras: Remera[] = [
    {
        id: 1,
        name: 'Edition Man Pink',
        imageSrc: Remera1,
        price: 2500,
        color: 'blanco',
        categoria: 'remera',
    },
    {
        id: 2,
        name: 'What WOW',
        imageSrc: Remera2,
        price: 2500,
        color: 'negro',
        categoria: 'remera',
    },
    {
        id: 3,
        name: 'The love peace',
        imageSrc: Remera3,
        price: 3500,
        color: 'negro',
        categoria: 'remera',
    },
    {
        id: 4,
        name: 'The love peace two',
        imageSrc: Remera4,
        price: 3500,
        color: 'negro',
        categoria: 'remera',
    },
    {
        id: 5,
        name: 'Life Green',
        imageSrc: Remera5,
        price: 1800,
        color: 'negro',
        categoria: 'remera',
    },
    {
        id: 6,
        name: 'The cubes emotions',
        imageSrc: Remera6,
        price: 3500,
        color: 'blanco',
        categoria: 'remera',
    },
    {
        id: 7,
        name: 'The cubes emotions',
        imageSrc: Remera7,
        price: 3500,
        color: 'blanco',
        categoria: 'remera',
    },
    {
        id: 8,
        name: 'Change',
        imageSrc: Gorra1,
        price: 2500,
        color: 'beige',
        categoria: 'gorra',
    },
    {
        id: 9,
        name: 'Change',
        imageSrc: Gorra2,
        price: 2500,
        color: 'blanco',
        categoria: 'gorra',
    },
    {
        id: 10,
        name: 'Change',
        imageSrc: Gorra3,
        price: 2500,
        color: 'negro',
        categoria: 'gorra',
    },
    {
        id: 11,
        name: 'Change',
        imageSrc: Gorra4,
        price: 2500,
        color: 'negro',
        categoria: 'gorra',
    },
    
    
];






const FiltroProductos = () => {
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
            return true; // Si no hay filtro, devuelvo todos los productos
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
                <h2 className="text-3xl tracking-tight text-gray-500">Mujer</h2>
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

                        {productosFiltrados.map(productos => (
                            <div key={productos.id} className="group relative">
                                <div className="w-full min-h-80 bg-gray-100 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={productos.imageSrc}
                                        alt={productos.name}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {productos.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm font-medium text-gray-900">{productos.price}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{productos.color}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default FiltroProductos;