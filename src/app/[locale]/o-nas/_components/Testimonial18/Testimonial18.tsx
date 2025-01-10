import { BiSolidStar } from "react-icons/bi";
import { useTranslations } from "next-intl";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial18Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const getTestimonial18Defaults = (t: (key: string) => string): Props => ({
  heading: "Mnenja naših strank",
  description: "Več kot 200 ocen na booking.com spletni aplikaciji!",
  testimonials: [
    {
      quote: t("testimonials.0.quote"),
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote: t("testimonials.1.quote"),

      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 2",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote: t("testimonials.2.quote"),

      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 3",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote: t("testimonials.3.quote"),

      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote: t("testimonials.4.quote"),

      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 2",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote: t("testimonials.5.quote"),

      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 3",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
  ],
});

export const Testimonial18 = (props: Testimonial18Props) => {
  const t = useTranslations("testimonial18");

  const defaults = getTestimonial18Defaults(t);

  const { heading, description, testimonials } = {
    ...defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%]">
      <div className="container">
        <div className="mx-auto mb-12 w-full text-start md:mb-18 lg:mb-20 mb4">
          <h1 className="mb3 text-6xl md:mb-6 md:text-9xl lg:text-10xl neue-semi-bold">
            {heading}
          </h1>
          <p className="md:text-md neue text-gray mb4">{description}</p>
        </div>
        <div className="columns-1 gap-x-8 md:columns-2 lg:columns-3 test18">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="mb-8 inline-block w-full  gray-border p-6 md:p-8 break-inside-avoid"
            >
              <div className="mb-5 flex md:mb-6">
                {Array(testimonial.numberOfStars)
                  .fill(null)
                  .map((_, starIndex) => (
                    <BiSolidStar
                      key={starIndex}
                      className="mr-1 size-6 orange"
                    />
                  ))}
              </div>
              <blockquote className="md:text-md neue">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Testimonial18.displayName = "Testimonial18";
