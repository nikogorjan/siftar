import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import "../../../../../../dist/output.css";
import { useTranslations } from "next-intl";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header15Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header15 = (props: Header15Props) => {
  const { heading, description, buttons, image } = {
    ...Header15Defaults,
    ...props,
  };

  const t = useTranslations("aboutUs");

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb4 rb-12 mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <h1 className="mb-5 text-6xl md:mb-6 md:text-9xl lg:text-10xl neue-semi-bold ">
            {t("title")}
          </h1>
          <div>
            <p className="md:text-md neue text-gray">{t("description")}</p>
          </div>
        </div>
        {/*<div>
          <img
            src={image.src}
            className="w-full object-cover"
            alt={image.alt}
          />
        </div>*/}
      </div>
    </section>
  );
};

export const Header15Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: "/Images/family.webp",
    alt: "Relume placeholder image",
  },
};

Header15.displayName = "Header15";
