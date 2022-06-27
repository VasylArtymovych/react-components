import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
// import { theme } from './components/Theme';


const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
    background: {
      primary: "white",
      secondary: "#DFE6E3",
    },
    media: {
      phone: "(max-width: 425px)",
      tablet: "(max-width: 768px) and (min-width: 425px)",
      desktop: "(min-width: 769px)",
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global/>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>
);




