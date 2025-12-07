"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import budgetImg from "../../public/Budget.jpg";

import img1 from "../../public/java 1.png";
import img2 from "../../public/website-codes.png";
import img3 from "../../public/app-development.png";
import img4 from "../../public/ai.png";
import img5 from "../../public/cloud-hosting.png";
import img6 from "../../public/consultant.png";

import about1 from "../../public/sdlc 1.png";

import Link from "next/link";
import {useEffect} from "react";

export default function Hero() {
	const items = [
		{
			title: "Java Application",
			img: img1,
			desc: "Enterprise-grade Java apps for scalability.",
		},
		{
			title: "Web Design/Development",
			img: img2,
			desc: "Modern, responsive, and SEO-friendly websites.",
		},
		{
			title: "Android/IOS Development",
			img: img3,
			desc: "Custom mobile apps for both iOS & Android.",
		},
		{
			title: "AI and ML",
			img: img4,
			desc: "Smart AI/ML solutions tailored for your business.",
		},
		{
			title: "Website Maintenance & Hosting",
			img: img5,
			desc: "Reliable hosting and hassle-free maintenance.",
		},
		{ title: "IT Consulting", img: img6, desc: "Expert IT guidance to scale your business." },
	];




	return (
		<div className="overflow-hidden">

			{/* ================= HERO SECTION ================= */}
			<section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 md:px-10 py-20 text-center">

				{/* Background Video */}
				<video
					src="/IT%20Sector.mp4"
					autoPlay
					loop
					muted
					playsInline
					className="absolute inset-0 w-full h-full object-cover z-0"
				/>

				{/* Overlay */}
				<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/40 z-0"></div>

				{/* Text Content */}
				<div className="relative z-10 max-w-4xl">

					<h1 className="text-white font-geist font-[700] text-[32px] sm:text-[45px] md:text-[55px] lg:text-[65px] leading-tight pt-10">
						Develop your skills in a new and unique way
					</h1>

					<p className="mt-5 lato-light text-[15px] sm:text-[18px] md:text-[20px] text-white/90 mx-auto max-w-xl">
						Turning ideas into intelligent digital solutions. From custom apps to scalable
						platforms, we empower your business to grow, adapt, and lead.
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<Link href="/Contact">
							<Button className="bg-blue-700 text-white font-medium px-6 py-4 sm:py-5 rounded-md shadow-lg hover:bg-blue-800 transition cursor-pointer">
								Contact Us
							</Button>
						</Link>

						<a
							href="#budget"
							className="border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
						>
							Request Your Quotation
						</a>
					</div>
				</div>
			</section>

			<div className="border-t-2 border-gray-200 my-10 sm:my-16"></div>

			{/* ================= ABOUT SECTION ================= */}
			{/* ================= ABOUT SECTION ================= */}
			<section className="py-16 px-4 sm:px-8 md:px-12 font-sans bg-gray-50">
				<div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

					{/* Rotating Image */}
					<div className="flex justify-center relative">
						<div
							id="rotate-img"
							className="animate-spin-slow hover:scale-105 hover:animate-none transition-all duration-500 drop-shadow-xl"
						>
							<Image
								src={about1}
								alt="why choose us"
								className="w-full max-w-[420px] object-contain rounded-xl"
							/>
						</div>
					</div>

					{/* Text Container */}
					<div className="max-w-lg mx-auto md:mx-0 bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-100 animate-fade-in">

						<h2 className="text-4xl font-extrabold mb-5 bg-gradient-to-r from-sky-700 to-sky-500 text-transparent bg-clip-text">
							Why Choose Us
						</h2>

						<p className="text-lg text-gray-800 italic mb-4 leading-relaxed">
							"Our journey began with a simple idea — making this world more functional."
						</p>

						<p className="text-gray-700 mb-4 leading-relaxed">
							We collaborate with companies to transform digital experiences using innovation and scalable development.
						</p>

						<ul className="space-y-2 text-gray-600">
							<li>✔ A freelancing-driven company providing innovative solutions.</li>
							<li>✔ From web apps to mobile platforms, we build products that scale.</li>
							<li>✔ Supporting startups, SMEs, and enterprises to launch faster.</li>
						</ul>

						<Link href="/About">
							<Button className="mt-6 bg-sky-700 hover:bg-sky-800 px-7 py-3 text-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
								About Us
							</Button>
						</Link>
					</div>
				</div>
			</section>



			{/* ================= SERVICES SECTION ================= */}
			<section className="pt-12 pb-20 px-4 sm:px-8 md:px-12 bg-gray-50">
				{/* Heading */}
				<h1 className="text-[32px] sm:text-[45px] md:text-[58px] font-light text-center mb-6 text-gray-900 tracking-tight">
		<span className="bg-gradient-to-r from-sky-700 to-sky-500 text-transparent bg-clip-text">
			Our Expertise
		</span>
				</h1>

				{/* Subheading */}
				<div className="max-w-2xl mx-auto text-center mb-14">
					<h3 className="text-xl sm:text-2xl font-semibold text-sky-700 mb-2">
						Startup-Friendly — Building Smarter, Faster, Better
					</h3>
					<p className="text-gray-600 text-lg leading-relaxed">
						We turn ideas into impactful digital products.
					</p>
				</div>

				{/* Service Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{items.map((item, index) => (
						<Card
							key={index}
							className="w-full rounded-2xl p-6 border border-gray-100 bg-white/90 backdrop-blur-sm shadow-sm
				hover:shadow-xl hover:scale-[1.035] transition-all duration-300"
						>
							<CardHeader className="flex flex-col items-center text-center space-y-3">
								<div className="p-4 rounded-xl bg-sky-100 shadow-sm">
									<Image
										src={item.img}
										alt={item.title}
										width={55}
										height={55}
										className="object-contain"
									/>
								</div>

								<CardTitle className="text-lg font-semibold text-gray-900">
									{item.title}
								</CardTitle>

								<CardDescription className="text-gray-600 text-sm leading-relaxed">
									{item.desc}
								</CardDescription>
							</CardHeader>
						</Card>
					))}
				</div>
			</section>


			{/* ================= TESTIMONIALS ================= */}
			<section className="pt-20 pb-16 px-4 sm:px-8 md:px-12 bg-sky-50/60 rounded-3xl">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-14 text-gray-900">
		<span className="bg-gradient-to-r from-sky-700 to-sky-500 text-transparent bg-clip-text">
			What Our Clients Say
		</span>
				</h1>

				<div className="grid md:grid-cols-2 gap-8">

					{/* Card 1 */}
					<div className="p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100
		hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
						<p className="text-gray-700 italic text-lg leading-relaxed">
							"Shreem Software Solutions turned our idea into a real product. Incredible professionalism
							and attention to detail — highly recommended!"
						</p>
					</div>

					{/* Card 2 */}
					<div className="p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100
		hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
						<p className="text-gray-700 italic text-lg leading-relaxed">
							"Excellent experience! Their development service improved our online presence and helped us
							scale faster than expected."
						</p>
					</div>

				</div>
			</section>


			{/* ================= BUDGET SECTION ================= */}
			<section id="budget" className="py-24 bg-gray-50 px-6 sm:px-12 lg:px-20 rounded-3xl">
				<div className="flex flex-col md:flex-row md:items-center items-stretch gap-12">

					{/* Form */}
					<div className="flex-1 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-10 border border-gray-100">
						<h2 className="text-3xl font-semibold mb-8 leading-tight">
				<span className="bg-gradient-to-r from-sky-700 to-sky-500 text-transparent bg-clip-text">
					Have anything for us?
				</span>
						</h2>

						<form id="home-form" method="post" className="flex flex-col gap-6">

							{/* Name + Email */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								<div>
									<label className="block mb-1 font-medium text-gray-700">
										Name <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										name="home-name"
										required
										placeholder="Enter your name"
										className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none transition"
									/>
								</div>

								<div>
									<label className="block mb-1 font-medium text-gray-700">
										Email <span className="text-red-500">*</span>
									</label>
									<input
										type="email"
										name="home-email"
										required
										placeholder="Enter your email"
										className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none transition"
									/>
								</div>
							</div>

							{/* Budget + Phone */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								<div>
									<label className="block mb-1 font-medium text-gray-700">
										Budget <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										name="home-budget"
										required
										placeholder="$100 - $5000"
										className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none transition"
									/>
								</div>

								<div>
									<label className="block mb-1 font-medium text-gray-700">
										Phone <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										name="home-phone"
										required
										placeholder="Your phone number"
										className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none transition"
									/>
								</div>
							</div>

							{/* Message */}
							<div>
								<label className="block mb-2 font-medium text-gray-700">
									How can we help you?
								</label>
								<textarea
									name="home-message"
									rows={4}
									placeholder="Your message..."
									className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none transition resize-none"
								></textarea>
							</div>

							{/* Button */}
							<button
								type="submit"
								className="bg-sky-600 text-white px-8 py-3 rounded-full font-medium hover:bg-sky-700
					transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] w-fit">
								SEND
							</button>

						</form>
					</div>

					{/* Right Image */}
					<div className="flex-1 flex justify-center items-center">
						<Image
							src={budgetImg}
							alt="budget"
							className="rounded-2xl shadow-xl object-cover w-full h-auto max-h-[450px] hover:scale-[1.02] transition-all duration-500"
						/>
					</div>

				</div>
			</section>


			{/* ================= CTA ================= */}
			<section className="py-24 text-center bg-gradient-to-b from-white to-sky-50">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight
        bg-gradient-to-r from-sky-700 to-sky-500 text-transparent bg-clip-text">
					Let’s Build Something Great Together 🚀
				</h1>

				<p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
					From startups to enterprises, we help businesses innovate and scale.
				</p>

				<Link href="/Contact">
					<Button
						className="bg-sky-600 hover:bg-sky-700 text-white px-10 py-4 text-lg rounded-full
            shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer"
					>
						Get in Touch
					</Button>
				</Link>
			</section>


		</div>
	);
}
