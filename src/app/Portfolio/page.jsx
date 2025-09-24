"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import image1 from "../../../public/e-comm.png";
import image2 from "../../../public/school-portfolio.png";
import image3 from "../../../public/coffee App.png";

export default function Portfolio() {
    const projects = [
        {
            image: image1,
            title: "Kapdo Ki Duniya ( E-Commerce Website )",
            desc: "A scalable online shopping platform with secure payment integration and a smooth user experience.",
            details:
                "This project includes product catalogs, cart, order tracking, and secure payments with payment integration. Fully responsive and SEO optimized.",
            points: [
                "Paypal payment integration",
                "Product catalog & cart system",
                "Responsive design (mobile-friendly)",
                "Admin panel for order management",
                "Inventory management",
            ],
            link: "https://kapdo-ki-duniya.onrender.com/",
        },
        {
            image: image2,
            title: "School Website",
            desc: "A modern and responsive school management website with admin panel and student portal.",
            details:
                "The school website is designed to showcase school information, events, and announcements while providing a dedicated portal for students, teachers, and administrators. It includes online admission forms, event galleries, and role-based access for better management.",
            points: [
                "Responsive and SEO-friendly design",
                "Student and teacher portal with login access",
                "Admin panel for managing admissions, results, and notices",
                "Event gallery & latest announcements section",
                "Online admission form and contact system",
            ],
            link: "https://yourschoolwebsite.vercel.app/",
        },
        {
            image: image3,
            title: "Coffee Shop App",
            desc: "A modern coffee ordering mobile app with seamless browsing, cart, and order history features.",
            details:
                "The Coffee Shop App is a user-friendly mobile application built to simplify coffee ordering. Users can browse different coffee varieties, view product details, customize size, add items to the cart, and securely checkout. It also provides an order history section for tracking past purchases. The app offers an intuitive design with smooth navigation and responsive UI.",
            points: [
                "Attractive and responsive UI design",
                "Browse and search coffee varieties",
                "Add to cart with size & quantity options",
                "Secure checkout process",
                "Order history tracking",
            ],
        }

    ];


    return (
        <div className="px-4 sm:px-6 lg:px-10 mt-20 min-h-screen">
            {/* Header Section */}
            <section className="h-20 flex justify-center items-center bg-gradient-to-r from-sky-200 via-white to-indigo-200 text-black rounded-2xl relative overflow-hidden">
                <motion.h1
                    className="text-center font-extrabold text-2xl sm:text-3xl md:text-5xl drop-shadow-lg relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Portfolio
                </motion.h1>

                {/* Glow Lights */}
                <div className="absolute w-20 sm:w-32 h-20 sm:h-32 bg-white/30 rounded-full blur-3xl -top-12 left-12 animate-pulse mix-blend-overlay"></div>
                <div className="absolute w-28 sm:w-40 h-28 sm:h-40 bg-sky-300/30 rounded-full blur-3xl bottom-0 right-12 animate-bounce mix-blend-overlay"></div>
                <div className="absolute w-16 sm:w-24 h-16 sm:h-24 bg-indigo-400/30 rounded-full blur-2xl top-1/2 left-1/3 animate-ping mix-blend-overlay"></div>
            </section>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
                {projects.map((project, index) => (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <motion.div
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <div className="relative w-full aspect-video group">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-t-2xl">
                                        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center px-2">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="p-4 sm:p-6">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">{project.desc}</p>
                                </div>
                            </motion.div>
                        </DialogTrigger>

                        {/* Dialog Content with improved two-column layout */}
                        <DialogContent className="w-[95%] sm:max-w-4xl md:max-w-5xl rounded-xl h-[80vh] flex flex-col">
                            {/* Fixed Header */}
                            <DialogHeader className="sticky top-0 bg-white z-10 border-b p-4">
                                <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold">
                                    {project.title}
                                </DialogTitle>
                                <DialogDescription className="text-xs sm:text-sm">
                                    {project.desc}
                                </DialogDescription>
                            </DialogHeader>

                            {/* Scrollable Two-Column Content */}
                            <div className="flex-1 overflow-y-auto p-4 flex flex-col md:flex-row gap-6">
                                {/* Left Image */}
                                <div className="md:w-1/2 w-full relative h-auto border-2 border-gray-500 rounded-2xl">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={600}
                                        className="object-contain rounded-lg w-full h-full "
                                    />
                                </div>

                                {/* Right Text Content */}
                                <div className="md:w-1/2 w-full flex flex-col justify-between border-l-4 border-black rounded-2xl pl-4 pt-4">
                                    <div>
                                        <p className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed">
                                            {project.details}
                                        </p>

                                        <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base md:text-base">
                                            {project.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Buttons */}
                                    {/* Buttons */}
                                    <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full sm:w-auto"
                                            >
                                                <Button
                                                    variant="outline"
                                                    className="w-full sm:w-auto text-sm md:text-base border-2 border-black cursor-pointer"
                                                >
                                                    Visit Project
                                                </Button>
                                            </a>
                                        )}

                                        <DialogClose asChild>
                                            <Button
                                                variant="default"
                                                className="w-full sm:w-auto text-sm md:text-base cursor-pointer"
                                            >
                                                Close
                                            </Button>
                                        </DialogClose>
                                    </div>

                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    );
}
