import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-secondary-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="https://storage.googleapis.com/buildship-t31824-us-central1/img/Asset%204_ARREMATAAI.png" 
              alt="Arremata.ai Logo" 
              className="h-8 transition-transform hover:scale-105"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Recursos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#how-it-works" 
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Como Funciona
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#benefits" 
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Benefícios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#pricing" 
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              Preços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="https://app.arremata.ai" 
              className="btn-primary" 
              target="_blank" rel="noopener noreferrer"
            >
              Acessar Plataforma
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-secondary-700 hover:text-primary-600 transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-b border-secondary-200/50 shadow-lg">
            <a 
              href="#features" 
              className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </a>
            <a 
              href="#how-it-works" 
              className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#benefits" 
              className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#pricing" 
              className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </a>
            <div className="pt-2">
              <a 
                href="https://app.arremata.ai" 
                className="btn-primary w-full"
              >
                Acessar Plataforma
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}