import React, { useState } from 'react';
import { Check, Star, Zap, Crown, ArrowRight, Gift, Diamond } from 'lucide-react';

interface Plan {
  name: string;
  price?: string;
  monthlyPrice?: number;
  annualPrice?: number;
  regularAnnualPrice?: number;
  annualInstallmentPrice?: number;
  launchOffer?: boolean;
  comingSoon?: boolean;
  description: string;
  features: string[];
  limitations?: string[];
  popular: boolean;
  color: string;
  icon: any;
  ctaText: string;
  ctaLink: string;
}

const plans: Plan[] = [
  {
    name: 'FREE',
    price: 'Grátis',
    description: 'Para começar a explorar',
    features: [
      'Acesso a todos os imóveis Caixa',
      'Acesso à busca avançada - limite de 10 buscas/dia',
      'Salvar e manter 1 imóvel na carteira de análise com checklist',
      'Salvar 1 filtro preferido (sem alerta por email)',
      'Suporte por email'
    ],
    limitations: [
      'Máximo 10 buscas por dia',
      'Sem recursos de inteligência artificial',
      'Sem alertas automáticos',
      'Sem análise de documentos',
      'Sem exportação para excel',
      'Sem base de conhecimento'
    ],
    popular: false,
    color: 'from-secondary-500 to-secondary-600',
    icon: Zap,
    ctaText: 'Começar Grátis',
    ctaLink: 'https://app.arremata.ai/register'
  },
  {
    name: 'GOLD',
    monthlyPrice: 53,
    annualPrice: 420, // Oferta de lançamento (R$ 35/mês)
    regularAnnualPrice: 640, // Preço regular
    annualInstallmentPrice: 38.50, // 10% mais barato que R$ 42,70/mês
    launchOffer: true,
    description: 'Para investidores sérios',
    features: [
      'Acesso completo a toda a base de imóveis',
      'Salvar imóveis na carteira de análise com checklist - ILIMITADO',
      'Salvar até 10 filtros com Alertas automáticos por email',
      'Calculadora de viabilidade integrada ao checklist- ILIMITADO',
      'Extração de dados da documentos (matrícula e edital) com IA',
      'Exportação de listas de imóveis para Excel',
      'Modelos de documentos pós-arrematação',
      'Acesso à base de conhecimento',
      'Suporte prioritário por email'
    ],
    popular: true,
    color: 'from-primary-500 to-primary-600',
    icon: Star,
    ctaText: 'Começar com GOLD',
    ctaLink: 'https://app.arremata.ai/checkout/gold'
  },
  {
    name: 'DIAMOND',
    monthlyPrice: 147,
    annualPrice: 1400, // Preço regular (sem oferta de lançamento)
    annualInstallmentPrice: 132.30,
    launchOffer: false,
    comingSoon: true, // Novo campo para indicar que está chegando em breve
    description: 'Para investidores profissionais e em escala',
    features: [
      'Tudo do plano GOLD +',
      'filtros com alertas ILIMITADOS',
      'Alertas por WhatsApp',
      'Comunidade premium de investidores',
      'Reunião mensal com especialista (call em grupo 1h para troca de experiências)',
      'Base de conhecimento avançado',
      'Suporte prioritário via whatsapp'
    ],
    popular: false,
    color: 'from-purple-500 to-purple-600', // Corrected color based on popup and other "coming soon" styling
    icon: Diamond,
    ctaText: 'Tenho Interesse',
    ctaLink: '#' // Placeholder link, as it triggers a popup
  }
];

