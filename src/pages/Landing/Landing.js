import React from 'react';
import background from '../../resources/RoseBackground.jpg';
import logo from '../../resources/rose-logo.png';
import bunny from '../../resources/electric-bunny-logo.png';
import { SpeakerWaveIcon } from '@heroicons/react/24/solid';

function Landing() {

  return (
    <>
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="relative z-5 flex h-full items-center justify-center">
        <div className="relative -mt-64">
          <img
            src={logo}
            alt="Company Logo"
            className="h-64 w-64 object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-16 left-16">
        <img
          src={bunny}
          alt="Bottom Left Icon"
          className="h-32 w-32 object-contain"
        />
      </div>
      <div className="absolute bottom-16 right-16 flex items-center space-x-2">
        <span className="text-white text-lg text-right">activá el sonido para una <br/>mejor experiencia</span>
        <SpeakerWaveIcon className="h-8 w-auto text-white" />
      </div>
    </div>
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundColor: "#091915" }}
      />
    </div>
    </>
  );
}

export default Landing;
