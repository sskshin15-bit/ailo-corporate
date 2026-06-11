"use client";

import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { SiteShell } from "@/components/SiteShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { StrengthsSection } from "@/components/sections/StrengthsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { MeoSection } from "@/components/sections/MeoSection";
import { ReadinessSection } from "@/components/sections/ReadinessSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { NewsStrip } from "@/components/sections/NewsStrip";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePageClient() {
  return (
    <SiteShell>
      {({ scrollRef, visionPhaseRef, visionActiveRef, pointerRef }) => (
        <>
          <Nav />
          <main className="relative z-10">
            <HeroSection scrollRef={scrollRef} />
            <StrengthsSection />
            <SolutionsSection />
            <MeoSection />
            <ReadinessSection />
            <LeadershipSection />
            <VisionSection
              phaseRef={visionPhaseRef}
              activeRef={visionActiveRef}
              pointerRef={pointerRef}
            />
            <NewsStrip />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </SiteShell>
  );
}
