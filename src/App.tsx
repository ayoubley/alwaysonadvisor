import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ProductExperience } from "./components/ProductExperience";
import { CoreValue } from "./components/CoreValue";
import { HowItWorks } from "./components/HowItWorks";
import { UseCases } from "./components/UseCases";
import { AlwaysOn } from "./components/AlwaysOn";
import { Intelligence } from "./components/Intelligence";
import { Vision } from "./components/Vision";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { DomainCard } from "./components/DomainCard";

export default function App() {
  return (
    <div className="noise relative min-h-screen bg-ink text-fog-100 antialiased">
      <Nav />
      <main>
        <Hero />
        <ProductExperience />
        <CoreValue />
        <HowItWorks />
        <UseCases />
        <AlwaysOn />
        <Intelligence />
        <Vision />
        <FinalCTA />
      </main>
      <Footer />
      <DomainCard />
    </div>
  );
}
