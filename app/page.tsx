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
        <div className="flex justify-between">
          <div className="md:w-5/12 p-6 bg-[#FFFFFF99] rounded-[12px] h-[400px] flex flex-col justify-between items-start">
            <div className="space-y-3">
              <img src="/Britain.svg" alt="" />
              <h1 className="font-bold text-5xl">GCSE</h1>
              <p className="text-xl">Academic Preparation</p>
            </div>
            <button className="bg-[#5F8A48] text-white px-6 py-3 rounded-[8px]">
              Book Consultation
            </button>
          </div>
          <div className="md:w-5/12 p-6 bg-[#FFFFFF99] rounded-[12px] h-[400px] flex flex-col justify-between items-start">
            <div className="space-y-3">
              <img src="/Nigeria.svg" alt="" />
              <h1 className="font-bold text-5xl">JAMB</h1>
              <p className="text-xl">Academic Preparation</p>
            </div>
            <button className="bg-[#5F8A48] text-white px-6 py-3 rounded-[8px]">
              Explore JAMB
            </button>
          </div>
        </div>
        <ul className="flex gap-6 text-white text-xl list-disc">
          <li className="ml-6">Structured</li>
          <li className="ml-6">Ethical</li>
          <li className="ml-6">Tech-enabled</li>
        </ul>
        <div className="flex justify-center items-center">
          <button className="bg-[#FFFFFF] text-[#1D1D1D] px-12 max-w-[450px] w-full py-3 rounded-[8px]">
           Book Consultation
          </button>
        </div>
      </div>
      <div className="py-12 space-y-16"  style={{
          background: `url('/program.svg') center/cover no-repeat`,
        }}>
          <h2 className="text-3xl font-bold text-center">Program Snapshot</h2>
          <div className="grid grid-cols-4 gap-6 items-center">
            <div className="bg-[#486A36] border-2 border-white py-10 text-center px-3 text-white ">
              GCSE Program
            </div>
            <div className="bg-white py-6 text-center px-3">
              GCSE Program
            </div>
            <div className="bg-white py-6 text-center px-3">
              GCSE Program
            </div>
            <div className="bg-white py-6 text-center px-3">
              GCSE Program
            </div>
           
          </div>
      </div>
      <div className="flex">
        <img className="md:w-6/12" src="/resource.png" alt="" />
        <div className="md:w-6/12 bg-[#F0EFEF] p-32 flex justify-center  flex-col space-y-4 items-start">
          <h2 className="font-bold text-2xl">Free Resources corner</h2>
          <p className="text-xl">Free Academic Resources</p>
          <ul className="list-disc space-y-6 text-lg">
            <li className="ml-6">Study Materials</li>
            <li className="ml-6">Practice Content</li>
            <li className="ml-6">Academic Skills</li>
          </ul>
          <button className="bg-[#486A36] text-white px-8 py-2.5 rounded-[8px]">
            ACCESS FREE RESOURCES
          </button>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <img className="md:w-6/12" src="/why.png" alt="" />
        <div className="md:w-6/12 bg-[#F0EFEF] p-32 flex justify-center  flex-col space-y-4 items-start">
          <h2 className="font-bold text-2xl">Why PrepBridge</h2>
         
          <ul className="list-disc space-y-6 text-lg">
            <li className="ml-6">Global academic outlook</li>
            <li className="ml-6">Tech-enabled, not tech-driven</li>
            <li className="ml-6">Pathway between secondary and higher education</li>
            <li className="ml-6">Premium, structure learning curriculum environment</li>
          </ul>
         
        </div>
      </div>
      <div className="h-[350px] w-full flex justify-center gap-4 !bg-[#486A36] items-center"  style={{
          background: `url('/cta.svg') center/cover no-repeat`,
        }}>
          <button className="bg-[#FFFFFF] text-[#1D1D1D] px-12   py-3 rounded-[8px]">
           Book Consultation
          </button>
          <button className="bg-[#FFFFFF] text-[#1D1D1D] px-12 py-3 rounded-[8px]">
          Speak to An Adviser
          </button>
      </div>
    </div>
  );
}
