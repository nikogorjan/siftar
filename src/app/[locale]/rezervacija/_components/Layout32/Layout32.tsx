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

export type Layout32Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout32 = (props: Layout32Props) => {
  const { heading, description, image } = {
    ...Layout32Defaults,
    ...props,
  };
  const t = useTranslations("bookingInstructions"); // Uporaba ključa "prekmurje" za prevode
  const p = useTranslations("bookingHero"); // Uporaba ključa "prekmurje" za prevode

  return (
    <section id="relume" className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-5 text-6xl md:mb-6 neue ">{t("step3")}</p>
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

export const Layout32Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "/Images/s3.png",
    alt: "Relume placeholder image",
  },
};

Layout32.displayName = "Layout32";
