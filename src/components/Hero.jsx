"use client";

import Image from "next/image";
import {Button} from "@/components/ui/button";
import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";

import budgetImg from "../../public/image/Budget.jpg"
import aboutImage from "../../public/image/about.jpg";
import bgImages from "../../public/image/bg 2.jpg";
import img1 from "../../public/image/service/java 1.png";
import img2 from "../../public/image/service/website-codes.png";
import img3 from "../../public/image/service/app-development.png";
import img4 from "../../public/image/service/ai.png";
import img5 from "../../public/image/service/cloud-hosting.png";
import img6 from "../../public/image/service/consultant.png";
import Link from "next/link";

export default function Hero() {
    const items = [{
        title: "Java Application", img: img1, desc: "Enterprise-grade Java apps for scalability."
    }, {
        title: "Web Design/Development", img: img2, desc: "Modern, responsive, and SEO-friendly websites."
    }, {
        title: "Android/IOS Development", img: img3, desc: "Custom mobile apps for both iOS & Android."
    }, {
        title: "AI and ML", img: img4, desc: "Smart AI/ML solutions tailored for your business."
    }, {
        title: "Website Maintenance & Hosting", img: img5, desc: "Reliable hosting and hassle-free maintenance."
    }, {title: "IT Consulting", img: img6, desc: "Expert IT guidance to scale your business."},];

    return (<div className="px-4 sm:px-6 md:px-20">
        {/* Hero Section */}
        <section
            className="hero-section min-h-screen grid md:grid-cols-2 items-center gap-12 bg-gradient-to-r from-cyan-50 to-white rounded-2xl  p-6">
            {/* Left Side */}
            <div>
                <h1 className="font-varela text-3xl mt-15 sm:text-5xl font-bold text-gray-900 leading-tight">
                    Develop your skills <br/> in a new and unique <br/> way
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-gray-700">
                    Turning ideas into intelligent digital solutions. From custom apps to scalable platforms,
                    we build technology that empowers your business to grow, adapt, and lead.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                    <a href="/Contact"
                       className="bg-cyan-600 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:bg-cyan-700 transition">
                        Contact Us
                    </a>
                    <a href="#budget"
                       className="border border-cyan-600 text-cyan-700 font-medium px-6 py-3 rounded-full hover:bg-cyan-600 hover:text-white transition">
                        Request Your Quotation
                    </a>
                </div>
            </div>

            {/* Right Side Image (hidden above 1200px) */}
            <div className="block 2xl:hidden">
                <Image
                    src={bgImages}
                    alt="Hero Background"
                    className="w-full h-auto object-contain rounded-xl shadow-lg"
                    priority
                />
            </div>
        </section>

        {/* Divider */}
        <div className="border-t-2 border-gray-200 my-16"></div>

        {/* About Section */}
        <section className="about-section pt-10 pb-10">
            <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
                <div className="w-full md:w-1/2">
                    <Image
                        src={aboutImage}
                        alt="about"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
                    <div className="border border-gray-200 p-6 rounded-xl mb-4 bg-white shadow-md">
                        <h2 className="text-2xl mb-4 text-cyan-700">
                            Empowering Ideas, Excellence Engineering.
                        </h2>
                        <p className="text-gray-700 text-lg">
                            Founded with a vision to transform technology into value for our clients,
                            we offer services ranging from software development to digital transformation
                            consulting.
                        </p>
                    </div>
                    <a
                        href="/About"
                        className="border-2 border-cyan-600 bg-white text-cyan-700 px-6 py-3 rounded-full hover:bg-cyan-600 hover:text-white transition"
                    >
                        More About Us
                    </a>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section className="pt-20 pb-10 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-inner">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">Our Expertise</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <Card key={index} className="w-full shadow-md hover:shadow-xl hover:scale-105 transition">
                        <CardHeader>
                            <Image src={item.img} alt={item.title} width={60} height={60} className="mb-3"/>
                            <CardTitle className="text-lg text-gray-900">{item.title}</CardTitle>
                            <CardDescription className="text-gray-600">{item.desc}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500">
                                We provide {item.title.toLowerCase()} services to help your business grow.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Learn More</Button>
                        </CardFooter>
                    </Card>))}
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="pt-20 pb-10">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Why Choose Us</h1>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-cyan-700">Innovative Solutions</h3>
                    <p className="text-gray-600 mt-3">We use the latest tech to deliver scalable, future-ready
                        solutions.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-cyan-700">Client-Centric</h3>
                    <p className="text-gray-600 mt-3">Our strategies are tailored to meet your business goals.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-cyan-700">Expert Team</h3>
                    <p className="text-gray-600 mt-3">A team of skilled developers, designers & consultants.</p>
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="pt-20 pb-10 bg-cyan-50 rounded-2xl shadow-inner">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">What Our Clients Say</h1>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-xl shadow-md">
                    <p className="text-gray-700 italic">
                        "Shreem Software Solutions transformed our vision into a fully functioning product. Their
                        team is highly professional."
                    </p>
                    <h3 className="mt-4 font-semibold text-cyan-700">— Rahul Verma, CEO</h3>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-md">
                    <p className="text-gray-700 italic">
                        "Great experience! Their web development services improved our online presence
                        significantly."
                    </p>
                    <h3 className="mt-4 font-semibold text-cyan-700">— Priya Sharma, Founder</h3>
                </div>
            </div>
        </section>

        <section id="budget" className="py-20 bg-gray-50">
            <div className="flex flex-col md:flex-row md:items-center items-stretch gap-10"> {/* Form */}
                <div className="flex-1 bg-white shadow-lg rounded-lg p-8">
                    <form id="home-form" method="post" className="flex flex-col gap-6"><h2
                        className="text-2xl font-bold mb-6">Have anything <br/> for us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div><label className="block mb-1">Name <span className="text-red-600">*</span></label>
                                <input type="text" name="home-name" required placeholder="Name"
                                       className="w-full border border-gray-300 rounded-lg px-4 py-3"/></div>
                            <div><label className="block mb-1">Email <span className="text-red-600">*</span></label>
                                <input type="email" name="home-email" required placeholder="Email"
                                       className="w-full border border-gray-300 rounded-lg px-4 py-3"/></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div><label className="block mb-1">Budget <span
                                className="text-red-600">*</span></label>
                                <input type="text" name="home-budget" required placeholder="$10-$1000"
                                       className="w-full border border-gray-300 rounded-lg px-4 py-3"/>
                            </div>
                            <div><label className="block mb-1">Phone <span className="text-red-600">*</span></label>
                                <input type="text" name="home-phone" required placeholder="Phone"
                                       className="w-full border border-gray-300 rounded-lg px-4 py-3"/></div>
                        </div>
                        <div className="flex flex-col"><label className="mb-2">How can we help you?</label>
                            <textarea name="home-message" rows={4} placeholder="Message"
                                      className="w-full border border-gray-300 rounded-lg px-4 py-3"></textarea>
                        </div>
                        <button type="submit"
                                className="bg-cyan-500 text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-600 transition w-32"> SEND
                        </button>
                    </form>
                </div>
                {/* Budget Image */}
                <div className="flex-1 flex justify-center items-center">
                    <Image src={budgetImg} alt="budget"
                           className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[400px]"/>
                </div>
            </div>
        </section>


        {/* CTA Section */}
        <section className="pt-20 pb-20 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Let’s Build Something Great Together 🚀</h1>
            <p className="text-gray-600 mb-8">From startups to enterprises, we help businesses innovate and
                scale.</p>
            <Link href="/Contact">
                <Button className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 cursor-pointer text-lg">Get in Touch</Button>
            </Link>
        </section>
    </div>);
}
