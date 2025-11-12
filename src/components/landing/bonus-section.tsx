import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getImage } from '@/lib/placeholder-images';

const bonuses = [
  { id: 'bonus-suppliers', name: 'Lista de Fornecedores', price: '125', description: 'Você receberá nossa lista de fornecedores, com os melhores lugares para adquirir tudo pelo menor preço.' },
  { id: 'bonus-lamps', name: 'Luminárias com Resina', price: '110', description: 'Aprenda, passo a passo, a criar luminárias lindas e inovadoras usando resina.' },
  { id: 'bonus-checklist', name: 'Checklist de Produção e Segurança', price: '90', description: 'O checklist imprimível vai te ajudar a não esquecer nenhuma etapa importante ao trabalhar com resina.' },
  { id: 'bonus-sales-guide', name: 'A Arte de Vender – Guia de Negócios', price: '90', description: 'Aprenda as melhores estratégias de venda para iniciar e impulsar seu negócio.' },
  { id: 'bonus-vip', name: 'Membresia VIP', price: '90', description: 'Receba atualizações e novos bônus todos os meses, sem nenhum custo adicional.' },
  { id: 'bonus-certificate', name: 'Certificado de Conclusão', price: 'Grátis', description: 'Você receberá um certificado de conclusão personalizado com o seu nome.' },
];

const BonusSection = () => {
  return (
    <section id="bonuses" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white bg-[repeating-linear-gradient(90deg,transparent,transparent_200px,hsl(var(--primary))_200px,hsl(var(--primary))_201px)]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              🎁 BÔNUS DISPONÍVEIS <span className="text-primary">SOMENTE HOJE</span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Adquira o Megapack hoje e receba acesso imediato a todos estes bônus incríveis.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {bonuses.map((bonus) => {
            const image = getImage(bonus.id);
            return (
              <Card key={bonus.id} className="bg-card/80 backdrop-blur-sm border-primary/20 text-card-foreground transform hover:scale-105 transition-transform duration-300">
                <CardContent className="flex flex-col items-center text-center p-6">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={150}
                      height={150}
                      className="rounded-lg mb-4 object-cover h-36 w-auto"
                    />
                  )}
                  <h3 className="text-xl font-bold font-headline">{bonus.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 h-16">{bonus.description}</p>
                  <div className="flex items-center space-x-2 mt-4">
                    <span className="text-lg text-muted-foreground line-through">
                      {bonus.price !== 'Grátis' ? `R$${bonus.price}` : ''}
                    </span>
                    <Badge variant="destructive" className="bg-primary text-primary-foreground border-none">HOJE: GRÁTIS</Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
