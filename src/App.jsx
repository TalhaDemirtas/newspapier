import Header from "./components/Header";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FetchData from "./components/FetchData";

function App() {

  return (
    <>
<BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/general" element={<FetchData cat_name="general"/>} />
        <Route exact path="/business" element={<FetchData cat_name="business"/>} />
        <Route exact path="/health" element={<FetchData cat_name="health"/>} />
        <Route exact path="/science" element={<FetchData cat_name="science"/>} />
        <Route exact path="/entertainment" element={<FetchData cat_name="entertainment"/>} />
        <Route exact path="/sports" element={<FetchData cat_name="sports"/>} />
        <Route exact path="/technology" element={<FetchData cat_name="technology"/>} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
