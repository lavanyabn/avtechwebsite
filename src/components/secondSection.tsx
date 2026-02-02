import { fetchGraphQL } from "@/lib/graphql";
import SecondList from "./secondList";

const SECOND_SECTION_QUERY = `
  query {
    pageBy(uri: "home") {
        secondSection {
        secondTitle
        secondSubtitle
        }
    }
  }
`;

export default async function  SecondSection() {

      const data = await fetchGraphQL(SECOND_SECTION_QUERY);
    
      
      if (!data?.pageBy?.secondSection) {
          throw new Error('Second Section page data not found');
        }
        
        const secondSection = data.pageBy.secondSection;
        console.log("secondSection"+secondSection.secondTitle);
    return (
        <>
        <div className="w-full h-full md:py-12 py-6 md:px-0 px-4 flex flex-col justify-center items-center">
            <div className="md:w-2/3 w-full  md:h-[75vh] h-full  relative overflow-hidden flex bg-[url('/secondSection.png')] bg-cover bg-center bg-no-repeat  rounded-lg shadow-lg">
                <div className="w-full h-full p-10 flex flex-col gap-3 justify-end items-start bg-black/50 text-white">
                   <h2 className="text-left text-wrap md:w-1/2 w-full text-2xl">{secondSection.secondTitle}</h2>
                    <p className="text-sm text-white/80">{secondSection.secondSubtitle}</p>        
                </div>
            </div>
           <SecondList />
        </div>
        </>
    );    
}