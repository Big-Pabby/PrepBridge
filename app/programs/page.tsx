import {
  FaGraduationCap,
  FaChartLine,
  FaUniversity,
  FaFileAlt,
} from "react-icons/fa";

const coreFocus = [
  {
    icon: <FaGraduationCap className="h-10 w-10 text-[#5F8A48]" />,
    title: "IGCSE & GCSE",
    text: "In-depth coverage of all core subjects.",
  },
  {
    icon: <FaChartLine className="h-10 w-10 text-[#5F8A48]" />,
    title: "Pathway to A-Levels",
    text: "Progress to advanced A-Level studies.",
  },
  {
    icon: <FaGraduationCap className="h-10 w-10 text-[#5F8A48]" />,
    title: "Foundation Programs",
    text: "Prep courses for university readiness.",
  },
  {
    icon: <FaUniversity className="h-10 w-10 text-[#5F8A48]" />,
    title: "University Entry",
    text: "Guiding you to top universities worldwide.",
  },
];

const examPrograms = [
  {
    flag: "/Britain.svg",
    region: "International",
    title: "GSCE",
    icon: <FaGraduationCap className="h-12 w-12 text-[#1D1D1D]" />,
    text: "International secondary qualification for students",
  },
  {
    flag: "/Nigeria.svg",
    region: "Nigeria",
    title: "JAMB",
    icon: (
      <div className="h-12 w-12 rounded-full bg-[#0F4C2A] flex items-center justify-center text-white text-[10px] font-bold text-center leading-tight px-1">
        JAMB
      </div>
    ),
    text: "Required exam for admission into Nigeria Universities",
  },
  {
    flag: "/Nigeria.svg",
    region: "Nigeria",
    title: "WAEC",
    icon: (
      <div className="h-12 w-12 rounded-full bg-[#F5A623] flex items-center justify-center text-white text-[10px] font-bold">
        WAEC
      </div>
    ),
    text: "West African senior school certificate exam.",
  },
  {
    flag: "/Britain.svg",
    region: "International",
    title: "SATS",
    icon: <FaFileAlt className="h-12 w-12 text-[#5F8A48]" />,
    text: "Standardized test for college admissions.",
  },
  {
    flag: "/Britain.svg",
    region: "International",
    title: "IELTS",
    icon: (
      <span className="text-2xl font-bold text-[#B91C1C] tracking-tight">
        IELTS
      </span>
    ),
    text: "English language proficiency test.",
  },
  {
    flag: "/Britain.svg",
    region: "International",
    title: "GRE",
    icon: <FaUniversity className="h-12 w-12 text-[#1D1D1D]" />,
    text: "Graduated Record Examination for master's programs",
  },
];

const developmentItems = [
  "Study skills and learning strategies",
  "Time management and exam planning",
  "Academic writing and research fundamentals",
  "Academic integrity and examination ethics",
  "University readiness and transition support",
];

const subPageItems = [
  "About the exam",
  "Why the exam matters",
  "Learning format",
  "Ethics and assessment standards",
];

export default function Programs() {
  return (
    <div>
      <section
        className="relative md:px-20 px-6 py-20 min-h-[420px] flex items-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/program-hero.png') center/cover no-repeat`,
        }}
      >
        <div className="text-white space-y-6 max-w-3xl">
          <h1 className="font-bold text-3xl md:text-5xl leading-tight">
            Expert GCSE <img className="inline-block w-6" src="/Britain.svg" alt="" /> &amp; JAMB{" "}
            <img className="inline-block w-6" src="/Nigeria.svg" alt="" />
            <br />
            Preparation for Academic Success
          </h1>
          <p className="text-base text-white/90">
            Comprehensive, internationally-aligned curriculum to excel in your
            GCSE exams.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#5F8A48] text-white px-6 py-3 rounded-md">
              Explore GCSE Program
            </button>
            <button className="bg-white/10 backdrop-blur text-white border border-white/40 px-6 py-3 rounded-md">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] md:px-20 px-6 py-16 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">
            Our Core Focus: GCSE &amp; JAMB Excellence
          </h2>
          <p className="text-base text-[#1D1D1D]">
            Specialized in International GCSE Curriculum Across All Key Subjects
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFocus.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg p-6 flex flex-col items-center text-center gap-4 min-h-[200px]"
            >
              {item.icon}
              <h3 className="font-bold text-base">{item.title}</h3>
              <p className="text-sm text-[#1D1D1D]">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-base">
          <span className="font-bold">Building Your Future:</span> From GCSE to
          A-Levels and Beyond
        </p>
      </section>

      <section className="bg-[#E8F0E1] md:px-20 px-6 py-16 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">
            Explore Our Exam Programs
          </h2>
          <p className="text-base text-[#1D1D1D] max-w-3xl mx-auto">
            We offer targeted preparation for a range of local and international
            exams to support diverse academic goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examPrograms.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg p-6 space-y-4"
            >
              <div className="flex items-center gap-2 bg-[#5F8A48] text-white text-xs px-3 py-1 rounded-md w-fit">
                <img src={item.flag} alt="" className="h-3 w-auto" />
                <span>{item.region}</span>
              </div>
              <div className="flex justify-center py-4">{item.icon}</div>
              <h3 className="font-bold text-lg text-center">{item.title}</h3>
              <p className="text-sm text-center text-[#1D1D1D]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="md:px-20 px-6 py-16 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">
            Academic Development Programs
          </h2>
          <p className="text-base text-[#1D1D1D] max-w-3xl mx-auto">
            PrepBridge provides both exam-focused preparation and general
            academic development, not exam prep alone.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <ul className="list-disc space-y-3 text-base">
              {developmentItems.map((item) => (
                <li key={item} className="ml-6">
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#5F8A48] text-white px-6 py-2.5 rounded-md text-sm">
                Request Program Details
              </button>
              <button className="bg-white border border-[#1D1D1D] text-[#1D1D1D] px-6 py-2.5 rounded-md text-sm">
                Book Free Consultation
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/about-why.png"
              alt="Desk with laptop"
              className="w-full max-w-[520px] h-[260px] object-cover rounded-l-full"
            />
          </div>
        </div>
      </section>

      <section className="md:px-20 px-6 pb-16">
        <div className="bg-[#F0EFEF] flex flex-col md:flex-row overflow-hidden rounded-md">
          <img
            src="/program-exam.png"
            alt="Student at laptop"
            className="md:w-6/12 w-full h-[360px] md:h-auto object-cover"
          />
          <div className="md:w-6/12 p-10 md:p-16 flex flex-col justify-center space-y-4">
            <h2 className="font-bold text-2xl">Exam Sub-Page</h2>
            <p className="text-base">
              Every individual exam page would follow this order
            </p>
            <ul className="list-disc space-y-3 text-base">
              {subPageItems.map((item) => (
                <li key={item} className="ml-6">
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-[#5F8A48] text-white px-8 py-2.5 rounded-md w-fit">
              Enroll now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
