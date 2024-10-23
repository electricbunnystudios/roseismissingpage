import React, { useState, useRef } from 'react';
import background from '../../resources/RoseBackground.jpg';
import logo from '../../resources/rose-logo.png';
import bunny from '../../resources/electric-bunny-logo.png';
import comic from '../../resources/comic.png';
import comic2 from '../../resources/comic2.png';
import instaLogo from '../../resources/instagram-logo.png';
import backmusic from '../../resources/background.wav';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function Landing() {
  const [isVolumeOn, setIsVolumeOn] = useState(false);
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    comic,
    comic2,
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
      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className="relative z-5 flex h-full items-center justify-center">
          <div className="relative -mt-64">
            <a
              href="https://www.instagram.com/electricbunny.studios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src={logo}
                alt="Company Logo"
                className="h-64 w-64 object-contain"
              />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-8">
          <a
            href="https://www.instagram.com/electricbunny.studios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src={bunny}
              alt="Bottom Left Icon"
              className="h-32 w-32 object-contain ml-12"
            />
          </a>
        </div>
        <div className="absolute bottom-8 right-8 flex items-center space-x-2 mr-12" >
          <span className="text-white text-xs text-right">activá el sonido para una <br/>mejor experiencia</span>
          <SpeakerWaveIcon className="h-5 w-auto text-white cursor-pointer" style={{display: !isVolumeOn ? "none" : ""}} onClick={() => SpeakerClicked()}/>
          <SpeakerXMarkIcon className="h-5 w-auto text-white cursor-pointer" style={{display: isVolumeOn ? "none" : ""}} onClick={() => SpeakerClicked()}/>
        </div>
      </div>

      <div className="relative flex h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundColor: "#091915" }}
        />
        
        <div className="flex w-1/2 flex-col items-start justify-between p-8 ml-16">
          
          <div className="relative flex w-full">
            <a
              href="https://www.instagram.com/electricbunny.studios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src={instaLogo}
                alt="Instagram Icon"
                className="h-8 w-8"
              />
              <span className="text-white text-3xl text-left ml-2">electricbunny.studios</span>
            </a>
          </div>
          <div>
            <div className="relative w-full text-white text-left text-lg mb-4">
              NOMBRE DE LA HISTORIETA
            </div>
            <div className="relative w-full text-white text-left text-lg mb-8 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur. 
            </div>
          </div>

          <div className="relative w-full">
            <a
              href="https://www.instagram.com/electricbunny.studios"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-56 text-center bg-white text-black py-3 rounded-md font-bold"
            >
              IR A NUESTRO PERFIL
            </a>
          </div>
          

          <div className="relative flex items-center w-full" >
            <SpeakerWaveIcon className="h-5 text-white cursor-pointer" style={{display: !isVolumeOn ? "none" : ""}} onClick={() => SpeakerClicked()}/>
            <SpeakerXMarkIcon className="h-5 text-white cursor-pointer" style={{display: isVolumeOn ? "none" : ""}} onClick={() => SpeakerClicked()}/>
            <span className="text-white text-xs text-left ml-2">activá el sonido para una <br/>mejor experiencia</span>
          </div>

        </div>

        <div className="relative flex w-1/2 items-center justify-center">
        
        
          <div className="relative w-full max-w-1/2 max-h-1/2 mr-36">
            <div className="relative w-full h-full flex justify-center">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="h-full object-fit rounded-lg"
              />
            </div>
            <button
              onClick={goToPrevious}
              className="absolute -left-20 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>
            <button
              onClick={goToNext}
              className="absolute -right-20 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-8 h-8" />
            </button>
          </div>
          
          {/*<img
            src={comic}
            alt="comic"
            className="rounded-lg object-cover h-4/5 "
          />*/}
        </div>

      </div>
    </>
  );
}

export default Landing;
