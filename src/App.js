import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Loader } from "@react-three/drei";
import { Suspense } from "react";
import Plant from "./assets/img/plant.png";
import { useState, useEffect } from "react";
import {
  FurnitureOne,
  FurnitureTwo,
  FurnitureThree,
  FurnitureFour,
  Navbar,
  SliderComponent
} from "./components";
import Furniture1 from "./assets/img/furniture1.png";
import Furniture2 from "./assets/img/furniture2.png";
import Furniture3 from "./assets/img/furniture3.png";
import Furniture4 from "./assets/img/furniture4.png";

function App() {
  const [active, setActive] = useState(1)
  const [navbar, setNavbar] = useState(false)
  const productData = [
    {
      id: 1,
      component: <FurnitureOne />,
      image: Furniture1,
      name: "Bruna Cush",
      price: "Rp. 1.456.000",
    },
    {
      id: 2,
      component: <FurnitureTwo />,
      image: Furniture2,
      name: "Drop Type",
      price: "Rp. 2.655.000",
    },
    {
      id: 3,
      component: <FurnitureThree />,
      image: Furniture3,
      name: "Blackboard 3",
      price: "Rp. 1.600.000",
    },
    {
      id: 4,
      component: <FurnitureFour />,
      image: Furniture4,
      name: "Spring Forest",
      price: "Rp. 2.150.000",
    },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <div className="App">
      <Navbar navbar={navbar}  />
      <main>
        <div className="hero-circle">
          <img src={Plant} alt="" />
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
            <Loader dataInterpolation={() => "Loading..."} />
          </section>
        </div>
        <SliderComponent setActive={setActive} productData={productData} />
      </main>
    </div>
  );
}

export default App;
