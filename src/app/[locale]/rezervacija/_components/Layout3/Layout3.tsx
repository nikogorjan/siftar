import React from "react";
import { useTranslations } from "next-intl";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Layout3Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout3 = (props: Layout3Props) => {
  const { heading, description, image } = {
    ...Layout3Defaults,
    ...props,
  };
  const t = useTranslations("bookingInstructions"); // Uporaba ključa "prekmurje" za prevode
  const p = useTranslations("bookingHero"); // Uporaba ključa "prekmurje" za prevode

  return (
    <section id="relume" className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-5 text-6xl md:mb-6 neue ">{t("step1")}</p>
            <div className="res-now-contact">
              <p className="res-p">{p("button")}</p>
              <img
                alt="logo"
                className="arrow-r"
                src="/Images/right-arrow-alt.svg"
              />
            </div>
          </div>
          <div>
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout3Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "/Images/s1.png",
    alt: "Relume placeholder image",
  },
};

Layout3.displayName = "Layout3";
