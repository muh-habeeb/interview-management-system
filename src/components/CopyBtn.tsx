"use client";

import { useState } from "react";
import { CopyIcon, CopyCheckIcon } from "lucide-react";
import toast from "react-hot-toast";

interface CallIdProps {
    value: string;
}
export default function CallId({ value }: CallIdProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            toast.success("Copied!");

            // revert back after 3s
            setTimeout(() => setCopied(false), 3000);
        } catch (err) {
            toast.error("Failed to copy");
            console.log(err)
        }
    };
    return (
        <>

            {value &&
            <span className="mr-4" onClick={handleCopy}>
                {copied ? (
                    <CopyCheckIcon className="size-5 text-green-500 cursor-pointer active:scale-95" />
                ) : (
                    <CopyIcon className="size-5 cursor-pointer active:scale-95" />
                )}
            </span>}
        </>
    );
}
