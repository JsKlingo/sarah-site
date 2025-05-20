"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [approachRef, approachInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[90vh] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://i.pinimg.com/originals/59/ab/c1/59abc12bb8ace6809faeb7b10ca1766b.jpg"
            alt="Serene therapy space" 
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Sarah Kalasky, LPC</h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">Premium psychotherapy services for individuals and couples seeking meaningful change and growth.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section 
        ref={servicesRef}
        initial={{ opacity: 0, y: 30 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="section-padding bg-secondary"
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Premium Therapy Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-10 w-10 text-primary" />,
                title: "Individual Therapy",
                description: "Personalized therapy sessions focused on your unique needs, goals, and challenges.",
                link: "/services#individual"
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Couples Therapy",
                description: "Emotionally Focused Therapy (EFT) to strengthen connection and resolve relationship challenges.",
                link: "/services#couples"
              },
              {
                icon: <Calendar className="h-10 w-10 text-primary" />,
                title: "Intensive Retreats",
                description: "Exclusive 2-day retreats for couples seeking transformative change in a private setting.",
                link: "/retreats"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link 
                  href={service.link}
                  className="text-primary font-medium flex items-center hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Approach Section */}
      <motion.section 
        ref={approachRef}
        initial={{ opacity: 0, y: 30 }}
        animate={approachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="section-padding"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={approachInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">My Therapeutic Approach</h2>
              <p className="text-muted-foreground mb-4">
                I believe in creating a safe, non-judgmental space where clients can explore their challenges and work toward meaningful change. My approach is collaborative, empathetic, and tailored to your unique needs.
              </p>
              <p className="text-muted-foreground mb-6">
                As a Licensed Professional Counselor specializing in Emotionally Focused Therapy (EFT), I help individuals and couples identify patterns, process emotions, and develop healthier ways of relating to themselves and others.
              </p>
              <Button asChild className="rounded-full">
                <Link href="/about">
                  Learn More About My Approach
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={approachInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="https://i.pinimg.com/originals/9d/a9/54/9da954e609d80f5335e8f3aa59fa4ac5.jpg"
                alt="Sarah Kalasky, LPC" 
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="section-padding bg-secondary"
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Client Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Working with Sarah has been transformative. Her approach is both compassionate and effective, helping me navigate challenges I've struggled with for years.",
                author: "Individual Therapy Client"
              },
              {
                quote: "The intensive retreat with Sarah saved our marriage. In just two days, we made more progress than we had in years of traditional therapy.",
                author: "Couples Retreat Participants"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-lg p-8 shadow-lg"
              >
                <p className="text-lg italic mb-6">{testimonial.quote}</p>
                <p className="text-primary font-medium">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Begin Your Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}