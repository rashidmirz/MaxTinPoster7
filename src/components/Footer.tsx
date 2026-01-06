import { motion } from "framer-motion";
import { Facebook, Instagram, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Clients", href: "#clients" },
  { label: "Services", href: "#services" },
  { label: "Machines", href: "#machines" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Signage & Display",
  "Channel Letters",
  "CNC & Laser Cutting",
  "Large Format Printing",
  "UV & Latex Printing",
  "Wall Murals",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/maxtinposter.in/", label: "Instagram" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-charcoal-light text-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.h1
              className="font-unique text-3xl font-bold mb-6 text-primary"
              whileHover={{ scale: 1.02 }}
            >
              MaxTinPoster
            </motion.h1>
            <p className="text-background/70 mb-8 leading-relaxed text-lg">
              Full-service signage and display manufacturer offering end-to-end solutions —
              from design to installation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-cream/10 hover:bg-cream rounded-xl flex items-center justify-center transition-colors duration-300"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-background/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6">Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6">Stay Updated</h4>
            <p className="text-background/70 mb-6">
              Subscribe to our newsletter for updates and offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3.5 bg-background/10 border-2 border-background/20 rounded-xl text-background placeholder:text-background/50 focus:outline-none focus:border-primary transition-colors"
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-cream hover:bg-cream/90 text-primary py-3.5"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </form>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4 text-primary" />
                <a
                  href="https://maps.app.goo.gl/nutcu4JWrALbUtHa8?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Max Tin Poster, Gomtipur Rd, opp. R.K Estate, nr. Hathi Khai Road, Gomtipur, Ahmedabad, Gujarat 380021
                </a>
              </div>
              <div className="flex items-start gap-3 text-background/70">
                <Phone className="w-4 h-4 text-primary mt-1" />
                <div className="flex flex-col">
                  <span className="text-sm">+91 63528 85576</span>
                  <span className="text-sm">+91 98240 08585</span>
                  <span className="text-sm">+91 99250 02521</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">max.tinposter@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} MaxTinPoster.
            </p>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <motion.a href="#" className="hover:text-primary transition-colors" whileHover={{ y: -2 }}>Privacy Policy</motion.a>
              <motion.a href="#" className="hover:text-primary transition-colors" whileHover={{ y: -2 }}>Terms of Service</motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
