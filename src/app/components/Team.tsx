import { Target, Shield, BookOpen } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Vamshi Krishna Pendyala",
      role: "Director & UI Architect",
      expertise: "Digital Infrastructure & Systems",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80", // Placeholder
    },
    {
      name: "Tejesh Tamminana",
      role: "Business Partner",
      expertise: "Operations & Strategy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80", // Placeholder
    },
    {
      name: "Sangem Kumara Swamy",
      role: "Business Partner",
      expertise: "Grassroots Outreach",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80", // Placeholder
    }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: About Our Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-vip-blue leading-tight mb-6">
              Zero Pomp. <br />
              <span className="text-vip-saffron">Pure Policy.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              VIP (Volunteers for Ideal Politics) is a grassroots-driven policy think-tank. We do not believe in garlands, flexis, or political theater. We believe in the power of data, expert discussion, and community action to drive genuine, long-term change.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Shield className="text-vip-green flex-shrink-0" size={24} />
                <span className="font-semibold text-vip-blue">Non-Partisan Approach</span>
              </div>
              <div className="flex items-center gap-4">
                <Target className="text-vip-green flex-shrink-0" size={24} />
                <span className="font-semibold text-vip-blue">Data-Backed Advocacy</span>
              </div>
              <div className="flex items-center gap-4">
                <BookOpen className="text-vip-green flex-shrink-0" size={24} />
                <span className="font-semibold text-vip-blue">Policy-First Mentality</span>
              </div>
            </div>
          </div>
          <div className="bg-vip-light p-8 rounded-3xl border border-gray-100 shadow-inner">
            <h3 className="text-xl font-bold text-vip-blue mb-4">Our Tagline</h3>
            <div className="text-2xl font-bold font-telugu text-vip-saffron leading-loose">
              గుర్తిద్దాం • చర్చిద్దాం • రూపొందిద్దాం • పరిష్కరిద్దాం
            </div>
            <p className="mt-4 text-gray-500 text-sm font-medium">
              Identify. Discuss. Formulate. Resolve.
            </p>
          </div>
        </div>

        {/* Bottom Section: Core Committee */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-vip-blue">Core Committee</h2>
          <p className="text-gray-500 mt-2">The team driving the digital and operational strategy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="h-64 overflow-hidden relative">
                {/* Image Placeholder - Replace src with actual photos later */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-vip-blue mb-1">{member.name}</h3>
                <p className="text-sm font-bold text-vip-saffron uppercase tracking-wide mb-2">{member.role}</p>
                <p className="text-xs font-medium text-gray-500">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}