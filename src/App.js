import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import UserFeedback from './components/UserFeedback';
import { useActions } from './overmind/index';
import renderRoutes from './routes/utils';
import "./styles/styles.css";




function App() {
  const { onInitializeOvermind } = useActions()
  useEffect(() => {
    onInitializeOvermind()
  }, [])
  return (
    <div className="App">
      <Helmet>
        <title>NASDAQ - Log in or sign up</title>
      </Helmet>
      <Stack spacing={6} sx={{ margin: "0px 30px" }} >
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
