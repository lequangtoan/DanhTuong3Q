import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./App.scss";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Drawer from "./components/drawer/Drawer";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Drawer/>
      <Home/>
    </div>
  );
}

export default App;
