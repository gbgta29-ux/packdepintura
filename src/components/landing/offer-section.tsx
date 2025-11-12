"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Countdown from './countdown';
import { getImage } from '@/lib/placeholder-images';
import { Zap } from 'lucide-react';

const OfferSection = () => {
  const offerImage = getImage('offer-pack');

  return (
    <section id="offer" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-destructive flex items-center justify-center gap-2">
            <Zap className="w-8 h-8" /> OFERTA VÁLIDA SOMENTE HOJE
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Não perca a chance de adquirir o conhecimento que pode transformar sua vida e suas paredes.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-4">
          {offerImage && (
            <Image
              src={offerImage.imageUrl}
              alt={offerImage.description}
              data-ai-hint={offerImage.imageHint}
              width={500}
              height={500}
              className="mx-auto"
            />
          )}
          <div className="text-center space-y-2">
            <p className="text-2xl text-muted-foreground line-through">De R$ 147,00</p>
            <p className="text-5xl font-bold text-primary">por apenas R$ 29,90</p>
            <p className="text-lg font-medium">(pagamento único)</p>
          </div>

          <Button size="lg" className="w-full text-lg md:text-xl h-auto py-3 md:h-14 bg-success text-success-foreground hover:bg-success/90 font-bold animate-pulse">
            GARANTIR MEU MEGAPACK COM DESCONTO
          </Button>
          <p className="text-xs text-muted-foreground">
            Pagamento 100% seguro | Acesso imediato | Download vitalício
          </p>
        </div>
        <Countdown />
        <Badge className="mx-auto text-base">
          43 pacotes vendidos – restam apenas 7 vagas promocionais
        </Badge>
      </div>
    </section>
  );
};

export default OfferSection;
