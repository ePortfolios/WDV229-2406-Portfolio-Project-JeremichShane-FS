import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import crest from "../../assets/img/MLS-Crest-FFF.svg";
import "./Footer.scss";

const setCopyright = title => {
  let year = new Date().getFullYear();
  return `\u00A9 ${year} ${title}`;
};

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__social-icons">
        <Link to="https://x.com/mls" target="_blank">
          <RiTwitterXFill className="footer__icon" />
        </Link>
        <Link to="https://www.facebook.com/MLS/" target="_blank">
          <RiFacebookCircleFill className="footer__icon" />
        </Link>
        <Link to="https://www.instagram.com/mls/" target="_blank">
          <RiInstagramFill className="footer__icon" />
        </Link>
        <Link to="https://www.youtube.com/mls" target="_blank">
          <RiYoutubeFill className="footer__icon" />
        </Link>
      </div>
      <div className="footer__row">
        <picture className="footer__picture">
          <Link to="https://www.mlssoccer.com/" target="_blank">
            <img src={crest} alt="MLS Crest" className="footer__img" />
          </Link>
        </picture>
        <p className="footer__content">
          {setCopyright("MLS.")} The Major League Soccer and MLS name and shield are registered
          trademarks of Major League Soccer, L.L.C. (“MLS”). The names and logos of MLS teams are
          registered and/or common law trademarks of MLS or are used with the permission of their
          owners. Any unauthorized use is forbidden.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
