"use client"; // Ensure the component is a client-side component

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

import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";
import { useRouter } from 'next/navigation'; // Use useRouter from next/navigation
import { checkProfileStatus } from "@/utils/checkProfileStatus";

export default function Home() {
  const { user } = useUser();
  const userId = user?.id || "";
  const router = useRouter(); // Use useRouter in Home from next/navigation

  const handleLinkClick = async (href: string) => {
    // Check if user has created their profile
    const hasProfile = await checkProfileStatus(userId);

    if (href === "/pages/contributors") {
      if (hasProfile) {
        router.push(href);
      } else {
        router.push('/pages/create-profile');
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <SignedIn>
        <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
          <div className="max-w-7xl w-screen">
            <NavBar navigation={navigation} />
            <Hero />
            <Features />
            <Services onLinkClick={handleLinkClick} userId={userId} /> {/* Pass handleLinkClick */}
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
