import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: 'Grátis',
    description: 'Por tempo limitado. Para começar a explorar a fase Beta da plataforma',
    features: [
      'Acesso a todos os imóveis da Caixa Econômica',
      'Filtros avançados de busca',
      'Assistente de garimpo (IA)',
      'Extrator de dados relevantes de matrículas em PDF'
    ]
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#19363B] font-semibold tracking-wide uppercase">Preços</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#19363B] sm:text-4xl">
            Escolha o plano ideal para você
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#E1F3E5]">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-[#19363B]">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-[#19363B]">{plan.price}</span>
                </div>
                <p className="mt-2 text-[#19363B]/80">{plan.description}</p>
              </div>
              <div className="px-6 pb-8">
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-[#00D866]" />
                      </div>
                      <p className="ml-3 text-[#19363B]/80">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="https://app.arremata.ai"
                    className="block w-full bg-[#19363B] hover:bg-[#19363B]/90 text-white font-medium py-3 px-4 rounded-md text-center"
                  >
                    Começar agora
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}