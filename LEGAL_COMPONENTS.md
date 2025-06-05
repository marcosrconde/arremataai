# Componentes Legais - ArremataAI

Este documento descreve os componentes criados para exibir a Política de Privacidade e Termos de Uso da plataforma ArremataAI.

## 📁 Arquivos Criados

### 1. `src/components/Modal.tsx`
Componente modal reutilizável para exibir conteúdo em overlay.

**Funcionalidades:**
- Overlay com fundo escuro
- Botão de fechar (X)
- Scroll interno para conteúdo longo
- Responsivo
- Animações suaves

### 2. `src/components/PrivacyPolicy.tsx`
Conteúdo completo da Política de Privacidade.

**Seções incluídas:**
- Informações coletadas
- Como utilizamos os dados
- Compartilhamento de informações
- Segurança dos dados
- Direitos do usuário (LGPD)
- Cookies e tecnologias similares
- Retenção de dados
- Informações de contato

### 3. `src/components/TermsOfService.tsx`
Conteúdo completo dos Termos de Uso.

**Seções incluídas:**
- Definições
- Aceitação dos termos
- Descrição dos serviços
- Conta do usuário
- Uso aceitável
- Planos e pagamentos
- Propriedade intelectual
- Limitação de responsabilidade
- Indenização
- Modificações dos termos
- Rescisão
- Lei aplicável
- Contato

### 4. `src/types/index.ts`
Definições de tipos TypeScript para melhor tipagem.

### 5. `src/components/Footer.tsx` (Atualizado)
Footer atualizado com funcionalidade de modais.

## 🚀 Como Usar

Os modais são abertos automaticamente quando o usuário clica nos links "Política de Privacidade" ou "Termos de Uso" no footer da página.

### Exemplo de uso:
```tsx
// Os modais são controlados por estado no Footer
const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

// Função para abrir os modais
const handleLegalClick = (action: string) => {
  if (action === 'privacy') {
    setIsPrivacyModalOpen(true);
  } else if (action === 'terms') {
    setIsTermsModalOpen(true);
  }
};
```

## 🎨 Estilo e Design

### Modal
- **Fundo**: Overlay escuro com opacidade
- **Container**: Fundo branco com bordas arredondadas
- **Tamanho**: Máximo 4xl (responsivo)
- **Scroll**: Interno quando o conteúdo é longo
- **Animações**: Transições suaves

### Conteúdo Legal
- **Tipografia**: Hierarquia clara com títulos e subtítulos
- **Espaçamento**: Adequado para leitura
- **Listas**: Organizadas com bullets
- **Cores**: Seguem o design system da aplicação

## 📱 Responsividade

Todos os componentes são totalmente responsivos:
- **Desktop**: Modal centralizado com largura máxima
- **Tablet**: Ajuste automático de largura
- **Mobile**: Ocupação total da tela com padding adequado

## ♿ Acessibilidade

- **Keyboard Navigation**: Suporte completo
- **Focus Management**: Foco adequado nos elementos
- **Screen Readers**: Estrutura semântica correta
- **Contraste**: Cores com contraste adequado

## 🔧 Manutenção

### Para atualizar o conteúdo legal:
1. Edite os arquivos `PrivacyPolicy.tsx` ou `TermsOfService.tsx`
2. Atualize a data no topo do documento
3. Mantenha a estrutura HTML semântica

### Para modificar o modal:
1. Edite o arquivo `Modal.tsx`
2. Mantenha a interface `ModalProps`
3. Teste a responsividade

## 📋 Conformidade Legal

### LGPD (Lei Geral de Proteção de Dados)
- ✅ Direitos do titular dos dados
- ✅ Base legal para tratamento
- ✅ Informações de contato do DPO
- ✅ Procedimentos para exercício de direitos

### Termos de Uso
- ✅ Definições claras
- ✅ Responsabilidades do usuário
- ✅ Limitações de responsabilidade
- ✅ Procedimentos de rescisão
- ✅ Lei aplicável (Brasil)

## 📞 Contato Legal

Para questões relacionadas aos documentos legais:
- **Email**: legal@arremata.ai
- **Privacidade**: privacidade@arremata.ai
- **Telefone**: (11) 99999-9999