import { TrendingUp, ShieldCheck, Brain, Clock } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Descontos absurdos',
    description: 'Descontos de até 94% em relação ao valor de mercado dos imóveis.'
  },
  {
    icon: ShieldCheck,
    title: 'Informações confiáveis',
    description: 'Nossos robôs obtém as informações direto da fonte'
  },
  {
    icon: Brain,
    title: 'Inteligência Artificial',
    description: 'Algoritmos e ferramentas avançadas para identificar e analisar as melhores oportunidades'
  },
  {
    icon: Clock,
    title: 'Economia de Tempo',
    description: 'Dezenas de milhares de oportunidades em um só lugar, atualizadas diariamente, filtradas de acordo com seu perfil.'
  }
];

export default function Benefits() {
  return (
    <div id="benefits" className="py-16 bg-[#E1F3E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#19363B] font-semibold tracking-wide uppercase">Benefícios</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#19363B] sm:text-4xl">
            Por que escolher o Arremata.ai?
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#19363B] text-white mb-4">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-[#19363B] mb-2">{benefit.title}</h3>
              <p className="text-[#19363B]/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}