import { React, useRef, useState } from 'react';
import Home from './Components/Home';
import Mensaje from './Components/Mensaje';
import MensajeDos from './Components/MensajeDos';
import CeremoniaIglesia from './Components/CeremoniaIglesia';
import UbicacionCeremonia from './Components/UbicacionCeremonia';
import Celebracion from './Components/Celebracion';
import UbicacionCelebracion from './Components/UbicacionCelebracion';
import Aviso from './Components/Aviso';
import Reproductor from './Components/Reproductor';
import Padres from './Components/Padres';
import PadresDos from './Components/PadresDos';
import PadresTres from './Components/PadresTres';
import Ayuda from './Components/Mesa';
function App() {
    const [isOverlayVisible, setIsOverlayVisible] = useState(true); // Estado para la capa
    const audioRef = useRef(null);

    const handlePlayAudio = () => {
        if (audioRef.current) {
            try {
                audioRef.current.play();
                setIsOverlayVisible(false); // Oculta la capa cuando se reproduce el audio
            } catch (error) {
                console.error('No se pudo reproducir el audio:', error);
            }
        }
    };

    return (
        <main
            className={`snap-y snap-mandatory relative w-full h-screen ${
                'overflow-auto'
            }`}
        >
            <audio ref={audioRef}>
                <source src="/reik.mp3" type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
            </audio>

            
            {/* Contenido principal */}
            <div className="">
                <Home />
            </div>
            <div className="">
                <UbicacionCeremonia />
            </div>
            <div className="">
                <Mensaje />
            </div>

            <div className="">
                <MensajeDos />
            </div>

            <div className="">
                <PadresDos />
            </div>
            <div className="">
                <CeremoniaIglesia />
            </div>
            
            <div className="">
                <PadresTres />
            </div>

            <div className="">
                <Ayuda />
            </div>
            <div className="">
                <UbicacionCelebracion />
            </div>

            <div className="">
                <Padres />
            </div>
           
            <Reproductor />
        </main>
    );
}

export default App;
