import React from "react";
import "../../../globals.css";
import { useTranslations } from "next-intl";

const FooterBanner = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="relative w-full bg-white z-10 ">
      <div className="w-full flexy">
        <img src="/Images/sponsor.jpg" alt="footer sponsor" className="ws" />
        <img src="/Images/sponsor2.jpg" alt="footer sponsor2" className="ws" />
      </div>
    </section>
  );
};

export default FooterBanner;
