// App.js

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./App.css";
import Product from "./Product";
import Cart from "./Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import shoes1 from "./assets/tennis.png";
import shoes2 from "./assets/shoes.png";
import shoes3 from "./assets/shoes3.jpeg";
import shoes4 from "./assets/shoes4.jpeg";

function App() {
  {
    /* Getting userName from Login Page */
  }

  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(window.localStorage.getItem("user")), [];
  });

  const [Trendingproducts] = useState([
    { id: 1, name: "Nike-bolt", price: 100, imageSrc: shoes1 },
    { id: 2, name: "Nike d", price: 20, imageSrc: shoes2 },
    { id: 3, name: "Nike 4", price: 30, imageSrc: shoes3 },
    { id: 4, name: "Nike hero", price: 10, imageSrc: shoes4 },
  ]);

  const [Secondproducts] = useState([
    {
      id: 5,
      name: "Nike Pro",
      price: 90,
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
    },
    {
      id: 6,
      name: "Puma Boost",
      price: 50,
      imageSrc:
        "https://cdn.pixabay.com/photo/2015/05/31/10/54/shoes-791044_1280.jpg",
    },
    {
      id: 7,
      name: "HH Classic",
      price: 70,
      imageSrc:
        "https://cdn.pixabay.com/photo/2023/06/17/22/51/shoes-8070908_960_720.jpg",
    },
    {
      id: 8,
      name: "Under Armour",
      price: 120,
      imageSrc:
        "https://cdn.pixabay.com/photo/2017/03/01/05/43/pink-shoes-2107618_1280.jpg",
    },
    {
      id: 9,
      name: "SR Best",
      price: 90,
      imageSrc:
        "https://cdn.pixabay.com/photo/2024/01/29/15/27/ai-generated-8540142_640.jpg",
    },
    {
      id: 10,
      name: "XCP Boost",
      price: 50,
      imageSrc:
        "https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_640.jpg",
    },
    {
      id: 11,
      name: "HHM Classic",
      price: 70,
      imageSrc:
        "https://cdn.pixabay.com/photo/2013/07/13/13/26/shoe-161027_640.png",
    },
    {
      id: 12,
      name: "ABY Armour",
      price: 120,
      imageSrc:
        "https://cdn.pixabay.com/photo/2017/09/20/11/31/sneakers-2768218_640.png",
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    alert(`${product.name} Added to cart Successfully`);
    const existingCartItemIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingCartItemIndex !== -1) {
      // Increase count if the item already exists in the cart
      const updatedCartItems = [...cart];
      updatedCartItems[existingCartItemIndex].count += 1;
      setCart(updatedCartItems);
    } else {
      // Add the product as a new item in the cart
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    console.log(itemId);
    const newCartItems = cart.filter((item) => item.id !== itemId);
    setCart(newCartItems);
  };

  const decrementFromCart = (itemId) => {
    const updatedCartItems = cart.map((item) => {
      if (item.id === itemId && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setCart(updatedCartItems);
  };
  const IncrementFromCart = (itemId) => {
    const updatedCartItems1 = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCart(updatedCartItems1);
  };

  return (
    <div className="body-content">
      <nav
        class="navbar bg-body-tertiary"
        style={{
          margin: "0",
          padding: "0.5rem",
          position: "sticky",
          top: "0",
          zIndex: "1000",
          width: "100%",
        }}
      >
        <div class="container">
          <a class="navbar-brand fw-bold " href="#" style={{fontFamily:'"Poppins",sans serif',fontWeight:"100"}}>
            MOJe-commerce
          </a>
          <p id="count5"></p>
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
            style={{
              maxWidth: "20rem",
              minWidth: "15rem",
              float: "right",
              padding: "0.3rem",
            }}
          />

          <button
            id="showcart"
            style={{ float: "right", textAlign: "center", width: "7rem" }}
            className="btn btn-success fw-bold position-relative"
            onClick={() => setShowCart((prevState) => !prevState)} // Toggle the showCart state
          >
            {showCart ? "Hide Cart" : "Show Cart"}{" "}
            {/* Display different text based on showCart state */}
            <span
              class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
              style={{ width: "2rem" }}
            >
              {cart.length}
            </span>
          </button>

          {/* Getting user Name here */}

          <span className="user">
            {userName !== null ? (
              <React.Fragment>
                Welcome, {userName}
                <button
                  id="logout"
                  className="btn btn-danger"
                  style={{ margin: "8px" }}
                  onClick={() => {
                    window.localStorage.removeItem("user");
                    setUserName(null); // Set userName state to null
                  }}
                >
                  LogOut
                </button>
              </React.Fragment>
            ) : (
              <Link to="/Login">
                <button
                  style={{ float: "right", textAlign: "right", margin: "4px" }}
                  className="btn btn-primary"
                >
                  Login/SignUp
                </button>
              </Link>
            )}
          </span>
        </div>
      </nav>

      <div
        className="container"
        style={{
          width: "100%",
          maxHeight: " 20rem",
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        <div className="row">
          <div className="col-md-4">
            {/* Show cart section if showCart is true */}

            {showCart && (
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                decrementFromCart={decrementFromCart}
                IncrementFromCart={IncrementFromCart}
              />
            )}
          </div>
        </div>
      </div>
      <div className="Top-content" style={{ width: "100%" }}>
        <h1 className="moto"> We, Are here to deliver the best!</h1>

        <img src={shoes1}></img>
      </div>

      <div className="App">
        <span className="position-absolute top-O start-1OO translate-middle badge rounded-pill bg-danger">
          Trending!{" "}
        </span>
        <br />
        <h1 style={{ margin: "2rem" }}>Our Trending Shoes!</h1>
        <div className="products">
          {Trendingproducts.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

        <div className="App">
          <h1 style={{ margin: "2rem" }}>Our Brand Collection!</h1>
          <div className="products">
            {Secondproducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                flexDirection: "row",
              }}
            >

              <div
                style={{
                  padding: "20px",
                  width: "25rem",
                  height: "35rem",
                  borderRadius: "3rem",

                  boxShadow: "0px 4px 10px #2a3457",
                  margin: "0.3rem",
                  backgroundImage:"linear-gradient(360deg,#74ebd5,#ACB6E5)",
                  color:"white",
                  fontFamily:"Roboto"
                }}
              >
                <h4>Why Choose Us?</h4>
                <p>
                  1. <b>Unparalleled Selection</b>: At MOJe-commerce, we offer a
                  diverse range of premium footwear, carefully curated to cater
                  to every style and preference.
                  <br />
                  <br />
                  2.<b>Quality Assurance</b>: We prioritize quality above all
                  else. Each pair of shoes in our collection is meticulously
                  selected for its superior craftsmanship, durability, and
                  comfort.
                  <br />
                  <br />
                  3.<b>Exceptional Service</b>: Our dedicated team is committed
                  to providing you with an exceptional shopping experience from
                  start to finish.
                </p>
              </div>

              <div
                style={{
                  alignSelf: "center",
                  padding: "8px",
                  width: "25rem",
                  float: "right",
                  margin: "0.3rem",
                  boxShadow: "0px 4px 10px #2a3457",
                  borderRadius: "3rem",
                  backgroundImage:"linear-gradient(360deg,#74ebd5,#ACB6E5)",
                  color:"white"
                }}
              >
                <h4>Our Services</h4>
                <p>
                  At MOJe-commerce, we are committed to providing you with an
                  exceptional shopping experience tailored to your needs and
                  preferences. Our range of services is designed to make your
                  journey with us seamless, convenient, and enjoyable.
                  <br />
                  <br></br>
                  1. <b>Premium Product Selection</b>: We curate a diverse
                  collection of premium footwear, ensuring that you have access
                  to the latest trends, timeless classics, and everything in
                  between
                  <br />
                  <br />
                  2.<b>Quality Assurance</b>: We prioritize quality above all
                  else. Each pair of shoes in our collection is meticulously
                  selected for its superior craftsmanship, durability, and
                  comfort.
                  <br />
                  <br />
                  3.<b>Fast and Reliable Shipping</b>: We understand the
                  excitement of receiving your new shoes, which is why we offer
                  fast and reliable shipping options.
                </p>
              </div>
              <div
                style={{ fontFamily:
                  "Roboto Slab, sans-serif",width: "100%", overflow: "hidden", padding: "20px",boxShadow:"0px 2px 4px black ", color:"red"}}
              >
                <h4>About us</h4>
                <p>
                  MOJe-commerce is your premier destination for premium footwear
                  that combines style, comfort, and quality craftsmanship. With
                  a curated collection of shoes from renowned brands and
                  emerging designers, we offer options for every taste and
                  occasion. Our commitment to superior quality, seamless
                  shopping experience, and dedicated customer support ensures
                  that you can find the perfect pair of shoes to express your
                  individuality and elevate your style. Join us at MOJe-commerce
                  and step into a world of fashionable footwear tailored to your
                  lifestyle.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                height: "10rem",
                marginTop: "1rem",
                backgroundColor: "#eeee",
              }}
            >
              <img
                style={{
                  margin: "0px",
                  width: "100px",
                  height: "fit-content",
                }}
                src="https://cdn.pixabay.com/photo/2023/03/06/13/58/brand-7833518_960_720.png"
              ></img>

              <img
                style={{ margin: "0px", width: "100px", height: "4.1rem" }}
                src="https://cdn.pixabay.com/photo/2023/03/06/13/58/logo-7833521_640.png"
              ></img>

              <img
                style={{
                  margin: "0px",
                  width: "100px",
                  height: "fit-content",
                }}
                src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png"
              ></img>

              <img
                style={{
                  margin: "0px",
                  width: "100px",
                  height: "fit-content",
                }}
                src="https://cdn.pixabay.com/photo/2014/04/03/10/07/converse-309846_1280.png"
              ></img>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                height: "10rem",
                marginTop: "2rem",
              }}
            >
              <h3>
                $40B+
                <br />
                Transactions
              </h3>

              <h3>
                100000+
                <br />
                Active Users
              </h3>

              <h3>
                100k+
                <br />
                Orders
              </h3>

              <h3>
                No.1
                <br />
                Product
              </h3>
            </div>

            <div
              class="container1"
              style={{
                marginTop: "1rem",
                backgroundColor: "#eee",
                width: "100%",
                margin: "0px",
                padding: "2rem",
              }}
            >
              <footer class="py-5">
                <div class="row">
                  <div class="col-6 col-md-2 mb-3">
                    <h5>About</h5>
                    <ul class="nav flex-column">
                      <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-body-secondary">
                          Company Info
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-body-secondary">
                          News
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-body-secondary">
                          Pricing
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-body-secondary">
                          FAQs
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-body-secondary">
                          Investor
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-2 mb-3">
                    <h5>Help & Contact</h5>
                    <ul class="nav flex-column">
                      <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-body-secondary">
                          SI Center
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-body-secondary">
                          Contact Form
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-body-secondary">
                          Chat
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-body-secondary">
                          Email
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-2 mb-3">
                    <h5>Community</h5>
                    <ul class="nav flex-column">
                      <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-body-secondary">
                          Announcements
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-body-secondary">
                          Discussion boards
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="nav-link p-0 text-body-secondary">
                          Giving Groups
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-5 offset-md-1 mb-3">
                    <form>
                      <h5>Subscribe to our newsletter</h5>
                      <p>Monthly digest of what's new and exciting from us.</p>
                      <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label for="newsletter1" class="visually-hidden">
                          Email address
                        </label>
                        <input
                          id="newsletter1"
                          type="text"
                          class="form-control"
                          placeholder="Email address"
                        />
                        <button class="btn btn-primary" type="button">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                  <p>© 2024 Company, Inc. All rights reserved.</p>
                  <ul class="list-unstyled d-flex">
                    <li class="ms-3">
                      <a class="link-body-emphasis" href="#">
                        FB
                      </a>
                    </li>
                    <li class="ms-3">
                      <a class="link-body-emphasis" href="#">
                        IG
                      </a>
                    </li>
                    <li class="ms-3">
                      <a class="link-body-emphasis" href="#">
                        Li
                      </a>
                    </li>
                  </ul>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
