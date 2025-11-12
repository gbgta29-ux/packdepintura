import Image from 'next/image';
import { Palette } from 'lucide-react';
import { getImage } from '@/lib/placeholder-images';

const BenefitsSection = () => {
  const benefitsImage = getImage('benefits-image');

  const benefits = [
    "Com este pack, você vai descobrir os segredos para transformar paredes comuns em espaços de luxo e criar seu próprio negócio de decoração sem sair de casa, economizando entre centenas de reais que custaria um curso presencial.",
    "Você terá a grande vantagem de aprender no seu próprio ritmo, sem pressa e com uma metodologia clara, prática e garantida.",
    "Poderá baixar os livros diretamente no seu celular ou computador, para estudá-los onde e quando quiser, conforme sua rotina.",
    "Ao concluir este megapack, você terá o conhecimento necessário para oferecer serviços de decoração ou vender seus projetos, gerando rendimentos entre 500 a 1500 reais por cada trabalho concluído."
  ];

  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Benefícios do Livro</div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              Benefícios do <span className="text-primary">Megapack</span>
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Palette className="w-5 h-5 mr-3 mt-1 shrink-0 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            {benefitsImage && (
              <Image
                src={benefitsImage.imageUrl}
                alt={benefitsImage.description}
                data-ai-hint={benefitsImage.imageHint}
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
