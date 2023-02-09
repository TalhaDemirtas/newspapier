import Header from "./components/Header";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
<BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/:cat_name" element={<Categories/>} />
        {/* <Route exact path="/bussiness" element={<Categories cat_name="bussiness" />} />
        <Route exact path="/health" element={<Categories cat_name="health" />} />
        <Route exact path="/science" element={<Categories cat_name="science" />} />
        <Route exact path="/entertainment" element={<Categories cat_name="entertainment" />} />
        <Route exact path="/sports" element={<Categories cat_name="sports" />} />
        <Route exact path="/tech" element={<Categories cat_name="tech" />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
