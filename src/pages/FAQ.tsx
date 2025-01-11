import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Gatekeeper?",
      answer: "Gatekeeper is an AI-powered platform designed to help users interact with artificial intelligence in a more effective and meaningful way."
    },
    {
      question: "How do I get started?",
      answer: "Simply navigate to the Chat section and start asking questions. The AI will guide you through the process."
    },
    {
      question: "Is my data secure?",
      answer: "We take data security seriously and implement industry-standard encryption and security measures to protect your information."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;