import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us-container landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <h2>About Our Company</h2>

          <p>
            Paradise Nursery is a houseplant company dedicated to providing
            healthy, beautiful, and affordable indoor plants for every home.
          </p>

          <p>
            Our mission is to make it easy for everyone to bring nature,
            freshness, and beauty into their living spaces. We offer a
            carefully selected collection of houseplants suitable for both
            beginners and experienced plant lovers.
          </p>

          <p>
            Our services include providing quality houseplants, helping
            customers choose plants for their spaces, and offering a simple
            and convenient online shopping experience.
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
