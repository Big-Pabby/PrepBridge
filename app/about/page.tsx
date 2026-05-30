import type { Metadata } from "next";
import { FiTool, FiEdit, FiTarget, FiTrendingUp } from "react-icons/fi";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "PrepBridge is a technology-driven academic learning centre delivering exam-focused, curriculum-aligned preparation with defined academic standards and ethical excellence for local and international examination pathways.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About PrepBridge",
    description:
      "Learn about PrepBridge's mission, academic leadership, and the structured system behind our exam-focused learning.",
    url: "/about",
    type: "website",
  },
};

const leadershipItems = [
  {
    icon: <FiTool className="h-10 w-10 text-[#5F8A48]" />,
    text: "Academic leadership framework (not individuals if names are not ready)",
  },
  {
    icon: <FiEdit className="h-10 w-10 text-[#5F8A48]" />,
    text: "Curriculum planning and review processes",
  },
  {
    icon: <FiTarget className="h-10 w-10 text-[#5F8A48]" />,
    text: "Tutor selection, training, and supervision",
  },
  {
    icon: <FiTrendingUp className="h-10 w-10 text-[#5F8A48]" />,
    text: "Continuous quality assurance.",
  },
];

const academicGap = [
  "The gap between secondary school education and higher education readiness",
  "Exam complexity (local and International standards)",
  "Need for structure, guidance and academic discipline",
  "PrepBridge as a bridge through structured preparation, not shortcuts",
];

const corePilars = [
  "Curriculum alignment with exam bodies",
  "Diagnostic assessment and placement",
  "Structured lesson plans and milestones",
  "CBT simulations and academic benchmarking",
  "Progress tracking and reporting",
  "Feedback loops and academic review.",
];

const ethicsItems = [
  "Examination malpractice policy",
  "Academic integrity policies",
  "Expectations for learners and educators",
  "Intellectual property & materials usage",
  "Data protection & privacy",
  "Refund & payment terms",
];

const outlookItems = [
  "Expansion of programs",
  "Integration of digital learning tools (LMS)",
  "Physical learning centres (when ready)",
  "International partnerships (future-facing, not promised)",
];

export default function About() {
  return (
    <div>
      <section className="relative bg-[#E8F0E1] md:px-20 px-6 py-12 overflow-hidden">
        <div className="absolute top-6 right-40 w-6 h-6 rounded-full bg-white" />
        <div className="absolute top-12 right-24 w-10 h-10 rounded-full bg-[#A8C68F]" />
        <div className="absolute top-2 right-72 w-4 h-4 rounded-full bg-white" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-block border border-[#5F8A48] text-[#1D1D1D] px-4 py-1 rounded-md text-sm">
              ABOUT US
            </span>
            <h1 className="font-bold text-4xl md:text-5xl">
              About Our Institute.
            </h1>
            <p className="text-base text-[#1D1D1D] leading-relaxed max-w-xl">
              PrepBridge is a technology-driven academic learning centre delivering
              exam-focused, curriculum-aligned preparation with defined academic
              standards and ethical excellence for both local and international
              examination pathways.
            </p>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full">
              <img
                src="/about-hero.png"
                alt="Students learning together"
                className="w-full max-h-[500px] h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] md:px-20 px-6 py-16 space-y-10">
        <h2 className="text-3xl font-bold text-center">Why PrepBridge Exists</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="font-bold text-xl">The Academic Gap We Close</h3>
            <ul className="list-disc space-y-3 text-base">
              {academicGap.map((item) => (
                <li key={item} className="ml-6">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="/about-why.png"
              alt="Desk with notebook"
              className="w-full max-w-[520px] h-[190px] object-cover rounded-l-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F0EFEF] md:px-20 px-6 py-16 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">Academic Leadership</h2>
          <p className="text-base text-[#1D1D1D] max-w-2xl mx-auto">
            Our approach to oversight ensures rigorous academic standards and
            exceptional student outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipItems.map((item) => (
            <div
              key={item.text}
              className="bg-white rounded-lg p-6 flex flex-col items-center gap-6 min-h-[200px]"
            >
              {item.icon}
              <p className="text-sm text-center text-[#1D1D1D] border-t border-[#E5E5E5] pt-4 w-full">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col md:flex-row">
        <img
          src="/globe.png"
          alt="Globe"
          className="md:w-6/12 w-full h-[360px] md:h-auto object-cover"
        />
        <div className="md:w-6/12 bg-[#F0EFEF] p-10 md:p-20 flex flex-col justify-center space-y-4">
          <h2 className="font-bold text-2xl">Our Academic System</h2>
          <h3 className="font-semibold text-lg">Core Pilars</h3>
          <ul className="list-disc space-y-3 text-base">
            {corePilars.map((item) => (
              <li key={item} className="ml-6">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="md:px-20 px-6 py-16 text-white"
        style={{
          background: `linear-gradient(rgba(20,20,20,0.7), rgba(20,20,20,0.7)), url('/about-vision.jpg') center/cover no-repeat`,
        }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          Vision and Mission
        </h2>
        <ul className="space-y-4 max-w-2xl mx-auto text-lg">
          <li className="flex items-center justify-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="font-semibold">Vision</span>
            <span className="mx-3">&rarr;</span>
            <span>What learners gain access to</span>
          </li>
          <li className="flex items-center justify-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="font-semibold">Misson</span>
            <span className="mx-3">&rarr;</span>
            <span>How PrepBridge prepares them</span>
          </li>
        </ul>
      </section>

      <section className="flex flex-col md:flex-row">
        <div className="md:w-6/12 bg-[#F0EFEF] p-10 md:p-20 flex flex-col justify-center space-y-4">
          <h2 className="font-bold text-2xl">
            Ethics, Integrity And Academic Discipline
          </h2>
          <ul className="list-disc space-y-3 text-base">
            {ethicsItems.map((item) => (
              <li key={item} className="ml-6">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <img
          src="/about-ethnic.png"
          alt="Students reading"
          className="md:w-6/12 w-full h-[360px] md:h-auto object-cover"
        />
      </section>

      <section className="md:px-20 px-6 py-16">
        <div className="bg-[#F0EFEF] grid md:grid-cols-2 gap-10 items-center p-6 md:p-10 rounded-md">
          <img
            src="/about-outlook.png"
            alt="Group of students"
            className="w-full h-[320px] object-cover rounded-md"
          />
          <div className="space-y-4">
            <h2 className="font-bold text-2xl">Long-Term Academic Outlook</h2>
            <ul className="list-disc space-y-3 text-base">
              {outlookItems.map((item) => (
                <li key={item} className="ml-6">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
