import FeaturedCard from "./featuredCard";

type WPPageResponse = {
  id: number;
  training_titles?: string[]; // 👈 PODS exposes it at root
  training_message?: string[]; // 👈 PODS exposes it at root
};

type ServiceItem = {
  name: string;
  description: string;
};

async function getServices(): Promise<ServiceItem[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_LINK}/wp-json/wp/v2/pages/21`,
    {
      next: { revalidate: 60 }, // ISR
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  const page: WPPageResponse = await res.json();

  const titles = page.training_titles ?? [];
  const descriptions = page.training_message ?? [];

  console.log(titles);
  console.log(descriptions);

  // safer mapping (prevents mismatch issues)
  const length = Math.min(titles.length, descriptions.length);

  return Array.from({ length }, (_, index) => ({
    name: titles[index],
    description: descriptions[index],
  }));
}

export default async function CourseSection() {
  const items = await getServices();

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
                  {item.name}
                </h3>

                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
