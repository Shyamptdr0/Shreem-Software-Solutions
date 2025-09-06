"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function Blog() {
    const blogs = [
        {
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
            title: "Top 10 Web Development Trends in 2025",
            desc: "Explore the latest technologies shaping the future of web development, from AI to serverless computing.",
        },
        {
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
            title: "How AI is Transforming Mobile Apps",
            desc: "Learn how artificial intelligence is enhancing mobile applications with smarter, faster user experiences.",
        },
        {
            image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
            title: "Why Your Business Needs a Cloud Strategy",
            desc: "Discover the benefits of cloud solutions and how they help businesses scale efficiently in 2025.",
        },
        {
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
            title: "5 Cybersecurity Practices Every Startup Should Follow",
            desc: "Security is key to growth. Protect your digital assets with these essential cybersecurity tips.",
        },
    ];

    return (
        <div className="ml-10 mr-10 mt-30">
            {/* Header Section */}
            <section className="h-25 flex justify-center items-center bg-gradient-to-r  text-black rounded-2xl  relative overflow-hidden">
                <motion.h1
                    className="text-center font-extrabold text-5xl drop-shadow-lg relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Our Blogs
                </motion.h1>

                {/* Glow Lights */}
                <div className="absolute w-40 h-40 bg-white/30 rounded-full blur-3xl -top-12 left-12 animate-pulse mix-blend-overlay"></div>
                <div className="absolute w-52 h-52 bg-sky-300/30 rounded-full blur-3xl bottom-0 right-12 animate-bounce mix-blend-overlay"></div>
                <div className="absolute w-32 h-32 bg-indigo-400/30 rounded-full blur-2xl top-1/2 left-1/3 animate-ping mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 mix-blend-soft-light pointer-events-none"></div>
            </section>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {blogs.map((blog, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <div className="relative w-full h-52">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-52 object-cover rounded-t-2xl"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>
                            <button className="px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition">
                                Read More
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
