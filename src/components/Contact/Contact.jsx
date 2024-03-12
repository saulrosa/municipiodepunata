import React, { useState } from "react";
import data from "../../utils/servicios.json";
import { sliderSettings } from "../../utils/common";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Nuestros </span>
          <span className="primaryText">Servicios municipales</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {data.map((card, i) => (
            <SwiperSlide key={i} onClick={() => handleCardClick(card)}>
              <div className="flexColStart r-card">
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {modalOpen && (
          <Modal onClose={() => setModalOpen(false)} selectedService={selectedService} />
        )}
      </div>
    </div>
  );
};

export default Contact;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};

const Modal = ({ onClose, selectedService }) => {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>
          X
        </button>
        <h2>{selectedService.name}</h2>
        <p>{selectedService.detail}</p>
      </div>
    </div>
  );
};
