import React from 'react';

function MensajeDos() {
    return (
        <section className='relative flex flex-col items-center justify-center w-full min-h-[50vh] bg-white pb-24 px-6 overflow-hidden'>
            
            {/* Contenedor de Padrinos */}
            <div className='relative z-10 w-full max-w-2xl flex flex-col items-center mb-20'>
                
                {/* Etiqueta Minimalista */}
                <h3 className='text-[11px] tracking-[0.5em] text-[#2b1a72]/60 uppercase mb-8 font-bold text-center'>
                    Mis Padrinos
                </h3>

                {/* Nombres con caligrafía elegante */}
                <div className='flex flex-col gap-2 text-center mb-16'>
                    <p className='text-3xl md:text-4xl text-[#2b1a72] font-great-vibes'>
                        Iram de Jesús Escalante Verde
                    </p>
                    <p className='text-3xl md:text-4xl text-[#2b1a72] font-great-vibes'>
                        César Quirino Rangel Arriaga
                    </p>
                </div>

                {/* Separador decorativo sutil */}
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#2b1a72]/20 to-transparent mb-16"></div>

                {/* Frase de Transición - Impacto Visual */}
                <div className='relative px-4 py-8 border border-[#2b1a72]/10 rounded-2xl bg-[#2b1a72]/[0.02]'>
                    <h2 className='text-3xl md:text-4xl text-[#2b1a72] font-great-vibes text-center leading-relaxed px-6'>
                        "Dejo un mundo atrás <br className='md:hidden'/> 
                        y entro a uno nuevo"
                    </h2>
                    
                    {/* Pequeños brillos decorativos */}
                    <div className="absolute -top-2 -left-2 text-[#2b1a72]/20 text-xl">✦</div>
                    <div className="absolute -bottom-2 -right-2 text-[#2b1a72]/20 text-xl">✦</div>
                </div>
            </div>

            {/* Decoración de fondo muy tenue */}
            <div className='absolute -bottom-20 right-0 w-80 h-80 bg-[#2b1a72]/5 rounded-full blur-[100px]'></div>
        </section>
    );
}

export default MensajeDos;