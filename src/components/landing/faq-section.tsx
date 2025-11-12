import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quando recebo os livros?",
    answer: "Assim que o pagamento for confirmado, você recebe imediatamente um e-mail com o link de acesso e download dos livros e bônus. O acesso é automático e vitalício, podendo baixar para o celular, tablet ou computador."
  },
  {
    question: "Onde compro os materiais?",
    answer: "Dentro do Megapack você receberá uma lista exclusiva de fornecedores por país, com os melhores lugares e preços para adquirir resina, vinil, pigmentos e ferramentas. Assim, você economiza tempo e dinheiro comprando tudo direto de quem fornece aos profissionais."
  },
  {
    question: "Como acesso o conteúdo?",
    answer: "Os livros são 100% digitais (formato PDF) — você pode baixar e ler de qualquer dispositivo. Não precisa instalar nada: basta clicar no link recebido por e-mail e o conteúdo será aberto na hora."
  },
  {
    question: "Recebo certificado?",
    answer: "Sim! 🎉 Após 8 dias de estudo, você recebe um Certificado Digital de Conclusão personalizado com o seu nome, reconhecendo seu esforço e dedicação. Você pode baixar e imprimir o certificado quando quiser."
  },
  {
    question: "É seguro comprar online?",
    answer: "Sim, totalmente seguro! As compras são processadas pela Hotmart, plataforma líder em vendas de cursos e livros digitais no Brasil e América Latina. O pagamento é protegido por criptografia e você tem garantia de acesso ou reembolso conforme as políticas da Hotmart."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              ❓ Perguntas Frequentes
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ainda tem dúvidas? Encontre suas respostas aqui.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl pt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
