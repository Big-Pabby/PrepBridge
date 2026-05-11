"use client";

import { useState } from "react";
import { FiSearch, FiX, FiPlus, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const faqs = [
  {
    question: "Who are the tutors?",
    answer:
      "Our tutors are experienced and highly qualified professionals with specialized knowledge of the exams we prepare for.",
  },
  {
    question: "Academic Blogs",
    answer:
      "Articles on the study strategies, exam readiness, and ethical learning practices.",
  },
  {
    question: "Free Study Materials",
    answer: "Revision guides, concept explanations and exam-aligned notes",
  },
  {
    question: "How flexible are the schedules?",
    answer:
      "We offer flexible schedules to accommodate both group sessions and one-on-one learning, with online and in-person options where available.",
  },
];

const contactCards = [
  {
    icon: <FiMail className="h-5 w-5 text-[#000000]" />,
    label: "Email",
    value: "info@prepbridgehq.com",
  },
  {
    icon: <FiPhone className="h-5 w-5 text-[#000000]" />,
    label: "Phone Number",
    value: "09135758651",
  },
  {
    icon: <FiMapPin className="h-5 w-5 text-[#000000]" />,
    label: "Location",
    value: "Maplewood estate, Agege.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number[]>([0, 1, 2]);
  const [search, setSearch] = useState("");

  const toggle = (idx: number) =>
    setOpen((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );

  const filtered = faqs.filter((f) =>
    f.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <section
        className="md:px-20 px-6 py-20 min-h-[440px] flex items-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.25)), url('/faq-hero.png') center/cover no-repeat`,
        }}
      >
        <div className="text-white space-y-5 max-w-2xl">
          <h1 className="font-bold text-3xl md:text-5xl leading-tight">FAQs</h1>
          <p className="text-base text-white/90 max-w-md">
            A hub of free, high-quality academic resources for students, parents
            and independent learners.
          </p>
          <button className="bg-[#5F8A48] text-white px-6 py-3 rounded-md">
            Book Consultation
          </button>
        </div>
      </section>

      <section className="bg-[#E5E5E5] md:px-20 px-6 py-16 space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">Common Questions</h2>
          <p className="text-sm text-[#1D1D1D] max-w-2xl mx-auto">
            Find answers to parents and students most frequently asked questions
            about our learning approach, tutor qualifications and policies.
          </p>
        </div>
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type your questions"
            className="w-full bg-white rounded-full py-3 pl-5 pr-14 text-sm outline-none border border-transparent focus:border-[#5F8A48]"
          />
          <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#5F8A48] text-white w-9 h-9 rounded-full flex items-center justify-center">
            <FiSearch className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="bg-[#E8F0E1] md:px-20 px-6 py-16 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Common Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {filtered.map((faq) => {
            const idx = faqs.indexOf(faq);
            const isOpen = open.includes(idx);
            return (
              <div
                key={faq.question}
                className={`${isOpen ? "bg-white" : "bg-[#E5E5E5]"} rounded-md`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-bold text-base">{faq.question}</span>
                  <span className="bg-[#D9D9D9] w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <FiX className="h-4 w-4" />
                    ) : (
                      <FiPlus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-base text-[#1D1D1D]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
          {filtered.length === 0 && (
            <p className="text-center text-sm text-[#1D1D1D]">
              No matching questions.
            </p>
          )}
        </div>
      </section>

      <section className="md:px-20 px-6 py-16 space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Contact Us Directly
        </h2>
        <div className="flex md:flex-row flex-col gap-8 items-stretch">
          <img
            src="/contact.png"
            alt="Advisor speaking with student"
            className="md:w-7/12 w-full h-full max-h-[360px] object-cover rounded-md"
          />
          <div className="flex-1 bg-[#D9D9D9] p-4 rounded-[20px] flex flex-col gap-4 justify-center">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="bg-white rounded-[20px] shadow-sm border border-[#E5E5E5] p-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#D9D9D9] flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <p className="font-bold text-base">{card.label}</p>
                  <p className="text-sm text-[#1D1D1D]">{card.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#5F8A48] text-white px-12 py-3 rounded-md">
            Book Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
