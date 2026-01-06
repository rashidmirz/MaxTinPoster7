import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Printer, Scissors, Award, ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const features = [];

const stats = [
  { value: "7000+", label: "Projects Completed" },
  { value: "500+", label: "Happy Clients" },
  { value: "30+", label: "Years Experience" },
];

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroBg}
          alt="MaxTinPoster workshop"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/98 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-primary/10 rounded-lg"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-16 h-16 border-2 border-primary/10 rounded-full"
          animate={{ rotate: -360, x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm rounded-full mb-8 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold text-foreground">Trusted by 100+ Brands Across India</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <span className="text-primary">Premium Signage</span>
            <br />
            <span className="text-foreground">& Large-Format</span>
            <br />
            <span className="relative inline-block">
              <span className="text-foreground">Printing Solutions</span>
              <motion.svg 
                className="absolute -bottom-2 left-0 w-full" 
                viewBox="0 0 300 12" 
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.path 
                  d="M2 10C80 4 220 4 298 10" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  initial={{ strokeDashoffset: 1 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </motion.svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            End-to-end signage, CNC & laser fabrication, Large Format UV & latex printing. 
            <span className="text-foreground font-medium"> Precision craftsmanship for brands that demand quality.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start gap-4 mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("#contact")}
                className="group"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="hero-outline"
                size="xl"
                onClick={() => scrollToSection("#portfolio")}
                className="group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex flex-wrap items-center gap-8 lg:gap-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Feature badges */}
          <motion.div 
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 px-5 py-3 bg-card/80 backdrop-blur-sm rounded-xl shadow-card border border-border/50"
                whileHover={{ y: -4, boxShadow: "0 12px 32px -8px hsl(0 83% 26% / 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-7 h-12 border-2 border-primary/40 rounded-full flex justify-center pt-3">
          <motion.div 
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
