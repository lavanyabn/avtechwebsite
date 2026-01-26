import Image from "next/image";
import ActionBtn from "./actionBtn";

const features = [
  {
    title: "Value Added Course",
    description:
      "Industry-focused value added courses enhancing technical knowledge, practical exposure, and career readiness.",
  },
  {
    title: "Skill Development",
    description:
      "Skill development programs strengthening communication, problem-solving, teamwork, and workplace readiness.",
  },
  {
    title: "Industry Talk",
    description:
      "Industry expert talks sharing insights, trends, challenges, and real-world career guidance.",
  },
  {
    title: "Curriculum Oriented Program",
    description:
      "Curriculum-aligned programs integrating academic concepts with practical applications and assessments.",
  },
  {
    title: "Technical Training",
    description:
      "Hands-on technical training in emerging technologies delivered by experienced industry professionals.",
  },
  {
    title: "Placement / Corporate Training",
    list: [
      "Soft Skill Development",
      "Company Oriented Training",
      "Aptitude",
      "Verbal and Technical",
      "Problem solving skills using Leetcode, Hackerrank",
    ],
  },
  {
    title: "Internships",
    description:
      "Structured internships providing industry exposure, mentorship, project experience, and professional growth.",
  },
  {
    title: "Hackathon",
    description:
      "Collaborative hackathons promoting innovation, creativity, teamwork, and real-time problem-solving.",
  },
  {
    title: "Mini OS Development",
    description:
      "Structured Mini OS training offering kernel development, mentorship, projects, and system-level programming exposure.",
  },
];

export default function CourseSection() {
  return (
    <section className="w-full h-full py-12 flex flex-col gap-6 justify-center items-center">
      <FeaturedCard />
      <div>
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((item, index) => (
              <div key={index}>
                <h3 className="text-[#d19a3a] font-semibold mb-2">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-sm text-gray-700">{item.description}</p>
                )}

                {item.list && (
                  <ul className="text-sm text-gray-700 space-y-1">
                    {item.list.map((point, i) => (
                      <li key={i}>&gt; {point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedCard() {
  return (
    <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
      <div className="h-full flex justify-center items-center object-cover overflow-hidden">
        <Image
          src={"/thirdSection.png"}
          width={500}
          height={500}
          alt="People working together"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-4 p-4">
        <h2 className="text-3xl font-bold md:w-1/2 w-full text-[#cfb070]">
          Industry Aligned Learning & Career Development
        </h2>
        <p className="text-left w-3/4 text-lg">
          Structured learning programs aligned with academic syllabi,
          integrating theory with hands-on applications, projects, and
          continuous assessments.
        </p>
        <ActionBtn />
      </div>
    </div>
  );
}
