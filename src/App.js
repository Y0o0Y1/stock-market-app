import { Stack } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import UserFeedback from './components/UserFeedback';
import { useAppState } from './overmind';
import renderRoutes from './routes/utils';
import "./styles/styles.css";




function App() {
  const { isLoggedIn } = useAppState()
  return (
    <div className="App">
      <Helmet>
        <title>NASDAQ - Log in or sign up</title>
      </Helmet>
      <Stack spacing={6} sx={{ margin: "0px 30px" }} align={"center"}>
        {isLoggedIn &&
          <Header />
        }
        <BrowserRouter>
          <Routes>
            {renderRoutes()}
          </Routes>
        </BrowserRouter>
      </Stack>
      <UserFeedback />
    </div>
  );
}

export default App;
