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

export type Layout1941Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout1941 = (props: Layout1941Props) => {
  const { heading, description, image } = {
    ...Layout1941Defaults,
    ...props,
  };

  const t = useTranslations("bookingInstructions"); // Uporaba ključa "prekmurje" za prevode

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20 row-gaap ">
          <div className="order-2 md:order-1 order-reverse">
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
          <div className="order-1 md:order-2 order">
            <p className="mb-5 text-6xl md:mb-6 neue ">{t("step4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout1941Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "/Images/s5.png",
    alt: "Relume placeholder image",
  },
};

Layout1941.displayName = "Layout1941";
