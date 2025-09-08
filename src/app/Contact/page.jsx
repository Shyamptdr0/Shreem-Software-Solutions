"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Contact() {
    return (
        <div className="ml-10 mr-10 mt-30" >
            {/* Header Section */}
            <section id="contact" className="h-60 flex justify-center items-center bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white rounded-2xl shadow-lg relative overflow-hidden">
                <motion.h1
                    className="text-center font-extrabold text-5xl drop-shadow-lg relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Contact Us
                </motion.h1>

                {/* Glow Lights */}
                <div className="absolute w-40 h-40 bg-white/30 rounded-full blur-3xl -top-12 left-12 animate-pulse mix-blend-overlay"></div>
                <div className="absolute w-52 h-52 bg-sky-300/30 rounded-full blur-3xl bottom-0 right-12 animate-bounce mix-blend-overlay"></div>
                <div className="absolute w-32 h-32 bg-indigo-400/30 rounded-full blur-2xl top-1/2 left-1/3 animate-ping mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 mix-blend-soft-light pointer-events-none"></div>
            </section>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Get In Touch
                </h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Your Message..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
                        ></textarea>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Our Office</h3>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-sky-500" />
                            Nutan Nagar, Near Santoshi Temple, Khargone, MP - 451001
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-sky-500" />
                            <a href="tel:+919876543210" className="hover:text-sky-700 transition">
                                +91 98765 43210
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-sky-500" />
                            <a href="mailto:shreem.sofware.solutions@gmail.com" className="hover:text-sky-700 transition">
                                shreem.sofware.solutions@gmail.com
                            </a>
                        </li>

                        <li className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-sky-500" />
                            Mon - Sat: 10:00 AM - 5:00 PM
                        </li>
                    </ul>

                    {/* Social Icons */}
                    <div className="flex gap-5 mt-6">
                        <a href="#" className="text-sky-500 hover:text-sky-700">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-sky-500 hover:text-sky-700">
                            <Twitter size={24} />
                        </a>
                        <a href="#" className="text-sky-500 hover:text-sky-700">
                            <Facebook size={24} />
                        </a>
                    </div>
                </div>

                {/* Google Map */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.6586658323907!2d75.61572237465634!3d21.833693859930557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f95a1f5f3df9%3A0x85c5f3a52a1cbe29!2sSantoshi%20Temple%2C%20Khargone%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1691760476273!5m2!1sen!2sin"
                        width="100%"
                        height="350"
                        allowFullScreen=""
                        loading="lazy"
                        className="border-0 w-full h-[350px]"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
