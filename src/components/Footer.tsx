import { useState } from 'react';
import { Mail, Phone, ArrowRight, Heart } from './Icons';
import Modal from './Modal';
import TermsOfService from './TermsOfService';
import { LegalItem, NavigationItem, ContactInfo } from '../types';

const navigation = {
  main: [
    { name: 'Recursos', href: '#features' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Preços', href: '#pricing' },
  ] as NavigationItem[],
  platform: [
    { name: 'Acessar Plataforma', href: 'https://app.arremata.ai' },
    { name: 'Cadastre-se', href: 'https://app.arremata.ai/login' },
    { name: 'Login', href: 'https://app.arremata.ai/login' }
  ] as NavigationItem[],
  legal: [
    { name: 'Política de Privacidade', href: '/privacy-policy' },
    { name: 'Termos de Uso', action: 'terms' }
  ] as LegalItem[],
};

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contato@arremata.ai',
    href: 'mailto:contato@arremata.ai'
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '+55 (11) 94509-1241',
    href: 'https://api.whatsapp.com/send?phone=5511945091241&text=Eu%20vim%20atrav%C3%A9s%20do%20arremata.ai.%20Quero%20saber%20mais%20sobre%20a%20assinatura%20do%20plano%20GOLD'
  }
];

export default function Footer() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleLegalClick = (action: string) => {
    if (action === 'terms') {
      setIsTermsModalOpen(true);
    }
  };

  return (
    <footer className="gradient-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img 
                  src="https://storage.googleapis.com/buildship-t31824-us-central1/img/Asset 3_ARREMATAAI.png" 
                  alt="Arremata.ai Logo" 
                  className="h-8 transition-transform hover:scale-105"
                />
              </div>
              
              <p className="text-secondary-300 leading-relaxed mb-6">
                A plataforma mais avançada para encontrar e analisar oportunidades em leilões de imóveis no Brasil.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center text-secondary-300 hover:text-primary-400 transition-colors duration-200 group"
                  >
                    <contact.icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">{contact.value}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Navigation links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-primary-400 tracking-wider uppercase mb-6">
                    Navegação
                  </h3>
                  <ul className="space-y-4">
                    {navigation.main.map((item) => (
                      <li key={item.name}>
                        <a 
                          href={item.href} 
                          className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-primary-400 tracking-wider uppercase mb-6">
                    Plataforma
                  </h3>
                  <ul className="space-y-4">
                    {navigation.platform.map((item) => (
                      <li key={item.name}>
                        <a 
                          href={item.href} 
                          className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-primary-400 tracking-wider uppercase mb-6">
                    Legal
                  </h3>
                  <ul className="space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                          >
                            <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            {item.name}
                          </a>
                        ) : (
                          <button 
                            onClick={() => item.action && handleLegalClick(item.action)}
                            className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center group text-left"
                          >
                            <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            {item.name}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
                    
        {/* Bottom section */}
        <div className="py-8 border-t border-secondary-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-secondary-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Arremata.ai. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center text-secondary-400 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span>no Brasil</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        title="Termos de Uso"
      >
        <TermsOfService />
      </Modal>
    </footer>
  );
}
