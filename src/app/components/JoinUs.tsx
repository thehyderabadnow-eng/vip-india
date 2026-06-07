"use client";
import { useState } from "react";
import { UserPlus, MapPin, Phone, Briefcase, Mail, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function JoinUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100" id="join">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Why Join VIP? */}
          <div className="lg:col-span-2">
            <span className="text-vip-green font-bold tracking-wider uppercase text-sm mb-2 block">
              Volunteer Network
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-vip-blue leading-tight mb-4">
              Join the Movement.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We are looking for individuals who believe in data-driven governance. Whether you are a legal expert, a UI developer, or a grassroots field worker, your skills can help formulate actual policy.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-vip-light p-3 rounded-xl text-vip-blue">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-vip-blue text-lg">No Political Pomp</h4>
                  <p className="text-gray-500 text-sm mt-1">We don't do rallies or flexis. Your time is spent solely on identifying and solving public issues.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-vip-light p-3 rounded-xl text-vip-saffron">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-vip-blue text-lg">Skill-Based Volunteering</h4>
                  <p className="text-gray-500 text-sm mt-1">Contribute based on your expertise—tech, law, education, or community outreach.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Volunteer Form */}
          <div className="lg:col-span-3">
            <div className="bg-vip-light rounded-3xl p-6 md:p-10 border border-gray-200 relative overflow-hidden">
              
              {isSuccess ? (
                <div className="py-12 text-center animate-fade-in">
                  <div className="flex justify-center mb-6">
                    <CheckCircle2 size={80} className="text-vip-green" />
                  </div>
                  <h3 className="text-2xl font-black text-vip-blue mb-2">Application Received</h3>
                  <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    Welcome to VIP. Our core committee will review your profile and reach out to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <UserPlus size={18} className="text-gray-400" />
                        </div>
                        <input type="text" required className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-vip-green focus:border-transparent outline-none transition-all text-gray-800" placeholder="Your Name" />
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone size={18} className="text-gray-400" />
                        </div>
                        <input type="tel" required className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-vip-green focus:border-transparent outline-none transition-all text-gray-800" placeholder="WhatsApp Number" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* District */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Your District</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <MapPin size={18} className="text-gray-400" />
                        </div>
                        <select required className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-vip-green focus:border-transparent outline-none transition-all text-gray-800 appearance-none">
                          <option value="">Select District...</option>
                          <option>Warangal</option>
                          <option>Karimnagar</option>
                          <option>Khammam</option>
                          <option>Hyderabad</option>
                          <option>Nizamabad</option>
                        </select>
                      </div>
                    </div>

                    {/* Area of Expertise */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Area of Expertise</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Briefcase size={18} className="text-gray-400" />
                        </div>
                        <select required className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-vip-green focus:border-transparent outline-none transition-all text-gray-800 appearance-none">
                          <option value="">How can you help?</option>
                          <option>IT / Software / Digital</option>
                          <option>Legal / Policy Drafting</option>
                          <option>Grassroots Field Worker</option>
                          <option>Subject Expert (Edu/Health/Etc)</option>
                          <option>General Volunteer</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Why Join */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Why do you want to join VIP?</label>
                    <textarea 
                      rows={3}
                      className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-vip-green focus:border-transparent outline-none transition-all text-gray-800 resize-none"
                      placeholder="Briefly tell us about your motivation..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-vip-green hover:bg-[#03522b] text-white font-bold py-4 rounded-xl flex justify-center items-center gap-3 transition-all transform active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Submitting Profile...</span>
                    ) : (
                      "Apply to Join VIP"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}