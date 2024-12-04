import { Search, TrendingUp, Shield, Bell } from 'lucide-react';

const features = [
  {
    name: 'Busca Inteligente',
    description: 'Encontre imóveis em leilão com base em seus critérios específicos e preferências de localização.',
    icon: Search
  },
  {
    name: 'Analise as oportunidades',
    description: 'Ferramentas para gerenciamento da sua carteira de imóveis em análise',
    icon: TrendingUp
  },
  {
    name: 'Extraia informações das matrículas em PDF',
    description: 'Use nossa inteligência artificial para extrair informações úteis de qualquer matrícula em PDF',
    icon: Shield
  },
  {
    name: 'Alertas Personalizados',
    description: 'Receba notificações sobre novas oportunidades que correspondam aos seus interesses.',
    icon: Bell
  }
];

export default function Features() {
  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#19363B] font-semibold tracking-wide uppercase">Recursos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Encontre seu imóvel ideal
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Nossa plataforma oferece todas as ferramentas necessárias para você encontrar e aproveitar as melhores oportunidades.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#19363B] text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}