import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Sparkles } from "lucide-react";

const clients = [
  { name: "VI", logo: "https://th.bing.com/th/id/OIP.zkgscUPfj2ykxHw2k8TgPgHaEK?w=292&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" },
  { name: "Jio", logo: "https://i.pinimg.com/1200x/d0/97/88/d09788174ffec6a8f66461d29fac3ed8.jpg" },
  { name: "Ralson Tires Limited", logo: "https://media.licdn.com/dms/image/v2/D560BAQEtmBeYM2ChMg/company-logo_200_200/company-logo_200_200/0/1728555452864/ralson_tyres_logo?e=2147483647&v=beta&t=SpXZOwGUsoQeb_w0wcTbP8HmiwIMtOglLdACxiyXbls" },
  { name: "CEAT Limited", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/CEAT_Logo.svg/1200px-CEAT_Logo.svg.png" },
  { name: "Adani Ambuja Cement", logo: "https://www.legaleraonline.com/h-upload/2025/07/23/1615954-ambuja-cements-adani-group-cement.jpg" },
  { name: "Birla Pivot", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wt4tH0RBhJL275mCs7V5nhxC-ExFjysqRA&s" },
  { name: "Grasim Industries", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Aditya_Birla_Grasim_Logo.svg/1200px-Aditya_Birla_Grasim_Logo.svg.png" },
  { name: "Arun ice creams", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDECdpnciuyPlgmflp1I3dnYGhxy_jeC0aZw&s" },
  { name: "Trivio Pharmacy", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6GkJZfEAp-s4ccaHZN01oCwqmTZ1W41spg&s  " },
  { name: "Mother Dairy", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRyhXG57VfRKtAfzTXLl-XyZUukeQLKGFjg&s" },
  { name: "TVS Tyres", logo: "data:image/png;base64,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" },
  { name: "Amul", logo: "https://i.pinimg.com/736x/18/0f/12/180f121916d89f1285480e8d5c5566ab.jpg" },
  { name: "Ramco Industries Ltd.", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHPrmx69YH-Hg/company-logo_200_200/company-logo_200_200/0/1631341639305?e=2147483647&v=beta&t=44t0Sd98GYZpkdQEX49RQK6GZcVJN-48UJz-hjg2PoU" },
  { name: "Pepsi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/1200px-Pepsi_logo_2014.svg.png" },
  { name: "Coca-Cola", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/200px-Coca-Cola_logo.svg.png" },
  { name: "Asian Paints", logo: "https://i.pinimg.com/1200x/8a/41/3c/8a413c52f1c647e8dc955ba828cabaf5.jpg" },
  { name: "Shree Cement Limited", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzeTlH5cGv6CU158SH0tiHDG4w44EjgJfWAA&s" },
  { name: "Indigo Products", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Leatqj-_Tk9ywVgEmzEc6zvHaP1KVlc2YA&s" },
  { name: "Kansai Nerolac Paints", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi15Aj34evUHXVfEPl1K0fLr5iso1xJYxr2A&s" },
  { name: "Astral Pipes", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3PYPfeVXG3Q-lMueZWKS1BhCPRFIEu0dlg&s" },
  { name: "Aditya Birla", logo: "https://i.pinimg.com/736x/60/67/84/606784775931dad5feaef22b040feaca.jpg" },
  { name: "Wipro", logo: "https://i.pinimg.com/1200x/4d/c5/74/4dc5742211ef451e37634edfa2e6101a.jpg" },
  { name: "UltraTech", logo: "https://i.pinimg.com/736x/29/4e/49/294e498e78e4fdeabaf25dab18a2d97d.jpg" },
  { name: "Sosyo", logo: "data:image/png;base64,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" },
  { name: "JK Tyres ", logo: "https://i.pinimg.com/736x/3d/71/2b/3d712b54f52d26ee60f2af2c37ce241a.jpg" },
  { name: "Wagh Bakri Tea", logo: "https://etimg.etb2bimg.com/photo/73155701.cms" },
  { name: "Supreme Pipes", logo: "https://www.supreme.co.in/dist/img/og-image.jpg" },
  { name: "BirlaNu Limited", logo: "https://media.licdn.com/dms/image/v2/D5612AQEv304E7FREIg/article-cover_image-shrink_720_1280/B56ZXJD8Z0GoAI-/0/1742835009633?e=2147483647&v=beta&t=0jViVeFSbccZ8bXU9ihmiKakhLiAYVfexaJ_Ja1JJYE" },
];

const logoContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const floatingVariants = {
  visible: (i: number) => ({
    y: [0, -6, 0],
    transition: {
      duration: 3 + ((i % 5) / 5) * 2, // pseudo-random duration
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5 + ((i % 7) / 7) * 2, // pseudo-random delay after entry
    },
  }),
};

export function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <AnimatedSection className="text-center">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Partners
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">Leading Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've partnered with over 100+ brands across India to deliver exceptional signage solutions.
          </p>
        </AnimatedSection>
      </div>

      {/* Logos grid */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
              variants={logoContainerVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <motion.div
                className="w-36 h-24 md:w-44 md:h-28 bg-card rounded-2xl shadow-card flex items-center justify-center border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover p-4"
                variants={floatingVariants}
                custom={index}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain transition-all duration-200"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML = `<span class="font-heading font-bold text-2xl text-primary/80">${client.name
                      .substring(0, 2)
                      .toUpperCase()}</span>`;
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
           <motion.div
              className="flex-shrink-0"
              variants={logoContainerVariants}
              initial="hidden"
              whileInView="visible"
              custom={clients.length}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <motion.div
                className="w-36 h-24 md:w-44 md:h-28 bg-card rounded-2xl shadow-card flex flex-col items-center justify-center border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover p-4 cursor-pointer"
                variants={floatingVariants}
                custom={clients.length}
              >
                <span className="font-heading font-bold text-4xl text-primary">100+</span>
                <span className="text-sm text-muted-foreground mt-1">More Brands</span>
              </motion.div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}