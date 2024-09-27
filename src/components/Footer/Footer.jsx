import React from "react";
import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>
          <a href="http://" target="_blank">
            Audio Description
          </a>
        </li>
        <li>
          <a href="http://" target="_blank">
            Help Center
          </a>
        </li>
        <li>
          <a href="http://" target="_blank">
            Gift Cards
          </a>
        </li>
        <li>
          <a href="http://" target="_blank">
            Media Center
          </a>
        </li>
        <li>
          <a href="http://" target="_blank">
            Investor Relations
          </a>
        </li>
        <li>
          <a href="http://" target="_blank">
            Jobs
          </a>
        </li>
        <li>
          <a href="http://" target="_blank">
            Term of Use
          </a>
        </li>
        <li>
          <a href="http://" target="_blank">
            Privacy
          </a>
        </li>
        <li>
          <a href="http://" target="_blank">
            Legal Notices
          </a>
        </li>
        <li>
          <a href="http://" target="_blank">
            Cookie Preferences
          </a>
        </li>
        <li>
          <a href="http://" target="_blank">
            Corporate Information
          </a>
        </li>
        <li>
          <a href="http://" target="_blank">
            Contact Us
          </a>
        </li>
      </ul>
      <p className="copyright-text">© 1997-2021 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
