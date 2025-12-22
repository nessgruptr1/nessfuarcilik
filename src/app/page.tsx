import { Hero } from "@/components/sections/Hero";
import { GeneralInfo } from "@/components/sections/GeneralInfo";
import { Design3DShowcase } from "@/components/sections/Design3DShowcase";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { StandShowcase } from "@/components/sections/StandShowcase";
// import { PortfolioHighlights } from "@/components/sections/PortfolioHighlights";
import { ReferenceStrip } from "@/components/sections/ReferenceStrip";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { TenYearsBanner } from "@/components/sections/TenYearsBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TenYearsBanner />
      <GeneralInfo />
      <Design3DShowcase />
      <div className="space-y-16 py-10 mx-auto max-w-6xl px-6">
        <ReferenceStrip />
        <ServiceGrid />
        <StandShowcase />
        <ContactCTA />
      </div>
    </>
  );
}
