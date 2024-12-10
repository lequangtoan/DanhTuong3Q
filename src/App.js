import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./App.scss";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Drawer from "./components/drawer/Drawer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Drawer/>
    </div>
  );
}

export default App;
