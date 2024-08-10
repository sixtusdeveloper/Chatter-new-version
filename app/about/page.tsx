"use client";

import React from "react";
import SingleNav from "@/components/SingleNav";
import { aboutNavigation } from '@/data';
import Script from '../../components/TawkToScript'; 
import AboutIntroduction from "@/components/AboutIntroduction";
import AboutMission from '@/components/AboutMission';
import AboutVision from '@/components/AboutVision';
import AboutFeatures from '@/components/AboutFeatures';
import AboutTeam from '@/components/AboutTeam';
import AboutStory from '@/components/AboutStory';
import Testimonials from '@/components/Testimonials';
import AboutCTA from '@/components/AboutCTA';
import AboutFooter from "@/components/BlogFooter";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function About() {
  return (
    <>
      <SignedIn>
        <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
          <div className="max-w-7xl w-screen">
            <SingleNav navigation={aboutNavigation} />
            <AboutIntroduction />
            <AboutMission />
            <AboutVision />
            <AboutFeatures />
            <AboutTeam />
            <AboutStory />
            <Testimonials />
            <AboutCTA />
            <AboutFooter />
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
