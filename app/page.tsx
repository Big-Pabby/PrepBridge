import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        className="md:px-20 space-y-6 px-6 py-8 min-h-screen"
        style={{
          background: `url('/hero.svg') center/cover no-repeat`,
        }}
      >
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="w-full md:w-5/12 p-6 bg-[#FFFFFF99] rounded-[12px] min-h-[320px] md:h-[400px] flex flex-col justify-between items-start gap-6">
            <div className="space-y-3">
              <img src="/Britain.svg" alt="" />
              <h1 className="font-bold text-3xl md:text-5xl">GCSE</h1>
              <p className="text-lg md:text-xl">Academic Preparation</p>
            </div>
            <a
              href="https://wa.me/message/25PXCVIEB53CA1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5F8A48] text-white px-6 py-3 rounded-[8px] inline-block w-fit"
            >
              Book Consultation
            </a>
          </div>
          <div className="w-full md:w-5/12 p-6 bg-[#FFFFFF99] rounded-[12px] min-h-[320px] md:h-[400px] flex flex-col justify-between items-start gap-6">
            <div className="space-y-3">
              <img src="/Nigeria.svg" alt="" />
              <h1 className="font-bold text-3xl md:text-5xl">JAMB</h1>
              <p className="text-lg md:text-xl">Academic Preparation</p>
            </div>
            <button className="bg-[#5F8A48] text-white px-6 py-3 rounded-[8px]">
              Explore JAMB
            </button>
          </div>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-white text-lg md:text-xl list-disc">
          <li className="ml-6">Structured</li>
          <li className="ml-6">Ethical</li>
          <li className="ml-6">Tech-enabled</li>
        </ul>
        <div className="flex justify-center items-center">
          <a
            href="https://wa.me/message/25PXCVIEB53CA1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFFFFF] text-[#1D1D1D] px-12 max-w-[450px] w-full py-3 rounded-[8px] text-center"
          >
            Book Consultation
          </a>
        </div>
      </div>
      <div className="py-12 md:px-20 px-6 space-y-10 md:space-y-16"  style={{
          background: `url('/program.svg') center/cover no-repeat`,
        }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center">Program Snapshot</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <div className="bg-[#486A36] border-2 border-white py-10 text-center px-3 text-white ">
              GCSE Program
            </div>
            <div className="bg-white py-6 text-center px-3">
             Academic Skills Workshop
            </div>
            <div className="bg-white py-6 text-center px-3">
             Exam-focused Preparation
            </div>
            <div className="bg-white py-6 text-center px-3">
             General Academic Development
            </div>

          </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <img className="w-full md:w-6/12 object-cover" src="/resource.png" alt="" />
        <div className="w-full md:w-6/12 bg-[#F0EFEF] p-6 md:p-32 flex justify-center  flex-col space-y-4 items-start">
          <h2 className="font-bold text-2xl">Free Resources corner</h2>
          <p className="text-lg md:text-xl">Free Academic Resources</p>
          <ul className="list-disc space-y-4 md:space-y-6 text-base md:text-lg">
            <li className="ml-6">Study Materials</li>
            <li className="ml-6">Practice Content</li>
            <li className="ml-6">Academic Skills</li>
          </ul>
          <button className="bg-[#486A36] text-white px-8 py-2.5 rounded-[8px]">
            ACCESS FREE RESOURCES
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse">
        <img className="w-full md:w-6/12 object-cover" src="/why.png" alt="" />
        <div className="w-full md:w-6/12 bg-[#F0EFEF] p-6 md:p-32 flex justify-center  flex-col space-y-4 items-start">
          <h2 className="font-bold text-2xl">Why PrepBridge</h2>

          <ul className="list-disc space-y-4 md:space-y-6 text-base md:text-lg">
            <li className="ml-6">Global academic outlook</li>
            <li className="ml-6">Tech-enabled, not tech-driven</li>
            <li className="ml-6">Pathway between secondary and higher education</li>
            <li className="ml-6">Premium, structure learning curriculum environment</li>
          </ul>

        </div>
      </div>
      <div className="min-h-[350px] w-full flex flex-col sm:flex-row justify-center items-center gap-4 px-6 py-10 !bg-[#486A36]"  style={{
          background: `url('/cta.svg') center/cover no-repeat`,
        }}>
          <a
            href="https://wa.me/message/25PXCVIEB53CA1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFFFFF] text-[#1D1D1D] w-full sm:w-auto px-8 sm:px-12 py-3 rounded-[8px] text-center"
          >
            Book Consultation
          </a>
          <button className="bg-[#FFFFFF] text-[#1D1D1D] w-full sm:w-auto px-8 sm:px-12 py-3 rounded-[8px]">
          Speak to An Adviser
          </button>
      </div>
    </div>
  );
}
