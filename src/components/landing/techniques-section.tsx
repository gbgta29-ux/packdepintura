import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { getImage } from '@/lib/placeholder-images';

const techniques = [
  {
    title: "Estuque Veneziano",
    description: "Conquiste o acabamento com efeito mármore brilhante, usado em hotéis e casas de luxo.",
    points: [
      "Aplicar estuque veneziano para um acabamento com efeito mármore brilhante.",
      "Dar textura às suas paredes, criando ambientes que parecem de revistas de design italiano."
    ],
    images: ['stucco-1', 'stucco-2']
  },
  {
    title: "Resina Epóxi",
    description: "Transforme paredes com um acabamento moderno, brilhante e resistente.",
    points: [
      "Criar o famoso “efeito espelho” com resina epóxi, trazendo elegância e luxo.",
      "Dominar uma técnica que pouquíssimas pessoas conhecem para um acabamento único."
    ],
    images: ['epoxy-1', 'epoxy-2']
  },
  {
    title: "Vinis Decorativos",
    description: "Mude o visual de uma parede em minutos, sem tinta nem ferramentas especiais.",
    points: [
      "Descobrir como criar ambientes temáticos e cheios de estilo com adesivos vinílicos.",
      "Alcançar resultados profissionais mesmo que nunca tenha decorado antes."
    ],
    images: ['vinyl-1', 'vinyl-2']
  }
];

const TechniquesSection = () => {
  const megapackCover = getImage('megapack-cover');

  return (
    <section id="techniques" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-5xl">
              Baixe agora mesmo os livros que vão te transformar em um <span className="text-primary">especialista</span>.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              O que você vai aprender com o Megapack de Decoração de Paredes 🎨
            </p>
          </div>
        </div>
        
        {megapackCover && (
          <div className="my-12 flex justify-center">
            <Image 
              src={megapackCover.imageUrl}
              alt={megapackCover.description}
              data-ai-hint={megapackCover.imageHint}
              width={800}
              height={450}
              className="rounded-lg shadow-2xl"
            />
          </div>
        )}

        <div className="mx-auto grid max-w-5xl items-start gap-12 pt-12">
          {techniques.map((tech, index) => {
            const image1 = getImage(tech.images[0]);
            const image2 = getImage(tech.images[1]);
            return (
              <div key={index} className={`grid gap-6 md:grid-cols-2 md:gap-12`}>
                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h3 className="text-2xl font-bold font-headline">{tech.title}</h3>
                  <ul className="space-y-2">
                    {tech.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-2 mt-1 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {image1 && (
                    <Image
                      src={image1.imageUrl}
                      alt={image1.description}
                      data-ai-hint={image1.imageHint}
                      width={400}
                      height={400}
                      className="rounded-xl object-cover aspect-square"
                    />
                  )}
                  {image2 && (
                    <Image
                      src={image2.imageUrl}
                      alt={image2.description}
                      data-ai-hint={image2.imageHint}
                      width={400}
                      height={400}
                      className="rounded-xl object-cover aspect-square"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechniquesSection;
