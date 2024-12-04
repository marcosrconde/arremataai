import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-[#19363B] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-[#19363B] sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Encontre as melhores</span>
                <span className="block text-[#00D866]">oportunidades em leilões</span>
              </h1>
              <p className="mt-3 text-base text-[#E1F3E5] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Descubra imóveis em leilão com descontos que podem chegar a até 94% do valor de mercado. 
                Use ferramentas de inteligência artificial para encontrar, analisar e gerenciar as melhores oportunidades.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://app.arremata.ai"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#19363B] bg-[#00D866] hover:bg-[#00D866]/90 md:py-4 md:text-lg md:px-10"
                  >
                    Começar Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}