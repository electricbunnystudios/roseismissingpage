import React, { useState, useRef } from 'react';
import background from '../../resources/RoseBackground.jpg';
import logo from '../../resources/rose-logo.png';
import bunny from '../../resources/electric-bunny-logo.png';
import comic1 from '../../resources/ROSE01.jpg';
import comic2 from '../../resources/ROSE02.jpg';
import comic3 from '../../resources/ROSE03.jpg';
import comic4 from '../../resources/ROSE04.jpg';
import instaLogo from '../../resources/instagram-logo.png';
import backmusic from '../../resources/background.wav';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function Landing() {
  const [isVolumeOn, setIsVolumeOn] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    comic1,
    comic2,
    comic3,
    comic4,
  ]

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  
  const SpeakerClicked = () => {
  
    if(isVolumeOn){
      if(audioRef.current)
      {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
    else
    {
      if(audioRef.current)
      {
        audioRef.current.volume = 0.03;
        audioRef.current.play();
      }
    }
    setIsVolumeOn(!isVolumeOn);
  }

  return (
    <>
      <audio ref={audioRef} autoPlay loop>
        <source src={backmusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      {/* First section */}
      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-between p-8">
          <div className="mt-32 sm:mt-16">
            <a
              href="https://www.instagram.com/electricbunny.studios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src={logo}
                alt="Game Logo"
                className="h-32 w-32 sm:h-64 sm:w-64 object-contain"
              />
            </a>
          </div>
          
          <div className="flex w-full justify-between items-end">
            <a
              href="https://www.instagram.com/electricbunny.studios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src={bunny}
                alt="Bottom Left Icon"
                className="h-16 w-16 sm:h-32 sm:w-32 object-contain"
              />
            </a>
            
            <div className="flex items-center space-x-2">
              <span className="text-white text-xs text-right">activá el sonido para una <br/>mejor experiencia</span>
              <SpeakerWaveIcon className="h-5 w-5 text-white cursor-pointer" style={{display: !isVolumeOn ? "none" : ""}} onClick={SpeakerClicked}/>
              <SpeakerXMarkIcon className="h-5 w-5 text-white cursor-pointer" style={{display: isVolumeOn ? "none" : ""}} onClick={SpeakerClicked}/>
            </div>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="relative flex flex-col lg:flex-row min-h-screen w-full bg-[#091915]">
        <div className="flex flex-col justify-between p-8 lg:w-1/2">
          <div className="mb-8">
            <a
              href="https://www.instagram.com/electricbunny.studios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src={instaLogo}
                alt="Instagram Icon"
                className="h-6 w-6 sm:h-8 sm:w-8"
              />
              <span className="text-white text-xl sm:text-3xl ml-2">electricbunny.studios</span>
            </a>
          </div>
          
          
          <div className="text-white text-left text-base sm:text-lg mb-8 max-w-xs">
            Rose está perdida. No podemos decirles dónde está, quién es o a dónde va.
            <br/><br/>
            Rose dejó su hogar atrás. ¿Para qué? Todo a su debido tiempo, ya lo sabrán.
            <br/><br/>
            El comienzo de esta historia por ahora es lo único que les podemos mostrar. 
          </div>

          <a
              href="https://www.instagram.com/electricbunny.studios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-56 text-center bg-white text-black py-3 rounded-md font-bold mb-8"
            >
              IR A NUESTRO PERFIL
            </a>

          <div className="flex items-center">
            <SpeakerWaveIcon className="h-5 w-5 text-white cursor-pointer" style={{display: !isVolumeOn ? "none" : ""}} onClick={SpeakerClicked}/>
            <SpeakerXMarkIcon className="h-5 w-5 text-white cursor-pointer" style={{display: isVolumeOn ? "none" : ""}} onClick={SpeakerClicked}/>
            <span className="text-white text-xs text-left ml-2">activá el sonido para una <br/>mejor experiencia</span>
          </div>
        </div>

        <div className="flex items-center justify-center p-4 lg:w-1/2 mb-12 md:mb-0">
          <div className="relative w-full max-w-2x1"
                onMouseEnter={()=>setMouseOver(true)}
                onMouseLeave={()=>setMouseOver(false)}>
            <div className="relative w-full sm:pb-[80%] pb-[100%]">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                ></div>
              ))}
            </div>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white"
              aria-label="Previous image"
              style={{display: mouseOver? "" : "none"}}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white"
              aria-label="Next image"
              style={{display: mouseOver? "" : "none"}}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
