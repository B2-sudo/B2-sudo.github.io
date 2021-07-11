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
        I'm currently in final year of BE in Information Technology from Birla Institute Of Technology,Mesra separating ACADEMICS from LEARNING. <br />
        I'm currenty a Software Development Engineer In OYO ROOMS and I WILL NOT FIX YOUR COMPUTER.<br />
        And Yes I'm That GUY who finds The Big Bang Theory Better than F.R.I.E.N.D.S .<br /> And I can also  cook but with a lot of help.         
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