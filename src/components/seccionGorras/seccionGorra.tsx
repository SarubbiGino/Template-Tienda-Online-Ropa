
import React from 'react'
import gorra2 from '../../img/gorraV.png'
import gorra3 from '../../img/gorraBe2.png'
import gorra4 from '../../img/gorranegra.png'



export default function seccion() {
    return (
        <div className='flex flex-col gap-24 mt-24 mb-24   '>
            <div className="flex flex-row items-center bg-white border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100 justify-around small:flex-col sm:flex-col md:flex-row lg:flex-row  ">
                <img className="object-cover w-96  h-96 md:h-auto md:w-48 " src={gorra2} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-4xl font-bold tracking-tight text-green-800 animate__ ">Nueva Coleccion OverLife 2023 GV</h5>
                    <p className="mb-3 font-normal text-green-800">Una gorra verde para el verano, la mejor aliada para protegerse del sol y lucir con estilo en la temporada más calurosa del año</p>
                </div>
            </div>
            <div className="flex flex-row-reverse items-center bg-white border border-gray-200  shadow md:flex-row md:max-w-xl hover:bg-gray-100 justify-around small:flex-col sm:flex-col md:flex-row-reverse lg:flex-row-reverse ">
                <img className="object-cover w-96  h-96 md:h-auto md:w-48 " src={gorra3} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-4xl font-bold tracking-tight text-[#ddbb8b] ">Nueva Coleccion OverLife 2023 GB</h5>
                    <p className="mb-3 font-normal text-[#977442] ">La gorra beige es el complemento perfecto para proteger tu rostro del sol mientras disfrutas del verano con estilo y comodidad.</p>
                </div>
            </div>
            <div className="flex flex-row items-center bg-white border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100 justify-around small:flex-col sm:flex-col md:flex-row lg:flex-row ">
                <img className="object-cover w-96  h-96 md:h-auto md:w-48 " src={gorra4} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-4xl font-bold tracking-tight text-black ">Nueva Coleccion OverLife 2023 GN</h5>
                    <p className="mb-3 font-normal text-[#2e2e2e]">La gorra negra es la elección ideal para darle un toque fresco y sofisticado a tus outfits de verano, sin sacrificar la protección contra los rayos solares.</p>
                </div>
            </div>
        </div>
    )
}
