'use client'
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Who are Avinya TechKnows?",
    answer:
      "Avinya TechKnows is a technology-driven platform focused on digital innovation, skill development, and industry-aligned training across software, AI, cloud, and emerging technologies."
  },
  {
    question: "Why should I choose Avinya TechKnows?",
    answer:
      "We bridge the gap between academia and industry through practical, application-driven learning backed by experienced engineers and real-world projects."
  },
  {
    question: "What services do you provide?",
    answer:
      "Our services include technical training, internships, AI and cloud solutions, enterprise software development, and industry-oriented value-added programs."
  },
  {
    question: "Are the programs industry-aligned?",
    answer:
      "Yes. All programs are designed to align with current industry demands, combining theory, hands-on labs, assessments, and mentorship."
  },
  {
    question: "Do you offer corporate or placement training?",
    answer:
      "We provide corporate training, placement-oriented programs, aptitude training, and soft skill development tailored to organizational needs."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
                >
                  <span className="text-base font-medium text-gray-900">
                    {faq.question}
                  </span>

                  <span
                    className={`ml-4 transform transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
