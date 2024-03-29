import React from "react";

function About(props) {
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl px-6 lg:px-8 w-full">
        <div className="px-8 sm:px-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center pr-16">
            About HANVI Global Tech
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-8 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col justify-between h-full bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-bold tracking-tight">Vision</h1>
            <p>
              Our vision at HANVI GLOBAL TECH is to become the go-to IT services
              provider for small businesses. We aim to achieve this by providing
              exceptional services that help our clients achieve their business
              goals and stay ahead of the curve in the ever-evolving world of
              technology.
            </p>
          </div>
          <div className="flex flex-col justify-between h-full bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-bold tracking-tight">Values</h1>
            <p>
              At HANVI GLOBAL TECH , we believe in honesty, integrity, and
              accountability. We understand the importance of trust in business
              relationships and strive to build long-lasting partnerships with
              our clients. We also value innovation and continuous improvement,
              and are always looking for ways to improve our services and stay
              ahead of the competition.
            </p>
          </div>
          <div className="flex flex-col justify-between h-full bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-bold tracking-tight">Services</h1>
            <p>
              We offer a wide range of IT services to meet the needs of small
              businesses. From network setup and maintenance to cloud solutions
              and cybersecurity, we have the expertise to help you achieve your
              goals and keep your business running smoothly. We provide
              personalized solutions tailored to your needs and budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
