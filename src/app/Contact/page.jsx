"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Linkedin,
    Twitter,
    Facebook,
    CheckCircle,
    XCircle,
} from "lucide-react";
import Image from "next/image";
import emailjs from "emailjs-com"; // ✅ Import EmailJS

import contactImg from "../../../public/imp15.jpg";

export default function Contact() {
    const [status, setStatus] = useState(""); // success | error | loading

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("loading");

        emailjs
            .sendForm(
                "service_acrvlau",
                "template_bktxq7q",
                e.target,
                "4I-MeRZZDv4dc_hqA"
            )
            .then(
                () => {
                    setStatus("success");
                    e.target.reset(); // clear form
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    setStatus("error");
                }
            );

        setTimeout(() => setStatus(""), 4000); // hide toast after 4s
    };

    return (
        <div className="ml-10 mr-10 mt-20">
            {/* Header Section */}
            <section
                id="contact"
                className="flex justify-center items-center text-black relative overflow-hidden"
            >
                <motion.h1
                    className="text-center font-extrabold text-5xl drop-shadow-lg relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Contact Us
                </motion.h1>
            </section>

            {/* Contact Section (Image + Form) */}
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12 items-center">
                {/* Left Side - Image */}
                <div className="flex justify-center">
                    <Image
                        src={contactImg}
                        alt="Contact Illustration"
                        className="rounded-2xl shadow-lg w-full h-auto object-cover"
                    />
                </div>

                {/* Right Side - Contact Form */}
                <div className="bg-white rounded-2xl shadow-lg p-8 relative">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Get In Touch
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message..."
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition disabled:opacity-50"
                            >
                                {status === "loading" ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>

                    {/* ✅ Toast Notification */}
                    {status === "success" && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg">
                            <CheckCircle className="w-5 h-5" /> Message Sent Successfully!
                        </div>
                    )}
                    {status === "error" && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg">
                            <XCircle className="w-5 h-5" /> Oops! Something went wrong.
                        </div>
                    )}
                </div>
            </div>

            {/* Office Info + Google Map */}
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-16">
                {/* Office Info */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-xl font-bold mb-6">Our Office</h2>
                    <p className="flex items-center gap-3 mb-4"><MapPin className="text-sky-500" /> Nutan Nagar, Near Santoshi Temple, Khargone, MP - 451001</p>
                    <p className="flex items-center gap-3 mb-4"><Phone className="text-sky-500" /> +91 98765 43210</p>
                    <p className="flex items-center gap-3 mb-4"><Mail className="text-sky-500" /> shreem.sofware.solutions@gmail.com</p>
                    <p className="flex items-center gap-3 mb-4"><Clock className="text-sky-500" /> Mon - Sat: 10:00 AM - 5:00 PM</p>

                    {/* Social Links */}
                    <div className="flex gap-6 mt-4 text-sky-500">
                        <a href="#"><Linkedin size={24} /></a>
                        <a href="#"><Twitter size={24} /></a>
                        <a href="#"><Facebook size={24} /></a>
                    </div>
                </div>

                {/* Google Map */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.123456789!2d75.613!3d21.833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sShreem%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1700000000000"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
