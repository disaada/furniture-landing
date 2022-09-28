import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

const SliderComponent = ({ setActive, productData }) => {
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

  return (
    <div className="slider flex">
      <section className="slider-title">
        <h4>Featured</h4>
      </section>
      <section className="slider-content">
        <Slider {...settings}>
          {productData.map((data) => (
            <div key={data.id + data.name}>
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
  );
};

export default SliderComponent;
