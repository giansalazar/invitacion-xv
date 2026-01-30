import React, { useRef, useState } from 'react';

function Mensaje() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section id="mensaje" className='relative flex flex-col items-center justify-center w-full min-h-screen bg-white py-20 px-6 overflow-hidden'>
            
            {/* Decoración sutil de fondo */}
            <div className='absolute top-10 -right-10 w-64 h-64 bg-[#2b1a72]/5 rounded-full blur-3xl'></div>
            <div className='absolute bottom-10 -left-10 w-64 h-64 bg-[#2b1a72]/5 rounded-full blur-3xl'></div>

            <div className='relative z-10 w-full max-w-2xl flex flex-col items-center'>
                
                {/* Reproductor Estilizado */}
                <div className='flex flex-col items-center mb-16'>
                    <div 
                        onClick={toggleAudio}
                        className={`relative w-24 h-24 flex items-center justify-center cursor-pointer transition-all duration-500 rounded-full ${isPlaying ? 'scale-110 shadow-xl' : 'hover:scale-105'}`}
                    >
                        {/* Círculo animado si está sonando */}
                        {isPlaying && (
                            <span className="absolute inset-0 rounded-full bg-[#2b1a72]/20 animate-ping"></span>
                        )}
                        <img 
                            className={`w-full h-full object-contain ${isPlaying ? 'rotate-12' : ''}`} 
                            src="./player2.png" 
                            alt="Play" 
                        />
                    </div>
                    
                    <p className='mt-4 text-[10px] tracking-[0.4em] text-[#2b1a72] uppercase font-bold animate-pulse'>
                        {isPlaying ? 'Escuchando Photograph' : 'Presiona para escuchar'}
                    </p>
                    <audio ref={audioRef} src="./photograph.mp3" onEnded={() => setIsPlaying(false)} />
                </div>

                {/* Mensaje Principal */}
                <div className='text-center mb-16 px-4'>
                    <svg className="w-8 h-8 text-[#2b1a72]/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.34315 15.3601 2 17.017 2H19.017C20.6739 2 22.017 3.34315 22.017 5V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01698 21L2.01698 18C2.01698 16.8954 2.91241 16 4.01698 16H7.01698C7.56927 16 8.01698 15.5523 8.01698 15V9C8.01698 8.44772 7.56927 8 7.01698 8H4.01698C2.91241 8 2.01698 7.10457 2.01698 6V5C2.01698 3.34315 3.36013 2 5.01698 2H7.01698C8.67383 2 10.017 3.34315 10.017 5V15C10.017 18.3137 7.33069 21 4.01698 21H2.01698Z" />
                    </svg>
                    <p className='text-lg md:text-xl text-[#2b1a72] font-serif leading-relaxed italic'>
                        "En este cuento de hadas, hoy me toca a mí sentirme como una princesa... <br className='hidden md:block'/>
                        Pero en mi sueño encantado, todos son protagonistas de este cuento <span className='font-bold not-italic'>feliz, inolvidable y mágico</span>"
                    </p>
                </div>

                {/* Sección Padres */}
                <div className='flex flex-col items-center w-full'>
                    <img className='w-16 opacity-30 mb-6' src="./corona.png" alt="Corona" />
                    
                    <h3 className='text-[11px] tracking-[0.5em] text-[#2b1a72]/60 uppercase mb-8 font-bold'>
                        Con el amor de mis padres
                    </h3>

                    <div className='flex flex-col gap-2 text-center'>
                        <p className='text-3xl md:text-4xl text-[#2b1a72] font-great-vibes'>
                            Wendy Irasema Martínez Verde
                        </p>
                        <p className='text-3xl md:text-4xl text-[#2b1a72] font-great-vibes'>
                            José Guadalupe Piñones Flores
                        </p>
                    </div>

                    <div className='mt-12 text-[#2b1a72]/30 text-2xl font-serif italic'>&</div>
                </div>
            </div>
        </section>
    );
}

export default Mensaje;