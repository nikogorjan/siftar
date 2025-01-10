import React from "react";
import { useTranslations } from "next-intl";

type ImageProps = {
  src: string;
  alt?: string;
};

type SubHeadingProps = {
  title: string;
  description: string;
};

type Props = {
  heading: string;
  subHeadings: SubHeadingProps[];
  description: string;
  image: ImageProps;
};

export type Layout94Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout94 = (props: Layout94Props) => {
  const { heading, description, image, subHeadings } = {
    ...Layout94Defaults,
    ...props,
  };

  const t = useTranslations("GostiscePage");

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="info-header mtb">{t("title")}</h3>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md neue gray-text">
              {t("description")}
            </p>

            <div className="grid grid-cols-1 gap-6 py-2 lg:grid-cols-2 ">
              <div className="flex">
                <div>
                  <h6 className="mb-3 text-md neue-semi-bold leading-[1.4] md:mb-4 md:text-xl">
                    {t("subheading1")}
                  </h6>
                  <p className="neue gray-text">
                    {t("subheading1_description")}
                  </p>
                </div>
              </div>
              <div className="flex">
                <div>
                  <h6 className="mb-3 text-md neue-semi-bold leading-[1.4] md:mb-4 md:text-xl">
                    {t("subheading2")}
                  </h6>
                  <p className="neue gray-text">
                    {t("subheading2_description")}
                  </p>
                </div>
              </div>
            </div>
            <div className="res-now-row">
              <p className="res-p">{t("pn")}</p>
              <img
                alt="logo"
                className="arrow-r"
                src="/Images/right-arrow-alt.svg"
              />
            </div>
          </div>
        </div>
        <img
          src={image.src}
          className="w-full object-cover mtop"
          alt={image.alt}
        />
      </div>
    </section>
  );
};

export const Layout94Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "/Images/hisa7.webp",
    alt: "Relume placeholder image",
  },
  subHeadings: [
    {
      title: "Subheading one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      title: "Subheading two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ],
};

Layout94.displayName = "Layout94";
