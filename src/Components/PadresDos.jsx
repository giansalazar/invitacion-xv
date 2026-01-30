import React from 'react';

function PadresDos() {
    return (
        /* La clase 'padres_dos' debe tener el background-image en tu CSS, igual que 'home' */
        <section id="padres_dos" className='relative flex flex-col items-center justify-center w-full min-h-screen bg-cover bg-center overflow-hidden'>
            
            {/* Overlay de opacidad: Ajustamos a /60 o /70 para que el texto resalte sobre la foto familiar */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Contenido con z-10 para quedar sobre el overlay */}
            <div className='relative z-10 w-full max-w-4xl px-6 flex flex-col items-center text-center'>
                
                {/* Título con sombra para profundidad */}
                <h2 className='text-4xl md:text-5xl text-white font-great-vibes mb-8 drop-shadow-lg'>
                    Para mi familia y amigos
                </h2>

                {/* Bloque de Agradecimiento con diseño "Cita" */}
                <div className='relative py-10 px-4 md:px-20'>
                    {/* Comillas decorativas opcionales en los extremos */}
                    <span className="absolute top-0 left-0 text-white/20 text-7xl font-serif">“</span>
                    
                    <p className='text-2xl md:text-3xl text-white font-great-vibes font-light leading-relaxed drop-shadow-md'>
                        Quiero agradecer a mi familia y amigos por acompañarme en este día tan especial. 
                        Su apoyo, cariño y presencia hacen que mis quince años sean inolvidables. 
                        Gracias por ser parte de este momento que siempre guardaré en mi corazón.
                    </p>

                    <span className="absolute bottom-0 right-0 text-white/20 text-7xl font-serif">”</span>
                </div>

                {/* Firma con estilo similar al Header del Home */}
                <div className='mt-12 flex flex-col items-center'>
                    <div className='w-12 h-[1px] bg-white/40 mb-4'></div>
                    <h1 className='text-5xl text-white font-great-vibes drop-shadow-lg'>
                        Camila Joceline
                    </h1>
                </div>

            </div>
        </section>
    );
}

export default PadresDos;