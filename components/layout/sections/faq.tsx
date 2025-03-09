"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQSection = () => {
  const { t } = useTranslation();
  const faqData = t("hp-banner-6.list-faq", { returnObjects: true }) as Record<
  string,
  { title: string; answer: string }
>;
const formattedFAQList: FAQProps[] = Object.entries(faqData).map(
  ([key, faq], index) => ({
    question: faq.title,
    answer: faq.answer,
    value: `item-${index + 1}`,
  })
);

  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
       { t("hp-banner-6.title")}
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {formattedFAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
