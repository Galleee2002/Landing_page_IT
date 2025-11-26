// src/app/page.tsx
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import SocialProof from "@/components/socialProof/SocialProof";
import FeaturesBento from "@/components/featuresBento/FeaturesBento";
import CodeShowcase from "@/components/codeShowCase/CodeShowCase";
import CallToAction from "@/components/callToAction/CallToAction";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-zinc-950 selection:bg-indigo-500/30">
      {" "}
      <Navbar />
      <Hero />
      <SocialProof />
      <FeaturesBento />
      <CodeShowcase />
      <CallToAction />
      <Footer />
    </main>
  );
}
