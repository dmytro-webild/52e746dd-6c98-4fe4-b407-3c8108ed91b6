"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

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

  <div id="shop-grid" data-section="shop-grid">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "s1",
          name: "Minimal Dress",
          price: "$150",
          imageSrc: "http://img.b2bpic.net/free-photo/pearl-necklace-earrings-with-pair-wedding-high-heels-scarf_23-2148187454.jpg",
        },
        {
          id: "s2",
          name: "Casual Top",
          price: "$90",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-2723.jpg",
        },
        {
          id: "s3",
          name: "Wool Scarf",
          price: "$60",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-portrait_23-2148830393.jpg",
        },
        {
          id: "s4",
          name: "Leather Belt",
          price: "$75",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-spring-wardrobe-switch_23-2150478959.jpg",
        },
        {
          id: "s5",
          name: "Evening Bag",
          price: "$200",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-women-posing_23-2148906931.jpg",
        },
        {
          id: "s6",
          name: "Silk Blouse",
          price: "$110",
          imageSrc: "http://img.b2bpic.net/free-photo/fedora-hats-studio-still-life_23-2150744055.jpg",
        },
      ]}
      title="Shop Collections"
      description="Discover all our latest minimalist designs."
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Best Sellers"
      description="Our curated favorites."
      products={[
        {
          id: "x1",
          name: "White Linen Pant",
          price: "$95",
          imageSrc: "http://img.b2bpic.net/free-photo/view-beige-tone-colored-pants_23-2150773383.jpg",
        },
        {
          id: "x2",
          name: "Fedora Hat",
          price: "$50",
          imageSrc: "http://img.b2bpic.net/free-photo/fedora-hats-studio-still-life_23-2150744072.jpg",
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
