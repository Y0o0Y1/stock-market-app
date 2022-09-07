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


const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
    palette: {
        primary: {
            main: '#0996C7',
        },
        secondary: {
            main: '#edf2ff',
        },
    },
    typography: {
        fontFamily: "Urbanist,sans-serif",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "capitalize"
                }
            }
        }
    }
})

const overmind = createOvermind(config, { logProxies: false })

root.render(
    <Provider value={overmind}>
        <HelmetProvider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </HelmetProvider>
    </Provider>

);

