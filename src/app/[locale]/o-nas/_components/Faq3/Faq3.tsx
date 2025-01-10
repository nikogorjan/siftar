import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useTranslations } from "next-intl";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type Faq3Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const getFaq3Defaults = (t: (key: string) => string): Props => ({
  heading: "FAQs",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  button: {
    title: "Contact",
    variant: "secondary",
  },
  questions: [
    {
      title: t("0.question"),
      answer: t("0.answer"),
    },
    {
      title: t("1.question"),
      answer: t("1.answer"),
    },
    {
      title: t("2.question"),
      answer: t("2.answer"),
    },
    {
      title: t("3.question"),
      answer: t("3.answer"),
    },
    {
      title: t("4.question"),
      answer: t("4.answer"),
    },
    {
      title: t("6.question"),
      answer: t("6.answer"),
    },
  ],
});

export const Faq3 = (props: Faq3Props) => {
  const t = useTranslations("faq");
  const tt = useTranslations("fq");

  const defaults = getFaq3Defaults(t);

  const { heading, description, button, questions } = {
    ...defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%]">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb3 text-6xl md:mb-6 md:text-9xl lg:text-10xl neue-semi-bold ">
            {tt("heading")}
          </h2>
        </div>
        <Accordion type="multiple">
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:py-5 md:text-md neue-semi-bold">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 neue">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export const Faq3Defaults: Props = {
  heading: "FAQs",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  button: {
    title: "Contact",
    variant: "secondary",
  },
  questions: [
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
  ],
};

Faq3.displayName = "Faq3";
