"use client";
import { useState } from "react";
import { Filter, MapPin, Search, SlidersHorizontal, ChevronRight } from "lucide-react";

// --- MOCK DATABASE (You will replace this with your JSON/Backend later) ---
const CATEGORIES = ["All", "Education", "Roads", "Municipal", "Rural Development", "IT", "BC Welfare"];
const DISTRICTS = ["Warangal", "Karimnagar", "Khammam", "Nizamabad"];
const ASSEMBLIES: Record<string, string[]> = {
  Warangal: ["Warangal East", "Warangal West", "Wardhannapet", "Parkal"],
  Karimnagar: ["Karimnagar", "Choppadandi", "Vemulawada"],
  Khammam: ["Khammam", "Palair", "Madhira"],
  Nizamabad: ["Nizamabad Urban", "Nizamabad Rural", "Armur"],
};

const MOCK_ISSUES = [
  { id: 1, title: "Pending Degree College Building", category: "Education", district: "Warangal", assembly: "Warangal East", village: "Deshaipet", status: 2, date: "Oct 12, 2025" },
  { id: 2, title: "Main Road Potholes & Drainage Block", category: "Roads", district: "Karimnagar", assembly: "Karimnagar", village: "Kothirampur", status: 1, date: "Nov 04, 2025" },
  { id: 3, title: "PHC Center Doctor Shortage", category: "Rural Development", district: "Khammam", assembly: "Palair", village: "Kusumanchi", status: 4, date: "Dec 01, 2025" },
  { id: 4, title: "Underground Drainage Overflow", category: "Municipal", district: "Warangal", assembly: "Warangal West", village: "Kazipet", status: 3, date: "Jan 15, 2026" },
];

const STATUS_MAP = [
  { step: 1, label: "Identify", telugu: "గుర్తిద్దాం" },
  { step: 2, label: "Discuss", telugu: "చర్చిద్దాం" },
  { step: 3, label: "Formulate", telugu: "రూపొందిద్దాం" },
  { step: 4, label: "Resolve", telugu: "పరిష్కరిద్దాం" },
];
// ---------------------------------------------------------------------------

export default function IssueTracker() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedAssembly, setSelectedAssembly] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter Logic Engine
  const filteredIssues = MOCK_ISSUES.filter((issue) => {
    const matchCategory = activeCategory === "All" || issue.category === activeCategory;
    const matchDistrict = selectedDistrict === "" || issue.district === selectedDistrict;
    const matchAssembly = selectedAssembly === "" || issue.assembly === selectedAssembly;
    return matchCategory && matchDistrict && matchAssembly;
  });

  return (
    <div className="bg-vip-light min-h-screen pb-20">
      
      {/* Header & Department Tabs */}
      <div className="bg-vip-blue pt-12 pb-6 px-4 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-6">Public Issues Tracker</h1>
          
          {/* Horizontal Scrollable Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeCategory === cat 
                  ? "bg-vip-saffron text-white shadow-lg" 
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <button 
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="lg:hidden flex items-center justify-center gap-2 w-full bg-white border border-gray-200 p-3 rounded-lg font-bold text-vip-blue shadow-sm"
        >
          <SlidersHorizontal size={20} />
          {isMobileFilterOpen ? "Hide Filters" : "Show Filters"}
        </button>

        {/* The Filter Engine (Sidebar) */}
        <aside className={`${isMobileFilterOpen ? "block" : "hidden"} lg:block w-full lg:w-1/4 flex-shrink-0`}>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-28">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
              <Filter size={20} className="text-vip-blue" />
              <h2 className="text-lg font-bold text-vip-blue">Location Filter</h2>
            </div>

            {/* State (Fixed for now) */}
            <div className="mb-5">
              <label className="block text-sm font-bold text-gray-700 mb-2">State</label>
              <select disabled className="w-full bg-gray-50 border border-gray-200 text-gray-500 rounded-lg p-3 text-sm font-medium">
                <option>Telangana</option>
              </select>
            </div>

            {/* District Dependency */}
            <div className="mb-5">
              <label className="block text-sm font-bold text-gray-700 mb-2">District</label>
              <select 
                value={selectedDistrict}
                onChange={(e) => {
                  setSelectedDistrict(e.target.value);
                  setSelectedAssembly(""); // Reset assembly when district changes
                }}
                className="w-full bg-white border border-gray-200 text-vip-blue rounded-lg p-3 text-sm font-medium focus:ring-2 focus:ring-vip-saffron focus:outline-none"
              >
                <option value="">All Districts</option>
                {DISTRICTS.map(dist => <option key={dist} value={dist}>{dist}</option>)}
              </select>
            </div>

            {/* Assembly Dependency (Only shows options based on District) */}
            <div className="mb-5">
              <label className="block text-sm font-bold text-gray-700 mb-2">Assembly</label>
              <select 
                value={selectedAssembly}
                onChange={(e) => setSelectedAssembly(e.target.value)}
                disabled={!selectedDistrict}
                className="w-full bg-white border border-gray-200 text-vip-blue rounded-lg p-3 text-sm font-medium focus:ring-2 focus:ring-vip-saffron focus:outline-none disabled:bg-gray-50 disabled:opacity-50"
              >
                <option value="">All Assemblies</option>
                {selectedDistrict && ASSEMBLIES[selectedDistrict]?.map(assm => (
                  <option key={assm} value={assm}>{assm}</option>
                ))}
              </select>
            </div>

            <button 
              onClick={() => { setSelectedDistrict(""); setSelectedAssembly(""); setActiveCategory("All"); }}
              className="w-full mt-4 text-sm font-bold text-gray-500 hover:text-vip-saffron transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Results Grid */}
        <div className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-vip-blue">
              {filteredIssues.length} {filteredIssues.length === 1 ? "Issue" : "Issues"} Found
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredIssues.map((issue) => (
              <div key={issue.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 relative flex flex-col h-full">
                
                {/* Category & Date */}
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-vip-light text-vip-blue border border-gray-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {issue.category}
                  </span>
                  <span className="text-xs font-medium text-gray-400">{issue.date}</span>
                </div>

                {/* Title & Location */}
                <h4 className="text-lg font-bold text-vip-blue leading-tight mb-3 flex-grow hover:text-vip-saffron cursor-pointer transition-colors">
                  {issue.title}
                </h4>
                <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-6 font-medium">
                  <MapPin size={16} className="text-vip-saffron flex-shrink-0" />
                  <span className="truncate">{issue.village}, {issue.assembly}, {issue.district}</span>
                </div>

                {/* The 4-Step Status Visualizer */}
                <div className="border-t border-gray-100 pt-5 mt-auto">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Current Status</span>
                    <span className="text-xs font-bold text-vip-blue">
                      {issue.status}/4: {STATUS_MAP[issue.status - 1].label}
                    </span>
                  </div>
                  
                  {/* Progress Bar Track */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((step) => (
                      <div 
                        key={step} 
                        className={`h-2 flex-1 rounded-full ${
                          step <= issue.status 
                            ? step === 4 ? "bg-vip-green" : "bg-vip-saffron" 
                            : "bg-gray-100"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-[11px] text-center mt-2 font-telugu font-bold text-gray-400">
                     {STATUS_MAP[issue.status - 1].telugu}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredIssues.length === 0 && (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
              <Search size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-vip-blue">No issues found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your location filters or category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}