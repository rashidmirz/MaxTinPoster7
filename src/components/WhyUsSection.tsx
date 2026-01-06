import { motion } from "framer-motion";
import { Factory, Ruler, Zap, Award, Users, Clock, Sparkles, CheckCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const reasons = [
  {
    icon: Factory,
    title: "In-House Manufacturing",
    description: "Complete fabrication facilities under one roof for quality control.",
  },
  {
    icon: Ruler,
    title: "Up to large format Printing",
    description: "Large-format UV, solvent, and latex printing capabilities.",
  },
  {
    icon: Zap,
    title: "Precision CNC & Laser",
    description: "8×4 ft CNC router and laser cutting for exact specifications.",
  },
  {
    icon: Award,
    title: "Premium Finishing",
    description: "Professional lamination and finishing for lasting quality.",
  },
  {
    icon: Users,
    title: "Trusted by Brands",
    description: "Working with 500+ corporate clients across India.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Committed timelines with efficient project management.",
  },
];

const stats = [
  { value: "100+", label: "Brand Clients" },
  { value: "10ft", label: "Max Print Width" },
  { value: "8×4", label: "CNC/Laser Bed" },
];

export function WhyUsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <AnimatedSection>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Why MaxTinPoster
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Why Choose <span className="text-primary">Us</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed">
              MaxTinPoster is a full-service signage and display manufacturer offering 
              end-to-end solutions — from design and large-format printing to CNC 
              fabrication and installation. We work with national brands and local 
              businesses alike to create durable, eye-catching displays.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-card rounded-2xl shadow-card border border-border/50">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Features Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="group flex items-start gap-4 p-5 bg-card rounded-2xl shadow-card border border-border/50 hover:border-primary/30 h-full"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <reason.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
