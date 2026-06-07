"use client";
import { useState, useEffect } from "react";

// Custom hook for the animated number counter
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Easing function for smooth slowdown at the end
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
}

export default function Analytics() {
  // Replace these numbers with your actual data logic later
  const issuesIdentified = useCounter(1248);
  const draftsFormulated = useCounter(312);
  const issuesResolved = useCounter(184);

  const resolutionRate = Math.floor((184 / 1248) * 100);
  const currentProgress = useCounter(resolutionRate);

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-vip-blue">Real-Time Impact</h2>
          <p className="text-gray-500 mt-2">Tracking our grassroots governance initiatives.</p>
        </div>

        {/* Number Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          <div className="p-6 rounded-2xl bg-gray-50 shadow-sm border border-gray-100">
            <h3 className="text-5xl font-black text-vip-saffron mb-2">{issuesIdentified}</h3>
            <p className="text-gray-600 font-medium uppercase tracking-wide text-sm">Issues Identified</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50 shadow-sm border border-gray-100">
            <h3 className="text-5xl font-black text-vip-blue mb-2">{draftsFormulated}</h3>
            <p className="text-gray-600 font-medium uppercase tracking-wide text-sm">Drafts Formulated</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50 shadow-sm border border-gray-100">
            <h3 className="text-5xl font-black text-vip-green mb-2">{issuesResolved}</h3>
            <p className="text-gray-600 font-medium uppercase tracking-wide text-sm">Permanently Resolved</p>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-bold text-vip-blue uppercase tracking-wider">Overall Resolution Rate</span>
            <span className="text-xl font-black text-vip-green">{currentProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-vip-green h-3 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${currentProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}