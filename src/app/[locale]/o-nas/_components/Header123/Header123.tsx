"use state";

import { useState } from "react";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import "../../../../../../dist/output.css";
import { useTranslations } from "next-intl";
import LocationLink from "../../../../../../public/Components/LocationLink/LocationLink";
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  firstImage: ImageProps;
  secondImage: ImageProps;
};

export type Header123Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header123 = (props: Header123Props) => {
  const { heading, description, buttons, firstImage, secondImage } = {
    ...Header123Defaults,
    ...props,
  };

  const t = useTranslations("prekmurje"); // Uporaba ključa "prekmurje" za prevode
  const destination =
    "Terme 3000 Moravske Toplice - Sava Hotels & Resorts, Kranjčeva ulica 12, 9226 Moravske Toplice";
  const destination2 = "Terme Vivat, Ulica ob igrišču 3, 9226 Moravske Toplice";

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb4">
          <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-6xl md:mb-6 md:text-9xl lg:text-10xl neue-semi-bold ">
              {t("title")}
            </h2>
            <p className="md:text-md gray-text neue">{t("subtitle")}</p>
          </div>
        </div>
        <div className="grid auto-cols-fr md:grid-cols-2 items-start gap-6 sm:gap-8 md:gap-16">
          <div className="w-full">
            <img
              className="aspect-square size-full object-cover mb-3"
              src={firstImage.src}
              alt={firstImage.alt}
            />
            <h2 className="neue text-6xl mb-3">{t("terme3000.title")}</h2>
            <p className="neue text-base">{t("terme3000.subtitle")}</p>
            <LocationLink destination={destination} />
          </div>
          <div className="my w-full">
            <img
              className="aspect-square size-full object-cover mb-3"
              src={secondImage.src}
              alt={secondImage.alt}
            />
            <h2 className="neue text-6xl mb-3">{t("termeVivat.title")}</h2>
            <p className="neue text-base">{t("termeVivat.subtitle")}</p>
            <LocationLink destination={destination2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header123Defaults: Props = {
  heading: "Long heading is what you see here in this header section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  firstImage: {
    src: "/Images/t3000.webp",
    alt: "Relume placeholder image 1",
  },
  secondImage: {
    src: "/Images/vivat2.png",
    alt: "Relume placeholder image 2",
  },
};

Header123.displayName = "Header123";
