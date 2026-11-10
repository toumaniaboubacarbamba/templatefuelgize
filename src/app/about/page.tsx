import Header from "@/components/Header";
import Achievements from "@/components/Achievements";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { AboutIntro, VideoBlock, Mission, Clients, Faq } from "@/components/AboutSections";

export default function AboutPage() {
  return (
    <main>
      <Header solid active="Pages" />
      <div
        className="mx-4 mt-4 h-[445px] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/svc-5.webp)" }}
      />
      <AboutIntro />
      <VideoBlock />
      <div className="bg-[#f3f3f5]">
        <Achievements variant="about" />
        <Mission />
        <Clients />
      </div>
      <Stats />
      <Faq />
      <Footer contactBand />
    </main>
  );
}
