import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Mayank.com.</div>
      <div>
        
        <Link to={"https://www.youtube.com/channel/UCcCoLeI6TX5OOq0zMLs9aNA"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/mayank-agarwal-a49908244/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/mayankagarwal3126/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
