import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProductCategorie from "./components/ProductCategorie";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route
          path="products/category/:category"
          element={<ProductCategorie />}
        />
        <Route>404 Not Found!</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
