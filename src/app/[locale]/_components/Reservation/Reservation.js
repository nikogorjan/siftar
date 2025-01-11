"use client";

import React from "react";
import "../../../globals.css";
import { useTranslations } from "next-intl";
import useNavigateToSubpage from "../../../../utils/useNavigateToSubpage";

const Reservation = () => {
  const t = useTranslations("HomePage");

  const navigateToSubpage = useNavigateToSubpage();

  // Example function to handle navigation
  const handleNavigation1 = () => {
    const subpage = "vila-siftar"; // This can be dynamically determined
    navigateToSubpage(subpage);
  };

  const handleNavigation2 = () => {
    const subpage = "gostisce-siftar"; // This can be dynamically determined
    navigateToSubpage(subpage);
  };

  return (
    <section className="resser">
      <div className="vizija-main reservations">
        <div className="vizija-wrapper">
          <h2 className="info-header">{t("rezervirajz")}</h2>
          <p className="message mtb">{t("rezervirajh2")}</p>

          <div className="paragraphs-row">
            <div className="paragraphs-left">
              <div className="stat-left">{t("rezervirajp1")}</div>
              <div className="stat-left mt">{t("rezervirajp2")}</div>
            </div>
          </div>

          <div className="rezervacija-row">
            <div className="rezervacija-cell" onClick={handleNavigation1}>
              <img alt="food1" className="res-img" src="/Images/hisa5.webp" />
              <p className="za-p">{t("vila")}</p>
            </div>
            <div className="rezervacija-cell" onClick={handleNavigation2}>
              <img alt="food1" className="res-img" src="/Images/hisa7.webp" />
              <p className="za-p">{t("gostisce")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
