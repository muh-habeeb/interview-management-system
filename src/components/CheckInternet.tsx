"use client";

import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function InternetStatus() {
  const wasOffline = useRef(false);

  useEffect(() => {
    const handleOnline = () => {
      // Only show "reconnected" if user was offline before
      if (wasOffline.current) {
        toast.success("Internet reconnected");
        wasOffline.current = false;
      }
    };

    const handleOffline = () => {
      toast.error("No internet connection");
      wasOffline.current = true;
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return null; // nothing to render
}
