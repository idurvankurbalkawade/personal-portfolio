"use client";

const certifications = [
  {
    badge: "AZ-900",
    name: "Microsoft Certified: Azure Fundamentals",
    description:
      "Certified in Microsoft Azure Fundamentals (AZ-900), demonstrating foundational knowledge of cloud concepts and core Azure services.",
    issuer: "Microsoft",
    date: "2024",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-in/DurvankurBalkawade-8033/E420FBF3AE976DBC?sharingId=3E15F09FD0A93C0C",
  },
  {
    badge: "AI-900",
    name: "Microsoft Certified: Azure AI Fundamentals",
    description:
      "Certified in Microsoft Azure AI Fundamentals (AI-900), demonstrating foundational knowledge of AI concepts and core Azure AI Services.",
    issuer: "Microsoft",
    date: "2026",
    credentialUrl: "https://learn.microsoft.com/en-us/users/durvankurbalkawade-8033/credentials/18c46211036561b3?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-[#0a192f]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[#64ffda] text-sm font-mono tracking-widest uppercase mb-2">
            Credentials
          </p>
          <h2 className="text-4xl font-bold text-white">Certifications</h2>
          <div className="mt-4 w-12 h-[2px] bg-gradient-to-r from-[#64ffda] to-transparent rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.badge}
              className="group relative flex flex-col rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(135deg, rgba(100,255,218,0.25), rgba(100,255,218,0.03) 60%, rgba(100,255,218,0.12))",
              }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 bg-[#64ffda]/10" />

              {/* Card body */}
              <div
                className="flex flex-col h-full rounded-2xl p-7 gap-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(17,34,64,0.85) 0%, rgba(10,25,47,0.95) 100%)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                {/* Top row: badge + Microsoft logo */}
                <div className="flex items-start justify-between gap-4">
                  {/* Badge pill */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm text-[#64ffda] tracking-wide"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(100,255,218,0.15), rgba(100,255,218,0.05))",
                        border: "1px solid rgba(100,255,218,0.25)",
                      }}
                    >
                      {cert.badge}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                        Exam
                      </p>
                      <p className="text-white font-semibold text-sm">
                        {cert.badge}
                      </p>
                    </div>
                  </div>

                  {/* Microsoft logo */}
                  <div className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 23 23"
                      width="36"
                      height="36"
                    >
                      <rect x="1" y="1" width="10" height="10" fill="#f25022" />
                      <rect x="12" y="1" width="10" height="10" fill="#7fba00" />
                      <rect x="1" y="12" width="10" height="10" fill="#00a4ef" />
                      <rect x="12" y="12" width="10" height="10" fill="#ffb900" />
                    </svg>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#64ffda]/20 via-[#64ffda]/10 to-transparent" />

                {/* Cert name + description */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-white font-semibold text-lg leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 gap-4">
                  <div className="flex items-center gap-2">
                    {/* Calendar icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-[#64ffda]/60"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span className="text-gray-500 text-xs">
                      {cert.issuer} &bull; {cert.date}
                    </span>
                  </div>

                  {/* View Credential button */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-[#64ffda] border border-[#64ffda]/30 rounded-lg px-3 py-1.5 hover:bg-[#64ffda]/10 hover:border-[#64ffda]/60 transition-all duration-200 whitespace-nowrap"
                  >
                    View Credential
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3 h-3"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
