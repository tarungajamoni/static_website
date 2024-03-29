import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import axios from "axios";
import TailwindAlert from './TailwindAlert';


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, message };
    try {
      await axios.post("/api", data);
      //alert("Your message has been sent!");
      setAlertType('success');
      setAlertMessage('Your message has been sent!');
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      // alert("Failed to send message. Please try again!");
      setAlertType('error');
      setAlertMessage('Failed to send message. Please try again!');
      console.log(error);
    }
  };

  const resetAlert = () => {
    setAlertType("");
    setAlertMessage("");
  };

  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl pt-4 pr-16">
          Contact Us
        </h2>
      </div>
      <form
        className="mx-auto mb-5 mt-10 max-w-xl sm:mt-10 max-w-96"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-2 pr-7 pl-7">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                // value={formData.name}
                // onChange={handleChange}
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 pr-7 pl-7">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                // value={formData.email}
                // onChange={handleChange}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 pr-7 pl-7">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                // value={formData.message}
                // onChange={handleChange}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2 pr-7 pl-7">
            <div className="flex h-6 items-center"></div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10 pr-7 pl-7">
          <button
            type="submit"
            //onClick={handleChange}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send
          </button>
        </div>
      </form>
      {alertMessage && <TailwindAlert message={alertMessage} type={alertType} onClose={resetAlert}/>}
    </>
  );
}

export default Contact;