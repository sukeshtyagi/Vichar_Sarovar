import Header from "./components/Header";
import style from "./style/App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Initiatives from "./components/Initiatives";
import About from "./components/About";
import Reach from "./components/Reach";
import Login from "./components/Login";

function App() {
  return (
    <div className={style.appContainer}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/about" element={<About />} />
          <Route path="/reach" element={<Reach />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
