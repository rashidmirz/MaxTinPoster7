import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Sparkles, Instagram } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { GoogleMap } from "./GoogleMap";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const projectTypes = [
  "Signage & Display",
  "Channel Letters",
  "Large Format Printing",
  "CNC/Laser Cutting",
  "Wall Murals",
  "Event Branding",
  "Other",
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Max Tin Poster, Gomtipur Rd, opp. R.K Estate, nr. Hathi Khai Road, Gomtipur, Ahmedabad, Gujarat 380021"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98240 08585","+91 63528 85576", "+91 99250 02521"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["max.tinposter@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Sat: 9:00 AM - 10:00 PM", "Sunday: Closed"],
  },
  {
    icon: Instagram,
    title: "Instagram",
    lines: ["@maxtinposter.in"],
    link: "https://www.instagram.com/maxtinposter.in?igsh=MTB5a2N2NWQ1MjRvbg==",
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Inquiry Sent Successfully!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Contact Us
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            We'd love to hear about it. Get in touch with us.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection delay={0.3}>
            <GoogleMap
              address="Nr.Hathikhai Garden, Opp. R.K Estate, Gomtipur Road, Ahmedabad - 380021"
              className="h-[550px] rounded-3xl"
            />
          </AnimatedSection>
          
          <div className="space-y-8">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
              Reach Out To Us
            </h3>
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
              >
                <a 
                  href={item.link || '#'} 
                  target={item.link ? "_blank" : "_self"} 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg border border-border/50 group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
