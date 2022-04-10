import React, { useState, useCallback } from "react";
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './components/Toggle';
import { ThemeProvider } from 'styled-components';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Intro from './Intro.js';

function About(){

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const resume = [
    {
      src: "/Resume_.jpg",
      width: 5,
      height: 7,
      caption:"My Resume"
    }
  ]

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <ThemeProvider theme={themeMode}>
    <>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme}  style={{marginTop:"100px"}} />

      <div className="para">      <h1>Hi.</h1>
      <p>I'm a <Intro></Intro></p> </div>
      <div>
    <center> <p style={{textAlign:"center",margin:"auto"}}>
  I'm currenty a Software Development Engineer In OYO ROOMS,responsible for handling the Owner Wallets and reconciliations for a million rooms. In a hurry,will try to write more in future. 🤦 <br />
         <br />     
        </p>        </center> 
        </div>

      <br></br>
      <div  style={{width:"100px",height:"200px",margin:"auto"}}>
      <Gallery photos={resume} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={resume.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.caption
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </div>


      </>
      </ThemeProvider> 


    );



};

export default About;