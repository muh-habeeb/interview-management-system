// app/not-found.tsx
"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-6xl font-bold text-emerald-500">404</h1>
            <p className="mt-4 text-lg text-gray-600">
                Oops! The page you’re looking for doesn’t exist.
            </p>

            <Link href="/" passHref>
                <Button className="mt-6">Go Home</Button>
            </Link>
        </div>
    );
}
