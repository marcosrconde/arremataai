import { Search, TrendingUp, Bell, Sparkles, FileSpreadsheet, File, CalculatorIcon } from 'lucide-react';

const features = [
  {
    name: 'Busca Inteligente com IA',
    description: 'Encontre imóveis em leilão com base em seus critérios específicos usando algoritmos avançados.',
    icon: Search,
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Análise de Oportunidades',
    description: 'Ferramentas completas para gerenciamento e análise da sua carteira de imóveis com checklist detalhado',
    icon: TrendingUp,
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Extração de Dados PDF',
    description: 'Use nossa IA para extrair automaticamente informações úteis de qualquer matrícula em PDF.',
    icon: File,
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Alertas Personalizados',
    description: 'Receba notificações inteligentes sobre novas oportunidades que correspondam perfeitamente aos seus interesses.',
    icon: Bell,
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Análise de viabilidade financeira',
    description: 'Obtenha análises de mercado com IA e use nossa calculadora online para calcular seus ganhos estimados',
    icon: CalculatorIcon,
    color: 'from-pink-500 to-pink-600'
  },
  {
    name: 'Exportação',
    description: 'Baixe listas completas de imóveis em formato Excel para análise offline. Organize e compare oportunidades com facilidade.',
    icon: FileSpreadsheet,
    color: 'from-green-500 to-green-600'
  }
];

export default function Features() {
  return (
    <div id="features" className="py-20 bg-gradient-to-br from-secondary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Recursos Avançados
          </div>
          
          <h2 className="text-4xl font-bold text-secondary-900 sm:text-5xl mb-6">
            Encontre seu 
            <span className="text-gradient"> imóvel ideal</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl text-secondary-600 leading-relaxed">
            Nossa plataforma oferece todas as ferramentas necessárias para você encontrar e aproveitar as melhores oportunidades do mercado imobiliário.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className="card p-8 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7" />
              </div>
              
              <h3 className="text-xl font-semibold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-200">
                {feature.name}
              </h3>
              
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect line */}
              <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-green-500 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 border-2 border-white flex items-center justify-center text-white text-sm font-bold">
                +
              </div>
            </div>
            <div className="text-left">
              <p className="text-secondary-900 font-semibold">Mais de 500 usuários</p>
              <p className="text-secondary-600 text-sm">já encontraram oportunidades incríveis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}