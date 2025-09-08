"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code,
    MonitorSmartphone,
    Brain,
    Server,
    Users,
    ShoppingCart,
    Globe,
    Layers,
    Laptop,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

export default function Services() {
    const services = [
        { icon: <Code className="w-10 h-10 text-sky-400" />, title: "Full Stack Web Development", desc: "Custom websites & enterprise platforms using MERN, Next.js, and modern stacks." },
        { icon: <Laptop className="w-10 h-10 text-indigo-400" />, title: "Java Full Stack Development", desc: "Robust applications with Java, Spring Boot, Hibernate, and frontend frameworks." },
        { icon: <MonitorSmartphone className="w-10 h-10 text-purple-400" />, title: "Mobile App Development", desc: "Cross-platform mobile apps with React Native & Expo for iOS & Android." },
        { icon: <Brain className="w-10 h-10 text-pink-400" />, title: "AI & Automation", desc: "AI-powered chatbots, workflow automation, and predictive solutions." },
        { icon: <Server className="w-10 h-10 text-blue-400" />, title: "Website Maintenance & Hosting", desc: "Secure hosting, updates, and 24/7 monitoring for uninterrupted performance." },
        { icon: <Users className="w-10 h-10 text-green-400" />, title: "IT Consulting", desc: "Strategic consulting to align IT with your business goals." },
        { icon: <ShoppingCart className="w-10 h-10 text-pink-500" />, title: "E-Commerce Solutions", desc: "Custom online stores with secure payment gateways & seamless checkout." },
        { icon: <Globe className="w-10 h-10 text-orange-400" />, title: "Digital Marketing", desc: "SEO, social media, and campaigns to strengthen your brand’s presence." },
        { icon: <Layers className="w-10 h-10 text-yellow-500" />, title: "Custom Software Development", desc: "End-to-end product engineering & SaaS solutions tailored to your needs." },
    ];

    const technologies = [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Hibernate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Expo", logo: "https://avatars.githubusercontent.com/u/12504344?s=200&v=4" },
    ];

    const TechCard = ({ logo, name }) => (
        <figure className={cn("relative h-28 w-32 rounded-xl border flex flex-col items-center justify-center p-2 bg-white hover:bg-gray-50 border-gray-200")}>
            <img src={logo} alt={name} className="w-12 h-12 object-contain mb-2" />
            <figcaption className="text-sm font-medium">{name}</figcaption>
        </figure>
    );

    return (
        <div className="mx-6 md:mx-16 mt-20">

            {/* Services Section */}
            <section className="h-32 flex justify-center items-center bg-gradient-to-r from-sky-100 to-indigo-100 text-black rounded-2xl relative overflow-hidden">
                <motion.h1
                    className="text-center font-extrabold text-5xl drop-shadow-lg relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Services
                </motion.h1>
            </section>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-100 hover:border-sky-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Technologies Marquee Section */}
            <section className="mt-20 text-center relative">
                <motion.h2
                    className="text-4xl font-extrabold text-gray-900 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Technologies We Use
                </motion.h2>

                <div className="relative overflow-hidden">
                    {/* Top row marquee */}
                    <Marquee pauseOnHover speed={80}>
                        <div className="flex gap-4">
                            {technologies.map((tech) => (
                                <TechCard key={tech.name} {...tech} />
                            ))}
                        </div>
                    </Marquee>

                    {/* Fading edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white"></div>
                </div>
            </section>
        </div>
    );
}
