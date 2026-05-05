import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import React from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { BsLinkedin, BsFacebook, BsTwitterX } from "react-icons/bs";

const contactItems = [
  {
    icon: <FiPhone className="h-4 w-4" />,
    alt: "Phone",
    text: "09135758651",
  },
  {
    icon: <FiMapPin className="h-4 w-4" />,
    alt: "Location",
    text: "9, Governors Way, Maplewood Estate, Lagos State.",
  },
  {
    icon: <FiMapPin className="h-4 w-4" />,
    alt: "Location",
    text: "9, Grosvenor road. W7 1HR. United Kingdom.",
  },
  {
    icon: <FiMail className="h-4 w-4" />,
    alt: "Email",
    text: "info@prepbridgehq.com",
  },
];

const footerLinkGroups = [
  {
    title: "Explore",
    links: [
      "Home",
      "About Us",
      "GCSE Program",
      "JAMB Program",
      "All Exams",
      "Academic Development",
    ],
  },
  {
    title: "Resources",
    links: ["Free Resource Corner", "Study Tips", "Learning Resources", "Blog"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms", "Academic Integrity", "Refund Policy"],
  },
];

const supportLinks = [
  "FAQs",
  "Contact Us",
  "Book Consultation",
  "Join Waitlist",
];

export const FooterSection = (): React.ReactElement => {
  return (
    <>
      <section className="mt-[60px] w-full bg-neutral-200">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-[60px] md:px-12 lg:px-24">
          <div className="grid gap-8 lg:grid-cols-[382px_1px_minmax(0,1fr)] lg:items-start lg:gap-[42px]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-start gap-2">
                <img
                  alt="Img"
                  src="/logo.svg"
                />
                <p className=" text-base font-normal text-black">
                  A technology-enabled academic learning institute focused on
                  structured exam preparation, academic development, and ethical
                  learning.
                </p>
              </div>
              <address className="not-italic">
            <div className="flex flex-col gap-[7px]">
              {contactItems.map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  {item.icon}
                  <span className=" text-base font-normal  text-black">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
              </address>
            </div>
            <div className="hidden lg:block">
              <Separator
                orientation="vertical"
                className="h-[427px] w-px bg-[#8d8d8d]"
              />
            </div>
            <div className="flex flex-col gap-10">
              <nav
                aria-label="Footer navigation"
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[77px]"
              >
                {footerLinkGroups.map((group) => (
                  <div
                    key={group.title}
                    className="flex w-full max-w-[188px] flex-col gap-8"
                  >
                    <h2 className=" text-xl font-bold text-black">
                      {group.title}
                    </h2>
                    <ul className="flex flex-col gap-3">
                      {group.links.map((link) => (
                        <li key={link}>
                          <button
                            type="button"
                            className="text-left  text-base font-normal ] text-black transition-opacity hover:opacity-80"
                          >
                            {link}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
              <Card className="w-full overflow-hidden rounded border-0 bg-transparent shadow-none">
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    <div className="flex min-h-24 items-start rounded-t bg-[#5f8a48] px-6 py-8">
                      <h3 className=" text-2xl font-bold  text-white">
                        Start Your Academic Journey with PregBridge
                      </h3>
                    </div>
                    <div className="-mt-6 px-0">
                      <div className="flex min-h-16 flex-col justify-start rounded-b">
                        <div className="mt-[19px] h-[45px] rounded bg-[#3b532e] shadow-[0px_1px_4px_#00000040]" />
                        <Button
                          type="button"
                          variant="secondary"
                          className="-mt-[64px] ml-[25px] flex h-[35px] w-[231px] items-center justify-center rounded bg-white p-2.5  text-sm font-normal  text-[#1d1d1d] hover:bg-white"
                        >
                          Book Free Consultation
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <Card className="rounded border-0 bg-white shadow-none">
            <CardContent className="px-6 py-2.5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
                <h2 className="shrink-0 text-xl font-bold  text-black">
                  Support
                </h2>
                <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <ul className="flex flex-wrap items-start gap-x-6 gap-y-2 lg:justify-between">
                    {supportLinks.map((link) => (
                      <li key={link}>
                        <button
                          type="button"
                          className=" text-base font-normal text-black transition-opacity hover:opacity-80"
                        >
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                <div className="flex gap-4 items-center">
                    <a href="#" className="text-black hover:text-gray-600">
                      <BsFacebook className="h-4 w-4" />
                    </a>
                    <a href="#" className="text-black hover:text-gray-600">
                      <BsLinkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="text-black hover:text-gray-600">
                      <BsTwitterX className="h-4 w-4" />
                    </a>
                </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <footer className="w-full bg-black">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center px-6 py-2.5 md:px-12 lg:px-24">
          <div className="flex w-full max-w-[1205px] items-center justify-center gap-8">
            <div className="flex w-full items-center justify-center gap-2">
             
              <p className=" text-base font-normal text-neutral-100">
                  &copy;
                2026 PrepBridge. Operating with standards and ethical learning
                policies.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
