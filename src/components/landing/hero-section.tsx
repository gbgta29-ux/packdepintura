"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleScrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden"
      style={{
        backgroundColor: '#f8f8ff',
        backgroundImage: 'radial-gradient(at 20% 80%, hsla(45, 66%, 52%, 0.1) 0px, transparent 50%), radial-gradient(at 80% 20%, hsla(300, 26%, 71%, 0.1) 0px, transparent 50%), radial-gradient(at 80% 80%, hsla(220, 13%, 91%, 0.2) 0px, transparent 50%)'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            TRANSFORME PAREDES COMUNS EM <span className="text-primary">OBRAS DE ARTE</span> EM MENOS DE 7 DIAS
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Aprenda 3 técnicas profissionais e crie um negócio altamente lucrativo — mesmo sem experiência.
          </p>
          
          <div className="w-full max-w-sm sm:max-w-3xl aspect-video rounded-xl border-4 border-primary shadow-2xl overflow-hidden my-8 relative">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover" 
              src="https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.4184288591553941.mp4" 
              poster="https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.49243368615666105.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls={isPlaying}
            >
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer"
                onClick={handlePlay}
              >
                <PlayCircle className="w-20 h-20 text-white text-opacity-80 hover:text-opacity-100 hover:scale-110 transition-all duration-300" />
              </div>
            )}
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-6 py-3 h-auto md:text-lg md:px-10 md:py-6 rounded-full shadow-lg animate-pulse"
            onClick={handleScrollToOffer}
          >
            QUERO TRANSFORMAR MINHAS PAREDES AGORA!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
