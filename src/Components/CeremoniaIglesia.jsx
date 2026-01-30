import React from 'react';

function CeremoniaIglesia() {
    return (
        <section id="ceremonia" className='flex flex-col items-center justify-center w-full min-h-screen bg-white py-24 px-6'>
            
            {/* Título de la Sección */}
            <div className="mb-20 text-center">
                <span className='text-[10px] tracking-[0.6em] text-[#2b1a72]/50 uppercase font-bold'>Logística</span>
                <h2 className='text-5xl text-[#2b1a72] font-great-vibes mt-2'>Dónde & Cuándo</h2>
            </div>

            <div className='flex flex-col md:flex-row gap-12 w-full max-w-5xl justify-center items-stretch'>
                
                {/* Bloque Misa */}
                <div className='flex-1 flex flex-col items-center text-center p-10 border border-[#2b1a72]/20 hover:border-[#2b1a72]/40 transition-colors duration-500'>
                    <img className='w-10 mb-6 grayscale opacity-70' src="/iglesia2.png" alt="Misa" />
                    <h3 className='text-3xl text-[#2b1a72] font-great-vibes mb-4'>Misa</h3>
                    
                    <div className='mb-10'>
                        <p className='text-[#2b1a72] font-serif italic text-xl'>6:00 PM</p>
                        <p className='text-gray-500 font-light mt-2 text-sm leading-relaxed'>
                            Parroquia de Santa Catarina <br/> de Alejandría
                        </p>
                    </div>

                    {/* Botón Cuadrado Minimalista */}
                    <a 
                        className='px-8 py-3 border border-[#2b1a72] text-[#2b1a72] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#2b1a72] hover:text-white transition-all duration-300' 
                        href="https://maps.google.com" 
                        target='_blank'
                    >
                        Ver Mapa
                    </a>
                </div>

                {/* Bloque Recepción */}
                <div className='flex-1 flex flex-col items-center text-center p-10 border border-[#2b1a72]/20 hover:border-[#2b1a72]/40 transition-colors duration-500'>
                    <img className='w-10 mb-6 grayscale opacity-70' src="/castillo2.png" alt="Recepción" />
                    <h3 className='text-3xl text-[#2b1a72] font-great-vibes mb-4'>Recepción</h3>
                    
                    <div className='mb-10'>
                        <p className='text-[#2b1a72] font-serif italic text-xl'>7:00 PM</p>
                        <p className='text-gray-500 font-light mt-2 text-sm leading-relaxed'>
                            Finca "El Palmar" <br/> Rioverde, S.L.P.
                        </p>
                    </div>

                    {/* Botón Cuadrado Minimalista */}
                    <a 
                        className='px-8 py-3 border border-[#2b1a72] text-[#2b1a72] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#2b1a72] hover:text-white transition-all duration-300' 
                        href="https://maps.google.com" 
                        target='_blank'
                    >
                        Ver Mapa
                    </a>
                </div>

            </div>
        </section>
    );
}

export default CeremoniaIglesia;