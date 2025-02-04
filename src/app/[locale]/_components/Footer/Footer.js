import React from "react";
import "../../../globals.css";
import { useTranslations } from "next-intl";
import FooterBanner from "./FooterBanner";

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
        <a
          className="underlinenone"
          href="https://www.facebook.com/profile.php?id=100063369180013&locale=sl_SI"
        >
          <p className="rights">Facebook</p>
        </a>
      </div>
    </section>
  );
};

export default Footer;
