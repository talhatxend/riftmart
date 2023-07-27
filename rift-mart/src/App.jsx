import { useState } from "react";
import "./App.css";
import Cart from "./pages/Cart";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartContext from "./contextAPIs";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleInc = (product) => {
    const prod = cartItems.find((item) => item._id === product._id);
    if (!prod) {
      return setCartItems((prev) => [...prev, { ...product, qty: 1 }]);
    }
    const _items = cartItems.map((item) => ({
      ...item,
      qty: product._id === item._id ? item.qty + 1 : item.qty,
    }));

    setCartItems(_items);
  };
  const handleDec = (product) => {
    if (product.qty > 1) {
      const _items = cartItems.map((item) => ({
        ...item,
        qty: product._id === item._id ? item.qty - 1 : item.qty,
      }));

      return setCartItems(_items);
    }
    const idx = cartItems.findIndex((item) => item._id === product._id);
    const _cartItm = [...cartItems];
    _cartItm.splice(idx, 1);
    setCartItems(_cartItm);
  };

  return (
    <CartContext.Provider value={{ cartItems, handleInc, handleDec }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
