import { useState } from "react";



interface Remera {
    id: number;
    name: string;
    imageSrc: string;
    price: string;
    color: string;
}

const remeras: Remera[] = [
    {
        id: 1,
        name: 'Basic Tee',
        imageSrc: 'https://i.pinimg.com/564x/0e/06/14/0e0614f75d3cc462520f415cec3b93a1.jpg',
        price: '$35',
        color: 'negro',
    },
    {
        id: 2,
        name: 'Basic Tee',
        imageSrc: 'https://i.pinimg.com/564x/8e/58/21/8e5821445ff86a540e432bee0ea3d6b8.jpg',
        price: '$35',
        color: 'negro',
    },
    {
        id: 3,
        name: 'Basic Tee',
        imageSrc: 'https://i.pinimg.com/564x/81/b9/98/81b998d713558aa9a87a93bc03eb2599.jpg',
        price: '$35',
        color: 'beige',
    },
    {
        id: 4,
        name: 'Basic Tee',
        imageSrc: 'https://i.pinimg.com/564x/c8/83/02/c88302fc46179dde94174349cb690d33.jpg',
        price: '$35',
        color: 'beige',
    },
    {
        id: 5,
        name: 'Basic Tee',
        imageSrc: 'https://i.pinimg.com/736x/e9/cd/03/e9cd03ae2be0dfe487d0f987cbe3ce23.jpg',
        price: '$35',
        color: 'blanco',
    },
    {
        id: 6,
        name: 'Basic Tee',
        imageSrc: 'https://i.pinimg.com/564x/1f/b1/2d/1fb12d41f681b35708c154365384ea3d.jpg',
        price: '$35',
        color: 'blanco',
    },
    {
        id: 7,
        name: 'Basic Tee',
        imageSrc: 'https://i.pinimg.com/564x/da/7c/c0/da7cc0c6fe35b6d069dc03b9e894b01e.jpg',
        price: '$35',
        color: 'blanco',
    },
    {
        id: 8,
        name: 'Basic Tee',
        imageSrc: 'https://i.pinimg.com/564x/32/be/79/32be79b925be362de97aa7608f77c91a.jpg',
        price: '$35',
        color: 'blanco',
    },
    {
        id: 9,
        name: 'Basic Tee',
        imageSrc: 'https://i.pinimg.com/564x/e3/f3/77/e3f3778ac2c40e2c5106c7ba229a527d.jpg',
        price: '$35',
        color: 'negro',
    },
];


const FiltroRemeras = () => {
    const [filtro, setFiltro] = useState('todos');

    const cambiarFiltro = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFiltro(e.target.value);
    };

    const remerasFiltradas = filtro === 'todos' ? remeras : remeras.filter(remera => remera.color === filtro);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestras Remeras verano 2023</h2>
                <label htmlFor="filtro">Filtrar por color:</label>
                <select id="filtro" value={filtro} onChange={cambiarFiltro} className='border-none'>
                    <option value="todos">Todos</option>
                    <option value="negro">Negro</option>
                    <option value="blanco">Blanco</option>
                    <option value="beige">Beige</option>
                </select>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {remerasFiltradas.map(product => (
                        <div key={product.id} className="group relative">
                            <div className="w-full min-h-80 bg-gray-100 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src={product.imageSrc}
                                    alt={product.name}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FiltroRemeras;