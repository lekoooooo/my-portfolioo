"use client";

import Image from "next/image";
import { contactLinks } from "@/app/lib/data";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent!\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      <div className="bg-black p-4 sm:p-6 rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-4">
          LET'S CONNECT
        </h2>
        <p className="text-[#C7C7C7] mb-4 text-sm sm:text-base">
          Say hello at{" "}
          <span className="text-[#C6F368] hover:cursor-pointer">
            levdidebashvili@gmail.com
          </span>
        </p>
        <div className="flex gap-3 sm:gap-4 mt-6">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-[48px] sm:h-[48px] rounded-full bg-[#2c2c2c] hover:bg-[#3a3a3a] transition"
            >
              <Image
                src={link.icon}
                width={18}
                height={18}
                alt={link.name}
                className="sm:w-6 sm:h-6"
              />
            </a>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded-md bg-[#1a1a1a] border border-gray-700 focus:border-[#C6F368] outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-md bg-[#1a1a1a] border border-gray-700 focus:border-[#C6F368] outline-none"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="p-3 rounded-md bg-[#1a1a1a] border border-gray-700 focus:border-[#C6F368] outline-none"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded-md bg-[#1a1a1a] border border-gray-700 focus:border-[#C6F368] outline-none"
        />

        <button
          type="submit"
          className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#C6F368] text-black font-semibold shadow-md
                     active:scale-95 active:shadow-inner transition-transform duration-150 ease-in-out text-sm sm:text-base"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
