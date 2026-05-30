import type { Metadata } from "next";
import { FaClipboardList } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "A hub of free, high-quality academic resources for students, parents, and independent learners - study tips, blog posts, and learning material from PrepBridge.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "PrepBridge Resources Corner",
    description:
      "Free academic resources, study tips, and learning material from PrepBridge.",
    url: "/resources",
    type: "website",
  },
};

const academicBlog = [
  "Practical tips for effective learning.",
  "Guidance for confident exam.",
  "Advice on focus, consistency, and strong study habits.",
  "Clear, responsible exam guidance without shortcuts.",
];

const skillsResources = [
  "Structured learning plans for effective preparation,",
  "Practical strategies to manage study time efficiently.",
  "Proven techniques for clear and organized notes.",
  "Smart strategies for exam success and smooth academic.",
];

const studyMaterials = [
  "Structured materials tailored to each subject.",
  "Concise overviews for quick review.",
  "Clear breakdown of key topics.",
  " Resources aligned with exam standards.",
];

const practiceItems = [
  "Topic-based questions with clear explanations.",
  "Speed-focused, exam-style practice.",
  "Realistic exam-format tasks.",
  "Instant feedback and progress tracking.",
];

const guidelines = [
  "The resources provided are free to access and use.",
  "Use materials only for personal, non-commercial educational purposes.",
  "Respect intellectual property and PrepBridge's provided materials.",
  "Do not redistribute materials without permission.",
  "Follow proper citation practices.",
];

function ResourceCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-white rounded-md p-8 space-y-5">
      <h3 className="font-bold text-xl border-b border-[#9CA3AF] pb-3 flex items-center gap-2">
        <FaClipboardList className="text-[#1D5BBF]" />
        {title}
      </h3>
      <ul className="space-y-3 text-base">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#1D1D1D] mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Resources() {
  return (
    <div>
      <section
        className="md:px-20 px-6 py-20 min-h-[440px] flex items-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.25)), url('/resource-hero.png') center/cover no-repeat`,
        }}
      >
        <div className="text-white space-y-5 max-w-2xl">
          <h1 className="font-bold text-3xl md:text-5xl leading-tight">
            Resources Corner
          </h1>
          <p className="text-base text-white/90 max-w-md">
            A hub of free, high-quality academic resources for students, parents
            and independent learners.
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

      <section
        className="relative md:px-20 px-6 py-16"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/access.jpg') center/cover no-repeat`,
        }}
      >
        <div className="bg-white rounded-md p-10 max-w-5xl mx-auto space-y-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold border-b border-[#9CA3AF] pb-4 max-w-md mx-auto">
            Free Resources For Academic Success
          </h2>
          <p className="text-base text-[#1D1D1D] max-w-3xl mx-auto">
            At PrepBridge, we believe that access to quality academic support is
            essential for every learner. Our collection of resources.
          </p>
        </div>
      </section>

      <section className="bg-[#E8F0E1] md:px-20 px-6 py-16 space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Free Resources for Academic Success
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ResourceCard title="Academic Blog" items={academicBlog} />
          <ResourceCard
            title="Academic Skills Resources"
            items={skillsResources}
          />
          <ResourceCard title="Free Study Materials" items={studyMaterials} />
          <ResourceCard
            title="Practice & Self-Assessment"
            items={practiceItems}
          />
        </div>
      </section>

      <section className="md:px-20 px-6 py-16">
        <div
          className="rounded-md md:px-20 px-8 py-16 text-white"
          style={{
            background: `linear-gradient(rgba(20,20,20,0.65), rgba(20,20,20,0.65)), url('/about-vision.jpg') center/cover no-repeat`,
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Access &amp; Use Guidelines
          </h2>
          <ul className="space-y-3 max-w-3xl mx-auto text-base">
            {guidelines.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
