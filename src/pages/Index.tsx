import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import HeroSection from "@/components/HeroSection";
import HeartfeltMessage from "@/components/HeartfeltMessage";
import LetterToYou from "@/components/LetterToYou";
import SelfLoveReminders from "@/components/SelfLoveReminders";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingHearts />
      <MusicPlayer />
      <main>
        <HeroSection />
        <HeartfeltMessage />
        <LetterToYou />
        <SelfLoveReminders />
        <ClosingSection />
      </main>
    </div>
  );
};

export default Index;
