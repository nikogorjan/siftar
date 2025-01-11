"use client";

import React from "react";
import type { CarouselApi } from "@relume_io/relume-ui";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { BiSolidStar } from "react-icons/bi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import "../../../../../../dist/output.css";
import "./Testimonial11.css";
import { useTranslations } from "next-intl";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  numberOfStars: number;
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  logo: ImageProps;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial11Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonial11 = (props: Testimonial11Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial11Defaults,
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
  const t = useTranslations("vsiftar");

  return (
    <section id="relume" className="overflow-hidden px-[5%] pb16">
      <div className="container">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl neue-semi-bold">
            {t("sobe")}
          </h2>
          <p className="md:text-md">{t("sd")}</p>
        </div>
        {/* for all available options: https://www.embla-carousel.com/api/options/ */}
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          className="overflow-hidden"
        >
          <div className="relative pb-20 md:pb-24">
            <CarouselContent className="ml-0">
              <CarouselItem className="pl-0 lg:basis-1/2 lg:pr-16">
                <div className="mb-6 md:mb-8">
                  <img
                    src="/Images/dnevna5.png"
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                <h3 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl neue">
                  {t("druzinska")}
                </h3>
                <div className="flex items-center mb3">
                  <p className="neue-semi-bold text-xl">{t("stg")}: </p>
                  <div className="ml-2 flex items-center small-gap">
                    <img src="/Images/user.svg" alt="" className="w2" />
                    <img src="/Images/user.svg" alt="" className="w2" />
                    <img src="/Images/user.svg" alt="" className="w2" />
                    <img src="/Images/user.svg" alt="" className="w2" />
                  </div>
                </div>
                <p className="neue text-base">{t("dz")}</p>
              </CarouselItem>
              <CarouselItem className="pl-0 lg:basis-1/2 lg:pr-16">
                <div className="mb-6 md:mb-8">
                  <img
                    src="/Images/dnevna8.png"
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                <h3 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl neue">
                  {t("spartma")}
                </h3>
                <div className="flex items-center mb3">
                  <p className="neue-semi-bold text-xl">{t("stg")}: </p>
                  <div className="ml-2 flex items-center small-gap">
                    <img src="/Images/user.svg" alt="" className="w2" />
                    <img src="/Images/user.svg" alt="" className="w2" />
                    <img src="/Images/user.svg" alt="" className="w2" />
                    <img src="/Images/user.svg" alt="" className="w2" />
                  </div>
                </div>
                <p className="neue text-base">{t("sprt")}</p>
              </CarouselItem>
              <CarouselItem className="pl-0 lg:basis-1/2 lg:pr-16">
                <div className="mb-6 md:mb-8">
                  <img
                    src="/Images/dnevna7.jpg"
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                <h3 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl neue">
                  {t("dvoposteljna")}
                </h3>
                <div className="flex items-center mb3">
                  <p className="neue-semi-bold text-xl">{t("stg")}: </p>
                  <div className="ml-2 flex items-center small-gap">
                    <img src="/Images/user.svg" alt="" className="w2" />
                    <img src="/Images/user.svg" alt="" className="w2" />
                  </div>
                </div>
                <p className="neue text-base">{t("otr")}</p>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-0 flex w-full items-center justify-between">
              <div className="mt-5 flex w-full items-start justify-start">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={clsx(
                      "mx-[3px] inline-block size-2 rounded-full",
                      {
                        "bg-black": current === index + 1,
                        "bg-neutral-light": current !== index + 1,
                      }
                    )}
                  />
                ))}
              </div>
              <div className="flex items-end justify-end gap-2 md:gap-4">
                <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
                <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
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
    <div className="mx-auto flex h-full max-w-lg flex-col justify-center">
      <div className="mb-6 flex md:mb-8">
        {Array(testimonial.numberOfStars)
          .fill(null)
          .map((_, starIndex) => (
            <BiSolidStar key={starIndex} className="size-6" />
          ))}
      </div>
      <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
        {testimonial.quote}
      </blockquote>
      <div className="mt-6 flex w-full flex-col gap-5 md:mt-8 md:w-auto md:flex-row md:items-center md:text-left">
        <div>
          <img
            src={testimonial.avatar.src}
            alt={testimonial.avatar.alt}
            className="size-14 min-h-14 min-w-14 rounded-full object-cover"
          />
        </div>
        <div className="mb-4 md:mb-0">
          <p className="font-semibold">{testimonial.name}</p>
          <p>{testimonial.position}</p>
        </div>
        <div className="hidden w-px self-stretch bg-background-alternative md:block" />
        <div>
          <img
            src={testimonial.logo.src}
            alt={testimonial.logo.alt}
            className="max-h-12"
          />
        </div>
      </div>
    </div>
  );
};

const testimonial = {
  numberOfStars: 5,
  quote:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
  avatar: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Testimonial avatar 1",
  },
  name: "Name Surname",
  position: "Position, Company name",
  logo: {
    src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
    alt: "Webflow logo 1",
  },
};

export const Testimonial11Defaults: Props = {
  heading: "Customer testimonials",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials: [testimonial, testimonial, testimonial],
};

Testimonial11.displayName = "Testimonial11";
