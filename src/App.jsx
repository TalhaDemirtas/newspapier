import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './pages/Category';
import Aboutme from './pages/Aboutme';
import Navi from './components/Navi';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navi/>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:cat_name" element={<Category />} />
        <Route exact path="/aboutme" element={<Aboutme />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
