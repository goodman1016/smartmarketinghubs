"use client";

import { useState } from "react";
import { jobs } from "./jobs";
import JobModal from "./JobModal";

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState<any>(null);

  // 🔹 Expand jobs by location
  const expandedJobs = jobs.flatMap((job) =>
    job.locations.map((location) => ({
      ...job,
      id: `${job.id}-${location.toLowerCase().replace(/\s+/g, "-")}`,
      location,
      meta: `${location} • ${job.workType} • ${job.employmentType} • ${job.compensation}`,
    }))
  );

  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-4">
        Careers at <span className="text-[#C5A46E]">SmartMarketingHubs</span>
      </h1>

      <p className="text-gray-400 mb-12">
        We collaborate with senior engineers and consultants who combine deep
        technical expertise with clear, confident communication.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {expandedJobs.map((job) => (
          <div
            key={job.id}
            className="border border-white/10 rounded-2xl p-8 hover:border-[#C5A46E]/40 transition cursor-pointer"
            onClick={() => setActiveJob(job)}
          >
            <h3 className="text-xl font-semibold">{job.title} - {job.location}</h3>

            <p className="text-[#C5A46E] mt-2">{job.meta}</p>

            <p className="text-gray-400 mt-4 line-clamp-3">
              {job.description}
            </p>

            <span className="inline-block mt-6 text-[#C5A46E]">
              View Details →
            </span>
          </div>
        ))}
      </div>

      {activeJob && (
        <JobModal job={activeJob} onClose={() => setActiveJob(null)} />
      )}
    </section>
  );
}
