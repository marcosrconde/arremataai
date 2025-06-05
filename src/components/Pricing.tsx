import { Check, Star, Zap, Crown, ArrowRight, Gift } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Básico',
    price: 'Grátis',
    originalPrice: null,
    description: 'Por tempo limitado. Para começar a explorar a fase Beta da plataforma',
    features: [
      'Acesso a todos os imóveis da Caixa Econômica',
      'Filtros avançados de busca e Assistente de garimpo (IA) - limitado a 3 buscas/dia',
      'Suporte por email',
      'Atualizações diárias'
    ],
    popular: false,
    color: 'from-blue-500 to-blue-600',
    icon: Star
  },
  {
    name: 'GOLD',
    monthlyPrice: 'R$ 49,90',
    annualPrice: 'R$ 34,90',
    monthlyOriginalPrice: 'R$ 69,90',
    annualOriginalPrice: 'R$ 838,80',
    description: 'Para investidores sérios que querem maximizar suas oportunidades',
    features: [
      'Tudo do plano Básico',
      'Acesso a todos os imóveis da base',
      'Crie sua carteira de imóveis em análise',
      'Checklist profissional disponível na carteira de imóveis',
      'Salve seus filtros favoritos e receba alertas personalizados',
      'Exportação de listas de imóveis para Excel',
      'Todas as ferramentas de análise com IA disponíveis',
      'Suporte prioritário via WhatsApp'
    ],
    annualBonusFeatures: [
      'Curso completo de análise e arrematação de imóveis de leilão extrajudicial',
    ],
    popular: true,
    color: 'from-primary-500 to-primary-600',
    icon: Crown,
    }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div id="pricing" className="py-20 bg-gradient-to-br from-white to-secondary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <Gift className="w-4 h-4 mr-2" />
            Oferta Especial de Lançamento
          </div>
          
          <h2 className="text-4xl font-bold text-secondary-900 sm:text-5xl mb-6">
            Escolha o plano 
            <span className="text-gradient"> ideal para você</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl text-secondary-600 leading-relaxed">
            Comece gratuitamente e evolua conforme suas necessidades. Todos os planos incluem nossa tecnologia de IA avançada.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:max-w-5xl lg:mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name} 
              className={`relative card overflow-hidden animate-slide-up ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 text-sm font-medium">
                  Mais Popular
                </div>
              )}
              
             
              <div className="p-8">
                {/* Plan header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white mr-4`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900">{plan.name}</h3>
                    {plan.popular && (
                      <div className="flex items-center text-primary-600 text-sm font-medium">
                        <Zap className="w-4 h-4 mr-1" />
                        Recomendado
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Billing Toggle - Only for GOLD plan */}
                {plan.name === 'GOLD' && (
                  <div className="mb-6 flex items-center justify-center">
                    <div className="bg-secondary-50 rounded-lg p-1 border border-secondary-200">
                      <div className="flex items-center">
                        <button
                          onClick={() => setIsAnnual(false)}
                          className={`px-4 py-2 rounded-md font-medium transition-all duration-200 text-sm ${
                            !isAnnual
                              ? 'bg-white text-primary-600 shadow-sm border border-primary-200'
                              : 'text-secondary-600 hover:text-secondary-900'
                          }`}
                        >
                          Mensal
                        </button>
                        <button
                          onClick={() => setIsAnnual(true)}
                          className={`px-4 py-2 rounded-md font-medium transition-all duration-200 text-sm relative ${
                            isAnnual
                              ? 'bg-white text-primary-600 shadow-sm border border-primary-200'
                              : 'text-secondary-600 hover:text-secondary-900'
                          }`}
                        >
                          Anual
                          <span className="absolute -top-5 -right-1 bg-accent-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                            20% OFF
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                  <span className="text-secondary-400">{isAnnual && plan.name === 'GOLD' ? 'equivalente a  ' : ''}</span>
                    <span className="text-4xl font-bold text-secondary-900 ml-3">
                      {plan.name === 'GOLD' 
                        ? (isAnnual ? plan.annualPrice : plan.monthlyPrice)
                        : plan.price
                      }
                    </span>
                    {plan.name === 'GOLD' && (
                      <span className="text-secondary-600 ml-1">/mês</span>
                    )}
                  </div>
                  {plan.name === 'GOLD' && (
                    <div className="flex items-center mt-1">
                      <span className="text-secondary-400 line-through text-lg mr-2">
                        {isAnnual ? plan.annualOriginalPrice : plan.monthlyOriginalPrice}
                      </span>
                      <span className="text-accent-600 font-semibold text-sm">
                        Economize {isAnnual ? '50%' : '28%'} na oferta de lançamento
                      </span>
                    </div>
                  )}
                  {plan.name === 'GOLD' && isAnnual && (
                    <div className="mt-2 text-sm text-secondary-600">
                      Cobrado anualmente: R$ 418,80 (aceita parcelamento)
                    </div>
                  )}
                </div>
                
                <p className="text-secondary-600 mb-8 leading-relaxed">{plan.description}</p>
                
                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="h-5 w-5 text-primary-500" />
                      </div>
                      <span className="ml-3 text-secondary-700">{feature}</span>
                    </li>
                  ))}
                  
                  {/* Annual bonus features for GOLD plan */}
                  {plan.name === 'GOLD' && isAnnual && plan.annualBonusFeatures && (
                    <>
                      <li className="border-t border-secondary-200 pt-4 mt-4">
                        <div className="text-sm font-semibold text-primary-600 mb-3 flex items-center">
                          <Gift className="w-4 h-4 mr-2" />
                          Bônus do Plano Anual:
                        </div>
                      </li>
                      {plan.annualBonusFeatures.map((feature: string, featureIndex: number) => (
                        <li key={`bonus-${featureIndex}`} className="flex items-start">
                          <div className="flex-shrink-0 mt-0.5">
                            <Check className="h-5 w-5 text-accent-500" />
                          </div>
                          <span className="ml-3 text-secondary-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
                
                {/* CTA Button */}
                <a
                  href={isAnnual ? 'https://app.arremata.ai' : 'https://arremata.ai'}
                  className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                  }`}
                >
                  <span className="flex items-center justify-center">
                    {plan.name === 'Básico' 
                      ? 'Começar Grátis' 
                      : plan.name === 'GOLD' 
                        ? `Assinar ${isAnnual ? 'Anual' : 'Mensal'}`
                        : 'Assinar Agora'
                    }
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </a>
                
                {plan.popular && (
                  <p className="text-center text-sm text-secondary-500 mt-3">
                    {isAnnual ? 'Cobrança anual • ' : ''}Cancele a qualquer momento
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 px-6 py-4 bg-gradient-to-r from-secondary-50 to-primary-50 rounded-xl border border-secondary-200">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white">
              <Check className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-secondary-900">Garantia de 30 dias</div>
              <div className="text-secondary-600 text-sm">Não ficou satisfeito? Devolvemos seu dinheiro</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}