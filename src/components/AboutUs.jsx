import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery, your one-stop destination for
            beautiful houseplants. We offer a carefully selected collection
            of healthy and affordable plants to bring nature, freshness, and
            beauty into your home.
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

export default AboutUs;