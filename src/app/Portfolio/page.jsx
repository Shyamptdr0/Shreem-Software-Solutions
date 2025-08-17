"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
    const projects = [
        {
            image: "https://source.unsplash.com/random/600x400?ecommerce",
            title: "E-Commerce Website",
            desc: "A scalable online shopping platform with secure payment integration and a smooth user experience.",
        },
        {
            image: "https://source.unsplash.com/random/600x400?banking",
            title: "Mobile Banking App",
            desc: "Cross-platform app with real-time transactions, AI fraud detection, and modern UI.",
        },
        {
            image: "https://source.unsplash.com/random/600x400?chatbot",
            title: "AI Chatbot Solution",
            desc: "Custom AI chatbot for customer support, integrated with WhatsApp and web platforms.",
        },
        {
            image: "https://source.unsplash.com/random/600x400?dashboard",
            title: "Business Dashboard",
            desc: "Data-driven analytics dashboard with interactive charts and role-based access.",
        },
    ];

    return (
        <div className="ml-10 mr-10 mt-20">
            {/* Header Section */}
            <section className="h-60 flex justify-center items-center bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white rounded-2xl shadow-lg relative overflow-hidden">
                <motion.h1
                    className="text-center font-extrabold text-5xl drop-shadow-lg relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Portfolio
                </motion.h1>

                {/* Glow Lights */}
                <div className="absolute w-40 h-40 bg-white/30 rounded-full blur-3xl -top-12 left-12 animate-pulse mix-blend-overlay"></div>
                <div className="absolute w-52 h-52 bg-sky-300/30 rounded-full blur-3xl bottom-0 right-12 animate-bounce mix-blend-overlay"></div>
                <div className="absolute w-32 h-32 bg-indigo-400/30 rounded-full blur-2xl top-1/2 left-1/3 animate-ping mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 mix-blend-soft-light pointer-events-none"></div>
            </section>

            {/* Portfolio Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <div className="relative w-full h-52">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-52 object-cover rounded-t-2xl"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                            <p className="text-gray-600 text-sm">{project.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
