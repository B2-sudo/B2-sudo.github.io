import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  .bodyi {
    display: inline;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  
  .par {
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  

  .btn {
    background-color: ${({ theme }) => theme.btnColor}; 
    margin-left:15px;
  }

  .btn2 {
    background-color: ${({ theme }) => theme.btnColor}; 
    margin-left:42px;
  }
  .btni {
    background-color: ${({ theme }) => theme.btnColor}; 
    margin-left:5px;
  }

  .btn3{
    background-color: ${({ theme }) => theme.btnColor}; 
    margin-left:80px;
  }

  .para{
    position: relative;
    display: flex;
    background: ${({ theme }) => theme.color};
    margin: 0 auto;
    font-size: 1rem;
    padding: 2rem;
    margin:auto;
  }

  .ima{
    position: relative;
    display: flex;
    justify-content: space-between;
    background: ${({ theme }) => theme.gradient};
    width: 15rem;
    height: 16.0rem;
    margin: 0 auto;
    border-radius: 350px;
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    overflow: hidden;
    cursor: pointer;
  
  
  }
  .imi{
    border: 2px solid ${({ theme }) => theme.toggleBorder};
  }

  footer {
    position: relative;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }

  small {
    display: block;
  }
  .Intro {
    display: flex;
    font-size: 30px;
    margin-bottom: 20px;
    font-family: 'Trebuchet MS';
  
    &__blinker {
      animation: blinker 0.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
      
      @keyframes blinker {
        to {
          opacity: 0;
        }
      }
    }
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;
