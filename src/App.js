import React,{useState,useCallback,useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import ReactiveButton from 'reactive-button';
import { useHistory } from 'react-router-dom';
import {ReactComponent as Fb} from './icons/fb.svg';
import {ReactComponent as Insta} from './icons/insta.svg';
import {ReactComponent as Git} from './icons/git.svg';
import {ReactComponent as Link} from './icons/link.svg';
import {ReactComponent as Tweet} from './icons/tweet.svg';
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './components/Toggle';
import Timer from './Timer';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-168537988-1');
ReactGA.pageview('/homepage');

function App() {
  
  const history = useHistory();
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  useEffect(()=>{
    const toClose=setTimeout(()=>{
      if(isViewerOpen)
      setIsViewerOpen(false);
    },7000);
    
  });

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <br></br>
        <br></br>
        <div>
        <a  onClick={() => setIsViewerOpen(true)}><img src="/b_img.jpg" className="ima" alt="Person" ></img></a>
{isViewerOpen}{isViewerOpen && (<Timer></Timer>)}
</div>
       


        <br></br>
        <br></br>

<div>
<ReactiveButton
         color={'primary'}
         idleText={'About Me'}
         type={'button'}
         className={'btn'}
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
         onClick={()=>{history.push('/about')}}
    />

   


      <ReactiveButton
         color={'primary'}
         idleText={'Album'}
         type={'button'}
         className={'btn2'}
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
         onClick={()=>{history.push('/album')}}
    />

</div>
      
        <div>
                  <footer style={{animationDelay:"2s"}}>  
                              <div >
                              <a href="https://www.facebook.com/prakashcena12/"><Fb style={{width:"30px",height:"30px",marginTop:"40px",marginLeft:"22px"}} /></a>
                              <a href="https://www.instagram.com/b.prakash_/"><Insta style={{width:"30px",height:"30px",marginLeft:"20px"}}/></a>
                              <a href="https://github.com/B2-sudo"><Git style={{width:"30px",height:"30px",marginLeft:"20px"}}/></a>
                              <Tweet style={{width:"30px",height:"30px",marginLeft:"20px"}} onClick={()=>{history.push('/bwish')}}/>
                              <a href="https://linkedin.com/prakashcena12"><Link style={{width:"30px",height:"30px",marginLeft:"20px"}}/></a>
                                

                  </div>
            <p style={{marginLeft:"33px"}}>   Developed By b_Prakash,2021</p>

        </footer>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
