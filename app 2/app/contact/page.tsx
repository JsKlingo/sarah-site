"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.enum(["individual", "couples", "retreat", "other"], {
    required_error: "Please select a service.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // In a real implementation, this would send the data to a server
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[40vh] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://i.pinimg.com/originals/c7/00/43/c700432ef834ad862dd3e3f703fc9085.jpg"
            alt="Contact Sarah Kalasky" 
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Contact</h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Ready to begin your journey? Reach out to schedule a consultation or learn more about my services.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              className="bg-card rounded-lg p-8 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You</h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been received. I'll be in touch with you shortly to discuss your inquiry.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="rounded-full"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      {...register("name")} 
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        {...register("email")} 
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Your phone number" 
                        {...register("phone")} 
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <select 
                      id="service" 
                      {...register("service")} 
                      className={`w-full rounded-md border ${errors.service ? "border-red-500" : "border-input"} bg-background px-3 py-2`}
                    >
                      <option value="">Select a service</option>
                      <option value="individual">Individual Therapy</option>
                      <option value="couples">Couples Therapy</option>
                      <option value="retreat">Intensive Retreat</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm">{errors.service.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please share a brief description of what you're looking for" 
                      rows={5} 
                      {...register("message")} 
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button type="submit" className="w-full rounded-full">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    All inquiries are confidential. You'll receive a response within 24-48 business hours.
                  </p>
                </form>
              )}
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 30 }}
              animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  For immediate assistance or to schedule a consultation, please use the contact information below or fill out the form.
                </p>
                
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start"
                  >
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        For confidential voicemail, please leave a detailed message
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">sarah@sarahkalasky.com</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        For inquiries, scheduling, and general information
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Office Location</h3>
                      <p className="text-muted-foreground">123 Serenity Avenue, Suite 500</p>
                      <p className="text-muted-foreground">Lakeside, CA 92040</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Private entrance and parking available
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Office Hours</h3>
                      <p className="text-muted-foreground">Monday - Thursday: 9am - 6pm</p>
                      <p className="text-muted-foreground">Friday: 9am - 3pm</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Early morning and evening appointments available for premium clients
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-secondary p-8 rounded-lg mt-8"
              >
                <h3 className="text-xl font-bold mb-4">A Note About Privacy</h3>
                <p className="text-muted-foreground mb-4">
                  Your privacy is of utmost importance. All communications are confidential, and I maintain a discreet practice environment for the comfort of my clients.
                </p>
                <p className="text-muted-foreground">
                  For clients requiring enhanced privacy, please mention this in your initial contact, and I'll be happy to discuss specialized arrangements.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}