import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-bold text-primary">Sarah Kalasky, LPC</h3>
            <p className="text-sm text-muted-foreground">
              Premium psychotherapy services for individuals and couples seeking meaningful change and growth.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm">Dedicated to your wellbeing</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-base">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#individual" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Individual Therapy
                </Link>
              </li>
              <li>
                <Link href="/services#couples" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Couples Therapy
                </Link>
              </li>
              <li>
                <Link href="/retreats" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Intensive Retreats
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Sarah
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-base">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span className="text-sm text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span className="text-sm text-muted-foreground">sarah@sarahkalasky.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  123 Serenity Avenue, Suite 500<br />
                  Lakeside, CA 92040
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-muted/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Sarah Kalasky, LPC. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2 md:mt-0">
              <span>Privacy Policy</span>
              <span className="mx-2">•</span>
              <span>Terms of Service</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}