'use client'
import React, { useState } from "react";


interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const newErrors: Partial<FormState> = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Submitted:", form);
      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <section className="bg-linear-to-r from-[#2a0405] to-[#8a1c1f] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-yellow-400 mb-12">
          Contact Us
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-transparent"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Full Name */}
            <div>
              <label className="text-white text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full mt-2 px-4 py-2 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-white text-sm">Email ID</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email id"
                className="w-full mt-2 px-4 py-2 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="text-white text-sm">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full mt-2 px-4 py-2 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="text-white text-sm">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={5}
              className="w-full mt-2 px-4 py-2 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 bg-red-700 hover:bg-red-800 text-white px-10 py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>

        {/* Footer Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 text-sm mt-16">
          <div>
            <p className="font-semibold text-white">Phone</p>
            <p>+91 98861 11656</p>
          </div>

          <div>
            <p className="font-semibold text-white">Email</p>
            <p>avinyatechnows@gmail.com</p>
          </div>

          <div>
            <p className="font-semibold text-white">Address</p>
            <p>
              Sumukha, 6th Main, Chandra Layout, Bangalore 560040
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-400 text-xs mt-12">
          © 2025 · All Rights Reserved By Avinya Technows
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
