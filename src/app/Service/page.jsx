"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code,
    MonitorSmartphone,
    Brain,
    Server,
    Users,
    ShieldCheck,
    ShoppingCart,
    Globe,
    BarChart,
    Cloud,
} from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <Code className="w-10 h-10 text-sky-400" />,
            title: "Web Development",
            desc: "Modern, responsive, and scalable websites built with the latest technologies.",
        },
        {
            icon: <MonitorSmartphone className="w-10 h-10 text-indigo-400" />,
            title: "App Development",
            desc: "Cross-platform mobile applications that deliver seamless user experiences.",
        },
        {
            icon: <Brain className="w-10 h-10 text-purple-400" />,
            title: "AI Solutions",
            desc: "Smart AI-powered tools and automation to transform your business operations.",
        },
        {
            icon: <Server className="w-10 h-10 text-blue-400" />,
            title: "Website Maintenance & Hosting",
            desc: "Secure hosting, updates, and 24/7 monitoring for uninterrupted performance.",
        },
        {
            icon: <Users className="w-10 h-10 text-green-400" />,
            title: "IT Consulting",
            desc: "Expert guidance to align technology with your business goals.",
        },
        {
            icon: <ShoppingCart className="w-10 h-10 text-pink-400" />,
            title: "E-Commerce Solutions",
            desc: "Custom online stores with payment gateway integration and smooth checkout.",
        },
        {
            icon: <Globe className="w-10 h-10 text-orange-400" />,
            title: "Digital Marketing",
            desc: "SEO, social media, and performance marketing to boost your online presence.",
        },
        {
            icon: <BarChart className="w-10 h-10 text-teal-400" />,
            title: "Data Analytics",
            desc: "Actionable insights and dashboards to make data-driven business decisions.",
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-red-400" />,
            title: "Cybersecurity",
            desc: "Advanced protection for your digital assets, data, and infrastructure.",
        },
        {
            icon: <Cloud className="w-10 h-10 text-cyan-400" />,
            title: "Cloud Solutions",
            desc: "Scalable, secure, and reliable cloud infrastructure for modern businesses.",
        },
    ];

    return (
        <div className="ml-10 mr-10 mt-30">
            {/* Header Section */}
            <section className="h-25 flex justify-center items-center bg-gradient-to-r  text-black rounded-2xl  relative overflow-hidden">
                <motion.h1
                    className="text-center font-extrabold text-5xl drop-shadow-lg relative z-10 "
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Our Services
                </motion.h1>

                {/* Glow Lights */}
                <div className="absolute w-40 h-40 bg-white/30 rounded-full blur-3xl -top-12 left-12 animate-pulse mix-blend-overlay"></div>
                <div className="absolute w-52 h-52 bg-sky-300/30 rounded-full blur-3xl bottom-0 right-12 animate-bounce mix-blend-overlay"></div>
                <div className="absolute w-32 h-32 bg-indigo-400/30 rounded-full blur-2xl top-1/2 left-1/3 animate-ping mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 mix-blend-soft-light pointer-events-none"></div>
            </section>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.15 }}
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
