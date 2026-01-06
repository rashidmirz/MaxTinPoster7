import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Marketing Head",
    company: "Retail Solutions Pvt Ltd",
    image: null,
    rating: 5,
    text: "MaxTinPoster delivered exceptional quality signage for our 15 retail outlets. Their attention to detail and on-time delivery impressed us. The channel letters they created are vibrant and durable.",
  },
  {
    name: "Priya Sharma",
    role: "Owner",
    company: "Sharma Enterprises",
    image: null,
    rating: 5,
    text: "We've been working with MaxTinPoster for 3 years now. Their CNC cutting precision is unmatched and the team is always helpful with design suggestions. Highly recommended!",
  },
  {
    name: "Amit Verma",
    role: "Project Manager",
    company: "BuildCon Infrastructure",
    image: null,
    rating: 5,
    text: "The hoarding installation was flawless. MaxTinPoster handled a challenging site with professionalism. Their large format prints are sharp and colors are exactly as we wanted.",
  },
  {
    name: "Sunita Patel",
    role: "Brand Manager",
    company: "FreshMart Supermarkets",
    image: null,
    rating: 5,
    text: "Quick turnaround, competitive pricing, and excellent quality. MaxTinPoster has become our go-to partner for all signage needs across our chain of stores.",
  },
  {
    name: "Vikram Singh",
    role: "Director",
    company: "Singh Hotels Group",
    image: null,
    rating: 5,
    text: "The backlit logos they created for our hotel lobbies are stunning. The installation team was professional and the after-sales support is commendable.",
  },
  {
    name: "Neha Gupta",
    role: "Manager",
    company: "Sosyo",
    image: null,
    rating: 5,
    text: "From wall murals to menu boards, MaxTinPoster transformed our café's look completely. Their creative suggestions made our space Instagram-worthy!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
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
              Testimonials
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Don't just take our word for it. Here's what our valued clients have to say about working with us.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-card rounded-2xl p-7 shadow-card border border-border/50 h-full relative group"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Quote icon */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="mb-4 pt-2">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                    <span className="text-primary font-heading font-bold">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust indicators */}
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-card border border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">7000+</div>
                <div className="text-muted-foreground font-medium">Projects Completed</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground font-medium">Happy Clients</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground font-medium">Years Experience</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">4.9</div>
                <div className="text-muted-foreground font-medium flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  Rating
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
