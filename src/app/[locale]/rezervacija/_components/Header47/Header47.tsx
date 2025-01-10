import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import "../../../../../../dist/output.css";
import { useTranslations } from "next-intl";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type Header47Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header47 = (props: Header47Props) => {
  const { heading, description, buttons, tagline } = {
    ...Header47Defaults,
    ...props,
  };

  const t = useTranslations("bookingHero"); // Uporaba ključa "prekmurje" za prevode

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-6xl md:mb-6 md:text-9xl lg:text-10xl neue-semi-bold ">
              {t("title")}
            </h1>
          </div>

          <div className="w-full max-w-lg">
            <p className="text-xl neue">{t("subtitle")}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  {...button}
                  className="neue-semi-bold gray-border hover-button"
                >
                  <div className="res-now-booking">
                    <p className="res-p">{t("button")}</p>
                    <img
                      alt="logo"
                      className="arrow-r"
                      src="/Images/right-arrow-alt.svg"
                    />
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header47Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Odpri booking aplikacijo", variant: "secondary" }],
};

Header47.displayName = "Header47";
