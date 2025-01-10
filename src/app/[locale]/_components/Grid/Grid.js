import React from "react";
import { useTranslations } from "next-intl";

const Grid = () => {
  const t = useTranslations("HomePage");

  return (
    <section>
      <div className="grid-main">
        <div className="grid-wrapper">
          <div className="bento-grid w-layout-grid ">
            <div className="bento-item item1">
              <img alt="logo" className="bento-img" src="/Images/hisa6.webp" />
            </div>
            <div className="bento-item item2">
              <img alt="logo" className="bento-img" src="/Images/g7.webp" />
            </div>
            <div className="bento-item item3">
              <img alt="logo" className="bento-img" src="/Images/g8.webp" />
            </div>
            <div className="bento-item item4">
              <img
                alt="logo"
                className="bento-img higher"
                src="/Images/g9.webp"
              />
            </div>
            <div className="bento-item item5">
              <img alt="logo" className="bento-img" src="/Images/g10.webp" />
            </div>
            <div className="bento-item item6">
              <img alt="logo" className="bento-img" src="/Images/g11.webp" />
            </div>
          </div>

          <div className="descriptions-under">
            <div className="desc-left"></div>
            <div className="desc-righr">
              <h2 className="info-header">{t("oddih")} </h2>
              <p className="message mtb">{t("oddihh2")}</p>
              <div className="stat-left">{t("oddihm1")}</div>
              <div className="stat-left mt">{t("oddihm2")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
