import FAQAccordion, { FAQItem } from "@/components/faq/FAQAccordion";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeading from "@/components/ui/SectionHeading";

const items: FAQItem[] = [
  {
    question: "What’s the best way to prepare for Income Tax filing?",
    answer:
      "We help you gather the right documents, verify key figures, and build a well-organized file with a timeline so filing stays smooth.",
  },
];


export default function FaqPreview() {
  return (
    <section className="py-14">
      <div className="mx-auto w-[min(1200px,100%)] px-4">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers that reduce compliance stress"
          description="A quick preview. For the full list, visit our FAQ page."
        />

        <div className="mt-10">
          <GlowCard>
            <FAQAccordion items={items} />
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

