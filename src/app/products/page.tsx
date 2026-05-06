"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function ProductsPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
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
        <ProductCardThree 
          gridVariant="four-items-2x2-equal-grid" 
          animationType="slide-up" 
          textboxLayout="default" 
          title="All Products" 
          description="Browse our full collection" 
          products={[]} 
          useInvertedBackground={false}
        />
        <FooterLogoEmphasis 
          logoText="Luna Wear"
          columns={[{ items: [{ label: "Products", href: "/products" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] }]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}