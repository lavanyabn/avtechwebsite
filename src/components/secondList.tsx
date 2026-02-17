export default function SecondList() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Column 1 */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-black">
              Engineering the <br className="hidden md:block" />
              Future Intelligence
            </h2>
            <p className="text-gray-700 leading-relaxed text-base ">
              At Avinya Techknows, we harness AI, cloud, and full-stack
              innovation to shape smarter, scalable, and future-ready digital
              ecosystems. Our solutions evolve with your vision.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-black">
              Technology That <br className="hidden md:block" />
              Thinks Ahead
            </h2>
            <p className="text-gray-700 leading-relaxed text-base ">
              We don’t just build technology — we engineer foresight. Our
              intelligent solutions anticipate tomorrow’s challenges to empower
              businesses today.
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-black">
              Reimagining Possibilities <br className="hidden md:block" />
              with AI and Cloud
            </h2>
            <p className="text-gray-700 leading-relaxed text-base ">
              From predictive analytics to scalable infrastructure, we help you
              unlock new opportunities through seamless AI integration and
              cloud-native architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
