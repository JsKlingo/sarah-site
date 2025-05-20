"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Retreats", path: "/retreats" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-playfair text-xl font-bold text-primary">
          Sarah Kalasky, LPC
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === item.path
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary hover:bg-accent"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="ml-2">
            <ModeToggle />
          </div>
          <Button asChild className="ml-4 rounded-full">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <button
            onClick={toggleMenu}
            className="ml-2 p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background border-t"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={closeMenu}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.path
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary hover:bg-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-full">
              <Link href="/contact" onClick={closeMenu}>
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}