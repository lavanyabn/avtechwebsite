import EmblaCarousel  from "./clientSlider";

export default function ClientSection() {
    return (
        <>
        <section className="w-full h-auto flex flex-col justify-center items-center py-6">
            <div className="py-3 flex my-2 justify-center items-center">
                <h2 className="text-2xl font-semibold text-[#cfb070]">Clients</h2>
            </div>
            <EmblaCarousel />
        </section>
        </>
    );
}