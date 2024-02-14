/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/Css/Footer.css";
import logo from "./imgs/logo.png";
import logo_f from "./imgs/f_img.png";

const Footer = () => {
  return (
    <>
      <div className="f_conteiner">
        <div className="f_coteiner_1">
          <div className="f_caja_1">
            <img src={logo_f} alt="img" className="f_logo" />
          </div>
          <div className="f_caja_2">
            <div className="f_caja_2_1">
              <p className="p_f">Politica de Privacidad</p>
              <p className="p_f">Terminos</p>
              <p className="p_f">Contactos</p>
            </div>
            <div className="f_caja_2_2">
              <div className="f_title_1">
                <h3 className="f_links">Redes Sociales</h3>
              </div>
              <div className="f_title_2">
                <a href="https://www.facebook.com/Francisco.loquito" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/256/20/20673.png"
                    alt=""
                    className="i_face"
                  />
                </a>
                <a href="https://www.linkedin.com/in/francisco-jes%C3%BAs-sono-callla-820a6526a/" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/256/61/61109.png"
                    alt=""
                    className="i_link"
                  />
                </a>
                <a href="https://www.youtube.com/channel/UCWgB26qX3cln7JojUBtpTIw" target="_blank">
                  <img
                    src="https://cdn.icon-icons.com/icons2/1463/PNG/512/youtube-black_100150.png"
                    alt=""
                    className="i_yt"
                  />
                </a>
                <a href="https://twitter.com/FrankSC6482" target="_blank">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/027/122/147/small/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png"
                    alt=""
                    className="i_twiter"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
