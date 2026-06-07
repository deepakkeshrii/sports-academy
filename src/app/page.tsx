import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from "@/components/sections/Hero";
import Intro from '@/components/sections/Intro';
import Quote from '@/components/sections/Quote';
import About from '@/components/sections/About';
import KeyFeatures from '@/components/sections/KeyFeatures';
import Glimpse from '@/components/sections/Glimpse';
import Programs from '@/components/sections/Programs';
import Marquee from '@/components/sections/Marquee';
import Launching from '@/components/sections/Launching';
import Professionals from '@/components/sections/Professionals';
import Facilities from '@/components/sections/Facilities';
import CoachesEvents from '@/components/sections/CoachesEvents';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <About />
        <Quote />
        <KeyFeatures />
        <Glimpse />
        <Programs />
        <Marquee />
        <Launching />
        <Professionals />
        <Facilities />
        <CoachesEvents />
      </main>
      <Footer />
    </>
  );
}
