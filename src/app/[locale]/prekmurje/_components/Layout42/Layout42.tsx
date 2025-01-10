import React from "react";
import { useTranslations } from "next-intl";

type Props = {
  heading: string;
  description: string;
};

export type Layout42Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout42 = (props: Layout42Props) => {
  const { heading, description } = {
    ...Layout42Defaults,
    ...props,
  };

  const t = useTranslations("prekmurje");

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <h3 className="mtb neue bigger-text">Prekmurje</h3>
          <p className="md:text-md neue gray-text">
            {t("prekmurjeDescription")}
          </p>
        </div>
      </div>
    </section>
  );
};

export const Layout42Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
};

Layout42.displayName = "Layout42";
