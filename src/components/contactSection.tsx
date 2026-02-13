"use client";
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
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormState> = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";

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

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);

      if (!data.success) {
        throw new Error("Submission failed");
      }

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-linear-to-r from-[#2a0405] to-[#8a1c1f] py-16 px-6">
      <div className="max-w-6xl mx-auto">
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
            <p>Sumukha, 6th Main, Chandra Layout, Bangalore 560040</p>
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs mt-12">
          © 2025 · All Rights Reserved By Avinya Technows
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
