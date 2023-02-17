import Overside1 from '../../img/overside1.jpg';
import imagenpirncipal from '../../img/gorras.png';
import SearchBar from '../searchBar/searchBar';








export default function Example() {
  return (
    <div className=" relative overflow-hidden bg-[#e9d2b4] ">
      <div className="  md:pt-20 sm:pt-20 small:pt-44 lg:pt-0   pb-40">
        <div className=" flex justify-center text-center md:gap-16 lg:gap-64 small:flex-col  sm:flex-col md:flex-row lg:flex-row align-center items-center relative mx-auto max-w-7xl ">
          <div className="   sm:max-w-lg">
            <h1 className=" small:text-5xl sm:text-5xl md:text-5xl lg:text-6xl  font-bold tracking-tight text-gray-900 ">
              El verano está aquí y <br /> <span className="text-[#f0f8ff] ">estamos listos</span>
            </h1>
            <p className="mt-4  sm:text-2xl  md:text-2xl lg:text-3xl text-gray-500">
              Este año no te quedes en casa y vistete con el mejor estilo.
            </p>
            <div className="mt-12">
              <SearchBar />
            </div>
          </div>
          <div className=" mt-12 sm:mt-16 sm:max-w-lg sm:mx-auto lg:mx-0">
            <div className=" sm:gap-0 lg:grid-cols-3 lg:gap-8 ">
              <div className="relative sm:col-span-2 ">
                <img
                  className=" small:h-3/4 w-2/4 h-65 rounded-lg drop-shadow-[80px_50px_5px_rgba(0,0,0,.5)] small:w-[300px] sm:w-[300px] lg:w-[600px] md:w-[600px]   "
                  src={imagenpirncipal}
                  alt=""

                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )

}
