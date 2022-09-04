import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { pages } from './routes/index';

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
      <BrowserRouter>
        <Routes>
          {renderRoutes()}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
