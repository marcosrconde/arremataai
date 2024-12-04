import { Search, Gavel, Key } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Encontre Oportunidades',
    description: 'Use nossa IA para encontrar imóveis com alto potencial de retorno baseado nos seus critérios.'
  },
  {
    icon: Gavel,
    title: 'Faça suas análises',
    description: 'Use ferramentas avançadas para analisar seus imóveis favoritos'
  },
  {
    icon: Key,
    title: 'Arremate com segurança',
    description: 'Vamos te guiar para arrematações seguras e lucrativas'
  }
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#19363B] font-semibold tracking-wide uppercase">Como Funciona</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#19363B] sm:text-4xl">
            Três passos simples para seu imóvel
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-[#E1F3E5] p-6 rounded-lg">
                <div className="absolute -top-4 left-4">
                  <div className="rounded-full bg-[#19363B] p-3">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-medium text-[#19363B]">{step.title}</h3>
                <p className="mt-2 text-base text-[#19363B]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}