import React,{useState,useCallback,useEffect} from 'react';
import ReactiveButton from 'reactive-button';
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './components/Toggle';
import { ThemeProvider } from 'styled-components';
import ReactTextTransition, { presets } from "react-text-transition";
import {ReactComponent as Cake} from './icons/cake.svg';
import {ReactComponent as Dec} from './icons/dec.svg';
import {ReactComponent as Light} from './icons/light.svg';
import Timer from './Timer';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-168537988-1');
ReactGA.pageview('/bwish');

const Names=['minni','gadhi','aunty','madam']
const Sign=['start','wait'];
const Sign2=['didi yahan','🤣'] 
const Img = ["/s1.jpg","/s2.jpg","/s3.jpg"]

function BWish(){

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [Index, setIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [I, setI]=useState(0);
  const [J, setJ]=useState(0);
  const [ImgIndex,setImgIndex] = useState(0);
  const [favOpen, setFavOpen] = useState(false);

  useEffect(()=>{
    const toClose=setTimeout(()=>{
      setIndex((Index+1)%Names.length);
      setImgIndex((ImgIndex+1)%3);
    },3000);
    
  });


  return (
   
    <ThemeProvider theme={themeMode}>
  
    <>
      <GlobalStyles />
      <div className="bodyi">
        <Toggle theme={theme} toggleTheme={toggleTheme}   />
      
      <br></br>
      <br></br>
     <h1 align="center">happy birthday  {`${Names[Index]}`.split("").map((n, i) => (
              <ReactTextTransition
                key={i}
                text={n}
                delay={20}
                className="big"
                overflow
                inline
              />
            ))}</h1>

<br></br>
<br></br>
<div align="center">
<ReactiveButton
         color={'primary'}
         idleText={Sign[I]}
         type={'button'}
         className={'btni'}
         style={{ borderRadius: '15px' }}
         outline={false}
         shadow={false}
         rounded={false}
         size={'normal'}
         block={false}
         disabled={false}
         buttonRef={null}
         width={null}
         height={null}
         animation={true}
         onClick={() =>{ if(favOpen){setFavOpen(false);setJ(0)}setIsViewerOpen(!isViewerOpen);setI(((I+1)%2))}}
         
    />

   


      <ReactiveButton
         color={'primary'}
         idleText={Sign2[J]}
         type={'button'}
         className={'btn3'}
         style={{ borderRadius: '15px' }}
         outline={false}
         shadow={false}
         rounded={false}
         size={'normal'}
         block={false}
         disabled={false}
         buttonRef={null}
         width={null}
         height={null}
         animation={true}
         onClick={() =>{ setFavOpen(!favOpen);setJ(((J+1)%2));if(isViewerOpen){setIsViewerOpen(false);setI(0)}}}
    />
</div>

{isViewerOpen}{isViewerOpen && (<Timer></Timer>)}   {   isViewerOpen &&  <div  >
      <div align = "center"><Dec style={{width:"50px",height:"80px"}} />
      <Dec style={{width:"50px",height:"80px"}} />
      <Dec style={{width:"50px",height:"80px"}} />
      <Dec style={{width:"50px",height:"80px"}} />
      <Dec style={{width:"50px",height:"80px"}} />
      <Dec style={{width:"50px",height:"80px"}} />
      <Dec style={{width:"50px",height:"80px"}} />


</div>      

   <div> < Light style={{width:"50px",height:"80px"}}/> < Light style={{width:"50px",height:"80px"}}/><Cake style={{height:"150px"}} />< Light style={{width:"50px",height:"80px"}}/> < Light style={{width:"50px",height:"80px"}}/></div>  
 
      </div>}

{favOpen}   {favOpen && <div>
  <p align="center" className='par' >ok...so hadbadi hai thoda...happy 22,may your other 364 days be like this 1 day,Aur 2 photo tou smjh hi gyi hogi</p>
     <div align = "center">
     <img src={Img[ImgIndex]}  style={{width:"170px",height:"360px"}} className="imi" ></img>
      </div>
      </div>}
      </div>
      </>
    
      
      </ThemeProvider> 
     
    );



};

export default BWish;