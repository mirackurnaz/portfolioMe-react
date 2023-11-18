import React, { useContext } from "react";
import "./Works.css";
import Reactt from "../../img/react.png";
import MaterialUI from "../../img/materialUI.png";
import Redux from "../../img/redux.png";
import JavaScript from "../../img/javaScript.png";
import TypeScript from "../../img/typeScript.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  
  return (
    <div className="works" id="works">
     
      <div className="w-left">
        <div className="awesome">
     
          <span style={{ color: darkMode ? "white" : "" }}>
          Front End Developer
          </span>
          <span>SKILLS</span>
          <spane>
          <ul>
              <li>React JS </li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JQuery</li>
              <li>HTML</li>
              <li>Material UI</li>
              <li>React Bootstrap</li>
              <li>Redux</li>
              <li>Chakra UI</li>
            </ul>
          </spane>
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Reactt} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={MaterialUI} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={JavaScript} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Redux} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={TypeScript} alt="" />
          </div>
          
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
