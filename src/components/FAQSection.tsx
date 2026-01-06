import { motion } from "framer-motion";
import { Sparkles, HelpCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of signage do you offer?",
    answer: "We offer a comprehensive range of signage solutions including ACP signage, acrylic 3D letters, channel letters with LED illumination, flex banners, hoardings, wall murals, backlit signs, and custom tin posters. We handle everything from small retail signs to large-scale corporate installations."
  },
  {
    question: "What is the turnaround time for projects?",
    answer: "Turnaround time depends on the complexity and scale of your project. Simple prints and stickers can be ready in 1-2 days, while custom fabrication like channel letters typically takes 5-7 working days. Large-scale installations may require 2-3 weeks. We'll provide a detailed timeline during the quote process."
  },
  {
    question: "What is the maximum print size you can handle?",
    answer: "We can print up to 10 feet in width using our UV and solvent printers. For longer prints like flex banners and hoardings, we can accommodate virtually any length. Our CNC and laser cutting machines handle sheets up to 8×4 feet."
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes! We offer end-to-end services including professional installation. Our experienced team handles everything from wall mounting and structural installations to electrical connections for illuminated signage. We serve clients across the Delhi NCR region and can arrange installation in other cities too."
  },
  {
    question: "How do you price your services?",
    answer: "Pricing depends on several factors including materials used, size, complexity, quantity, and installation requirements. We provide detailed, transparent quotes after understanding your requirements. Contact us with your project details and we'll respond with a comprehensive quote within 24 hours."
  },
  {
    question: "What materials do you work with?",
    answer: "We work with a wide range of materials including acrylic, ACP (Aluminum Composite Panels), MDF, plywood, stainless steel, brass, PVC, vinyl, flex, canvas, and various printing substrates. We'll recommend the best material based on your application, budget, and durability requirements."
  },
  {
    question: "Do you offer design services?",
    answer: "Absolutely! We have an in-house design team that can create custom designs, 3D visualizations, and artwork for your signage. If you have existing designs, we can work with your files too. We support all major formats including AI, PSD, CDR, and PDF."
  },
  {
    question: "What is your minimum order quantity?",
    answer: "We don't have strict minimum order quantities and welcome both small and large orders. Whether you need a single sign for your shop or hundreds of units for a franchise network, we're happy to help. Bulk orders do receive better pricing."
  },
];

export function FAQSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Header */}
          <AnimatedSection className="lg:sticky lg:top-32">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                FAQ
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us directly.
            </p>
            
            {/* Contact CTA */}
            <motion.div 
              className="p-6 bg-card rounded-2xl border border-border/50 shadow-card"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-2">Still have questions?</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Can't find the answer you're looking for? Please chat with our friendly team.
                  </p>
                  <a 
                    href="#contact" 
                    className="text-primary font-semibold text-sm hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Get in touch →
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Accordion */}
          <AnimatedSection delay={0.2}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="bg-card rounded-2xl border border-border/50 px-6 shadow-sm data-[state=open]:shadow-card data-[state=open]:border-primary/20 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5 [&[data-state=open]]:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
