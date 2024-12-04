import { Building2 } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Recursos', href: '#features' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Preço', href: '#pricing' },
  ],
  platform: [
    { name: 'Acessar Plataforma', href: 'https://app.arremata.ai' },
    { name: 'Cadastre-se', href: 'https://app.arremata.ai/register' },
    { name: 'Login', href: 'https://app.arremata.ai/login' },
  ],
  legal: [
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Termos de Uso', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#19363B]">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <img 
            src="https://storage.googleapis.com/buildship-t31824-us-central1/img/Asset 3_ARREMATAAI.png" 
            alt="Arremata.ai Logo" 
            className="h-8"
          />
        </div>
        
        <nav className="grid grid-cols-2 gap-8 md:grid-cols-3 mb-8" aria-label="Footer">
          <div>
            <h3 className="text-sm font-semibold text-[#00D866] tracking-wider uppercase">
              Navegação
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-base text-[#E1F3E5] hover:text-[#00D866]">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#00D866] tracking-wider uppercase">
              Plataforma
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.platform.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-base text-[#E1F3E5] hover:text-[#00D866]">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#00D866] tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-base text-[#E1F3E5] hover:text-[#00D866]">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        
        <p className="mt-8 text-center text-base text-[#E1F3E5]">
          © {new Date().getFullYear()} Arremata.ai. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}