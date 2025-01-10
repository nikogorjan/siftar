import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";

export const Testimonial35 = (props) => {
  const { heading, description, tabs } = {
    ...Testimonial35Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl neue mbottom">
              {heading}
            </h1>
          </div>
        </div>
        <div className="relative grid auto-cols-fr grid-cols-1 gap-x-12 lg:gap-x-0 my-custom-border">
          <Tabs defaultValue={tabs[0].value}>
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:animate-tabs"
              >
                <TestimonialCard tab={tab} />
              </TabsContent>
            ))}
            <TabsList className="desktop-row testimonial-wrapper-padding margintop-tabs ">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.value}
                  className="tabs-trigger flex w-full items-center justify-center gap-4 border-0 border-t border-border-[#999] px-6 py-4 duration-0 data-[state=active]:bg-background-[#999] md:border-r md:px-8 md:py-6 md:last-of-type:border-r-0 data-[state=active]:[border-top:1px_solid_#fff]"
                >
                  <p className="text-black font-bold neue">
                    {tab.content.name}
                  </p>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ tab }) => {
  return (
    <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 p-6 md:grid-cols-2 md:p-8 gap-x-12 lg:gap-y-16 lg:p-12 testimonial-wrapper-padding testimonial-gap">
      <div className="order-last md:order-first">
        <img
          src={tab.content.image.src}
          alt={tab.content.image.alt}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start testimonial-holder-padding">
        <div>
          <div className="mb-6 flex items-center justify-start md:mb-8 mt-6 md:mt-0">
            {Array(tab.content.numberOfStars)
              .fill(null)
              .map((_, starIndex) => (
                <BiSolidStar key={starIndex} className="mr-1 size-6 orange" />
              ))}
          </div>
          <blockquote className="text-xl font-bold md:text-2xl neue">
            {tab.content.quote}
          </blockquote>
        </div>
        <div className="mt-6 flex flex-col flex-nowrap md:mt-8">
          <p className="font-semibold neue">{tab.content.name}</p>
        </div>
      </div>
    </div>
  );
};

export const Testimonial35Defaults = {
  heading: "Mnenja naših strank",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  tabs: [
    {
      value: "tab-1",
      trigger: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Webflow logo 1",
      },
      content: {
        numberOfStars: 5,
        quote:
          '"Zelo dobro mesto, zelo dobra hrana, nizke cene, zaposleni so zelo prijazni in ustrežljivi, mesto ima parkirna mesta s streho in lahko še celo polnite električna vozila."',
        image: {
          src: "/Images/customer-food1.webp",
          alt: "Testimonial image 1",
        },
        name: "Robert",
        position: "Position",
        companyName: "Company name",
      },
    },
    {
      value: "tab-2",
      trigger: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
        alt: "Relume logo 2",
      },
      content: {
        numberOfStars: 5,
        quote:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Testimonial image 2",
        },
        name: "Andrei",
        position: "Position",
        companyName: "Company name",
      },
    },
    {
      value: "tab-3",
      trigger: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Webflow logo 3",
      },
      content: {
        numberOfStars: 5,
        quote:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Testimonial image 3",
        },
        name: "Duša",
        position: "Position",
        companyName: "Company name",
      },
    },
  ],
};

Testimonial35.displayName = "Testimonial35";
