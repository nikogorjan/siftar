import React from "react";
import { useTranslations } from "next-intl";
import LocationLink from "../../../../../../public/Components/LocationLink/LocationLink";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Layout90Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout90 = (props: Layout90Props) => {
  const { heading, description, image } = {
    ...Layout90Defaults,
    ...props,
  };

  const t = useTranslations("prekmurje"); // Uporaba ključa "prekmurje" za prevode
  const destination =
    "Kapela Sv. Nikolaja - Rotunda, Selo 58, 9207 Prosenjakovci";
  return (
    <section id="relume" className="px-[5%] pb-16 md:pb-24 lg:pb-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="mtb neue bigger-text">{t("Rotunda")}</h3>
          <div>
            <p className="md:text-md neue gray-text">
              {t("rotundaDescription")}
            </p>
            <LocationLink destination={destination} />
          </div>
        </div>
        <img
          src={image.src}
          className="w-full object-cover mt-6 md:mt-8 "
          alt={image.alt}
        />
      </div>
    </section>
  );
};

export const Layout90Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  image: {
    src: "/Images/rotunda.jpg",
    alt: "Relume placeholder image",
  },
};

Layout90.displayName = "Layout90";
