import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./App.scss";

// import { Routes, Route } from "react-router-dom"

import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {

  return (
    <div className="App">
      <Header />
      <Home/>
      {/* <Routes>
        <Route path="home" element={ <Home/> } />
      </Routes> */}
    </div>
  );
}

export default App;
