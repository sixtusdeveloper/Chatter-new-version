"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import { aboutNavigation } from '@/data';
import Footer from "@/components/Footer";
import Script from '../../components/TawkToScript'; 
import AboutWelcomeSection from "@/components/AboutWelcomeSection";
import MissionSection from "@/components/MissionSection";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignedIn>
        <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
          <div className="max-w-7xl w-screen">
            <NavBar navigation={aboutNavigation} />
            <AboutWelcomeSection />
            <MissionSection />
            <Footer />
            <Script
              src="https://embed.tawk.to/66b0c4651601a2195ba0f54b/1i4h7ub94"
              charset="UTF-8"
              crossorigin="*"
            />
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
