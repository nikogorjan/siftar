// RestaurantMenu.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuSection = {
  id: string;
  columnText: string;
  verticalText: string;
  horizontalText: string;
  heading: string;
  description: string;
  image: ImageProps;
  items: MenuItem[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  menuSections: MenuSection[];
};

export type RestaurantMenuProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const RestaurantMenu = (props: RestaurantMenuProps) => {
  const { tagline, heading, description, menuSections } = {
    ...RestaurantMenuDefaults,
    ...props,
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const isMobile = useMediaQuery("(max-width: 991px)");

  const handleSetIsActive = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="menu" className="px-5 py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <p className="text-lg md:text-md">{description}</p>
        </div>

        {/* Menu Sections */}
        <div
          className={`flex ${
            isMobile ? "flex-col" : "flex-row"
          } overflow-hidden border border-border-primary lg:h-[90vh] w-full`}
        >
          {isMobile ? (
            // Mobile Layout: Vertical Accordion
            <AccordionMobile
              menuSections={menuSections}
              activeIndex={activeIndex}
              setActiveIndex={handleSetIsActive}
            />
          ) : (
            // Desktop Layout: Horizontal Accordion
            <AccordionDesktop
              menuSections={menuSections}
              activeIndex={activeIndex}
              setActiveIndex={handleSetIsActive}
            />
          )}
        </div>
      </div>
    </section>
  );
};

type AccordionMobileProps = {
  menuSections: MenuSection[];
  activeIndex: number | null;
  setActiveIndex: (index: number) => void;
};

const AccordionMobile: React.FC<AccordionMobileProps> = ({
  menuSections,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className="w-full">
      {menuSections.map((section, index) => (
        <div key={section.id} className="border-b border-border-primary">
          <button
            onClick={() => setActiveIndex(index)}
            className="w-full text-left p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-colors duration-300 focus:outline-none"
            aria-expanded={activeIndex === index}
          >
            <div className="flex items-center">
              <span className="mr-4 font-bold">{section.columnText}</span>
              <span className="text-xl font-semibold">
                {section.horizontalText}
              </span>
            </div>
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-white">
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    {section.heading}
                  </h3>
                  <p className="md:text-md">{section.description}</p>
                  <div className="mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12">
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      className="w-full h-full object-cover rounded"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="mb-4">
                        <div className="flex justify-between">
                          <h4 className="font-semibold">{item.name}</h4>
                          <span className="text-gray-500">{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

type AccordionDesktopProps = {
  menuSections: MenuSection[];
  activeIndex: number | null;
  setActiveIndex: (index: number) => void;
};

const AccordionDesktop: React.FC<AccordionDesktopProps> = ({
  menuSections,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className="flex w-full">
      {/* Triggers and Content */}
      <div className="flex flex-row w-full">
        {menuSections.map((section, index) => (
          <div
            key={section.id}
            className={`flex-shrink-0 flex flex-col transition-all duration-300 ${
              activeIndex === index ? "w-96" : "w-20"
            } border-r border-border-primary`}
          >
            {/* Trigger */}
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className={`flex items-center justify-center h-20 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 focus:outline-none`}
              aria-expanded={activeIndex === index}
            >
              <div className="flex flex-col items-center">
                <span className="font-bold">{section.columnText}</span>
                <span className="text-base font-semibold">
                  {section.verticalText}
                </span>
              </div>
              <svg
                className={`w-6 h-6 ml-2 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Content */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col p-6 bg-white overflow-auto"
                >
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    {section.heading}
                  </h3>
                  <p className="md:text-md">{section.description}</p>
                  <div className="mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12">
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      className="w-full h-full object-cover rounded"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="mb-4">
                        <div className="flex justify-between">
                          <h4 className="font-semibold">{item.name}</h4>
                          <span className="text-gray-500">{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};
export const RestaurantMenuDefaults: Props = {
  tagline: "Our Menu",
  heading: "Delicious Offerings",
  description:
    "Explore our diverse range of dishes prepared with the freshest ingredients.",
  menuSections: [
    {
      id: "appetizers",
      columnText: "01",
      verticalText: "Appetizers",
      horizontalText: "Appetizers",
      heading: "Start Your Meal",
      description:
        "Begin your dining experience with our selection of appetizers.",
      image: {
        src: "https://via.placeholder.com/400x300",
        alt: "Appetizers",
      },
      items: [
        {
          name: "Bruschetta",
          description: "Grilled bread topped with fresh tomatoes and basil.",
          price: "$8.99",
        },
        {
          name: "Stuffed Mushrooms",
          description: "Mushrooms filled with cheese and herbs.",
          price: "$9.99",
        },
      ],
    },
    {
      id: "main-courses",
      columnText: "02",
      verticalText: "Main Courses",
      horizontalText: "Main Courses",
      heading: "Hearty & Satisfying",
      description: "Enjoy our range of hearty and satisfying main dishes.",
      image: {
        src: "https://via.placeholder.com/400x300",
        alt: "Main Courses",
      },
      items: [
        {
          name: "Grilled Salmon",
          description: "Fresh salmon grilled to perfection.",
          price: "$18.99",
        },
        {
          name: "Steak Frites",
          description: "Juicy steak served with crispy fries.",
          price: "$22.99",
        },
      ],
    },
    {
      id: "desserts",
      columnText: "03",
      verticalText: "Desserts",
      horizontalText: "Desserts",
      heading: "Sweet Endings",
      description:
        "End your meal on a sweet note with our delightful desserts.",
      image: {
        src: "https://via.placeholder.com/400x300",
        alt: "Desserts",
      },
      items: [
        {
          name: "Tiramisu",
          description: "Classic Italian dessert with coffee and mascarpone.",
          price: "$6.99",
        },
        {
          name: "Cheesecake",
          description: "Creamy cheesecake with a graham cracker crust.",
          price: "$6.99",
        },
      ],
    },
    {
      id: "beverages",
      columnText: "04",
      verticalText: "Beverages",
      horizontalText: "Beverages",
      heading: "Refresh Yourself",
      description: "Choose from our selection of refreshing beverages.",
      image: {
        src: "https://via.placeholder.com/400x300",
        alt: "Beverages",
      },
      items: [
        {
          name: "Lemonade",
          description: "Freshly squeezed lemonade.",
          price: "$3.99",
        },
        {
          name: "Iced Tea",
          description: "Refreshing iced tea with lemon.",
          price: "$3.99",
        },
      ],
    },
  ],
};

RestaurantMenu.displayName = "RestaurantMenu";
