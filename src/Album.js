import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './components/Toggle';
import { ThemeProvider } from 'styled-components';



function Album (){

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const photos = [
    {
      src: "/Upl (4).jpeg",
      width: 5,
      height: 7,
      caption:"Monochromatic//Edited by Minion,Shot by Me"
    },
    {
      src: "/Upl (1).jpeg",
      width: 3,
      height: 1.5,
      caption:"A long way to go//Shot By Me,Edited By Minion"
    },
    {
      src: "/Upl (3).jpeg",
      width: 2,
      height: 4,
      caption:"Dramatic Effect//Edited By Minion,Shot By Me"
    },
    {
      src: "/Upl (5).jpeg",
      width: 3,
      height: 7,
      caption:"Sunsets are mesmerizing//Shot by Me,Edited By Minion"
    },
    {
      src: "/Upl (6).jpeg",
      width: 6,
      height: 3,
      caption:"One Step At A Time//Shot By Me,Edited By Minion"
    },
    {
      src: "/Upl (7).jpeg",
      width: 2.55,
      height: 6,
      caption:"I love crocs,that's it //Shot by Me,Edited by Minion"
    },
    {
      src: "/Upl (8).jpg",
      width: 6,
      height: 4,
      caption:"Good Artists Copy,Great Artists Steal//Shot And Edited By Minion"
    },

  ];

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

      <br></br>
      <br></br>
      <br></br>
      
      <br></br>
      <br></br>
      <br></br>
      
      <br></br>
      <br></br>
      <br></br>

      
      <br></br>
      <br></br>
      <br></br>
      
      <br></br>
      <br></br>
      <br></br>
      
      <br></br>
      <br></br>
      <br></br>

      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <br></br>
      <br></br>
      <br></br>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.caption
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
    </ThemeProvider>
  );


};



 

export default Album;