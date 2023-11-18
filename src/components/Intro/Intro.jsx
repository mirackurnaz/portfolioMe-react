import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boyyy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

import Link from '@mui/material/Link';


const Intro = () => {
 
  const transition = { duration: 2, type: "spring" };


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      
      <div className="i-left">
        <div className="i-name">
          
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Miraç KURNAZ</span>
          <span style={{maxWidth:"640px",marginTop:"50px"}}>
          I graduated from the Department of Computer Engineering at Fırat University.
          I am developing my career in the field of Front End on the web.
          I continue to work and develop myself by adopting the philosophy of learning myself throughout my social and business life. I am a team player who is open to innovations and loves to learn and develop.
          </span>
        </div>
        
        
        <div className="i-icons">
          <Link href="https://github.com/mirackurnaz">
          <img src={Github} alt="" />
          </Link>
          <Link href="https://www.linkedin.com/in/mira%C3%A7-kurnaz-891801278/">
          <img src={LinkedIn} alt="" />
          </Link>
          <Link href="https://www.instagram.com/mirackurnaz/">
          <img src={Instagram} alt="" />
          </Link>
        </div>
      </div>
     
      <div className="i-right">
        <Link>
        <img src={Vector1} alt="" />
        </Link>
        <img src={Vector2} alt="" />
        <img className="imgBoy"  src={boy} alt="" />
        
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Front End" text2="Developer" />
        </motion.div>

       
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          
          <FloatinDiv img={thumbup} text1="React" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
