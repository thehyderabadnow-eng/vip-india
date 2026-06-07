"use client";
import { useState } from "react";
import { Send, MapPin, User, Phone, FileText, CheckCircle2, Paperclip } from "lucide-react";

export default function ReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle fake submission for UI testing
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section className="py-20 bg-vip-light border-t border-gray-100" id="report">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Context & Instructions */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <span className="text-vip-saffron font-bold tracking-wider uppercase text-sm mb-2 block">
              Step 1: Identify
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-vip-blue leading-tight mb-4">
              Report a Local Issue
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Have you noticed a problem in your ward, village, or district that requires policy intervention? Submit the details here. Our Core Committee will verify the data and initiate the VIP resolution process.
            </p>
            
            <div className="space-y-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-vip-blue border-b border-gray-100 pb-3">What happens next?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-vip-saffron/10 text-vip-saffron flex items-center justify-center font-bold text-xs">1</span>
                  <p className="text-sm text-gray-600"><strong className="text-vip-blue block">Data Verification</strong> We review the location and severity of the report.</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-vip-saffron/10 text-vip-saffron flex items-center justify-center font-bold text-xs">2</span>
                  <p className="text-sm text-gray-600"><strong className="text-vip-blue block">Expert Discussion</strong> The issue is moved to the 'Discuss' phase with domain experts.</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-vip-saffron/10 text-vip-saffron flex items-center justify-center font-bold text-xs">3</span>
                  <p className="text-sm text-gray-600"><strong className="text-vip-blue block">Live Tracking</strong> You can track the progress on our Public Issues Tracker.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-vip-blue via-vip-saffron to-vip-green"></div>

              {isSuccess ? (
                // Success State UI
                <div className="py-16 text-center animate-fade-in">
                  <div className="flex justify-center mb-6">
                    <CheckCircle2 size={80} className="text-vip-green" />
                  </div>
                  <h3 className="text-2xl font-black text-vip-blue mb-2">Issue Reported Successfully</h3>
                  <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    Thank you for your civic responsibility. Your submission has been logged into the VIP database.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="bg-vip-light text-vip-blue font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors border border-gray-200"
                  >
                    Report Another Issue
                  </button>
                </div>
              ) : (
                // The Interactive Form
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          required
                          className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-vip-saffron focus:border-transparent outline-none transition-all text-gray-800"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone size={18} className="text-gray-400" />
                        </div>
                        <input 
                          type="tel" 
                          required
                          className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-vip-saffron focus:border-transparent outline-none transition-all text-gray-800"
                          placeholder="10-digit number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location & Category Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">District</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <MapPin size={18} className="text-gray-400" />
                        </div>
                        <select className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-vip-saffron focus:border-transparent outline-none transition-all text-gray-800 appearance-none">
                          <option value="">Select District...</option>
                          <option>Warangal</option>
                          <option>Karimnagar</option>
                          <option>Khammam</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Department / Category</label>
                      <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-vip-saffron focus:border-transparent outline-none transition-all text-gray-800 appearance-none">
                        <option value="">Select Category...</option>
                        <option>Education & Schools</option>
                        <option>Roads & Transport</option>
                        <option>Healthcare & PHCs</option>
                        <option>Municipal & Drainage</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Issue Description</label>
                    <textarea 
                      rows={4}
                      required
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-vip-saffron focus:border-transparent outline-none transition-all text-gray-800 resize-none"
                      placeholder="Clearly describe the problem and its impact on the community..."
                    ></textarea>
                  </div>

                  {/* Photo Upload (UI Only for now) */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Attach Photo Evidence (Optional)</label>
                    <div className="w-full p-4 bg-gray-50 border border-dashed border-gray-300 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer flex flex-col items-center justify-center gap-2 text-gray-500">
                      <Paperclip size={24} className="text-gray-400" />
                      <span className="text-sm font-medium">Click to upload an image from your device</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-vip-blue hover:bg-[#062858] text-white font-bold py-4 rounded-xl flex justify-center items-center gap-3 transition-all transform active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Processing Data...</span>
                    ) : (
                      <>
                        <Send size={20} />
                        Submit Report to VIP
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    By submitting, you agree to our Zero Pomp, Data-Backed verification guidelines.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}