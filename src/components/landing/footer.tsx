import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <span className="font-bold text-lg">Kirvano</span>
          <ShieldCheck className="h-6 w-6 text-green-500" />
          <ShieldCheck className="h-6 w-6 text-green-500" />
        </div>
        <div className="text-xs text-muted-foreground space-y-2">
          <p>© 2025 WallTransform. Todos os direitos reservados.</p>
          <p>Este site não é afiliado ao Facebook ou qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais.</p>
          <p>FACEBOOK é uma marca registrada da META PLATFORMS, INC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
