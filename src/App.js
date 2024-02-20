import Header from "./components/Header";
import style from "./style/App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Initiatives from "./components/Initiatives";
import About from "./components/About";
import Reach from "./components/Reach";
import ConfirmLogin from "./components/ConfirmLogin";
import Login from "./components/Login";
import Logout from "./components/Logout";
import SignUp from "./components/SignUp";
import Products from "./components/Products";
import UpdateProduct from "./components/UpdateProduct";
import AddProduct from "./components/AddProduct";

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
          <Route path="/ConfirmLogin" element={<ConfirmLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
