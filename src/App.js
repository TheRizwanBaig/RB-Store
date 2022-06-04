import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProductCategorie from "./components/ProductCategorie";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProductCart from "./components/ProductCart";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="productCart" element={<ProductCart />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route
          path="products/category/:category"
          element={<ProductCategorie />}
        />
        <Route>404 Not Found!</Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
