import { Sparkles } from "lucide-react";

const questions = [
  "Você se sente frustrado(a) por não encontrar opções reais para gerar uma renda extra?",
  "Gostaria de aprender um passo a passo garantido para transformar paredes simples em obras de arte — economizando até 80% em materiais?",
  "Quer descobrir onde comprar tudo na sua cidade gastando menos?",
  "Sabia que pode criar designs incríveis e lucrativos sem precisar de ferramentas caras ou experiência prévia?",
];

const IdentificationSection = () => {
  return (
    <section 
      id="identification" 
      className="w-full py-12 md:py-24 lg:py-32"
      style={{
        backgroundColor: '#fff',
        backgroundImage: 'radial-gradient(hsl(var(--muted)) 0.5px, transparent 0.5px)',
        backgroundSize: '10px 10px',
      }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {questions.map((question, index) => (
            <div key={index} className="flex items-center text-center max-w-3xl">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-primary mr-4 shrink-0" />
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground text-left">
                {question}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
