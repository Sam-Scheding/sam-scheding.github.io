import React from "react";
import "./style.css";
import CountdownTimer from "../../components/CountdownTimer";
import {
  home1,
  home2,
  home3,
  circle,
  lightpainting,
  ripples,
  spirals,
} from "../../assets";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const pictures = [
  {
    src: circle,
    url: "/tickets",
    label: "TICKETS",
  },
  {
    src: spirals,
    url: "/program",
    label: "PROGRAM",
  },
  {
    src: ripples,
    url: "/faq",
    label: "FAQ",
  },
  {
    src: lightpainting,
    url: "/story",
    label: "OUR STORY",
  },
];

const Home = () => {
  useEffect(() => {
    // Load queryString into localStorage on page load so it can be
    // used to populate the form later, even after route changes
    let userInfo = JSON.stringify({});
    const userURLParam = new URLSearchParams(window.location.search).get("u");

    if (userURLParam) {
      const base64UserInfo = decodeURIComponent(userURLParam);
      userInfo = window.atob(base64UserInfo);
    }

    window.localStorage.setItem("userInfo", userInfo);
  }, []);

  return (
    <div className="root">
      <main>
        <div className="imageWrapper">
          <img src={home1} />
          <img src={home2} />
          <img src={home3} />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <img src={home1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={home2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={home3} />
          </SwiperSlide>
        </Swiper>
        <div className="linkWrapper">
          {pictures.map(({ src, url, label }) => (
            <Link className="link" key={url} to={url}>
              <div
                style={{
                  backgroundImage: `url(${src})`,
                }}
                className="linkImage"
              >
                <h3 className="linkLabel">{label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <CountdownTimer />
    </div>
  );
};

export default Home;
