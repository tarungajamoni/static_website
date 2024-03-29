import React from "react";

function HomeComponent() {
  return (
    <><img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
            <div className="mx-auto max-w-7xl lg:px-96 pr-20 ml-32">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Empowering Your Business with Expert IT Solutions</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        We specialize in providing innovative technology solutions for small businesses.
                    </p>
                </div>
                <a
                    href="#about"
                    className="flex-none rounded-full bg-gray-900 text-2xl font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    Get Started <span aria-hidden="true">&rarr;</span>
                </a>
            </div></>
  );
}

export default HomeComponent;
