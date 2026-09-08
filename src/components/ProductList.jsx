import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 299,
    category: "Air Purifying Plants",
    image: `${import.meta.env.BASE_URL}images/snake-plant.jpg`,
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 349,
    category: "Air Purifying Plants",
    image: `${import.meta.env.BASE_URL}images/peace-lily.jpg`,
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 249,
    category: "Air Purifying Plants",
    image: `${import.meta.env.BASE_URL}images/spider-plant.jpg`,
  },
  {
    id: 4,
    name: "Monstera",
    price: 599,
    category: "Tropical Plants",
    image: `${import.meta.env.BASE_URL}images/monstera.jpg`,
  },
  {
    id: 5,
    name: "Pothos",
    price: 399,
    category: "Tropical Plants",
    image: `${import.meta.env.BASE_URL}images/pothos.jpg`,
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 499,
    category: "Tropical Plants",
    image: `${import.meta.env.BASE_URL}images/rubber-plant.jpg`,
  },
  {
    id: 7,
    name: "Aloe Vera",
    price: 299,
    category: "Succulent Plants",
    image: `${import.meta.env.BASE_URL}images/aloe-vera.jpg`,
  },
  {
    id: 8,
    name: "Jade Plant",
    price: 279,
    category: "Succulent Plants",
    image: `${import.meta.env.BASE_URL}images/jade-plant.jpg`,
  },
  {
    id: 9,
    name: "ZZ Plant",
    price: 449,
    category: "Succulent Plants",
    image: `${import.meta.env.BASE_URL}images/zz-plant.jpg`,
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const categories = [
    "Air Purifying Plants",
    "Tropical Plants",
    "Succulent Plants",
  ];

  return (
    <>
      <Navbar />

      <main className="products-page">
        <h1>Our Houseplants</h1>

        <p className="products-intro">
          Explore our beautiful collection of houseplants and find the
          perfect plant for your home.
        </p>

        {categories.map((category) => (
          <section className="category-section" key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <div className="product-info">
                      <h3>{plant.name}</h3>

                      <p className="price">₹{plant.price}</p>

                      <button
                        className="add-btn"
                        disabled={isInCart(plant.id)}
                        onClick={() => dispatch(addItem(plant))}
                      >
                        {isInCart(plant.id)
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default ProductList;
