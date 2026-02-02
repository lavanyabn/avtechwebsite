import { FaStarOfLife } from "react-icons/fa6";

/* ---------------- TYPES ---------------- */

type WPPageResponse = {
  id: number;
  service_title?: string[]; // 👈 PODS exposes it at root
};

type ServiceItem = {
  name: string;
};

/* ---------------- FETCH ---------------- */

async function getServices(): Promise<ServiceItem[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_LINK}/wp-json/wp/v2/pages/21`,
    {
      next: { revalidate: 60 }, // ISR
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  const page: WPPageResponse = await res.json();

  const titles = page.service_title ?? [];

  console.log("titles" + titles)

  return titles.map((title) => ({
    name: title,
  }));
}

/* ---------------- COMPONENT ---------------- */

export default async function ExpertSection() {
  const items = await getServices();

  return (
    <div className="w-full min-h-screen py-6 flex flex-col justify-center items-center">
      <div className="md:py-12 py-8">
        <h2 className="text-center md:text-4xl text-xl font-semibold md:leading-14 leading-auto text-[#cfb070]">
          Delivering Excellence Through <br className="md:block hidden" /> Deep
          Technical Expertise
        </h2>
      </div>

      <div className="grid md:grid-cols-3 md:px-0 px-4 grid-cols-2 gap-6">
        `{items.map((item, index) => (
          <div key={index} className="flex gap-3 cursor-pointer">
            <div className="flex gap-3 border rounded-md justify-center w-full hover:border-b border-[#8a1c1f20] ease-linear duration-500 items-center p-3">
              <FaStarOfLife className="text-[#8a1c1f]" />
              <span className="text-wrap">{item.name}</span>
            </div>
          </div>
        ))}`
      </div>
    </div>
  );
}



// import { FaStarOfLife } from "react-icons/fa6";

// const items = [
//   { name: "AI Agent with Full Stack Development" },
//   { name: "AI Development (ML/DL/LLM)" },
//   { name: "Data Analytics using Generative AI" },
//   { name: "DevOps, Docker & Kubernetes" },
//   { name: "UI/UX Design using Generative AI" },
//   { name: "Cloud Computing & DevOps" },
//   { name: "VLSI, Embedded Systems & IoT" },
//   { name: "Blockchain & Web3 Development" },
//   { name: "Java (HackerRank & HackerEarth)" },
//   { name: "Cyber Security" },
//   { name: "Mobile App Development" },
//   { name: "Agentic AI" },
//   { name: "Python with SQL & SRM" },
//   { name: "Java & DevOps" },
//   { name: "Java, Selenium, CI/CD & API Testing" },
//   { name: "Full Stack Development" },
//   { name: "Generative AI" },
//   { name: "DevOps CI/CD" },
//   { name: "AWS, Azure & Power BI" },
//   { name: "Advanced AI Tools" },
//   { name: "Placement Training" },
//   { name: "Company-Specific Training" },
//   { name: "Machine Learning" },
//   { name: "Deep Learning" },
//   { name: "Large Language Models" },
//   { name: "Advanced Automation Models" },
//   { name: "Spring Boot" },
//   { name: "Web Development" },
//   { name: "R Programming" },
//   { name: "Cryptography" },
//   { name: "Soft Skill Training" },
//   { name: "Aptitude Training" },
// ];

// export default function ExpertSection() {
//   return (
//     <div className="w-full min-h-screen py-6 flex flex-col justify-center items-center">
//       <div className="md:py-12 py-8">
//         <h2 className="text-center md:text-4xl text-xl font-semibold md:leading-14 leading-auto text-[#cfb070]">
//           Delivering Excellence Through <br className="md:block hidden" /> Deep Technical Expertise
//         </h2>
//       </div>
//       <br />
//       <div className="grid md:grid-cols-3 md:px-0 px-4 grid-cols-2 gap-6">
//         {items.map((item, index) => (
//           <div key={index} className="flex gap-3 cursor-pointer">
//             <div className="flex gap-3 border rounded-md justify-center  hover:border-b border-[#8a1c1f20] ease-linear duration-500 items-center p-3">
//               <FaStarOfLife className="text-[#8a1c1f]" />
//               <span className="text-wrap">{item.name}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
