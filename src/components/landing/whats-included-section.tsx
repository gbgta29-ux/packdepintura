import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

const includedItems = [
  'Megapack com 3 livros de decoração',
  'Lista de Fornecedores',
  'Luminárias com Resina',
  'Checklist de Produção',
  'A Arte de Vender',
  'Membresia VIP',
  'Certificado Digital'
];

const WhatsIncludedSection = () => {
  const offerImage = getImage('offer-pack');

  return (
    <section id="included" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center items-center">
            {offerImage && (
              <Image
                src={offerImage.imageUrl}
                alt={offerImage.description}
                data-ai-hint={offerImage.imageHint}
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            )}
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <Card className="border-2 border-primary shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-headline">O que você vai receber</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {includedItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center pt-4 space-y-2">
                  <p className="text-muted-foreground">Valor total: <span className="line-through">R$ 697,00</span></p>
                  <p className="font-bold">Valor especial de hoje: <span className="text-primary text-2xl">R$ 29,90</span></p>
                </div>
              </CardContent>
            </Card>
            <a href="https://pay.kirvano.com/8ca49169-3af7-418a-ac35-8344eb0f446d" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full text-lg md:text-xl h-auto py-3 md:h-14 bg-success text-success-foreground hover:bg-success/90 font-bold">
                QUERO APROVEITAR O DESCONTO AGORA
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;
