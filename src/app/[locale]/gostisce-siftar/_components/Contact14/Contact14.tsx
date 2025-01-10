"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React, { useState, useRef, useEffect } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import "../../../../../../src/app/globals.css";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import LocationLink from "../../../../../../public/Components/LocationLink/LocationLink";

type ImageProps = {
  src: string;
  alt?: string;
};

type LinkProps = {
  label: string;
  url: string;
};

type Map = {
  url: string;
  image: ImageProps;
};

type Contact = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: LinkProps;
  button?: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  contacts: Contact[];
  map: Map;
};

export type Contact14Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Contact14 = (props: Contact14Props) => {
  const router = useRouter();
  const t = useTranslations("contacts");

  // Definiranje privzetih vrednosti z uporabo prevodov
  const defaultProps: Props = {
    tagline: t("tagline"),
    heading: t("heading"),
    description: t("description"),
    contacts: [
      {
        icon: <BiEnvelope className="size-8" />,
        title: t("email_title"),
        description: t("email_description"),
        link: {
          label: t("email_link_label"),
          url: "#",
        },
      },
      {
        icon: <BiPhone className="size-8" />,
        title: t("phone_title"),
        description: t("phone_description"),
        link: {
          label: t("phone_link_label"),
          url: "#",
        },
      },
      {
        icon: <BiMap className="size-8" />,
        title: t("office_title"),
        description: t("office_description"),
        button: {
          title: t("office_button_title"),
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      },
    ],
    map: {
      url: t("map.url"),
      image: {
        src: t("map.image_src"),
        alt: t("map.image_alt"),
      },
    },
  };

  // Združevanje privzetih vrednosti s props
  const { tagline, heading, description, contacts, map } = {
    ...defaultProps,
    ...props,
  };

  const destination =
    "GOSTIŠČE ŠIFTAR Maja Šiftar Vučko s.p., Levstikova ulica 24, 9226 Moravske Toplice";

  return (
    <section id="relume" className="px-[5%] py-16">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="info-header mtb">{heading}</h2>
          <p className="md:text-md neue gray-text mb-8">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10 row-gaap">
            {contacts.map((contact, index) => (
              <div key={index} className="flex flex-col justify-center">
                <h3 className="text-md font-bold leading-[1.4] md:text-xl neue-semi-bold mb-3">
                  {contact.title}
                </h3>
                <p className="mb-2 neue gray-text">{contact.description}</p>
                {(contact.title.toLowerCase() === "lokacija" ||
                  contact.title.toLowerCase() === "location" ||
                  contact.title.toLowerCase() === "standort") &&
                contact.button ? (
                  <LocationLink destination={destination} />
                ) : (
                  contact.link && (
                    <a className="underline" href={contact.link.url}>
                      {contact.link.label}
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
          {/* Insert your map code here */}
          <a
            href={map.url}
            className="justify-self-end md:w-[321.6px] lg:w-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1182.5483324806314!2d16.21506013422655!3d46.68616856084752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f3c008b481371%3A0x1a91ade78be39f70!2sLevstikova%20ulica%2024%2C%209226%20Moravske%20Toplice!5e0!3m2!1ssl!2ssi!4v1736429626617!5m2!1ssl!2ssi"
              className="size-full h-[400px] object-cover md:h-[516px] iframe-size"
              loading="lazy"
            ></iframe>
          </a>
        </div>
      </div>
    </section>
  );
};

Contact14.displayName = "Contact14";

export default Contact14;
