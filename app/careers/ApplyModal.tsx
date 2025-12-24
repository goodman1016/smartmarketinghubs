"use client";

export default function ApplyModal({
  jobTitle,
  onClose,
}: {
  jobTitle: string;
  onClose: () => void;
}) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = Object.fromEntries(new FormData(e.currentTarget));

    const res = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobTitle, ...form }),
    });

    if (!res.ok) {
      alert("Submission failed. Please try again.");
      return;
    }

    alert("Application submitted successfully");
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-black border border-white/10 rounded-2xl p-8 max-w-2xl w-full"
      >
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
            aria-label="Close application form"
          >
            ✕
          </button>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm text-gray-400 mb-1"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="name"
              required
              className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#C5A46E]"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-400 mb-1"
            >
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

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm text-gray-400 mb-1"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#C5A46E]"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm text-gray-400 mb-1"
            >
              Location / Address
            </label>
            <input
              id="address"
              name="address"
              className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#C5A46E]"
            />
          </div>

          {/* LinkedIn */}
          <div className="md:col-span-2">
            <label
              htmlFor="linkedin"
              className="block text-sm text-gray-400 mb-1"
            >
              LinkedIn Profile
            </label>
            <input
              id="linkedin"
              name="linkedin"
              type="url"
              placeholder="https://linkedin.com/in/username"
              className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#C5A46E]"
            />
          </div>

          {/* Resume */}
          <div className="md:col-span-2">
            <label
              htmlFor="resume"
              className="block text-sm text-gray-400 mb-1"
            >
              Resume Link (optional)
            </label>
            <input
              id="resume"
              name="resume"
              type="url"
              placeholder="Google Drive / Dropbox / PDF link"
              className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#C5A46E]"
            />
          </div>

          {/* About */}
          <div className="md:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm text-gray-400 mb-1"
            >
              About You
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Briefly describe your background and experience."
              className="w-full px-4 py-3 bg-[#0b0b0b] border border-white/10 rounded-xl text-white resize-none focus:outline-none focus:border-[#C5A46E]"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-8 w-full py-3 rounded-full bg-[#C5A46E] text-black font-semibold hover:opacity-90 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
