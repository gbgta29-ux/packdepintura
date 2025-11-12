import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';

const AuthorSection = () => {
  const authorImage = getImage('author-pic');

  return (
    <section id="author" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center">
            {authorImage && (
              <Image
                src={authorImage.imageUrl}
                alt={authorImage.description}
                data-ai-hint={authorImage.imageHint}
                width={500}
                height={500}
                className="rounded-full object-cover w-64 h-64 lg:w-96 lg:h-96 border-4 border-primary shadow-lg"
              />
            )}
          </div>
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Sobre o Autor
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Criado por <span className="font-bold text-primary">Carlos Alberto</span>, carpinteiro e especialista em resina epóxi com mais de 15 anos de experiência. Já capacitou mais de 6.500 alunos na Argentina, Chile, Paraguai e Uruguai. Agora, ele compartilha todas as técnicas e segredos em um único pacote digital passo a passo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
