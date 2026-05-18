export const dynamic = "force-dynamic";

import ClientSection from "@/components/clientSection";
import ContactUs from "@/components/contactSection";
import CoreValues from "@/components/coreValues";
import CourseSection from "@/components/courseSection";
import ExpertSection from "@/components/expertSection";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/heroSection";
import MemberSection from "@/components/membersSection";
import Navbar from "@/components/navBar";
import SecondSection from "@/components/secondSection";
import ThingsWeAreGoodAtSlider from "@/components/things";

const heroContent = {
  tag: "Avinya Techknows",
  title: "Shaping Future Innovators with Industry Demand Skills",
  description:
    "Transform your career with future-ready programs in technology and innovation.",
  cta: "Contact us",
};

export default async function Home() {
  return (
    <main className="w-full h-full relative overflow-x-hidden">
      <Navbar />

      <section id="home">
        <Hero
          title={heroContent.title}
          tag={heroContent.tag}
          subtitle={heroContent.description}
          cta={heroContent.cta}
        />
      </section>

      <CoreValues />

      <section id="clients" className="hidden">
        <ClientSection />
      </section>

      <section id="about">
        <SecondSection />
      </section>

      <section id="about">
        <ThingsWeAreGoodAtSlider />
      </section>

      <section id="training">
        <ExpertSection />
      </section>

      <section id="services">
        <CourseSection />
      </section>

      <section id="members">
        <MemberSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
    </main>
  );
}
