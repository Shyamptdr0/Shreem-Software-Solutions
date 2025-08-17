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
    const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <div className="ml-20 mr-20 mt-25">
            {/* Hero */}
            <section className="h-60 flex justify-center items-center bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white rounded-2xl shadow-lg relative overflow-hidden">
            {/* Heading */}
            <motion.h1
                className="text-center font-extrabold text-5xl drop-shadow-lg relative z-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                About Us
            </motion.h1>

            {/* Glow lights */}
            <div className="absolute w-40 h-40 bg-white/30 rounded-full blur-3xl -top-12 left-12 animate-pulse mix-blend-overlay"></div>
            <div className="absolute w-52 h-52 bg-sky-300/30 rounded-full blur-3xl bottom-0 right-12 animate-bounce mix-blend-overlay"></div>
            <div className="absolute w-32 h-32 bg-indigo-400/30 rounded-full blur-2xl top-1/2 left-1/3 animate-ping mix-blend-overlay"></div>

            {/* Subtle gradient overlay for light effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 mix-blend-soft-light pointer-events-none"></div>
        </section>


            {/* Founder's Section */}
            <section className="about-section pt-16 pb-20">
                <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-lg bg-gradient-to-tr from-sky-400 via-blue-300 to-indigo-300 blur-lg"></div>
                        <img src="/image/photo 1.png" alt="about" className="w-full h-auto rounded-lg shadow-xl" />
                    </div>
                    <motion.div
                        className="w-full md:w-1/2 h-auto"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl font-bold mb-4 text-sky-600">Founder's Message</h1>
                        <div className="border border-gray-300 p-6 rounded-lg mb-6 bg-white shadow-xl">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                “At Shreem Software Solutions, we believe in building more than just software — we build trust,
                                growth, and long-term partnerships. Our focus is on delivering simple, efficient, and user-friendly
                                technology that makes a real difference.”
                                <span className="text-gray-500"> — Founder: Shreem Software Solutions</span>
                            </p>
                        </div>
                        <a
                            href="#"
                            className="border-2 border-sky-600 bg-white text-sky-600 px-6 py-3 rounded-full hover:bg-sky-600 hover:text-white transition font-semibold shadow-md"
                        >
                            More About Us
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Core Values Horizontal Scroll */}
            <section ref={targetRef} className="relative h-[200vh] bg-gradient-to-b from-gray-50 to-white">
                <div className="sticky top-0 h-[100vh] flex items-center overflow-hidden">
                    <div className="absolute top-1/2 left-0 right-0 border-t-4 border-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 z-0"></div>

                    <motion.div style={{ x }} className="flex gap-12 items-center relative z-10">
                        <div className="flex-shrink-0 min-w-[320px] flex flex-col justify-center items-center relative">
                            <h2 className="text-4xl font-extrabold text-sky-600 tracking-wide bg-white/80 px-6 py-2 rounded-xl shadow-lg">
                                Core Values
                            </h2>
                        </div>

                        {values.map((val) => (
                            <div
                                key={val.id}
                                className="min-w-[300px] h-[340px] flex flex-col justify-center items-center p-6 bg-white shadow-xl rounded-2xl border border-gray-200 hover:shadow-2xl hover:scale-105 transition relative"
                            >
                                <div className="p-4 rounded-full bg-sky-100 mb-4">
                                    <val.icon className="w-10 h-10 text-sky-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-black">{val.title}</h3>
                                <p className="text-gray-600 text-center">{val.text}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-50">
                <h2 className="text-4xl font-bold text-center mb-12 text-sky-600">Why Choose Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {chooseUs.map((item) => (
                        <motion.div
                            key={item.id}
                            className="p-6 bg-white shadow-lg rounded-2xl text-center hover:shadow-2xl border border-gray-200 transition hover:-translate-y-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="p-4 rounded-full bg-sky-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <item.icon className="w-8 h-8 text-sky-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white relative">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
                    <div className="border-r md:border-r-2 border-gray-300 pr-6">
                        <h2 className="text-3xl font-bold mb-4 text-sky-600">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To empower businesses with innovative, scalable, and affordable software solutions that solve
                            real-world problems and drive growth.
                        </p>
                    </div>
                    <div className="pl-6">
                        <h2 className="text-3xl font-bold mb-4 text-sky-600">Our Vision</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To be a globally recognized technology partner known for creativity, excellence, and lasting client
                            relationships.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white text-center rounded-2xl my-12 relative overflow-hidden">
                <h2 className="text-3xl font-bold mb-4">Let’s Build Something Great Together</h2>
                <p className="mb-6 text-lg">We’d love to discuss how we can bring your ideas to life.</p>
                <a
                    href="/contact"
                    className="px-8 py-3 bg-white text-sky-600 font-semibold rounded-full shadow hover:bg-gray-100 transition"
                >
                    Contact Us
                </a>
                {/* Decorative Waves */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/20 backdrop-blur-lg rounded-t-full"></div>
            </section>
        </div>
    );
}
