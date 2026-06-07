import { notFound } from "next/navigation";
import issuesData from "@/data/issues.json";
import { MapPin, Calendar, User, ShieldCheck } from "lucide-react";

// In Next.js, dynamic route parameters are passed as props
export default function IssueDetailPage({
  params,
}: {
  params: { department: string; "issue-slug": string };
}) {
  // Find the exact issue from our JSON database using the URL slug
  const issue = issuesData.find((i) => i.slug === params["issue-slug"]);

  // If the URL doesn't match any issue, show a 404 page
  if (!issue) {
    notFound();
  }

  // Calculate percentage for the progress bar
  const progressPercentage = (issue.status.currentStep / 4) * 100;

  return (
    <div className="bg-vip-light min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button & Category */}
        <div className="mb-8">
          <a href="/tracker" className="text-vip-saffron font-bold text-sm hover:underline mb-4 inline-block">
            ← Back to Tracker
          </a>
          <br />
          <span className="bg-white border border-gray-200 text-vip-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {params.department.replace("-", " ")}
          </span>
        </div>

        {/* Issue Header */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-vip-blue mb-6 leading-tight">
            {issue.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-500 mb-8 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-vip-saffron" />
              <span>{issue.location.village}, {issue.location.district}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} className="text-vip-blue" />
              <span>Reported by: {issue.reporter.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-vip-blue" />
              <span>{new Date(issue.reporter.dateReported).toLocaleDateString()}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-vip-blue mb-3">Issue Description</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {issue.description}
            </p>
          </div>
        </div>

        {/* Status Tracker */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-vip-blue mb-6 flex items-center gap-2">
            <ShieldCheck className="text-vip-green" />
            Official VIP Resolution Status
          </h3>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-100 rounded-full h-4 mb-8 overflow-hidden border border-gray-200">
            <div 
              className="bg-vip-green h-4 rounded-full transition-all duration-1000"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          {/* History Timeline */}
          <div className="space-y-6">
            {issue.status.history.map((log, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-vip-light border-2 border-vip-saffron flex items-center justify-center font-bold text-vip-saffron text-sm mt-1">
                  {log.step}
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 block mb-1">
                    {new Date(log.date).toLocaleDateString()}
                  </span>
                  <p className="text-gray-700 font-medium">{log.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}