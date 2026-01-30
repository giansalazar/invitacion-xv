import React, { useState, useEffect } from 'react';

function CuentaRegresiva() {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2026-02-28T20:00:00'); // Cambia esto a tu fecha objetivo
        const now = new Date();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            return { days, hours, minutes, seconds };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Si ya pasó la fecha
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Limpia el temporizador cuando se desmonta el componente
    }, []);

    return (
        <div className='flex justify-center items-center flex-col gap-4'>
            <div className='flex justify-center items-center gap-4'>
                <span className='cuenta-regresiva font-sans font-bold text-[#fff] text-4xl'>{timeLeft.days}</span>
                <span className='cuenta-regresiva font-sans font-bold text-[#fff] text-4xl'>{timeLeft.hours}</span>
                <span className='cuenta-regresiva font-sans font-bold text-[#fff] text-4xl'>{timeLeft.minutes}</span>
                <span className='cuenta-regresiva font-sans font-bold text-[#fff] text-4xl'>{timeLeft.seconds}</span>
            </div>

            <div className='flex justify-center items-center gap-12 text-center text-[10px]'>
                <span className='text-white'>DÍAS</span>
                <span className='text-white'>HRS</span>
                <span className='text-white'>MINS</span>
                <span className='text-white'>SEGS</span>
            </div>
        </div>
    );
}

export default CuentaRegresiva;
