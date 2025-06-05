import { Search, Gavel, Key, ArrowRight, CheckCircle, Target } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Encontre Oportunidades',
    description: 'Use nossa IA para encontrar imóveis com alto potencial de retorno baseado nos seus critérios específicos.',
    features: ['Busca inteligente', 'Filtros avançados', 'Alertas automáticos'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Target,
    title: 'Analise com Precisão',
    description: 'Use ferramentas avançadas para analisar seus imóveis favoritos com um checklist profissional.',
    features: ['Análise de mercado', 'Análise de matrícula', 'localização', 'Calculadora de viabilidade', 'Aspectos jurídicos'],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Key,
    title: 'Arremate com Segurança',
    description: 'Vamos te guiar para arrematações seguras. Disponilizamos um curso de arrematação junto com a assinatura GOLD + suporte.',
    features: ['informações 100% confiáveis', '0 leiloeiro falso na nossa base', '0 leilão expirado', 'Suporte especializado', 'Estratégias de lance', 'Checklist completo'],
    color: 'from-purple-500 to-purple-600'
  }
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50/50 to-primary-50/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-6">
            <Gavel className="w-4 h-4 mr-2" />
            Processo Simplificado
          </div>
          
          <h2 className="text-4xl font-bold text-secondary-900 sm:text-5xl mb-6">
            Três passos simples para 
            <span className="text-gradient"> seu imóvel ideal</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl text-secondary-600 leading-relaxed">
            Nossa metodologia comprovada torna o processo de encontrar e arrematar imóveis mais simples e seguro.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative group animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Connection line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-secondary-300 to-transparent z-10">
                    <ArrowRight className="absolute -right-2 -top-2 w-5 h-5 text-secondary-400" />
                  </div>
                )}
                
                <div className="card p-8 h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-secondary-600">
                        <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover effect */}
                  <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-50 to-primary-100 rounded-full">
            <span className="text-primary-700 font-medium">Pronto para começar?</span>
            <a href="https://app.arremata.ai" className="text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200" target="_blank">
              Acesse a plataforma →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}