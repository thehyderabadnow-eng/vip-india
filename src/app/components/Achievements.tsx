import { Trophy, Award, Star, FileText, CheckCircle2, TrendingUp } from "lucide-react";

export default function Achievements() {
  const milestones = [
    {
      title: "Warangal Drainage Masterplan",
      category: "Municipal",
      impact: "Adopted by GWMC, resolving flooding in 12 low-lying colonies.",
      icon: <CheckCircle2 className="text-vip-green" size={24} />
    },
    {
      title: "Rural PHC Doctor Allocation",
      category: "Healthcare",
      impact: "Drafted policy whitepaper leading to 45 new appointments in Khammam.",
      icon: <FileText className="text-vip-blue" size={24} />
    },
    {
      title: "Govt School Digital Infrastructure",
      category: "Education",
      impact: "Secured CSR funding for 200+ laptops across Karimnagar districts.",
      icon: <TrendingUp className="text-vip-saffron" size={24} />
    }
  ];

  const appreciations = [
    {
      award: "Certificate of Commendation",
      issuer: "District Collectorate, Warangal",
      desc: "Awarded for exceptional civic tech contribution and data-driven governance support during the 2025 Monsoons.",
      year: "2025"
    },
    {
      award: "Best Grassroots Think-Tank",
      issuer: "Telangana Policy Conclave",
      desc: "Recognized for the 'Zero Pomp' digital framework and successful tracking of over 1,000 public grievances.",
      year: "2026"
    },
    {
      award: "Excellence in Public Advocacy",
      issuer: "State Civic Action Forum",
      desc: "Appreciation for drafting the standardized BC Welfare hostel infrastructure guidelines.",
      year: "2026"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100" id="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-vip-green font-bold tracking-wider uppercase text-sm mb-2 block">
            Proof of Work
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-vip-blue">
            Impact & Appreciations
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
            We measure our success not by the number of meetings held, but by the number of policies implemented and issues permanently resolved.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Key Milestones / Resolved Issues */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
              <Trophy className="text-vip-saffron" size={28} />
              <h3 className="text-2xl font-bold text-vip-blue">Major Resolutions</h3>
            </div>
            
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-vip-light text-vip-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {milestone.category}
                    </span>
                    {milestone.icon}
                  </div>
                  <h4 className="text-lg font-bold text-vip-blue mb-2">{milestone.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{milestone.impact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Awards & Appreciations */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
              <Award className="text-vip-green" size={28} />
              <h3 className="text-2xl font-bold text-vip-blue">Official Recognitions</h3>
            </div>

            <div className="space-y-6">
              {appreciations.map((app, index) => (
                <div key={index} className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm pl-16 hover:border-vip-green/30 transition-colors">
                  {/* Decorative Icon Placement */}
                  <div className="absolute left-6 top-6 bg-vip-light p-2 rounded-full text-vip-green">
                    <Star size={20} />
                  </div>
                  
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-bold text-vip-blue">{app.award}</h4>
                    <span className="text-sm font-bold text-gray-400">{app.year}</span>
                  </div>
                  <p className="text-vip-saffron font-semibold text-sm mb-3">{app.issuer}</p>
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    "{app.desc}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}