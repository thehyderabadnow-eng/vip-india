import { Search, MessageSquare, FileSignature, CheckCircle } from "lucide-react";

export default function Roadmap() {
  const steps = [
    {
      icon: <Search size={42} className="text-vip-blue" />,
      title: "Identify",
      telugu: "గుర్తిద్దాం",
      desc: "Map grassroots issues across districts via community reporting."
    },
    {
      icon: <MessageSquare size={42} className="text-vip-blue" />,
      title: "Discuss",
      telugu: "చర్చిద్దాం",
      desc: "Open deliberations with subject experts and local citizens."
    },
    {
      icon: <FileSignature size={42} className="text-vip-blue" />,
      title: "Formulate",
      telugu: "రూపొందిద్దాం",
      desc: "Analyze root causes and draft actionable policy whitepapers."
    },
    {
      icon: <CheckCircle size={42} className="text-vip-green" />,
      title: "Resolve",
      telugu: "పరిష్కరిద్దాం",
      desc: "Advocate with relevant authorities until officially implemented."
    }
  ];

  return (
    <section className="py-20 bg-vip-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vip-blue">The VIP Methodology</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
            Our systematic, 4-step approach to turning public grievances into enacted policies.
          </p>
        </div>

        {/* 4-Column Symmetrical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle Step Number Background */}
              <div className="absolute -right-4 -top-6 text-9xl font-black text-gray-50 opacity-50 select-none z-0">
                {index + 1}
              </div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 bg-gray-50 rounded-full group-hover:bg-vip-light transition-colors">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-vip-blue mb-1">{step.title}</h3>
                <p className="text-[15px] font-bold text-vip-saffron mb-4 font-telugu tracking-wide">
                  {step.telugu}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}