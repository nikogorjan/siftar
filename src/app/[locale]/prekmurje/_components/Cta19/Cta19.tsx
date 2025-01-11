"use client";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import { useTranslations } from "next-intl";
import useNavigateToSubpage from "../../../../../utils/useNavigateToSubpage";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type Cta19Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Cta19 = (props: Cta19Props) => {
  const { heading, description, buttons } = {
    ...Cta19Defaults,
    ...props,
  };
  const t = useTranslations("prekmurje"); // Uporaba ključa za prevode sekcij
  const navigateToSubpage = useNavigateToSubpage();

  // Example function to handle navigation
  const handleNavigation1 = () => {
    const subpage = "rezervacija"; // This can be dynamically determined
    navigateToSubpage(subpage);
  };

  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-6xl md:mb-6 md:text-9xl lg:text-10xl neue-semi-bold">
            {t("rheading")}
          </h2>
          <p className="md:text-md gray-text neue">{t("rsubtitle")}</p>
          <div className="res-now-contact" onClick={handleNavigation1}>
            <p className="res-p">{t("rezerviraj")}</p>
            <img
              alt="logo"
              className="arrow-r"
              src="/Images/right-arrow-alt.svg"
            />
          </div>
        </div>
        <img alt="logo" className="w-full mt-6" src="/Images/hisa.webp" />
      </div>
    </section>
  );
};

export const Cta19Defaults: Props = {
  heading: "Medium length heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
};

Cta19.displayName = "Cta19";
