import {
  FaClipboardCheck,
  FaUserGraduate,
  FaHandPointer,
  FaFileAlt,
  FaPenSquare,
  FaChartLine,
  FaStar,
} from "react-icons/fa";

const journeySteps = [
  {
    icon: <FaClipboardCheck className="h-8 w-8 text-[#5F8A48]" />,
    label: "Entry Assessment",
  },
  {
    icon: <FaUserGraduate className="h-8 w-8 text-[#E89E3C]" />,
    label: "Entry Assessment",
  },
  {
    icon: <FaHandPointer className="h-8 w-8 text-[#E89E3C]" />,
    label: "Entry Assessment",
  },
  {
    icon: <FaFileAlt className="h-8 w-8 text-[#E89E3C]" />,
    label: "Entry Assessment",
  },
  {
    icon: (
      <div className="h-9 w-9 rounded-md bg-[#5F8A48] text-white flex items-center justify-center font-bold">
        A+
      </div>
    ),
    label: "Entry Assessment",
  },
];

const diagnosticItems = [
  "Skills Evaluation",
  "Strength & Gap Analysis",
  "Exam Readiness Check",
];

const smartPlacementItems = [
  "Learning Groups",
  "Individual Support Tracks",
  "Track",
];

const pathwayItems = [
  { type: "square", text: "Curriculum Aligned with Exams" },
  { type: "square", text: "Milestone-Based Progress" },
  { type: "check", text: "Content Mastery + EXam Strategy" },
];

const personalizedItems = [
  "Small Groups & 1:1 Sessions",
  "Flexible Pace & Adaptive Teaching",
  "Supportive, Expert Instructors",
];

const digitalPracticeItems = [
  "Timed CBT Practice Test",
  "Digital Question Banks",
  "Real Exam Simulations",
];

const trackingItems = [
  {
    icon: <FaPenSquare className="h-10 w-10 text-[#5F8A48]" />,
    title: "Continuous Assessment",
    text: "Online Learning Evaluations",
  },
  {
    icon: <FaChartLine className="h-10 w-10 text-[#5F8A48]" />,
    title: "Report & Insights",
    text: "Clear Performance Reports",
  },
  {
    icon: <FaStar className="h-10 w-10 text-[#5F8A48]" />,
    title: "Readiness Reviews",
    text: "Stage-Based Academic Reviews",
  },
];

export default function HowWeTeach() {
  return (
    <div>
      <section
        className="md:px-20 px-6 py-20 min-h-[420px] flex items-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/teach-hero.png') center/cover no-repeat`,
        }}
      >
        <div className="text-white space-y-5 max-w-2xl">
          <h1 className="font-bold text-3xl md:text-5xl leading-tight">
            A Structured Pathway to <br /> Exam Success
          </h1>
          <p className="text-base text-white/90 max-w-xl">
            <span className="font-bold">
              Trackable. Guided. Measurable.
            </span>{" "}
            Every learner progresses through a clearly monitored academic
            journey.
          </p>
          <a
            href="https://wa.me/message/25PXCVIEB53CA1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5F8A48] text-white px-6 py-3 rounded-md inline-block w-fit"
          >
            Book Consultation
          </a>
        </div>
      </section>

      <section className="bg-[#F5F5F5] md:px-20 px-6 py-16 space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          The PrepBridge Learning Journey
        </h2>
        <div className="bg-[#E8F0E1] rounded-md py-10 px-6">
          <div className="flex items-center justify-between gap-2">
            {journeySteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 flex-1 relative"
              >
                {idx > 0 && (
                  <div className="absolute top-6 right-1/2 w-full h-px bg-[#9CA3AF]" />
                )}
                <div className="bg-white rounded-md w-14 h-14 flex items-center justify-center shadow-sm relative z-10">
                  {step.icon}
                </div>
                <p className="text-sm text-center font-medium">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative md:px-20 px-6 py-20"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/access.jpg') center/cover no-repeat`,
        }}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-md p-8 space-y-5">
            <h3 className="font-bold text-xl text-center border-b border-[#E5E5E5] pb-3">
              Diagnostic Assessment
            </h3>
            <ul className="space-y-3 text-base">
              {diagnosticItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1D1D1D]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-md p-8 space-y-5">
            <h3 className="font-bold text-xl text-center border-b border-[#E5E5E5] pb-3">
              Smart Placement
            </h3>
            <ul className="space-y-3 text-base">
              {smartPlacementItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1D1D1D]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#E8F0E1] md:px-20 px-6 py-16 space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Structured Learning Pathway
        </h2>

        <div className="bg-white rounded-md p-6 md:p-10 space-y-10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <img
              src="/curri.png"
              alt="Tutor with student"
              className="w-full h-[200px] object-cover rounded-md"
            />
            <ul className="space-y-3 text-base">
              {pathwayItems.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  {item.type === "square" ? (
                    <span className="w-3 h-3 bg-[#E89E3C]" />
                  ) : (
                    <span className="text-[#5F8A48] font-bold">&#10003;</span>
                  )}
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <img src="/cbt.png" alt="CBT Diagram" className="w-full h-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E5E5E5] rounded-md p-8 space-y-5">
              <h3 className="font-bold text-xl text-center border-b border-[#E5E5E5] pb-3">
                Personalized Tutoring
              </h3>
              <ul className="space-y-3 text-base">
                {personalizedItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#1D1D1D]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[#E5E5E5] rounded-md p-8 space-y-5">
              <h3 className="font-bold text-xl text-center border-b border-[#E5E5E5] pb-3">
                Digital Practice &amp; Simulations
              </h3>
              <ul className="space-y-3 text-base">
                {digitalPracticeItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#1D1D1D]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] md:px-20 px-6 py-16 space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Tracking Progress &amp; Monitoring
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trackingItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-md p-8 flex flex-col items-center text-center gap-4 min-h-[200px] justify-center"
            >
              {item.icon}
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-[#1D1D1D]">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="https://wa.me/message/25PXCVIEB53CA1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5F8A48] text-white px-12 py-3 rounded-md inline-block"
          >
            Book Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

function CbtDiagram() {
  return (
    <div className="space-y-2">
      <div className="flex gap-2 justify-center">
        {[
          { letter: "C", label: "Computer" },
          { letter: "B", label: "Based" },
          { letter: "T", label: "Testing" },
        ].map((item) => (
          <div
            key={item.letter}
            className="w-16 h-16 rotate-45 border-2 border-[#1D5BBF] flex items-center justify-center"
          >
            <span className="-rotate-45 font-bold text-xl text-[#1D5BBF]">
              {item.letter}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center mt-4">
        {["Computer", "Based", "Testing"].map((label) => (
          <div
            key={label}
            className="w-16 text-[10px] text-center border border-[#1D1D1D] py-1"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
