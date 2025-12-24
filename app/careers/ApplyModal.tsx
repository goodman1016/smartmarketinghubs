"use client";

import { useState } from "react";

export default function ApplyModal({ jobTitle, onClose }: any) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitting) return; // 🚫 double-submit guard

    setIsSubmitting(true);
    setError("");

    const form = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobTitle, ...form }),
      });

      if (!res.ok) throw new Error("Submit failed");

      setSubmitted(true);
    } catch (err) {
      setError("Submission failed. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
      <div className="bg-black border border-white/10 rounded-2xl p-8 max-w-2xl w-full">

        {/* ✅ SUCCESS STATE */}
        {submitted ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-semibold mb-2">
              Application Submitted
            </h3>
            <p className="text-gray-400 mb-8">
              Thank you for applying. Our team will review your application and
              get back to you if there’s a match.
            </p>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-[#C5A46E] text-black font-semibold hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-semibold">
                Apply for{" "}
                <span className="text-[#C5A46E]">{jobTitle}</span>
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 hover:text-white text-lg"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#C5A46E]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#C5A46E]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#C5A46E]"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm text-gray-400 mb-1">
                    Location / Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#C5A46E]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="linkedin" className="block text-sm text-gray-400 mb-1">
                    LinkedIn Profile
                  </label>
                  <input
                    id="linkedin"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#C5A46E]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="resume" className="block text-sm text-gray-400 mb-1">
                    Resume Link
                  </label>
                  <input
                    id="resume"
                    name="resume"
                    placeholder="Google Drive / PDF link"
                    className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#C5A46E]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
                    About You
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/10 rounded-xl text-white resize-none focus:outline-none focus:border-[#C5A46E]"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm mt-4">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-8 w-full py-3 rounded-full font-semibold transition
                  ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-[#C5A46E] text-black hover:opacity-90"
                  }`}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
