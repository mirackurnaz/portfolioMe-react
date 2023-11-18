import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Link from '@mui/material/Link';


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>kurnazmiracc@gmail.com</span>
        <div className="f-icons">
        
          <Link href="https://www.linkedin.com/in/mira%C3%A7-kurnaz-891801278/">
          <Linkedin color="white" size={"3rem"} />
          </Link>
          <Link href="https://github.com/mirackurnaz">
          <Gitub color="white" size={"3rem"} />
          </Link>
          <Link href="https://www.instagram.com/mirackurnaz/">
          <Insta color="white" size={"3rem"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
