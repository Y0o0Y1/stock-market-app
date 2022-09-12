import ReactDOM from 'react-dom/client';

//React Helmet
import { HelmetProvider } from 'react-helmet-async';

//Overmind Imports
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { config } from './overmind';

//Styles
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';

//Main App Component
import App from './App';
import { ThemeObject } from './styles/GlobalTheme';


const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme(ThemeObject)

export const overmind = createOvermind(config, {
    logProxies: false, devtools: "http://localhost:3000"
})

root.render(
    <Provider value={overmind}>
        <HelmetProvider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </HelmetProvider>
    </Provider>

);

