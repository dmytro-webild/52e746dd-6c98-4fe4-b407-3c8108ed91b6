"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import { RefreshCw, ShieldCheck, Truck } from "lucide-react";

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
          name: "Home",          id: "/"},
        {
          name: "Shop",          id: "/shop"},
        {
          name: "About",          id: "/about"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      brandName="Luna Wear"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "plain"}}
      title="Minimal Style for Modern Women"
      description="Timeless pieces designed for everyday elegance."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/blueeyed-curly-lady-skirt-white-blouse-high-heels-looks-away-poses-cozy-light-beaut_197531-33596.jpg?w=400&q=75",          alt: "Minimal Fashion"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-middle-aged-blonde-rich-woman-with-banknotes-purse_23-2149668368.jpg?w=400&q=75",          alt: "Portrait of middle-aged blonde rich woman"},
        {
          src: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-2704.jpg?w=400&q=75",          alt: "Fashion portrait of young elegant woman"},
        {
          src: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-2630.jpg?w=400&q=75",          alt: "Fashion portrait of young elegant woman"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-female-wearing-formal-suit_23-2148880273.jpg?w=400&q=75",          alt: "Portrait of beautiful young female wearing formal suit"},
      ]}
      buttons={[
        {
          text: "Shop Now",          href: "/shop"},
        {
          text: "Learn More",          href: "/about"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Sustainable Materials"},
        {
          type: "text",          text: "Ethical Production"},
        {
          type: "text",          text: "Timeless Aesthetic"},
        {
          type: "text",          text: "Premium Quality"},
        {
          type: "text",          text: "Global Shipping"},
      ]}
    />
  </div>

  <div id="categories" data-section="categories">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Dresses",          description: "Elegant cuts for every occasion.",          imageSrc: "http://img.b2bpic.net/free-photo/stylish-girl_1157-8866.jpg?w=800&q=75",          imageAlt: "Dresses"},
        {
          title: "Tops",          description: "Effortless style for daily wear.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-businesswoman-wearing-blazer_23-2147862750.jpg?w=800&q=75",          imageAlt: "Tops"},
        {
          title: "Accessories",          description: "Finishing touches of luxury.",          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-delicious-healthy-food_23-2149043040.jpg?w=800&q=75",          imageAlt: "Accessories"},
      ]}
      title="Collections"
      description="Explore our curated categories."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Silk Dress",          price: "$120",          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-2613.jpg?w=600&q=75"},
        {
          id: "p2",          name: "Linen Top",          price: "$85",          imageSrc: "http://img.b2bpic.net/free-photo/wedding-rings-white-high-heels-black-shoes-scarf_23-2148187462.jpg?w=600&q=75"},
        {
          id: "p3",          name: "Wool Scarf",          price: "$60",          imageSrc: "http://img.b2bpic.net/free-photo/light-brown-beige-pants-indoors-still-life_23-2150756257.jpg?w=600&q=75"},
        {
          id: "p4",          name: "Leather Belt",          price: "$75",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-wearing-minimalist-shirt_23-2149317758.jpg?w=600&q=75"},
      ]}
      title="Featured Pieces"
      description="Our most popular selections."
    />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "Global",          title: "Free Shipping",          description: "We deliver to your door anywhere in the world.",          icon: Truck,
        },
        {
          id: "m2",          value: "30-Day",          title: "Easy Returns",          description: "Not the perfect fit? Return within 30 days.",          icon: RefreshCw,
        },
        {
          id: "m3",          value: "100%",          title: "Secure Payment",          description: "Your checkout process is fully protected.",          icon: ShieldCheck,
        },
      ]}
      title="Why Luna Wear"
      description="Quality and care in every order."
    />
  </div>

  <div id="cta" data-section="cta">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      title="Upgrade your wardrobe today"
      description="Sign up for our newsletter for early access to sales."
      imageSrc="http://img.b2bpic.net/free-photo/interior-design-neoclassical-style-with-furnishings-decor_23-2151199332.jpg?w=1200&q=75"
      buttonText="Shop Now"
      tag="Newsletter"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Shop",              href: "/shop"},
            {
              label: "About",              href: "/about"},
            {
              label: "Contact",              href: "/contact"},
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Shipping Info",              href: "#"},
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
