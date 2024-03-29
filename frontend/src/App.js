import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import logo from "./assets/logo.webp";
import SimpleChatbot from "./components/chatbot";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import HomeComponent from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <div>
      <Disclosure
        as="nav"
        className={`bg-gray-800 ${isSticky ? "sticky top-0" : ""}`}
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex items-center flex-shrink-0">
                  <img className="h-8 w-auto" src={logo} alt="Your Company" />
                </div>
                <div className="hidden md:block">
                  <div className="flex items-center ml-10 space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {/* Hamburger Icon */}
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div
        id="home"
        className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
      >
        <HomeComponent />
      </div>
      <div id="about" className="bg-white py-24 sm:py-32">
        <About  />
              </div>
      <div id="contact" className="bg-slate-100 mt-[-66px]">
        <Contact />
      </div>
      {/* Chatbot Button */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleChatbot}
          className="bg-blue-500 p-3 rounded-full text-white"
        >
          <ChatBubbleLeftIcon className="h-6 w-6" />
        </button>
      </div>
      {/* Chatbot */}
      {isChatbotVisible && <SimpleChatbot />}
      </div>
      <div>
      <Footer />
      </div>
      
    </>
  );
}