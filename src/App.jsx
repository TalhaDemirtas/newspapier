import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './components/Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:cat_name" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
