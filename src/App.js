import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserFeedback from './components/UserFeedback';
import { pages } from './routes/index';
import "./styles/styles.css";
function App() {

  const renderRoutes = () => {
    return pages.map((page) => {
      return <Route
        key={page.id}
        path={page.path}
        element={page.element}
        name={page.name}
      />
    })
  }

  return (
    <div className="App">
      <Helmet>
        <title>NASDAQ - Log in or sign up</title>
      </Helmet>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        margin: "0px 16px 0px 16px",
        height: "100%"
      }}>
        <BrowserRouter>
          <Routes>
            {renderRoutes()}
          </Routes>
        </BrowserRouter>
      </Box>
      <UserFeedback />
    </div>
  );
}

export default App;
