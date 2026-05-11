import {
  FaFileAlt,
  FaUserTie,
  FaClipboardList,
  FaTerminal,
  FaCheckCircle,
} from "react-icons/fa";

const enrollItems = [
  "Secondary School Students & Pre-University Learners",
  "GCSE, JAMB, WAEC, JGCSE, SAT & More",
  "Regular Attendance & Academic Discipline",
  "Commitment to Ethical Learning Practices.",
];

const skillDiagnosticItems = [
  "Small Groups & 1:1 Sessions",
  "Flexible Pace & Adaptive Teaching",
  "Supportive, Expert Instructors",
];

const entryAssessmentItems = [
  "Timed CBT Practice Test",
  "Digital Question Banks",
  "Real Exam Simulations",
];

const enrollmentSteps = [
  {
    icon: <FaFileAlt className="h-7 w-7 text-[#5F8A48]" />,
    label: "Submit Inquiry or Application",
  },
  {
    icon: <FaUserTie className="h-7 w-7 text-[#1D5BBF]" />,
    label: "Consult an Academic Advisor",
  },
  {
    icon: <FaClipboardList className="h-7 w-7 text-[#1D5BBF]" />,
    label: "Complete Entry Assessment",
  },
  {
    icon: <FaTerminal className="h-7 w-7 text-[#E89E3C]" />,
    label: "Receive Program Recommendation",
  },
  {
    icon: <FaCheckCircle className="h-7 w-7 text-[#5F8A48]" />,
    label: "Confirm Enrollment & Onboarding",
  },
];

const commitmentItems = [
  "Consistent Attendace & Participation",
  "Timely Completion of Assignments",
  "Respect for Academic Policies",
];

const parentalItems = [
  "Support and Encourage Learning Commitment",
  "Receive Ongoing Progress Updates",
  "Open Communication Channels",
];

const progressItems = [
  "Continuous Assessment & Tracking",
  "Periodic Academic Reviews",
  "Feedback & Adaptive Pathway Adjustments",
];

const classFormatItems = [
  "Online Learning Primarily Offered",
  "Physical Classes When Available",
  "Flexible Group & Individual Learning Options",
];

function CardWithBullets({
  title,
  items,
  variant = "white",
}: {
  title: string;
  items: string[];
  variant?: "white" | "green";
}) {
  const bg = variant === "green" ? "bg-[#E8F0E1]" : "bg-white";
  return (
    <div className={`${bg} rounded-md p-8 space-y-5`}>
      <h3 className="font-bold text-xl text-start border-b border-[#9CA3AF] pb-3">
        {title}
      </h3>
      <ul className="space-y-3 text-base">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#1D1D1D]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Admissions() {
  return (
    <div>
      <section
        className="md:px-20 px-6 py-20 min-h-[420px] flex items-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/admission-hero.png') center/cover no-repeat`,
        }}
      >
        <div className="text-white space-y-5 max-w-2xl">
          <h1 className="font-bold text-3xl md:text-5xl leading-tight">
            Admissions &amp; Enrollment
          </h1>
          <p className="text-base text-white/90 max-w-md">
            Join our structured, accountable academic environment designed to
            ensure each learner&apos;s success.
          </p>
          <button className="bg-[#5F8A48] text-white px-6 py-3 rounded-md">
            Book Consultation
          </button>
        </div>
      </section>

      <section className="bg-[#F5F5F5] md:px-20 px-6 py-16 space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Admissions Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#E8F0E1] rounded-md p-8 space-y-5">
            <h3 className="font-bold text-xl text-center border-b border-[#9CA3AF] pb-3">
              Admissions Overview
            </h3>
            <p className="text-base">
              <span className="font-bold">Selective Enrollment Process - </span>
              Not just Automatic Diagnostic Assessments &amp; Academic Placement
              Monitoring, Reviews &amp; Accountability
            </p>
          </div>
          <CardWithBullets title="Who Can Enroll" items={enrollItems} />
        </div>
      </section>

      <section className="bg-[#E8F0E1] md:px-20 px-6 py-16 space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Entry Assessment &amp; Placement
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-md p-8 space-y-5">
            <h3 className="font-bold text-xl text-center border-b border-[#9CA3AF] pb-3 flex items-center justify-start gap-2">
              <FaClipboardList className="text-[#1D5BBF]" />
              Skill and Diagnostic Assessment
            </h3>
            <ul className="space-y-3 text-base">
              {skillDiagnosticItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1D1D1D]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-md p-8 space-y-5">
            <h3 className="font-bold text-xl text-center border-b border-[#9CA3AF] pb-3 flex items-center justify-start gap-2">
              <FaClipboardList className="text-[#1D5BBF]" />
              Entry Assessment
            </h3>
            <ul className="space-y-3 text-base">
              {entryAssessmentItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1D1D1D]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="md:px-20 px-6 py-16 space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Enrollment Steps
        </h2>
        <div className="bg-[#E8F0E1] rounded-md py-10 px-6">
          <div className="flex items-start justify-between gap-2">
            {enrollmentSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 flex-1 relative"
              >
                {idx > 0 && (
                  <div className="absolute top-7 right-1/2 w-full h-px bg-[#9CA3AF]" />
                )}
                <div className="bg-white rounded-md w-14 h-14 flex items-center justify-center shadow-sm relative z-10">
                  {step.icon}
                </div>
                <p className="text-xs md:text-sm text-center font-medium leading-tight max-w-[140px]">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-4">
          <CardWithBullets
            title="Learning Commitment & Accountability"
            items={commitmentItems}
            variant="green"
          />
          <CardWithBullets
            title="Parental Involvement & Communication"
            items={parentalItems}
            variant="green"
          />
          <CardWithBullets
            title="Progress Monitoring & Performance Reviews"
            items={progressItems}
            variant="green"
          />
          <CardWithBullets
            title="Class Formates & Schedules"
            items={classFormatItems}
            variant="green"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button className="bg-[#5F8A48] text-white px-8 py-2.5 rounded-md">
            Book Consultation
          </button>
          <button className="bg-white border border-[#1D1D1D] text-[#1D1D1D] px-8 py-2.5 rounded-md">
            Speak to an Academic Advisor
          </button>
        </div>
      </section>
    </div>
  );
}
