import { motion } from "framer-motion";
import { MessageSquare, PenTool, Factory, Truck, Sparkles, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const steps = [
  {
    icon: MessageSquare,
    title: "Inquiry",
    description: "Share your requirements and project details with our team.",
    details: ["Free consultation", "Requirement analysis", "Budget discussion"],
  },
  {
    icon: PenTool,
    title: "Design & Proof",
    description: "We create designs and get your approval before production.",
    details: ["Custom design", "3D visualization", "Material selection"],
  },
  {
    icon: Factory,
    title: "Fabrication & Print",
    description: "Precision manufacturing with quality control at every step.",
    details: ["In-house production", "Quality checks", "Timeline tracking"],
  },
  {
    icon: Truck,
    title: "Delivery & Install",
    description: "Professional installation and on-site support.",
    details: ["Safe packaging", "Expert installation", "Post-install support"],
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
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
              Our Process
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            From concept to installation — a streamlined process for quality results.
          </p>
        </AnimatedSection>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-16 left-[calc(50%+4rem)] w-[calc(100%-5rem)] items-center">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/40 to-border" />
                  <ArrowRight className="w-5 h-5 text-primary/40" />
                </div>
              )}

              <motion.div 
                className="relative bg-card rounded-2xl p-7 shadow-card border border-border/50 h-full group"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Step number */}
                <motion.div 
                  className="absolute -top-4 -left-2 w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center font-heading font-bold shadow-lg shadow-primary/25"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {index + 1}
                </motion.div>

                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2.5">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
