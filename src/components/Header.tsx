import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-[#E1F3E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="https://storage.googleapis.com/buildship-t31824-us-central1/img/Asset%204_ARREMATAAI.png" 
              alt="Arremata.ai Logo" 
              className="h-8"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#19363B] hover:text-[#00D866]">Recursos</a>
            <a href="#how-it-works" className="text-[#19363B] hover:text-[#00D866]">Como Funciona</a>
            <a href="#benefits" className="text-[#19363B] hover:text-[#00D866]">Benefícios</a>
            <a href="#pricing" className="text-[#19363B] hover:text-[#00D866]">Preço</a>
            <a href="https://app.arremata.ai" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#19363B] hover:bg-[#00C055]">
              Acessar Plataforma
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#19363B]">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-[#E1F3E5]">
            <a href="#features" className="block px-3 py-2 text-[#19363B] hover:text-[#00D866]">Recursos</a>
            <a href="#how-it-works" className="block px-3 py-2 text-[#19363B] hover:text-[#00D866]">Como Funciona</a>
            <a href="#benefits" className="block px-3 py-2 text-[#19363B] hover:text-[#00D866]">Benefícios</a>
            <a href="#pricing" className="block px-3 py-2 text-[#19363B] hover:text-[#00D866]">Preço</a>
            <a href="https://app.arremata.ai" className="block px-3 py-2 text-white bg-[#00D866] hover:bg-[#00C055] rounded-md">
              Acessar Plataforma
            </a>
          </div>
        </div>
      )}
    </header>
  );
}