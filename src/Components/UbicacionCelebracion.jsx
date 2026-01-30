import React from 'react';

function UbicacionCelebracion() {
    const whatsappUrl = "https://wa.me/+524871137531?text=Hola%20Camila%20Joceline%20me%20encantaría%20ser%20parte%20de%20un%20día%20tan%20especial%20para%20ti%20y%20para%20los%20que%20te%20apreciamos.%20Con%20este%20mensaje%20quiero%20confirmar%20que%20asistiré%20a%20tus%20XV.";

    return (
        <section id='celebracion' className='flex flex-col items-center justify-center w-full min-h-screen bg-white py-24 px-6'>
            
            {/* Bloque: Código de Vestimenta */}
            <div className='w-full max-w-xl flex flex-col items-center text-center mb-28'>
                <img className='w-14 mb-6 opacity-30 grayscale' src="./corona_xv.png" alt="detalle" />
                
                <h2 className='text-4xl text-[#2b1a72] font-great-vibes mb-6'>Protocolo de Vestimenta</h2>
                
                <div className='border-l-2 border-[#2b1a72]/20 pl-6 md:pl-0 md:border-l-0 md:border-t border-[#2b1a72]/10 pt-6'>
                    <p className='text-[#2b1a72] font-bold tracking-widest text-xs uppercase mb-3'>Traje Formal</p>
                    {/* Cambiamos a Sans Serif para el mensaje largo */}
                    <p className='text-gray-600 font-sans text-sm md:text-base leading-relaxed max-w-md'>
                        Para asegurar que la quinceañera destaque en su día, 
                        les pedimos amablemente evitar el uso de prendas en color <span className='text-[#2b1a72] font-bold underline decoration-1 underline-offset-4'>lila</span>.
                    </p>
                </div>
            </div>

            {/* Bloque: Confirmación */}
            <div className='w-full max-w-lg flex flex-col items-center text-center'>
                <h2 className='text-4xl text-[#2b1a72] font-great-vibes mb-6'>Asistencia</h2>
                
                {/* Texto en Sans Serif para que no se vea "pequeño" o amontonado */}
                <p className='text-gray-500 font-sans text-sm md:text-base leading-relaxed mb-10'>
                    "Quiero compartir mis sueños con los que más quiero, <br className='hidden md:block'/> 
                    y tú eres parte fundamental de ellos. Por favor, confirma tu lugar."
                </p>

                {/* Botón Cuadrado con Texto Legible */}
                <a 
                    href={whatsappUrl}
                    target='_blank'
                    className='group w-full md:w-auto inline-flex items-center justify-center gap-4 px-10 py-4 border border-[#2b1a72] text-[#2b1a72] text-[11px] tracking-[0.3em] font-black uppercase transition-all duration-300 hover:bg-[#2b1a72] hover:text-white'
                >
                    <span>Confirmar por WhatsApp</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                    </svg>
                </a>

                {/* Cierre Final */}
                <div className='mt-24 pt-10 border-t border-gray-100 w-full'>
                    <p className='text-3xl text-[#2b1a72] font-great-vibes'>Te Esperamos</p>
                    <p className='text-[10px] tracking-[0.5em] text-gray-400 uppercase mt-2'>Febrero 2026 • Rioverde</p>
                </div>
            </div>

        </section>
    );
}

export default UbicacionCelebracion;