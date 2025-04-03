"use client";
import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from '../../node_modules/next/link';
import { RiScrollToBottomFill } from "react-icons/ri";
import { TbHandClick } from "react-icons/tb";
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showClickAnimation, setShowClickAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowClickAnimation(prev => !prev); // Toggle animation visibility
    }, 10000); // Interval of 10 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowClickAnimation(false); // Hide animation after 4 seconds
    }, 4000); // Duration for which the animation is shown

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [showClickAnimation]); // Reset timer when animation visibility changes

  return (
    <html lang="en">
      <body>
        <section className="relative">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
            <span className="text-lg font-bold text-[#eba941]">Scroll Down</span>
            <RiScrollToBottomFill className="w-10 h-10 animate-bounce text-[#eba941] mt-4"  />
          </div>
          <div className="absolute z-10 text-[#eba941] text-md top-1 lg:top-[5%] left-[6%] lg:text-3xl ">
            <span>
              <Link href="/" className="hover:underline">
                design
              </Link>
            </span>
            <span> & </span>
            <Link href="video" className="hover:underline">
              video
            </Link>
          </div>
          <a
            className="absolute text-[#eba941] text-xs font-medium z-10 left-[5.2%] bottom-[2%] hover:underline lg:bottom-[7%] lg:text-3xl"
            href="https://www.linkedin.com/in/laura-castro-961a13174/"
            target="_blank"
          >
            Linkedin
          </a>
          <video className="w-full" autoPlay muted loop playsInline>
            <source src="video/portada.mp4" />
          </video>

          {/* Animation for clickable links */}
          {showClickAnimation && (
            <div className="absolute z-20 left-[6%] top-[10%] animate-pulse">
              <TbHandClick  className="w-10 h-10 text-[#eba941]"/>
              <span className="text-[#eba941] text-md font-semibold">Click Here to navigate</span>
            </div>
          )}
        </section>
        <div className={inter.className}>{children}</div>
      </body>
    </html>
  );
}
