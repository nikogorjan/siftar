"use client";
import "../../../../../../dist/output.css";
import { useTranslations } from "next-intl";

export const Header36 = () => {
  const t = useTranslations("GostiscePage");
  const handleScrollToMenu = () => {
    const element = document.getElementById("restaurant-menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn('Element with ID "restaurant-menu" not found.');
    }
  };
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="info-header mtb">{t("message1")}</h1>
        <p className="md:text-md neue gray-text">{t("message2")}</p>
        <div className="res-now-row" onClick={handleScrollToMenu}>
          <p className="res-p">{t("message3")}</p>
          <img
            alt="logo"
            className="arrow-r"
            src="/Images/right-arrow-alt.svg"
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8"></div>
      </div>
      <div>
        <img
          src="/Images/room.jpg"
          alt="gostisce"
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
        />
      </div>
    </section>
  );
};
