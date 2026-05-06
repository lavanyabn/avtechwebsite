import FeaturedCard from "./featuredCard";

const items = [
  {
    title: "Value Added Course",
    context:
      "Industry-focused value added courses enhancing technical knowledge, practical exposure, and career readiness.",
  },
  {
    title: "Skill Development",
    context:
      "Skill development programs strengthening communication, problem-solving, teamwork, and workplace readiness.",
  },
  {
    title: "Industry Talk",
    context:
      "Industry expert talks sharing insights, trends, challenges, and real-world career guidance.",
  },
  {
    title: "Curriculum Oriented Program",
    context:
      "Curriculum-aligned programs integrating academic concepts with practical applications and assessments.",
  },
  {
    title: "Technical Training",
    context:
      "Hands-on technical training in emerging technologies delivered by experienced industry professionals.",
  },
  {
    title: "Placement / Corporate Training",
    context:
      "Soft skill development, company-oriented training, aptitude, verbal and technical preparation, and problem-solving skills using platforms like LeetCode and HackerRank.",
  },
  {
    title: "Internships",
    context:
      "Structured internships providing industry exposure, mentorship, project experience, and professional growth.",
  },
  {
    title: "Hackathon",
    context:
      "Collaborative hackathons promoting innovation, creativity, teamwork, and real-time problem-solving.",
  },
  {
    title: "Mini OS Development",
    context:
      "Structured mini OS training offering kernel development, mentorship, projects, and system-level programming exposure.",
  },
];

export default async function CourseSection() {
  return (
    <section className="w-full h-full py-12 flex flex-col gap-6 justify-center items-center">
      <FeaturedCard />
      <div className="py-12 text-center w-full">
        <h3 className="text-4xl font-bold  text-[#d19a3a]">Our Services</h3>
      </div>
      <div>
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map((item, index) => (
              <div key={index}>
                <h3 className="text-[#d19a3a] font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-700">{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
