"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function ServicesPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [individualRef, individualInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [couplesRef, couplesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [approachRef, approachInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            src="https://i.pinimg.com/736x/f1/d1/a6/f1d1a6d9b01e323974139aafa7b7576d.jpg"
            alt="Premium therapy services" 
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Premium Therapy Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Tailored psychotherapy services designed to meet the unique needs of high-achieving individuals and couples.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Individual Therapy */}
      <motion.section 
        id="individual"
        ref={individualRef}
        initial={{ opacity: 0, y: 30 }}
        animate={individualInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="section-padding"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={individualInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold">Individual Therapy</h2>
              </div>
              
              <p className="text-muted-foreground mb-6">
                My individual therapy services provide a confidential, supportive space for exploring personal challenges, processing emotions, and developing strategies for growth and change. Each session is tailored to your unique needs and goals.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Common Focus Areas:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Anxiety and stress management",
                  "Depression and mood disorders",
                  "Life transitions and personal growth",
                  "Relationship challenges",
                  "Work-life balance for high-achieving professionals",
                  "Identity and self-esteem"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild className="rounded-full">
                <Link href="/contact">
                  Schedule an Individual Session <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={individualInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="https://img.freepik.com/premium-photo/therapist-client-calming-therapy-session-discussing-mental-health-strategies_818261-9161.jpg?w=2000"
                alt="Individual therapy session" 
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Couples Therapy */}
      <motion.section 
        id="couples"
        ref={couplesRef}
        initial={{ opacity: 0, y: 30 }}
        animate={couplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="section-padding bg-secondary"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={couplesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 md:order-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="https://thumbs.dreamstime.com/b/happy-couple-reconciling-therapy-session-therapists-office-marital-concept-appointment-looking-each-other-smiling-221733296.jpg"
                alt="Couples therapy session" 
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={couplesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 md:order-2"
            >
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold">Couples Therapy</h2>
              </div>
              
              <p className="text-muted-foreground mb-6">
                As a certified Emotionally Focused Therapy (EFT) practitioner, I help couples identify negative interaction patterns, heal emotional wounds, and build secure, loving connections. My approach is evidence-based and focused on creating lasting change.
              </p>
              
              <h3 className="text-xl font-bold mb-4">How Couples Therapy Helps:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Improve communication and conflict resolution",
                  "Rebuild trust and intimacy",
                  "Navigate major life transitions together",
                  "Address specific relationship challenges",
                  "Strengthen emotional connection",
                  "Create a more secure attachment bond"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="rounded-full">
                  <Link href="/contact">
                    Schedule a Couples Session <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/retreats">
                    Explore Intensive Retreats
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Approach */}
      <motion.section 
        ref={approachRef}
        initial={{ opacity: 0, y: 30 }}
        animate={approachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="section-padding"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Premium Therapy Experience</h2>
              <p className="text-lg text-muted-foreground">
                My practice is intentionally designed to provide a premium therapeutic experience for clients who value discretion, personalized attention, and exceptional care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Session Structure",
                  description: "50-minute or 80-minute sessions available, with extended sessions for complex issues. All sessions include follow-up support and resources."
                },
                {
                  title: "Scheduling Flexibility",
                  description: "Priority scheduling for premium clients, with early morning, evening, and select weekend appointments available."
                },
                {
                  title: "Exclusive Environment",
                  description: "Sessions take place in a private, luxurious office space designed for comfort and confidentiality."
                },
                {
                  title: "Comprehensive Approach",
                  description: "Integration of evidence-based techniques tailored to your specific needs and learning style."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={approachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-lg p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Begin Your Therapeutic Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}