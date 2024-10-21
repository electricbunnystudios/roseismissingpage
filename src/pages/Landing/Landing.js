import React from 'react';
import styles from './Landing.css';
import background from '../../resources/RoseBackground.jpg';
import logo from '../../resources/rose-logo.png';

function Landing() {
  const menuStyle = {display: "flex", flexDirection: "column", backgroundColor: "transparent"};
  const itemStyle = {padding: "10px"};

  return (
    <>
    {/**
    <section>
      <div style={{height: "100%", width: "100%", backgroundImage: `url(${background})`}}>
        <img src={logo} alt={""} />
          <a href={"#about"}>
              <div className={"banner-scroll"}>
                  <span/>
                  <span/>
                  <span/>
              </div>
          </a>
      </div>
    </section>
     */}

    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-5 flex h-full items-center justify-center">
        <div className="rounded-full relative -mt-64">
          <img
            src={logo}
            alt="Company Logo"
            className="h-64 w-64 object-contain"
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default Landing;
