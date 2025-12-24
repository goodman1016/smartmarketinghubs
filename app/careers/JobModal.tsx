"use client";

import { useState } from "react";
import ApplyModal from "./ApplyModal";

export default function JobModal({ job, onClose }: any) {
  const [applyOpen, setApplyOpen] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
      <div className="bg-black border border-white/10 rounded-2xl max-w-3xl w-full p-8 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="float-right text-gray-400">✕</button>

        <h2 className="text-2xl font-semibold">{job.title}</h2>
        <p className="text-[#C5A46E] mt-2">{job.meta}</p>

        <p className="text-gray-300 mt-6">{job.description}</p>

        <h3 className="text-[#C5A46E] mt-8 mb-2">Responsibilities</h3>
        <ul className="list-disc pl-5 text-gray-300">
          {job.responsibilities.map((r: string) => (
            <li key={r}>{r}</li>
          ))}
        </ul>

        <h3 className="text-[#C5A46E] mt-6 mb-2">Requirements</h3>
        <ul className="list-disc pl-5 text-gray-300">
          {job.requirements.map((r: string) => (
            <li key={r}>{r}</li>
          ))}
        </ul>

        <button
          onClick={() => setApplyOpen(true)}
          className="mt-8 px-8 py-3 rounded-full bg-[#C5A46E] text-black font-semibold"
        >
          Apply Now →
        </button>

        {applyOpen && (
          <ApplyModal
            jobTitle={job.title}
            onClose={() => setApplyOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
