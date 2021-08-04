import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

const CelebrationCard = ({ info }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <div className="celebration-card">
      <div className="controller-btn">
        {window.location.href === "http://localhost:3000/" ? (
          <Link to="/add" className="add-btn">
            Add Birthday
          </Link>
        ) : (
          <Link to="/">
            <i class="fas fa-chevron-left"></i>
          </Link>
        )}
        <Link to="/allbirthday"> All Birthday</Link>
      </div>
      <Swiper pagination={pagination} className="mySwiper">
        {info.length === 0 ? (
          <SwiperSlide>
            <h1
              style={{
                textAlign: "center",
                marginTop: "-20px",
                color: "white",
              }}
            >
              Nobody Birthday Today
            </h1>
          </SwiperSlide>
        ) : (
          info.map((item) => (
            <SwiperSlide>
              <div className="birthday-info">
                <img src={item.image} alt="no" />
                <h2 className="wish">
                  It's {item.name}'s <br /> birthday today
                </h2>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default CelebrationCard;
