"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Lightbulb,
    ShieldCheck,
    Award,
    Users,
    HeartHandshake,
    CheckCircle,
    Rocket,
    Target,
    Star,
} from "lucide-react";

const values = [
    { id: 1, title: "Innovation", text: "We embrace creativity and new ideas.", icon: Lightbulb },
    { id: 2, title: "Integrity", text: "Honesty and transparency in all we do.", icon: ShieldCheck },
    { id: 3, title: "Excellence", text: "Always delivering high-quality results.", icon: Award },
    { id: 4, title: "Collaboration", text: "Teamwork that drives success.", icon: Users },
    { id: 5, title: "Customer First", text: "Our clients are at the heart of our mission.", icon: HeartHandshake },
];

const chooseUs = [
    { id: 1, title: "Proven Expertise", text: "Years of experience delivering scalable solutions.", icon: CheckCircle },
    { id: 2, title: "Future-Ready Tech", text: "We adopt modern tools to keep you ahead.", icon: Rocket },
    { id: 3, title: "Goal-Oriented", text: "We align our work with your business vision.", icon: Target },
    { id: 4, title: "Trusted by Clients", text: "Strong relationships and long-term trust.", icon: Star },
];

export default function About() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-20 mt-10">
            {/* Hero */}
            <section className="h-48 sm:h-56 flex justify-center items-center bg-gradient-to-r text-black rounded-2xl relative overflow-hidden">
                <motion.h1
                    className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl drop-shadow-lg relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About Us
                </motion.h1>
                <div className="absolute w-28 sm:w-40 h-28 sm:h-40 bg-white/30 rounded-full blur-3xl -top-12 left-6 animate-pulse mix-blend-overlay"></div>
                <div className="absolute w-36 sm:w-52 h-36 sm:h-52 bg-sky-300/30 rounded-full blur-3xl bottom-0 right-6 animate-bounce mix-blend-overlay"></div>
                <div className="absolute w-24 sm:w-32 h-24 sm:h-32 bg-indigo-400/30 rounded-full blur-2xl top-1/2 left-1/3 animate-ping mix-blend-overlay"></div>
            </section>

            {/* Founder's Section */}
            <section className="pt-12 pb-16">
                <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-lg bg-gradient-to-tr from-sky-400 via-blue-300 to-indigo-300 blur-lg"></div>
                        <img src="/image%208.jpg" alt="about" className="w-full h-auto rounded-lg shadow-xl" />
                    </div>
                    <motion.div className="w-full md:w-1/2 h-auto" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-sky-600">Founder's Message</h1>
                        <div className="border border-gray-300 p-4 sm:p-6 rounded-lg mb-6 bg-white shadow-xl">
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                “At Shreem Software Solutions, we believe in building more than just software — we build trust, growth, and long-term partnerships. Our focus is on delivering simple, efficient, and user-friendly technology that makes a real difference.”
                                <span className="text-gray-500"> — Founder: Shreem Software Solutions</span>
                            </p>
                        </div>
                        <a href="#" className="border-2 border-sky-600 bg-white text-sky-600 px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-sky-600 hover:text-white transition font-semibold shadow-md text-sm sm:text-base">
                            Visit Our Profile
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Core Values Section */}
            {/* Core Values Section */}
            <section ref={targetRef} className="relative min-h-[150vh] sm:min-h-[180vh] bg-gradient-to-b from-gray-50 to-white py-16">

                {/* Desktop: horizontal scroll with decorative line */}
                <div className="hidden md:flex sticky top-0 h-[100vh] items-center overflow-hidden relative">

                    {/* Decorative Gradient Line Behind Cards */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 z-0 rounded-full shadow-lg opacity-60"></div>

                    <motion.div style={{ x }} className="flex gap-8 sm:gap-12 items-center relative z-10 px-4">
                        {/* Section Title Card */}
                        <div className="flex-shrink-0 min-w-[380px] flex flex-col justify-center items-center">
                            <h2 className="text-3xl font-extrabold text-sky-600 tracking-wide bg-white/90 px-8 py-2 rounded-xl shadow-2xl">
                                Core Values
                            </h2>
                        </div>

                        {/* Core Values Cards */}
                        {values.map((val) => (
                            <div key={val.id} className="min-w-[300px] h-[320px] flex flex-col justify-center items-center p-6 bg-white shadow-2xl rounded-2xl border border-gray-200 hover:shadow-3xl hover:scale-105 transition-transform duration-300">
                                <div className="p-4 rounded-full bg-sky-100 mb-4 shadow-inner">
                                    <val.icon className="w-10 h-10 text-sky-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-black">{val.title}</h3>
                                <p className="text-gray-600 text-center">{val.text}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Mobile: column layout */}
                <div className="md:hidden flex flex-col gap-6 py-6 px-2">
                    <h2 className="text-3xl text-center font-extrabold text-sky-600 tracking-wide bg-white/90 px-8 py-2 rounded-xl shadow-lg">
                        Core Values
                    </h2>
                    {values.map((val) => (
                        <div key={val.id} className="w-full h-auto flex flex-col justify-center items-center p-4 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                            <div className="p-3 rounded-full bg-sky-100 mb-4 shadow-inner">
                                <val.icon className="w-8 h-8 text-sky-600" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-black">{val.title}</h3>
                            <p className="text-gray-600 text-center text-sm">{val.text}</p>
                        </div>
                    ))}
                </div>

            </section>


            {/* Why Choose Us */}
            <section className="py-16 bg-gray-50">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-sky-600">Why Choose Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
                    {chooseUs.map((item) => (
                        <motion.div key={item.id} className="p-4 sm:p-6 bg-white shadow-lg rounded-2xl text-center hover:shadow-2xl border border-gray-200 transition hover:-translate-y-2" whileHover={{ scale: 1.05 }}>
                            <div className="p-3 sm:p-4 rounded-full bg-sky-100 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4">
                                <item.icon className="w-6 sm:w-8 h-6 sm:h-8 text-sky-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
                    <div className="border-r md:border-r-2 border-gray-300 md:pr-6">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-sky-600">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            To empower businesses with innovative, scalable, and affordable software solutions that solve real-world problems and drive growth.
                        </p>
                    </div>
                    <div className="md:pl-6">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-sky-600">Our Vision</h2>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            To be a globally recognized technology partner known for creativity, excellence, and lasting client relationships.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white text-center rounded-2xl my-8 sm:my-12 relative overflow-hidden px-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let’s Build Something Great Together</h2>
                <p className="mb-6 text-base sm:text-lg">We’d love to discuss how we can bring your ideas to life.</p>
                <a href="/Contact" className="px-6 sm:px-8 py-3 bg-white text-sky-600 font-semibold rounded-full shadow hover:bg-gray-100 transition text-sm sm:text-base">Contact Us</a>
                <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-white/20 backdrop-blur-lg rounded-t-full"></div>
            </section>
        </div>
    );
}
