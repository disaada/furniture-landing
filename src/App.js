/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/img/logo.svg";
import { FurnitureOne, FurnitureTwo, FurnitureThree, FurnitureFour } from "./components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Furniture1 from "./assets/img/furniture1.png";
import Furniture2 from "./assets/img/furniture2.png";
import Furniture3 from "./assets/img/furniture3.png";
import Furniture4 from "./assets/img/furniture4.png";
import Plant from "./assets/img/plant.png";
import { useState } from "react";

const PrevArrow = () => null;

const NextArrow = ({ onClick }) => (
  <button
    style={{
      backgroundColor: "#000",
      color: "#fff",
      borderRadius: "50%",
      padding: 15,
      display: "inline",
      position: "absolute",
      right: "-50px",
      top: "13rem",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faArrowRight} />
  </button>
);

function App() {
  const [active, setActive] = useState(1)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slider-slick",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const productData = [
    { id: 1, component: <FurnitureOne /> , image: Furniture1, name: "Bruna Cush", price: "Rp. 1.456.000" },
    { id: 2, component: <FurnitureTwo /> , image: Furniture2, name: "Drop Type", price: "Rp. 2.655.000" },
    { id: 3, component: <FurnitureThree /> , image: Furniture3, name: "Blackboard 3", price: "Rp. 1.600.000" },
    { id: 4, component: <FurnitureFour /> , image: Furniture4, name: "Spring Forest", price: "Rp. 2.150.000" },
  ];

  return (
    <div className="App">
      <header className="flex">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav flex">
          <div className="nav-link">
            <a href="#">Home</a>
            <a href="#">Furniture</a>
            <a href="#">Product</a>
            <a href="#">Store</a>
          </div>
          <div className="nav-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </header>
      <main>
        <div className="hero-circle">
          {/* <img src={Plant} alt="" /> */}
        </div>
        <div className="hero">
          <section className="hero-section">
            <h1>Exotic minimal furniture.</h1>
            <p>
              Choose from a wide range of well-crafted premium quality wooden
              furniture online.
            </p>
            <button type="" style={{ marginTop: "clamp(1rem, 10vh, 5rem)" }}>
              EXPLORE
            </button>
          </section>
          <section className="hero-image">
            <Canvas resize={10}>
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} enablePan={false} />
                {productData.find(v => v.id === active).component}
                <Environment preset="sunset" />
                <ContactShadows
                  scale={10}
                  position={[0, -1.5, 0]}
                  blur={2}
                  far={2}
                />
              </Suspense>
            </Canvas>
          </section>
        </div>
        <div className="slider flex">
          <section className="slider-title">
            <h4>Featured</h4>
          </section>
          <section className="slider-content">
            <Slider {...settings}>
              {productData.map((data) => (
                <div key={data.id+data.name}>
                  <div className="slider-base" onClick={() => setActive(data.id)}>
                    <img src={data.image} alt="" />
                    <p>{data.name}</p>
                    <p>
                      <b>{data.price}</b>
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
