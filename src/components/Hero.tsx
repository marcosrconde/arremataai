import { ArrowRight, TrendingUp, Home, DollarSign } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative gradient-bg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center lg:text-left lg:col-span-7">
              <div className="animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 text-primary-100 text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Descontos de até 94% do valor de mercado
                </div>
                
                <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block">Encontre as</span>
                  <span className="block text-gradient">melhores oportunidades</span>
                  <span className="block">em leilões de imóveis</span>
                </h1>
                
                <p className="mt-6 text-lg text-secondary-200 sm:text-xl sm:max-w-xl sm:mx-auto lg:mx-0 lg:max-w-none">
                  Descubra imóveis em leilão com nossa plataforma inteligente. 
                  Use ferramentas de IA para encontrar, analisar e gerenciar as melhores oportunidades do mercado.
                </p>
                
                <div className="mt-8 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="https://app.arremata.ai"
                  className="btn-primary"
                  target="_blank" rel="noopener noreferrer">
                    Começar Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                 
               </div>
                
                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">30k+</div>
                    <div className="text-sm text-secondary-300">Imóveis disponíveis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">94%</div>
                    <div className="text-sm text-secondary-300">Desconto Máximo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">25k+</div>
                    <div className="text-sm text-secondary-300">Usuários Ativos</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Visual elements */}
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <div className="relative animate-slide-up animation-delay-200">
                {/* Main card */}
                <div className="card p-6 bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Home className="w-5 h-5 text-primary-400" />
                      <span className="text-white font-medium">Apartamento - São Paulo</span>
                    </div>
                    <span className="px-2 py-1 bg-primary-500 text-white text-xs rounded-full">
                      Novo
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-secondary-300">Valor de Mercado:</span>
                      <span className="text-white font-semibold">R$ 850.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-300">Lance Inicial:</span>
                      <span className="text-primary-400 font-semibold">R$ 340.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-300">Desconto:</span>
                      <span className="text-accent-400 font-bold text-lg">60%</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-secondary-300 text-sm">Leilão em:</span>
                      <span className="text-white font-medium">3 dias</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center animate-bounce-slow">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center animate-pulse-slow">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}