"use client";

import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { fetchStrapi } from "./api";
import useSWR from "swr";
import { useLocale } from "next-intl";
import { useEffect } from "react";
import "../../../../globals.css";
import { useTranslations } from "next-intl";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  footerHeading: string;
  footerDescription: string;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type RestaurantMenuProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const RestaurantMenu = () => {
  const {} = {};

  const locale = useLocale(); // Get the current locale from next-intl

  const fetcher = (endpoint: string) => fetchStrapi(endpoint, locale);

  // Fetch "tedenska ponudba" with no pagination limit
  const { data: tedenskaData, error: tedenskaError } = useSWR(
    "/kategorijas?populate[malice][populate][0]=tedenskaPonudba&pagination[limit]=-1",
    fetcher
  );

  // Fetch "kategorijas" with no pagination limit
  const { data: kategorijasData, error: kategorijasError } = useSWR(
    "/kategorijas?populate=*&pagination[limit]=-1",
    fetcher
  );

  const filteredTedenskaData = tedenskaData?.data?.filter(
    (item: any) => item.jeTedenskaPonudba
  );

  const filteredKategorijasData = kategorijasData?.data?.filter(
    (item: any) => !item.jeTedenskaPonudba
  );

  const combinedData = [
    ...(filteredTedenskaData ?? []),
    ...(filteredKategorijasData ?? []),
  ].sort((a: any, b: any) => Number(a.Zaporedje) - Number(b.Zaporedje));

  useEffect(() => {
    console.log("combinedData");
    console.log(combinedData);
  }, [combinedData]);

  const t = useTranslations("GostiscePage");

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="info-header mtb">{t("menuh")}</h2>
          <p className="text-xl font-thin md:text-2xl neue mb-8">
            {t("menup")}
          </p>
        </div>
        <Accordion type="multiple">
          {combinedData.map((menu, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:py-5 md:text-md w-full relative">
                <h2 className="neue-bold clamp-category uppercase gray-bold text-left">
                  {menu.Kategorija}
                </h2>
              </AccordionTrigger>
              <AccordionContent className="md:py-6">
                <div className="mt-4 md:pt-6">
                  {menu.jeTedenskaPonudba ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-16">
                      {menu.malice.map((malica, index) => (
                        <div className="w-full flex flex-col" key={index}>
                          <h3 className="neue text-6xl mb-4 border-b pb">
                            {malica.Dan}
                          </h3>

                          {malica.tedenskaPonudba.map((tmalica, index) => (
                            <div key={index} className="mb-8">
                              <div className="w-full flex justify-between items-start gap-3">
                                <p className="neue-semi-bold food-name-font mb-3">
                                  {tmalica.Ime}
                                </p>
                                <p className="neue">{tmalica.Cena}</p>
                              </div>
                              <p className="neue">{tmalica.Opis}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Render this block if jeTedenskaPonudba is false
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-16">
                      {menu.kategorijas.map((malica, index) => (
                        <div className="mb-8">
                          <div className="w-full flex justify-between items-start gap-3">
                            <p className="neue-semi-bold food-name-font mb-3">
                              {malica.Ime}
                            </p>
                            <p className="neue">{malica.Cena}</p>
                          </div>
                          <p className="neue">{malica.Opis}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
