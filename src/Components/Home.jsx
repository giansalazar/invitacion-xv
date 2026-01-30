import React from 'react';

function Home() {
    return (
        /* La clase 'home' debe tener el background-image en tu CSS */
        /* Añadimos un gradiente de negro (overlay) directamente aquí para asegurar legibilidad */
        <div className="home relative w-full h-screen flex flex-col justify-between items-center py-24 bg-cover bg-center">
            
            {/* Overlay: Esto oscurece la imagen de fondo lo justo para resaltar el texto */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Contenido: Con z-10 para estar sobre el overlay */}
            <div className="relative z-10 text-center">
                <h1 className='text-7xl font-great-vibes text-white drop-shadow-2xl mb-2'>
                    Camila Joceline
                </h1>
                {/* Aumentamos peso: tracking más abierto y font-bold o medium */}
                <span className='tracking-[0.6em] text-sm text-gray-200 font-medium uppercase drop-shadow-md'>
                    Mis XV Años
                </span>
            </div>

            <div className="relative z-10 flex items-center gap-6 text-white font-light border-y border-white/30 py-6 px-4 backdrop-blur-[2px]">
                <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300">Sábado</p>
                </div>
                <div className="text-4xl font-serif tracking-tighter">
                    28 <span className="mx-1 text-2xl text-yellow-500/80">|</span> 02 <span className="mx-1 text-2xl text-yellow-500/80">|</span> 26
                </div>
                <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300">8:00 PM</p>
                </div>
            </div>

            <p className='relative z-10 text-white/80 italic font-serif text-lg drop-shadow-sm'>
                Te espero para celebrar juntos
            </p>
        </div>
    );
}

export default Home;