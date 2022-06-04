import React from "react";
import Cart from "./cart/Cart";
const ProductCart = () => {
    // const [cartProducts, setCartProducts] = useState([]);
    // const fetchProductCart = async () => {
    //     const response = await axios
    //       .get('https://fakestoreapi.com/products/3')
    //       .catch((err) => {
    //         console.log("error", err);
    //       });
    //       setCartProducts(response.data);
    //   };
    //   useEffect(() => {
    //     fetchProductCart();
    // });
  return (
    <Cart/>
  )
}

export default ProductCart