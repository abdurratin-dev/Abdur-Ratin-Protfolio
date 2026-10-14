'use client'
import { useEffect, useState } from "react";

export default function Footer() {
    const [year, setYear] = useState<number>();
    useEffect(() => {
        setYear(new Date().getFullYear());
      }, []);
    return (
        <footer className="bg-white block md:hidden">
            <div className="container mx-auto px-5 sm:px-8 py-6 border-t border-neutral-300 flex items-center justify-center">
                <p className="text-[11px] leading-5 text-neutral-500">
              Copyright © {year ?? "2026"} Abdur Ratin. 
              <span>All Rights Reserved.</span>
            </p>
            </div>
        </footer>
    )
}