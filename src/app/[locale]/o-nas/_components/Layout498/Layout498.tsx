"use client";

import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { FaCirclePlay } from "react-icons/fa6";
import { useTranslations } from "next-intl";

type ImageProps = {
  src: string;
  alt?: string;
};

type VideoProps = {
  image: ImageProps;
  url: string;
};

type TabProps = {
  icon: ImageProps;
  heading: string;
  description: string;
  image?: ImageProps;
  video?: VideoProps;
};

type Props = {
  tabs: TabProps[];
  buttons: ButtonProps[];
};

export type Layout498Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

// Funkcija za pridobivanje privzetih vrednosti z uporabo prevodov
const getLayout498Defaults = (t: (key: string) => string): Props => ({
  tabs: [
    {
      icon: {
        src: "/Images/home-heart.svg",
        alt: "Relume icon 1",
      },
      heading: t("tabs.0.heading"),
      description: t("tabs.0.description"),
      image: {
        src: "/Images/his.webp",
        alt: "Relume placeholder image 1",
      },
    },
    {
      icon: {
        src: "/Images/restaurant.svg",
        alt: "Relume icon 3",
      },
      heading: t("tabs.1.heading"),
      description: t("tabs.1.description"),
      image: {
        src: "/Images/gos.webp",
        alt: "Relume placeholder image 3",
      },
    },
  ],
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
});

export const Layout498 = (props: Layout498Props) => {
  const t = useTranslations("ourProperties");
  const tt = useTranslations("contacts");

  // Pridobite privzete vrednosti z uporabo prevodov
  const defaults = getLayout498Defaults(t);

  // Združite privzete vrednosti z morebitnimi prejetimi props
  const { tabs, buttons } = {
    ...defaults,
    ...props,
  };

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <h1 className="mb3 text-6xl md:mb-6 md:text-9xl lg:text-10xl neue-semi-bold ">
          {t("title")}
        </h1>
        <div>
          <p className="md:text-md neue text-gray mb4">{t("description")}</p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full md:w-1/2 md:pr-6 lg:pr-10">
            <AnimatePresence mode="wait" initial={false}>
              {tabs.map((tab, index) => {
                if (activeTab !== index) return null;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex h-full w-full items-center justify-center"
                  >
                    {tab.image && (
                      <img
                        src={tab.image.src}
                        alt={tab.image.alt}
                        className="size-full md:mb-0"
                      />
                    )}
                    {tab.video && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="relative flex w-full items-center justify-center">
                            <img
                              src={tab.video.image.src}
                              alt={tab.video.image.alt}
                              className="size-full object-cover"
                            />
                            <span className="absolute inset-0 z-10 bg-black/50" />
                            <FaCirclePlay className="absolute z-20 size-16 text-white" />
                          </button>
                        </DialogTrigger>

                        <DialogContent>
                          {/* Tukaj lahko dodate vsebino dialoga, na primer video */}
                        </DialogContent>
                      </Dialog>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          <div className="w-full md:w-1/2 md:pl-6 lg:pl-10 flex flex-col justify-center">
            <div className="mb-8 hidden md:block"></div>
            <div className="static flex flex-col flex-wrap justify-stretch md:block">
              <div className="relative grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={clsx(
                      "flex cursor-pointer items-center gap-16 border-b border-border-primary py-4",
                      {
                        "opacity-100": activeTab === index,
                        "opacity-25": activeTab !== index,
                      }
                    )}
                  >
                    <div className="flex-none self-start">
                      <img
                        src={tab.icon.src}
                        alt={tab.icon.alt}
                        className="size-8"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold md:text-2xl neue-semi-bold">
                        {tab.heading}
                      </h2>
                      <motion.div
                        initial={false}
                        animate={{
                          height: activeTab === index ? "auto" : 0,
                          opacity: activeTab === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-2 neue">{tab.description}</p>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="res-now-contact">
              <p className="res-p">{tt("heading")}</p>
              <img
                alt="logo"
                className="arrow-r"
                src="/Images/right-arrow-alt.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Layout498.displayName = "Layout498";
