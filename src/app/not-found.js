"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
            <h1 className="text-6xl font-bold text-gray-900">404</h1>
            <p className="mt-4 text-xl text-gray-600">Oops! Page not found.</p>
            <p className="mt-2 text-gray-500">
                The page you are looking for does not exist or has been moved.
            </p>

            <Link href="/" passHref>
                <Button className="mt-6 flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Back to Home
                </Button>
            </Link>
        </div>
    );
}
