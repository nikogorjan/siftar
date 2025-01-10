"use client";

import React, { useState, useEffect } from "react";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";
import { BiSolidStar } from "react-icons/bi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import { useTranslations } from "next-intl";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  numberOfStars: number;
  quote: React.ReactNode; // Updated to React.ReactNode to allow rich text
  image: ImageProps;
  name: string;
  position: string;
  companyName: string;
  logo: ImageProps;
};

type Props = {
  testimonials: Testimonial[];
};

export type Testimonial15Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonial15 = (props: Testimonial15Props) => {
  const { testimonials } = {
    ...props,
  };

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const t = useTranslations("GostiscePage");

  // Define testimonials inside the component using translations
  const translatedTestimonials: Testimonial[] = [
    {
      numberOfStars: 5,
      quote: t.rich("testimonial1", {
        // If you need to replace any custom tags, define them here
        // For example, if your testimonial includes <quote>, you can handle it
        // But since testimonials are plain text with quotes, no replacement is needed
        // So, you can directly use the translated string
      }),
      image: {
        src: "/Images/customer-food1.webp",
        alt: "Testimonial image 1",
      },
      name: "Robert",
      position: "Position",
      companyName: "Company name",
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Webflow logo 1",
      },
    },
    {
      numberOfStars: 5,
      quote: t.rich("testimonial2", {}),
      image: {
        src: "/Images/customer-food2.webp",
        alt: "Testimonial image 2",
      },
      name: "Andrei",
      position: "Position",
      companyName: "Company name",
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Webflow logo 2",
      },
    },
    {
      numberOfStars: 5,
      quote: t.rich("testimonial3", {}),
      image: {
        src: "/Images/customer-food3.webp",
        alt: "Testimonial image 3",
      },
      name: "Duša",
      position: "Position",
      companyName: "Company name",
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Webflow logo 3",
      },
    },
  ];

  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] pb-16 md:pb-24 lg:pb-28"
    >
      <div className="container">
        <div className="max-w-lg text-start">
          <h1 className="info-header mtb mbdesktop">
            {t("testimonialsHeader")} {/* Optional: Translate header */}
          </h1>
        </div>
        {/* for all available options: :https//www.embla-carousel.com/api/options/ */}
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          className="overflow-hidden"
        >
          <div className="relative pt-20 md:pb-20 md:pt-0">
            <CarouselContent className="ml-0">
              {translatedTestimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-0">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="relative mt-4 flex w-full items-start justify-between md:bottom-0 md:top-auto md:items-end">
              <div className="mt-2.5 flex w-full items-start justify-start md:mb-2.5 md:mt-0">
                {translatedTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={clsx(
                      "mx-[3px] inline-block size-2 rounded-full marginlr",
                      current === index + 1
                        ? "background-active"
                        : "background-inactive"
                    )}
                  />
                ))}
              </div>
              <div className="flex items-end justify-end gap-2 md:gap-4 relative-position">
                <CarouselPrevious className="static right-0 top-0 size-14 -translate-y-0" />
                <CarouselNext className="static right-0 top-0 size-14 -translate-y-0" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="grid gap-x-12 w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
      <div className="order-last md:order-first">
        <img
          src={testimonial.image.src}
          alt={testimonial.image.alt}
          className="aspect-square w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start margintop-tabs">
        <div className="mb-6 flex md:mb-8">
          {Array(testimonial.numberOfStars)
            .fill(null)
            .map((_, starIndex) => (
              <BiSolidStar key={starIndex} className="size-6 orange" />
            ))}
        </div>
        <blockquote className="text-xl font-thin md:text-2xl neue">
          {testimonial.quote}
        </blockquote>
        <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
          <div>
            <p className="font-semibold neue">- {testimonial.name}</p>
          </div>
          <div className="mx-4 w-px self-stretch bg-background-alternative sm:mx-0" />
        </div>
      </div>
    </div>
  );
};
