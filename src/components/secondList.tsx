interface WordPressPageData {
  second_title: string[];
  second_content: string[];
}

// export default function SecondList({ data }: { data: WordPressPageData }) {
//   const titles = data?.second_title || [];
//   const contents = data?.second_content || [];

export default function SecondList() {
  const pdatas = [
    {
      title: "Engineering the Future Intelligence",
      content:
        "At Avinya Techknows, we harness AI, cloud, and full-stack innovation to shape smarter, scalable, and future-ready digital ecosystems. Our solutions evolve with your vision",
    },
    {
      title: "Technology That Thinks Ahead",
      content:
        "We don’t just build technology we engineer foresight. Our intelligent solutions anticipate tomorrow’s challenges to empower businesses today.",
    },
    {
      title: "Reimagining Possibilities with AI and Cloud",
      content:
        "From predictive analytics to scalable infrastructure, we help you unlock new opportunities through seamless AI integration and cloud-native architecture.",
    },
  ];

  // console.log("second Content" + contents);

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {pdatas.map((pd, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-xl font-semibold text-black whitespace-pre-line">
                {/* whitespace-pre-line helps if there are hidden \n in the string */}
                {pd.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                {/* Pulling the content using the current title's index */}
                {pd.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
