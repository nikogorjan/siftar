"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import LocationLink from "../../../../../../public/Components/LocationLink/LocationLink";
import { useTranslations } from "next-intl";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  image: ImageProps;
  heading: string;
  description: string;
  location: string;
};

type Props = {
  sections: SectionProps[];
};

export type Layout132Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout132 = (props: Layout132Props) => {
  const t = useTranslations("layout132.sections"); // Uporaba ključa za prevode sekcij

  // Definiranje privzetih vrednosti z uporabo prevodov
  const defaultSections: Props = {
    sections: [
      {
        image: {
          src: "/Images/orchids.png",
          alt: "Relume placeholder image 1",
        },
        heading: t("0.heading"),
        description: t("0.description"),
        location:
          "Tropski vrt by Ocean Orchids TRÓPUSI KERT Ocean Orchids, Dobrovnik 115e, 9223 Dobrovnik",
      },
      {
        image: {
          src: "/Images/stolp.png",
          alt: "Relume placeholder image 2",
        },
        heading: t("1.heading"),
        description: t("1.description"),
        location: "Stolp Vinarium Lendava, Dolgovaške Gorice 229, 9220 Lendava",
      },
      {
        image: {
          src: "/Images/grad.png",
          alt: "Relume placeholder image 2",
        },
        heading: t("2.heading"),
        description: t("2.description"),
        location: "grad Grad (Grad castle - the building), Grad 191, 9264 Grad",
      },
      {
        image: {
          src: "/Images/otokl.png",
          alt: "Relume placeholder image 2",
        },
        heading: t("3.heading"),
        description: t("3.description"),
        location: "Otok ljubezni, Ižakovci 190, 9231 Beltinci",
      },
      {
        image: {
          src: "/Images/expano.png",
          alt: "Relume placeholder image 2",
        },
        heading: t("4.heading"),
        description: t("4.description"),
        location: "Paviljon EXPANO, Bakovska ulica 41, 9000 Murska Sobota",
      },
      {
        image: {
          src: "/Images/vulkanija.png",
          alt: "Relume placeholder image 2",
        },
        heading: t("5.heading"),
        description: t("5.description"),
        location: "Doživljajski park Vulkanija, Grad 174, 9264 Grad",
      },
      {
        image: {
          src: "/Images/filovci.png",
          alt: "Relume placeholder image 2",
        },
        heading: t("6.heading"),
        description: t("6.description"),
        location:
          "Zavod Lončarska Vas Filovci, zavod za turizem, kulturo in proizvodnjo keramike, Filovci 20, Filovci 20, 9222 Bogojina",
      },
      {
        image: {
          src: "/Images/bukovnisko.png",
          alt: "Relume bukovnisko image 2",
        },
        heading: t("7.heading"),
        description: t("7.description"),
        location: "Bukovniško jezero, 9223 Dobrovnik",
      },
      {
        image: {
          src: "/Images/pustolovski.png",
          alt: "Relume bukovnisko image 2",
        },
        heading: t("8.heading"),
        description: t("8.description"),
        location:
          "Pustolovski park Bukovniško jezero, Dobrovnik 299, 9223 Dobrovnik",
      },
    ],
  };

  // Združevanje privzetih vrednosti s props
  const mergedProps = { ...defaultSections, ...props };
  const { sections } = mergedProps;

  return (
    <section id="relume" className="px-[5%] pb-16 md:pb-24 lg:pb-28">
      <div className="container">
        <div className="gap-x-12 grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-16">
          {sections.map((section, index) => (
            <div key={index}>
              <div className="rb-6 mb-6 md:mb-8">
                <img src={section.image.src} alt={section.image.alt} />
              </div>
              <h3 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl neue">
                {section.heading}
              </h3>
              <p className="neue text-base">{section.description}</p>
              <LocationLink destination={section.location} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Odstranite Layout132Defaults, saj uporabljate prevedene vrednosti
export const Layout132Defaults: Props = {
  sections: [], // Lahko pustite prazno ali odstranite celoten objekt
};

Layout132.displayName = "Layout132";

export default Layout132;
