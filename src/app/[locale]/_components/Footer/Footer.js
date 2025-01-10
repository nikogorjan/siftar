import React from "react";
import "../../../globals.css";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="footer-sec">
      <div className="first-col">
        <div>
          <p className="rights">{t("at")}</p>
        </div>
        <div>
          <h2 className="loaded-name">Šiftar</h2>
        </div>
      </div>

      <div className="socials">
        <p className="rights">Facebook</p>
        <p className="rights">Instagram</p>
        <p className="rights">Linkedin</p>
      </div>
    </section>
  );
};

export default Footer;
