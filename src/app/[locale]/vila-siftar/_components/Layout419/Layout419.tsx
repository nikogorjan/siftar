"use client";
import { Button } from "@relume_io/relume-ui";
import { type ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type DataProps = {
  subheading: string;
  description: string;
  image: ImageProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  data: DataProps[];
};

export type Layout419Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout419 = (props: Layout419Props) => {
  const { data, tagline, heading, description, buttons } = {
    ...Layout419Defaults,
    ...props,
  };

  return (
    <section id="relume" className="uncommon-p">
      <div className="uncommon-grid">
        <div>
          <div className="sticky-text">
            <div className="flex flex-col items-end md:h-screen md:justify-center text-flex">
              <div className="mx-[5%] max-w-md md:ml-[5vw] md:mr-12 lg:mr-20 mr-text">
                <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  {heading}
                </h2>
                <p className="md:text-md">{description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  {buttons.map((button, buttonIndex) => (
                    <Button key={buttonIndex} {...button}>
                      {button.title}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10 stickycarousel">
            <div className="max-w-md flex flex-col h-screen">
              <div className="mb-6 md:mb-8">
                <img
                  src="/Images/dnevna5.png"
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl neue">
                Subheading one
              </h3>
              <p className="neue text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
          </div>

          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10 stickycarousel">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/Images/dnevna8.png"
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl neue">
                Subheading one
              </h3>
              <p className="neue text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10 stickycarousel">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/Images/dnevna7.jpg"
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl neue">
                Subheading one
              </h3>
              <p className="neue text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout419Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  data: [
    {
      subheading: "Subheading one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 1",
      },
    },
    {
      subheading: "Subheading two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 2",
      },
    },
    {
      subheading: "Subheading three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 3",
      },
    },
    {
      subheading: "Subheading four",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 4",
      },
    },
  ],
};

Layout419.displayName = "Layout419";
