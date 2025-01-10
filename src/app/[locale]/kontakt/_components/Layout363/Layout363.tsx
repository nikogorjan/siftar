import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  sections: SectionProps[];
};

export type Layout363Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout363 = (props: Layout363Props) => {
  const { tagline, heading, description, sections } = {
    ...Layout363Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] pb16">
      <div className="container">
        <div className="w-full relative">
          <div className="whiteoverflow"></div>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1WHwDnZtRNXJIgoidc9PJkTlNR0S2JR4&ehbc=2E312F"
            width="100%"
            height="480"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export const Layout363Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  sections: [
    {
      tagline: "Sobe",
      heading: "Vila Šiftar",
      description: "Rezerviraj sobo.",
      buttons: [
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        src: "/Images/hisa6.webp",
        alt: "Relume placeholder image 1",
      },
    },
    {
      tagline: "Gostišče",
      heading: "Gostišče Šiftar",
      description: "Rezerviraj mizo.",
      buttons: [
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        src: "/Images/hisa7.webp",
        alt: "Relume placeholder image 2",
      },
    },
  ],
};

Layout363.displayName = "Layout363";
