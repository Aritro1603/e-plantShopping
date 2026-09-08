import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

import "./App.css";

function LandingPage() {
  return (
    <div className="about-us-container landing-page background-image">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <h2>Welcome to Paradise Nursery</h2>

          <p>
            Paradise Nursery is your one-stop destination for beautiful,
            healthy, and affordable houseplants. We carefully select plants
            that can bring nature, freshness, and beauty into your home.
          </p>

          <p>
            Whether you are a beginner or an experienced plant lover, our
            collection has something perfect for every space.
          </p>

          <Link to="/plants" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
