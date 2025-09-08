/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],

    // ✅ for static hosting (cPanel, Netlify, etc.)
    output: "export",

    // ✅ disable Next.js image optimizer (works with next export)
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
