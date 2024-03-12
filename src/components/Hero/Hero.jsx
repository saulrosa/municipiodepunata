import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              GOBIERNO AUTONOMO <br />
              MUNICIPAL DE
              <br /> PUNATA
              <br />
              <br />
              <br />
              
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>El Municipio de Punata fue fundado el 18 de mayo de 1838, mediante Decreto Supremo</span>
            <span>promulgado en el gobierno del Mariscal Andrés de Santa Cruz</span>
            <br />
            <br />
          </div>

          
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./plaza.jpg" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
