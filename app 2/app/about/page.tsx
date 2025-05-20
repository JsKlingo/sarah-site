"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [bioRef, bioInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [qualificationsRef, qualificationsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [philosophyRef, philosophyInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://lh6.googleusercontent.com/KzjrtvrP6Gkg9WltJr53Lkb0njE8GcxqbDD1H3GC3YlE5ddhrsU4Nl5v5auMfN8nxIMZvN4KLSFfT2p__Yf2_0yFvFIjPIcR3UbADsBqUZ5m6PsZd0o54wQ7sA6sbxmSWM3lP2Dk"
            alt="Sarah Kalasky's therapy office" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">About Sarah</h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Dedicated to providing premium psychotherapy services with compassion, expertise, and a commitment to your growth.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Bio Section */}
      <motion.section 
        ref={bioRef}
        initial={{ opacity: 0, y: 30 }}
        animate={bioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="section-padding"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={bioInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="https://i.pinimg.com/736x/c6/35/32/c63532d13223140dca47164db0fca85b.jpg"
                alt="Sarah Kalasky, LPC" 
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={bioInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">My Story</h2>
              <p className="text-muted-foreground mb-4">
                With over 15 years of experience as a Licensed Professional Counselor, I've dedicated my career to helping individuals and couples navigate life's challenges and achieve meaningful growth.
              </p>
              <p className="text-muted-foreground mb-4">
                My journey into psychotherapy began with a deep curiosity about human connection and a desire to help others find healing. After completing my education and training, I established my private practice with a focus on providing premium, personalized care.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, I specialize in Emotionally Focused Therapy (EFT) and work exclusively with clients who are committed to their personal and relational growth. My practice is intentionally small to ensure each client receives the highest level of care and attention.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Qualifications */}
      <motion.section 
        ref={qualificationsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={qualificationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="section-padding bg-secondary"
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Credentials & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Education & Licensure",
                items: [
                  "Master's in Clinical Psychology",
                  "Licensed Professional Counselor (LPC)",
                  "Board Certified in Psychotherapy"
                ]
              },
              {
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                title: "Specialized Training",
                items: [
                  "Certified in Emotionally Focused Therapy (EFT)",
                  "Advanced Couples Therapy Training",
                  "Trauma-Informed Care Certification"
                ]
              },
              {
                icon: <Heart className="h-10 w-10 text-primary" />,
                title: "Professional Memberships",
                items: [
                  "American Psychological Association",
                  "International Centre for Excellence in EFT",
                  "National Board for Certified Counselors"
                ]
              }
            ].map((qualification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={qualificationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-lg p-8 shadow-lg"
              >
                <div className="mb-6">{qualification.icon}</div>
                <h3 className="text-xl font-bold mb-4">{qualification.title}</h3>
                <ul className="space-y-2">
                  {qualification.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Philosophy */}
      <motion.section 
        ref={philosophyRef}
        initial={{ opacity: 0, y: 30 }}
        animate={philosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="section-padding"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">My Therapeutic Philosophy</h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={philosophyInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-6"
            >
              I believe that healing happens in the context of safe, authentic relationships. My approach is grounded in the understanding that we all have innate capacities for growth and resilience that can be activated in the right therapeutic environment.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={philosophyInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-10"
            >
              As your therapist, I commit to providing a space that honors your unique experiences and challenges while offering evidence-based strategies to help you achieve your goals. Whether you're seeking individual growth or relationship healing, my premium approach ensures you receive the highest quality care tailored to your specific needs.
            </motion.p>
            
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}