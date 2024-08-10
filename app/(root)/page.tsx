"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import { navigation } from '@/data';
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Posts from "@/components/Posts";
import Testimonials from "@/components/Testimonials";
import Collaborators from "@/components/Collaborators";
import FAQ from "@/components/FAQ";
import FAQFeedBack from "@/components/FAQFeedBack";
import Footer from "@/components/Footer";
import Script from '../../components/TawkToScript'; 

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignedIn>
        <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
          <div className="max-w-7xl w-screen">
            <NavBar navigation={navigation} />
            <Hero />
            <Features />
            <Services />
            <Posts />
            <Testimonials />
            <Collaborators />
            <FAQ />
            <FAQFeedBack />
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
