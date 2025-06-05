import { TrendingUp, ShieldCheck, Brain, Clock, Star, Users, Award, Zap } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Descontos Extraordinários',
    description: 'Descontos de até 94% em relação ao valor de mercado dos imóveis, oportunidades únicas no mercado.',
    stat: '94%',
    statLabel: 'Desconto máximo',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: ShieldCheck,
    title: 'Informações Confiáveis',
    description: 'Nossos robôs obtêm as informações direto da fonte oficial, garantindo precisão e confiabilidade.',
    stat: '100%',
    statLabel: 'Dados verificados',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Brain,
    title: 'Inteligência Artificial',
    description: 'Algoritmos e ferramentas avançadas para identificar e analisar as melhores oportunidades automaticamente.',
    stat: '24/7',
    statLabel: 'Análise contínua',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Clock,
    title: 'Economia de Tempo',
    description: 'Milhares de oportunidades em um só lugar, atualizadas diariamente e filtradas de acordo com seu perfil.',
    stat: '30k+',
    statLabel: 'Imóveis analisados',
    color: 'from-orange-500 to-orange-600'
  }
];

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Investidor Imobiliário',
    content: 'Consegui encontrar um apartamento com 70% de desconto. A plataforma é incrível!',
    rating: 5
  },
  {
    name: 'Ana Santos',
    role: 'Empresária',
    content: 'A IA da plataforma me ajudou a identificar oportunidades que eu nunca teria encontrado sozinha.',
    rating: 5
  },
  {
    name: 'Roberto Lima',
    role: 'Corretor',
    content: 'Ferramenta essencial para quem trabalha com leilões. Economiza muito tempo!',
    rating: 5
  }
];

export default function Benefits() {
  return (
    <div id="benefits" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Vantagens Exclusivas
          </div>
          
          <h2 className="text-4xl font-bold text-secondary-900 sm:text-5xl mb-6">
            Por que escolher o 
            <span className="text-gradient"> Arremata.ai?</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl text-secondary-600 leading-relaxed">
            Descubra as vantagens que fazem da nossa plataforma a escolha preferida de investidores e profissionais do mercado imobiliário.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="card p-8 text-center group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8" />
              </div>
              
              {/* Stat */}
              <div className="mb-4">
                <div className="text-3xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">
                  {benefit.stat}
                </div>
                <div className="text-sm text-secondary-500 font-medium">
                  {benefit.statLabel}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-200">
                {benefit.title}
              </h3>
              
              <p className="text-secondary-600 leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Hover effect */}
              <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 group-hover:w-full transition-all duration-500 mx-auto"></div>
            </div>
          ))}
        </div>
        
        {/* Testimonials Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Depoimentos
            </div>
            
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              O que nossos usuários dizem
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="card p-6 animate-slide-up"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-secondary-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">{testimonial.name}</div>
                    <div className="text-sm text-secondary-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            <Zap className="w-5 h-5" />
            <span>Comece a encontrar oportunidades hoje mesmo!</span>
          </div>
        </div>
      </div>
    </div>
  );
}