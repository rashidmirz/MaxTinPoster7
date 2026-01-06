import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";
import portfolio4 from "../assets/portfolio-4.jpg";

const services = [
  {
    title: "Signage & Display Solutions",
    description: "ACP, acrylic, and comprehensive indoor/outdoor signage solutions.",
    color: "from-blue-500/20 to-blue-600/10",
    image: "https://i.pinimg.com/736x/93/00/1a/93001aeb933da267e7e4246183f346da.jpg",
  },
  {
    title: "Acrylic 3D & Channel Letters",
    description: "CNC-cut and fabricated illuminated channel letters.",
    color: "from-purple-500/20 to-purple-600/10",
    image: "https://i.pinimg.com/1200x/7b/9b/1c/7b9b1c6065396c5c64e455dc13ec55bf.jpg",
  },
  {
    title: "CNC & Laser Cutting",
    description: "Precision cutting on acrylic, MDF, wood, and ACP materials.",
    color: "from-orange-500/20 to-orange-600/10",
    image: "https://i.pinimg.com/1200x/80/df/2e/80df2ee9ef48d9550ecab060646e64a7.jpg",
  },
  {
    title: "Eco-Solvent Large Format Printing",
    description: "Banners, hoardings, and flex prints up to 10 ft width.",
    color: "from-green-500/20 to-green-600/10",
    image: "https://i.pinimg.com/1200x/0a/47/f0/0a47f067aa1f55c2b96dd305ef4f84ca.jpg",
  },
  {
    title: "UV Printing",
    description: "Premium UV and eco-friendly latex printing solutions.",
    color: "from-yellow-500/20 to-yellow-600/10",
    image: "https://i.pinimg.com/736x/56/ce/76/56ce76205e11a57d64aa0eacb6872942.jpg",
  },
  {
    title: "Sticker & Vinyl Printing",
    description: "Frosted, one-way vision, and branding stickers.",
    color: "from-pink-500/20 to-pink-600/10",
    image: "https://i.pinimg.com/1200x/d2/09/73/d20973e8d9d88359052b0458723a1115.jpg",
  },
  {
    title: "Event Branding",
    description: "Motorised displays and sponsor boards for events.",
    color: "from-cyan-500/20 to-cyan-600/10",
    image: "https://totalprint.co.za/wp-content/uploads/2025/04/01-Event-Branding.webp",
  },
  {
    title: "Wall Painting",
    description: "Brand murals and large-scale professional painting.",
    color: "from-rose-500/20 to-rose-600/10",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/1/377472885/CF/PO/MH/209334872/wall-paint-advertising.jpeg",
  },
  {
    title: "Backlit Logos",
    description: "Wooden and acrylic backlit logos for interior decor.",
    color: "from-amber-500/20 to-amber-600/10",
    image: "https://i.pinimg.com/1200x/8d/52/84/8d5284578f6c1dab816e9ce0018ea4cf.jpg",
  },
  {
    title: "Lamination & Finishing",
    description: "Professional matte and gloss lamination services.",
    color: "from-indigo-500/20 to-indigo-600/10",
    image: "https://orchiddigitals.com/wp-content/uploads/2020/05/front-view-of-roll-to-roll-lamination-machine-using-hydraulic-pressure-rollers-to-paste-laminating-film-on-a-long-roll-of-inkjet-printed-vinyl.jpg.webp",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
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
              What We Offer
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Comprehensive signage and printing solutions under one roof — from design to installation.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="service-card group bg-card rounded-2xl shadow-card border border-border/50 hover:border-primary/30 h-full relative overflow-hidden"
                whileHover={{ y: -12, scale: 1.05, rotate: -2, transition: { type: "spring", stiffness: 300 } }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <motion.img 
                    src={service.image} 
                    alt={service.title} 
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-t-2xl"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="p-6">
                   
                    <h3 className="text-lg font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
