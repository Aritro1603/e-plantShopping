import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

import "./App.css";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
