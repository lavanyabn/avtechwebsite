import ClientSection from '@/components/clientSection';
import ContactUs from '@/components/contactSection';
import CourseSection from '@/components/courseSection';
import ExpertSection from '@/components/expertSection';
import FAQSection from '@/components/FAQSection';
import Hero from '@/components/heroSection';
import MemberSection from '@/components/membersSection';
import Navbar from '@/components/navBar';
import SecondSection from '@/components/secondSection';
// import { fetchGraphQL } from '@/lib/graphql';

// const HOME_QUERY = `
//   query {
//     pageBy(uri: "home") {
//       heroSection {
//         heroTitle
//         heroShortDescription
//         primaryButton
//       }
//     }
//   }
// `;


// export default async function Home() {
//   const data = await fetchGraphQL(HOME_QUERY);

//   if (!data?.pageBy?.heroSection) {
//     throw new Error('Home page data not found');
//   }

//   const hero = data.pageBy.heroSection;

//   return (
//     <>
//     <Hero
//     title={hero.heroTitle}
//   subtitle={hero.heroShortDescription}
//   cta={hero.primaryButton}
//     />
//     </>
//   );
// }

export default function Home() {
  return (
    <main className="w-full h-full relative">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="clients">
        <ClientSection />
      </section>

      <section id="about">
        <SecondSection />
      </section>

      <section id="services">
        <ExpertSection />
      </section>

      <section id="training">
        <CourseSection />
      </section>

      <section id="team">
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