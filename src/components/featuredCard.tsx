import Image from "next/image";

export default async function FeaturedCard() {
  return (
    <>
      {/* <div className="w-full py-4 flex justify-center items-center">
        <h2 className="text-4xl">Training</h2>
      </div> */}
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
        <div className="h-full flex justify-center items-center object-cover overflow-hidden">
          <Image
            src="/thirdSection.png"
            width={500}
            height={500}
            alt="Training"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-4 p-4">
          <h2 className="text-3xl font-bold md:w-2/3 w-full text-[#cfb070]">
            Industry Aligned Learning & Career Development
          </h2>
          <p className="text-left w-3/4 text-lg">
            Structured learning programs aligned with academic syllabus,
            integrating theory with hands-on applications, projects, and
            continuous assessments.
          </p>
        </div>
      </div>
    </>
  );
}
