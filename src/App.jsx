import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
<BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/general" element={<Categories cat_name="general" />} />
        <Route path="/bussiness" element={<Categories cat_name="bussiness" />} />
        <Route path="/health" element={<Categories cat_name="health" />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
