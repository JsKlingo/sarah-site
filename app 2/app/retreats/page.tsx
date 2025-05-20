"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Clock, CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function RetreatsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [overviewRef, overviewInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [detailsRef, detailsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://i.pinimg.com/originals/ab/65/cd/ab65cdde87dacddb6ca74154afb9e9f0.jpg"
            alt="Exclusive couples retreat" 
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Intensive Couples Retreats</h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Exclusive 2-day immersive experiences designed for couples seeking profound transformation in a private, premium setting.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Inquire About Availability <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Overview */}
      <motion.section 
        ref={overviewRef}
        initial={{ opacity: 0, y: 30 }}
        animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="section-padding"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Transformative Experience</h2>
              <p className="text-muted-foreground mb-4">
                The Intensive Couples Retreat is a premium therapeutic experience designed for couples who are ready to make significant progress in a condensed timeframe. Over two days, we'll work together in a private, luxurious setting to address your relationship challenges and build a stronger connection.
              </p>
              <p className="text-muted-foreground mb-6">
                This retreat is equivalent to approximately 3-6 months of weekly therapy sessions, making it ideal for couples who want to jumpstart their healing process or who have busy schedules that make weekly sessions challenging.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Dedicated Time</h3>
                    <p className="text-muted-foreground">Two full days (9am-4pm) of focused therapeutic work</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Premium Setting</h3>
                    <p className="text-muted-foreground">Held in a private, luxurious location with all amenities provided</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Lasting Results</h3>
                    <p className="text-muted-foreground">Includes follow-up support to ensure continued progress</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="https://i.pinimg.com/originals/0c/41/69/0c416928f0a13b79cb5eb9d5eefc49f6.png"
                alt="Couples intensive retreat session" 
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Retreat Details */}
      <motion.section 
        ref={detailsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="section-padding bg-secondary"
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Retreat Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Before the Retreat",
                items: [
                  "Comprehensive assessment of your relationship",
                  "Individual pre-retreat consultations",
                  "Customized retreat plan based on your needs",
                  "Preparation materials and guidance"
                ]
              },
              {
                title: "During the Retreat",
                items: [
                  "Intensive Emotionally Focused Therapy (EFT)",
                  "Structured exercises and conversations",
                  "Skills training and practice",
                  "Gourmet meals and refreshments",
                  "Comfortable breaks in a luxurious setting"
                ]
              },
              {
                title: "After the Retreat",
                items: [
                  "Detailed action plan for continued growth",
                  "Two follow-up sessions (virtual or in-person)",
                  "Access to exclusive resources and tools",
                  "Ongoing support as needed"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-lg p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-card rounded-lg p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Investment</h3>
            <p className="text-center text-muted-foreground mb-6">
              The Intensive Couples Retreat is a premium service designed for couples who value exceptional care and transformative results. Investment begins at $4,800 for the complete experience.
            </p>
            <div className="text-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Request Detailed Information <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="section-padding"
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Client Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "The retreat with Sarah was the best investment we've made in our relationship. In just two days, we made breakthroughs that would have taken months or years in traditional therapy.",
                author: "Executive Couple, married 15 years"
              },
              {
                quote: "We were hesitant about the intensive format, but it was exactly what we needed. The private setting allowed us to be vulnerable, and Sarah's expertise guided us through difficult conversations with compassion and skill.",
                author: "Professional Couple, married 8 years"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-lg p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic mb-6">{testimonial.quote}</p>
                <p className="text-primary font-medium">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to transform your relationship with an exclusive, personalized retreat experience?
            </p>
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