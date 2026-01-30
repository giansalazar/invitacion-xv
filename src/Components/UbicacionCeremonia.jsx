import React from 'react'
import CuentaRegresiva from './CuentaRegresiva'

function UbicacionCeremonia() {
    return (
        /* Cambiamos el fondo a un gradiente que nace del morado que elegiste */
        <div id='ceremonia' className='relative flex flex-col items-center justify-center w-full min-h-screen bg-[#2b1a72] bg-gradient-to-b from-[#2b1a72] to-[#1a1045] py-20 px-6'>
            
            {/* Decoración de fondo opcional: un círculo difuminado para dar profundidad */}
            <div className="absolute w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px] z-0"></div>

            {/* Sección superior: La Fecha */}
            <div className="relative z-10 flex flex-col justify-center items-center w-full max-w-2xl mb-16 text-center">
                <img className='w-44 mb-8 invert opacity-80' src="./vector.png" alt="decoración" />
                
                <h2 className='text-6xl text-white font-great-vibes mb-6 drop-shadow-md'>
                    Agenda la Fecha
                </h2>
                
                <div className="relative group">
                    {/* Líneas decorativas dobles para un look más premium */}
                    <div className="absolute -inset-x-10 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    
                    <div className="py-4 px-2">
                        <p className='text-2xl md:text-3xl text-white font-light tracking-[0.3em] uppercase'>
                            Sábado <span className="font-bold border-x border-white/30 px-4 mx-2">28</span> Febrero
                        </p>
                    </div>
                </div>
                
                <p className='text-white/60 tracking-[0.4em] text-sm mt-4'>2026</p>
                
                <img className='w-44 mt-8 invert opacity-80 rotate-180' src="./vector.png" alt="decoración" />
            </div>

            {/* Sección inferior: Cuenta Regresiva */}
            <div className="relative z-10 w-full max-w-lg">
                {/* Contenedor con efecto Glassmorphism */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 shadow-2xl">
                    <p className='text-4xl text-white font-great-vibes mb-10 text-center'>
                        Solo faltan...
                    </p>
                    
                    <div className="flex justify-center transform scale-110 sm:scale-125">
                        <CuentaRegresiva />
                    </div>
                    
                    <div className="mt-12 flex flex-col items-center">
                        <div className="w-12 h-[1px] bg-white/20 mb-4"></div>
                        <p className='text-white/50 text-[10px] uppercase tracking-[0.5em]'>
                            Días • Horas • Min • Seg
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UbicacionCeremonia