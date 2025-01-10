import React from "react";
import { useTranslations } from "next-intl";

const Vision = () => {
  const t = useTranslations("HomePage");

  return (
    <section>
      <div className="vizija-main">
        <div className="vizija-wrapper">
          <h2 className="info-header">{t("vizija")}</h2>
          <p className="message mtb">{t("vizijah2")}</p>

          <div className="paragraphs-row">
            <div className="paragraphs-left">
              <div className="stat-left">{t("vizijap1")}</div>
              <div className="stat-left mt">{t("vizijap2")}</div>
            </div>
            <div className="paragraphs-right">
              <div className="stat-left">{t("vizijap3")}</div>
              <div className="stat-left mt">{t("vizijap4")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
