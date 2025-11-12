import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';

const testimonialIds = ['testimonial-1', 'testimonial-2', 'testimonial-3', 'testimonial-4'];

const TestimonialsSection = () => {
  const testimonials = testimonialIds.map(id => getImage(id)).filter(Boolean);

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              ⭐ O que nossos alunos estão dizendo:
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Resultados reais de pessoas que transformaram suas habilidades e vidas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {testimonials.map((testimonial, index) => (
            testimonial && (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.description}
                    data-ai-hint={testimonial.imageHint}
                    width={400}
                    height={800}
                    className="object-contain w-full h-auto"
                  />
                </CardContent>
              </Card>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
