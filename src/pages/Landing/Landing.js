import React, { useState } from 'react';
import background from '../../resources/RoseBackground.jpg';
import logo from '../../resources/rose-logo.png';
import bunny from '../../resources/electric-bunny-logo.png';
import comic from '../../resources/comic.png';
import instaLogo from '../../resources/instagram-logo.png';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';

function Landing() {
  const [isVolumeOn, setIsVolumeOn] = useState(false);

  return (
    <>
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
              className="h-32 w-32 object-contain"
            />
          </a>
        </div>
        <div className="absolute bottom-8 right-8 flex items-center space-x-2" >
          <span className="text-white text-xs text-right">activá el sonido para una <br/>mejor experiencia</span>
          <SpeakerWaveIcon className="h-5 w-auto text-white cursor-pointer" style={{display: !isVolumeOn ? "none" : ""}} onClick={() => setIsVolumeOn(!isVolumeOn)}/>
          <SpeakerXMarkIcon className="h-5 w-auto text-white cursor-pointer" style={{display: isVolumeOn ? "none" : ""}} onClick={() => setIsVolumeOn(!isVolumeOn)}/>
        </div>
      </div>

      <div className="relative flex h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundColor: "#091915" }}
        />
        
        <div className="flex w-1/2 flex-col items-center justify-between p-8">
          
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

          <div className="relative w-full text-white text-left text-3xl mb-4">
            NOMBRE DE LA HISTORIETA
          </div>
          <div className="relative w-full text-white text-left text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. 
          </div>
          <div className="relative w-full">
            <a
              href="https://www.instagram.com/electricbunny.studios"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-64 text-center bg-white text-black py-3 rounded-md font-bold"
            >
              IR A NUESTRO PERFIL
            </a>
          </div>
          

          <div className="relative flex items-center w-full" >
            <SpeakerWaveIcon className="h-5 text-white cursor-pointer" style={{display: !isVolumeOn ? "none" : ""}} onClick={() => setIsVolumeOn(!isVolumeOn)}/>
            <SpeakerXMarkIcon className="h-5 text-white cursor-pointer" style={{display: isVolumeOn ? "none" : ""}} onClick={() => setIsVolumeOn(!isVolumeOn)}/>
            <span className="text-white text-xs text-left ml-2">activá el sonido para una <br/>mejor experiencia</span>
          </div>

        </div>

        <div className="relative flex w-1/2 items-center justify-center">
          <img
            src={comic}
            alt="comic"
            className="rounded-lg object-cover h-4/5 "
          />
        </div>

      </div>
    </>
  );
}

export default Landing;
