export const dynamic = "force-dynamic";

import ClientSection from '@/components/clientSection';
import ContactUs from '@/components/contactSection';
import CourseSection from '@/components/courseSection';
import ExpertSection from '@/components/expertSection';
import FAQSection from '@/components/FAQSection';
import Hero from '@/components/heroSection';
import MemberSection from '@/components/membersSection';
import Navbar from '@/components/navBar';
import SecondSection from '@/components/secondSection';
import ThingsWeAreGoodAtSlider from '@/components/things';
import { fetchGraphQL } from '@/lib/graphql';

const HOME_QUERY = `
  query {
    pageBy(uri: "home") {
      heroSection {
        mainTag
        heroTitle
        heroShortDescription
        primaryButton
      }
    }
  }
`;

export default async function Home() {

    const data = await fetchGraphQL(HOME_QUERY);

  if (!data?.pageBy?.heroSection) {
    throw new Error('Home page data not found');
  }

  const hero = data.pageBy.heroSection;

  return (
    <main className="w-full h-full relative">
      <Navbar />

      <section id="home">
        <Hero
        title={hero.heroTitle}
        tag={hero.mainTag}
        subtitle={hero.heroShortDescription}
        cta={hero.primaryButton}
        />
      </section>

      <section id="clients">
        <ClientSection />
      </section>

      <section id="about">
        <SecondSection />
      </section>

      <section id="about">
        <ThingsWeAreGoodAtSlider />
      </section>

      <section id="services">
        <ExpertSection />
      </section>

      <section id="training">
        <CourseSection />
      </section>

      <section id="members">
        <MemberSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

    </main>
  );
}
