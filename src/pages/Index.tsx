import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Skeleton } from "@/components/ui/skeleton";

const HeroSection = lazy(() => import("@/components/HeroSection").then(module => ({ default: module.HeroSection })));
const ClientsSection = lazy(() => import("@/components/ClientsSection").then(module => ({ default: module.ClientsSection })));
const ServicesSection = lazy(() => import("@/components/ServicesSection").then(module => ({ default: module.ServicesSection })));
const MachinesSection = lazy(() => import("@/components/MachinesSection").then(module => ({ default: module.MachinesSection })));
// const PortfolioSection = lazy(() => import("@/components/PortfolioSection").then(module => ({ default: module.PortfolioSection })));
const ProcessSection = lazy(() => import("@/components/ProcessSection").then(module => ({ default: module.ProcessSection })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(module => ({ default: module.TestimonialsSection })));
const WhyUsSection = lazy(() => import("@/components/WhyUsSection").then(module => ({ default: module.WhyUsSection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(module => ({ default: module.FAQSection })));
const ContactSection = lazy(() => import("@/components/ContactSection").then(module => ({ default: module.ContactSection })));
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));

const SectionSkeleton = () => (
  <div className="container mx-auto px-4 lg:px-8 py-24">
    <Skeleton className="h-32 w-full mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <Suspense fallback={<SectionSkeleton />}>
          <HeroSection />
          <ClientsSection />
          <ServicesSection />
          <MachinesSection />
          {/* <PortfolioSection /> */}
          <ProcessSection />
          <TestimonialsSection />
          <WhyUsSection />
          <FAQSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={<Skeleton className="h-96 w-full" />}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