export default function Pricing() {
  // GOLD anual como padrão
  const [isAnnual, setIsAnnual] = useState(true);
  const [showInterestPopup, setShowInterestPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInterestClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowInterestPopup(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Webhook para n8n - SUBSTITUA PELA SUA URL
      const response = await fetch('https://your-n8n-webhook-url.com/webhook/diamond-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          plan: 'DIAMOND',
          source: 'landing-page'
        }),
      });

      if (response.ok) {
        alert('Obrigado pelo seu interesse! Entraremos em contato em breve.');
        setShowInterestPopup(false);
        setFormData({ name: '', email: '', whatsapp: '' });
      } else {
        throw new Error('Erro ao enviar dados');
      }
    } catch (error) {
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="pricing" className="py-24 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold mb-6 animate-pulse">
              <Gift className="w-4 h-4 mr-2" />
              🔥 OFERTA DE LANÇAMENTO - TEMPO LIMITADO
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Escolha o <span className="text-gradient">Plano Ideal</span>
            </h2>
            <p className="text-xl text-secondary-600 mb-12 max-w-3xl mx-auto">
              Comece grátis e evolua conforme suas necessidades. Todos os planos incluem garantia de 30 dias.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <div className="bg-white p-2 rounded-xl shadow-lg border border-secondary-200">
                <div className="flex items-center">
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      !isAnnual
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'text-secondary-600 hover:text-secondary-900'
                    }`}
                  >
                    Mensal
                  </button>
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all relative ${
                      isAnnual
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'text-secondary-600 hover:text-secondary-900'
                    }`}
                  >
                    Anual
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                      -35%
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    plan.popular ? 'ring-4 ring-primary-500 ring-opacity-50 scale-105' : ''
                  } ${plan.comingSoon ? 'opacity-90' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        🏆 MAIS POPULAR
                      </div>
                    </div>
                  )}

                  {plan.comingSoon && (
                    <div className="absolute -top-4 right-4">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                        EM BREVE
                      </div>
                    </div>
                  )}

                  <div className="p-8">
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} mb-4`}>
                        <plan.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-2">{plan.name}</h3>
                      <p className="text-secondary-600">{plan.description}</p>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-6">
                      {plan.name === 'FREE' ? (
                        <div>
                          <span className="text-4xl font-bold text-secondary-900">Grátis</span>
                          <div className="text-secondary-600 mt-1">Para sempre</div>
                        </div>
                      ) : plan.comingSoon ? (
                        <div>
                          <div className="flex items-center justify-center mb-3">
                            <span className="text-sm text-secondary-500 mr-2">R$</span>
                            <span className="text-5xl font-bold text-secondary-900">
                              {plan.monthlyPrice?.toString() || '0'}
                            </span>
                            <span className="text-secondary-600 ml-1">/mês</span>
                          </div>
                          
                          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-bold animate-pulse">
                            🚀 EM BREVE
                          </div>
                          
                          <div className="mt-3 text-sm text-secondary-600">
                            Disponível em Agosto 2025
                          </div>
                        </div>
                      ) : (
                        <div>
                          {isAnnual && plan.launchOffer && (
                            <div className="mb-3">
                              <span className="text-sm text-red-600 line-through">
                                R$ {Math.round((plan.regularAnnualPrice || 0) / 12)}/mês
                              </span>
                            </div>
                          )}
                          
                          <div className="flex items-center justify-center mb-2">
                            <span className="text-sm text-secondary-500 mr-2">R$</span>
                            <span className="text-5xl font-bold text-secondary-900">
                              {isAnnual && plan.annualPrice
                                ? Math.round(plan.annualPrice / 12).toString()
                                : plan.monthlyPrice?.toString() || '0'
                              }
                            </span>
                            <span className="text-secondary-600 ml-1">/mês</span>
                          </div>
                          
                          {isAnnual && plan.launchOffer && (
                            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                              🔥 OFERTA DE LANÇAMENTO
                            </div>
                          )}
                          
                          <div className="text-sm text-secondary-600">
                            {isAnnual 
                              ? `Cobrado anualmente (R$ ${plan.annualPrice})`
                              : 'Cobrado mensalmente'
                            }
                          </div>
                          
                          {isAnnual && plan.launchOffer && (
                            <div className="text-sm text-green-600 font-semibold mt-1">
                              Economize R$ {(plan.regularAnnualPrice || 0) - (plan.annualPrice || 0)} por ano!
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-secondary-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {plan.limitations && (
                        <div className="mt-4 pt-4 border-t border-secondary-200">
                          <p className="text-sm text-secondary-500 mb-2">Limitações:</p>
                          <ul className="space-y-1">
                            {plan.limitations.map((limitation, limitIndex) => (
                              <li key={limitIndex} className="text-sm text-secondary-500 flex items-start">
                                <span className="mr-2">•</span>
                                {limitation}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    {plan.comingSoon ? (
                      <button
                        onClick={handleInterestClick}
                        className="block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg hover:shadow-xl"
                      >
                        <span className="flex items-center justify-center">
                          {plan.ctaText}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                      </button>
                    ) : (
                      <a
                        href={plan.ctaLink}
                        className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl'
                            : plan.name === 'FREE'
                              ? 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 border-2 border-secondary-200'
                              : 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg hover:shadow-xl'
                        }`}
                      >
                        <span className="flex items-center justify-center">
                          {plan.name === 'FREE' 
                            ? 'Começar Grátis'
                            : isAnnual && plan.launchOffer
                              ? `🔥 Garantir Oferta ${plan.name}`
                              : plan.ctaText
                          }
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                      </a>
                    )}
                    
                    {plan.name !== 'FREE' && (
                      <p className="text-center text-xs text-secondary-500 mt-3">
                        {plan.comingSoon 
                          ? '📧 Seja notificado quando estiver disponível'
                          : isAnnual && plan.launchOffer 
                            ? '⏰ Oferta por tempo limitado • Garantia de 30 dias'
                            : 'Garantia de 30 dias • Cancele a qualquer momento'
                        }
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Launch Offer Highlight */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white mb-16 animate-fade-in">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">🔥 Oferta Especial de Lançamento</h3>
                <p className="text-xl text-red-100 mb-6 leading-relaxed">
                  Por tempo limitado, você pode garantir o <strong>Plano GOLD por apenas R$ 35/mês</strong> (pagamento anual). 
                  Uma economia de <strong>R$ 220 por ano!</strong> O Plano DIAMOND estará disponível em breve.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-red-200">
                    <div className="text-2xl font-bold text-primary-600 mb-2">GOLD - R$ 35/mês</div>
                    <div className="text-sm text-secondary-600 line-through mb-1">Preço regular: R$ 53/mês</div>
                    <div className="text-lg font-semibold text-green-600">Economize R$ 220/ano</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600 mb-2">DIAMOND - Em Breve</div>
                    <div className="text-sm text-secondary-600 mb-1">Disponível em Janeiro 2025</div>
                    <div className="text-lg font-semibold text-purple-600">Cadastre seu interesse</div>
                  </div>
                </div>
                <div className="text-lg text-red-100">
                  ⏰ Esta oferta é válida apenas durante o período de lançamento
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">Garantia de 30 Dias</h3>
                <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                  Experimente qualquer plano pago por 30 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.
                </p>
              </div>
            </div>

            {/* Value propositions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">Setup Instantâneo</h4>
                <p className="text-sm text-secondary-600">Comece a usar em menos de 2 minutos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">Dados Atualizados</h4>
                <p className="text-sm text-secondary-600">Informações em tempo real de todos os leilões</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">Suporte Premium</h4>
                <p className="text-sm text-secondary-600">Atendimento especializado para maximizar seus resultados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Popup Modal */}
      {showInterestPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                    <Diamond className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900">Plano DIAMOND</h3>
                    <p className="text-sm text-secondary-600">Disponível em agosto de 2025</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowInterestPopup(false)}
                  className="text-secondary-400 hover:text-secondary-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-secondary-700 mb-4">
                  Seja um dos primeiros a ter acesso ao nosso plano mais completo! Deixe seus dados e te notificaremos assim que estiver disponível.
                </p>
                
                <div className="bg-purple-50 p-4 rounded-xl mb-4">
                  <h4 className="font-semibold text-purple-900 mb-2">O que você terá no DIAMOND:</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Tudo do plano GOLD +</li>
                    <li>• Filtros com alertas ILIMITADOS</li>
                    <li>• Alertas por WhatsApp</li>
                    <li>• Comunidade premium de investidores</li>
                    <li>• Reunião mensal com especialista (call em grupo 1h)</li>
                    <li>• Base de conhecimento avançado</li>
                    <li>• Suporte prioritário via WhatsApp</li>
                  </ul>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowInterestPopup(false)}
                    className="flex-1 px-4 py-3 border border-secondary-300 text-secondary-700 rounded-lg hover:bg-secondary-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Tenho Interesse'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
