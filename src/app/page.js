import Image from "next/image";
import Hero from "@/components/Hero";
import bgImage from "../../public/bg 2.jpg";

export default function Home() {
    return (
        <div className="relative">
            {/* Background only for Home (visible only ≥1200px / xl) */}
            <div className="relative w-full overflow-hidden">
                <div className="hero-rotated-bg hidden 2xl:block">
                    <Image src={bgImage} alt="Hero Background" priority />
                </div>
                <Hero />
            </div>
        </div>
    );
}
