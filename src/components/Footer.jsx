import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo new .png";

export default function Footer() {
	return (
		<footer id="contact" className="bg-gray-50 text-gray-800 pt-20 pb-10 mt-10 border-t border-gray-200">
			<div className="container mx-auto px-6">

				{/* Main Grid */}
				<div className="grid md:grid-cols-4 gap-10 mb-16">

					{/* Logo Section */}
					<div>
						<div className="mb-4">
							<Image
								src={logo}
								alt="Shreem Logo"
								className="w-50 h-15 "
							/>
						</div>

						<p className="text-gray-600 leading-relaxed mt-3">
							Empowering businesses with modern tech solutions — from web apps to AI-driven products.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-xl font-semibold mb-5 text-gray-900">
							Quick Links
						</h3>
						<ul className="space-y-3">
							{[
								{ label: "Home", href: "/" },
								{ label: "About Us", href: "/About" },
								{ label: "Our Services", href: "/Service" },
								{ label: "Portfolio", href: "/Portfolio" },
							].map((link, i) => (
								<li key={i}>
									<Link
										href={link.href}
										className="text-gray-700 hover:text-sky-600 transition-all"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-xl font-semibold mb-5 text-gray-900">Our Services</h3>
						<ul className="space-y-3 text-gray-700">
							<li>Web Development</li>
							<li>App Development</li>
							<li>AI Solutions</li>
							<li>Hosting & Maintenance</li>
							<li>IT Consulting</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-xl font-semibold mb-5 text-gray-900">Contact Info</h3>

						<ul className="space-y-4 text-gray-700">

							<li className="flex items-start space-x-3">
								<i className="ri-map-pin-line text-sky-600 text-xl"></i>
								<span>Nutan Nagar, Near Santoshi Temple, Khargone, MP - 451001</span>
							</li>

							<li className="flex items-center space-x-3">
								<i className="ri-phone-line text-sky-600 text-xl"></i>
								<a href="tel:+919876543210" className="hover:text-sky-600 transition">
									+91 98765 43210
								</a>
							</li>

							<li className="flex items-center space-x-3">
								<i className="ri-mail-line text-sky-600 text-xl"></i>
								<a
									href="mailto:shreem.sofware.solutions@gmail.com"
									className="hover:text-sky-600 transition break-all"
								>
									shreem.sofware.solutions@gmail.com
								</a>
							</li>

							<li className="flex items-center space-x-3">
								<i className="ri-time-line text-sky-600 text-xl"></i>
								<span>Mon–Sat: 10 AM – 5 PM</span>
							</li>

						</ul>
					</div>

				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-300 pt-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-500 text-sm text-center md:text-left">
							© {new Date().getFullYear()} Shreem Software Solutions. All rights reserved.
						</p>

						<div className="flex space-x-6 mt-4 md:mt-0">
							{["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
								<Link
									key={i}
									href="#"
									className="text-gray-500 text-sm hover:text-sky-600 transition"
								>
									{item}
								</Link>
							))}
						</div>
					</div>
				</div>

			</div>
		</footer>
	);
}
