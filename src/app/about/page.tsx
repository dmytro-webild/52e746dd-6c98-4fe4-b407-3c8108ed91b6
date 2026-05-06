"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function AboutPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "/" },
            { name: "Products", id: "/products" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="Luna Wear"
        />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold">About Luna Wear</h1>
          <p className="mt-4 max-w-2xl mx-auto">Timeless minimalist fashion designed for everyday elegance.</p>
        </div>
        <FooterLogoEmphasis 
          logoText="Luna Wear"
          columns={[{ items: [{ label: "Products", href: "/products" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] }]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}