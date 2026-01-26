
const members = [
  {
    name: "Mrs. Lavanya B.N.",
    role: "Founder & CEO",
  },
  {
    name: "Dr. Subramanyam B",
    role: "Managing Director",
  },
  {
    name: "M.N.Govindaraju",
    role: "Director",
  },
  {
    name: "Mr. Abhi Jaychandraj",
    role: "Advisor",
  },
]; 

export default function MemberSection() {
  return (
    <section className="bg-linear-to-r from-[#2a0405] to-[#8a1c1f] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-12">
          Meet Our Members
        </h2>

        {/* Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {members.map((member, index) => (
            <div key={index} className="text-white">
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-gray-300 mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

