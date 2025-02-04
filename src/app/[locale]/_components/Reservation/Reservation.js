"use client";

import React from "react";
import "../../../globals.css";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
const Reservation = () => {
  const t = useTranslations("HomePage");

  const locale = useLocale();

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
            <div className="rezervacija-cell">
              <a href={`/${locale}/vila-siftar`}>
                <img alt="food1" className="res-img" src="/Images/vs3.jpg" />
                <p className="za-p">{t("vila")}</p>
              </a>
            </div>
            <div className="rezervacija-cell">
              <a href={`/${locale}/gostisce-siftar`}>
                <img alt="food1" className="res-img" src="/Images/vs2.png" />
                <p className="za-p">{t("gostisce")}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
