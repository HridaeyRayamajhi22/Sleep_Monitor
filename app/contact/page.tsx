"use client";

import React from "react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)
      ?.value;

    const mailtoLink = `mailto:support@sleepmonitor.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent mb-6">
          Contact SleepMonitor
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Have a question or need help? We’d love to hear from you.  
          Reach out and we’ll get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition" />
          <div className="relative bg-gray-800 rounded-2xl p-10 shadow-lg border border-gray-700">
            <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-gray-600 bg-gray-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-gray-600 bg-gray-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-gray-600 bg-gray-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="Your message..."
                  required
                />
              </div>

              {/* Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
