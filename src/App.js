import { Container } from '@mui/system';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
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
      <Container>
        <BrowserRouter>
          <Routes>
            {renderRoutes()}
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
