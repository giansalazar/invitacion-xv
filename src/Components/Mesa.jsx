import React, { useState } from 'react';

function Ayuda() {
    const cardNumber = "4152 3138 6438 3943";
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(cardNumber.replace(/\s/g, ''));
        setCopied(true);
        // El mensaje desaparece después de 2 segundos para no ensuciar la vista
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <section id="ayuda" className='relative flex flex-col items-center justify-center w-full min-h-screen bg-[#2b1a72] py-24 px-6 overflow-hidden'>
            
            {/* Decoración de fondo sutil (luces difusas) */}
            <div className='absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none'>
                <div className='absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]'></div>
                <div className='absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]'></div>
            </div>

            <div className='relative z-10 w-full max-w-3xl flex flex-col items-center text-center'>
                
                {/* Ícono central */}
                <div className='w-12 h-12 border border-white/20 flex items-center justify-center rotate-45 mb-10'>
                    <div className='text-white/80 -rotate-45 text-xl'>✧</div>
                </div>

                <div className='mb-16'>
                    <h2 className='text-4xl md:text-5xl text-white font-great-vibes mb-6'>
                        Presentes
                    </h2>
                    <p className='text-white/70 font-light text-sm md:text-base leading-relaxed max-w-lg mx-auto italic'>
                        "El mejor regalo que me puedes dar es tu presencia, pero si deseas tener un detalle conmigo, aquí te dejo algunas opciones."
                    </p>
                </div>

                {/* Grid con diseño minimalista cuadrado */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full'>
                    
                    {/* Mesa de Regalos */}
                    <div className='group flex flex-col items-center p-12 border border-white/10 bg-white/[0.03] transition-all hover:bg-white/[0.05]'>
                        <span className='text-[10px] tracking-[0.4em] text-white/40 uppercase font-bold mb-6'>Opción Uno</span>
                        <h4 className='text-2xl text-white font-great-vibes mb-2'>Mesa de Regalos</h4>
                        <p className='text-white/60 font-sans text-xs tracking-widest mb-10 uppercase'>Liverpool • 51675013</p>
                        
                        <a 
                            href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/51675013' 
                            target='_blank' 
                            className='px-10 py-3 border border-white text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-[#2b1a72] transition-all duration-500'
                        >
                            Ver Mesa
                        </a>
                    </div>

                    {/* Lluvia de Sobres */}
                    <div className='group flex flex-col items-center p-12 border border-white/10 bg-white/[0.03] transition-all hover:bg-white/[0.05]'>
                        <span className='text-[10px] tracking-[0.4em] text-white/40 uppercase font-bold mb-6'>Opción Dos</span>
                        <h4 className='text-2xl text-white font-great-vibes mb-2'>Lluvia de Sobres</h4>
                        <p className='text-white/60 font-mono text-[11px] mb-10 tracking-[0.2em]'>{cardNumber}</p>
                        
                        <button 
                            onClick={handleCopy}
                            className='relative px-10 py-3 border border-white text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-[#2b1a72] transition-all duration-500 overflow-hidden'
                        >
                            <span className={copied ? 'opacity-0' : 'opacity-100'}>Copiar CLABE</span>
                            {copied && (
                                <span className='absolute inset-0 flex items-center justify-center text-[10px] text-white bg-[#2b1a72] animate-fade-in'>
                                    ¡Copiado!
                                </span>
                            )}
                        </button>
                    </div>

                </div>

                <p className='mt-20 text-white/30 text-[10px] tracking-[0.6em] uppercase'>
                    Camila Joceline • 2026
                </p>
            </div>
        </section>
    );
}

export default Ayuda;