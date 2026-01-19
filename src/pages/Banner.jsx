import { useEffect, useState } from "react";
import "./Banner.css";
import banner1 from "../assets/banner1.png";
import bannerimage1 from "../assets/bannerimage1.jpg";
import bannerimg from "../assets/bannerimg.png";


const images = [
  banner1,
  bannerimage1,
  bannerimg,
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner ">
      <div
        className="banner-track "
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img src={img} alt={`slide-${i}`} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
