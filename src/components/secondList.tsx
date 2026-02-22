interface WordPressPageData {
  second_title: string[];
  second_content: string[];
}

export default function SecondList({ data }: { data: WordPressPageData }) {
  const titles = data?.second_title || [];
  const contents = data?.second_content || [];

  // console.log("second Content" + contents);

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {titles.map((title, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-xl font-semibold text-black whitespace-pre-line">
                {/* whitespace-pre-line helps if there are hidden \n in the string */}
                {title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                {/* Pulling the content using the current title's index */}
                {contents[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
