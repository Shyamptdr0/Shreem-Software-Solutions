import Link from "next/link";
import Image from "next/image";
import logo from "../../public/image/Shreem logo 2.png";

export default function Footer() {
    return (
        <footer id="contact" className="bg-white text-black py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Logo Section */}
                    <div>
                        <div className="flex text-5xl font-bold text-black mb-4">
                            <div>
                                <Image src={logo} alt="Shreem Logo" className="h-15 w-10"/>
                            </div>
                            <div className="flex items-center mt-4">
                <span className="text-[40px] mb-2 font-semibold text-black">
                  Shreem
                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-black hover:text-purple-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/About" className="text-black hover:text-purple-600 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/Service" className="text-black hover:text-purple-600 transition-colors">
                                    Our Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/Portfolio" className="text-black hover:text-purple-600 transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Our Service</h3>
                        <ul className="space-y-2">
                            <li>Web Development</li>
                            <li>App Development</li>
                            <li>AI Solutions</li>
                            <li>Website Maintenance & Hosting</li>
                            <li>IT Consulting</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <i className="ri-map-pin-line text-purple-700"></i>
                                <span>123 Farm Valley Road, Green Hills, CA 90210</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <i className="ri-phone-line text-purple-700"></i>
                                <span>(555) 123-FARM</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <i className="ri-mail-line text-purple-700"></i>
                                <span>hello@greenharvest.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <i className="ri-time-line text-purple-700"></i>
                                <span>Mon-Sat: 7AM-6PM</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 mb-4 md:mb-0">
                            © 2025 Shreem Software Solutions. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
