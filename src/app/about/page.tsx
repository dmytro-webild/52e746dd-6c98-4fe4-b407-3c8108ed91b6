"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Shop",
          id: "/shop",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Luna Wear"
    />
  </div>

  <div id="about-story" data-section="about-story">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Our Story"
      description="Luna Wear was created to bring minimalist fashion to modern women around the world."
      bulletPoints={[
        {
          title: "Minimalism",
          description: "Less is more.",
        },
        {
          title: "Sustainability",
          description: "Crafted for longevity.",
        },
        {
          title: "Elegance",
          description: "Designed for everyday life.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-woman-wearing-minimalist-shirt_23-2149317768.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Our Mission"
      description="Defining the new standard of modern elegance."
      imageSrc="http://img.b2bpic.net/free-photo/woman-sitting-chair-black-white-side-view_23-2149411361.jpg"
      mediaAnimation="slide-up"
      bulletPoints={[
        {
          title: "Innovation",
          description: "Constant improvement.",
        },
        {
          title: "Quality",
          description: "Top-tier craftsmanship.",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Shop",
              href: "/shop",
            },
            {
              label: "About",
              href: "/about",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Shipping Info",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Luna Wear"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
