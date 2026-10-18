import { Conversation } from "@/components/Conversation";
import { EventFacts } from "@/components/EventFacts";
import { Explores } from "@/components/Explores";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Nav } from "@/components/Nav";
import { Organizer } from "@/components/Organizer";
import { Quote } from "@/components/Quote";
import { Registration } from "@/components/Registration";
import { Speakers } from "@/components/Speakers";
import { WhyAttend } from "@/components/WhyAttend";
import { WhyPsyverse } from "@/components/WhyPsyverse";
import { WatercolorDefs } from "@/components/illustrations/base";

export default function Home() {
  return (
    <>
      <WatercolorDefs />
      <Nav />
      <main>
        <Hero />
        <EventFacts />
        <WhyPsyverse />
        <Conversation />
        <Explores />
        <Quote />
        <Speakers />
        <Highlights />
        <WhyAttend />
        <Registration />
        <Organizer />
      </main>
      <Footer />
    </>
  );
}
