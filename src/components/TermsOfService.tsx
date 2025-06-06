export default function TermsOfService() {
  return (
    <div className="prose prose-secondary max-w-none">
      <div className="space-y-6 text-secondary-700">
        <div>
          <p className="text-sm text-secondary-500 mb-4">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>
          
          <p className="mb-4">
            Bem-vindo à ArremataAI. Estes Termos de Uso regem o uso de nossa plataforma 
            e serviços. Ao acessar ou usar nossos serviços, você concorda em cumprir 
            estes termos.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-3">
            1. Definições
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Plataforma:</strong> O sistema ArremataAI e todos os seus recursos</li>
            <li><strong>Usuário:</strong> Qualquer pessoa que acesse ou use nossos serviços</li>
            <li><strong>Serviços:</strong> Todas as funcionalidades oferecidas pela ArremataAI</li>
            <li><strong>Conteúdo:</strong> Informações, dados e materiais disponibilizados</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-3">
            2. Aceitação dos Termos
          </h4>
          <p className="mb-3">
            Ao usar nossa plataforma, você declara que:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Tem pelo menos 18 anos de idade</li>
            <li>Possui capacidade legal para celebrar contratos</li>
            <li>Concorda em cumprir todos os termos e condições</li>
            <li>Fornecerá informações verdadeiras e atualizadas</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-3">
            3. Descrição dos Serviços
          </h4>
          <p className="mb-3">
            A ArremataAI oferece:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Análise de dados de leilões imobiliários</li>
            <li>Ferramentas de busca e filtros avançados</li>
            <li>Assistente de IA para garimpo de oportunidades</li>
            <li>Alertas personalizados em tempo real</li>
            <li>Relatórios e análises de mercado</li>
            <li>Extração de dados de documentos</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-3">
            4. Conta do Usuário
          </h4>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium text-secondary-800">4.1 Criação de Conta</h5>
              <p>
                Para acessar os recursos da plataforma, mesmo no plano gratuito, você deve criar uma conta fornecendo 
                todas as informações do formulário de cadastro de forma precisa e completa.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium text-secondary-800">4.2 Responsabilidade da Conta</h5>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Você é responsável por manter a confidencialidade de sua conta</li>
                <li>Deve notificar imediatamente sobre uso não autorizado</li>
                <li>É responsável por todas as atividades em sua conta</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-3">
            5. Uso Aceitável
          </h4>
          <p className="mb-3">
            Você concorda em NÃO:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Usar a plataforma para atividades ilegais ou não autorizadas</li>
            <li>Interferir no funcionamento da plataforma</li>
            <li>Tentar acessar dados ou sistemas não autorizados</li>
            <li>Reproduzir, distribuir ou modificar nosso conteúdo sem autorização</li>
            <li>Usar bots ou scripts automatizados sem permissão</li>
            <li>Violar direitos de propriedade intelectual</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-3">
            6. Planos e Pagamentos
          </h4>
          <div className="space-y-3">
            <div>
              <h5 className="font-medium text-secondary-800">6.1 Planos de Assinatura</h5>
              <p>
                Oferecemos diferentes planos de assinatura com recursos variados. 
                Os preços e recursos estão descritos em nossa página de preços.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium text-secondary-800">6.2 Pagamentos</h5>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Pagamentos são processados através de provedores terceirizados seguros</li>
                <li>Assinaturas são renovadas automaticamente</li>
                <li>Preços podem ser alterados com aviso prévio de 30 dias</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-secondary-800">6.3 Cancelamento</h5>
              <p>
                Você pode cancelar sua assinatura a qualquer momento. O acesso aos 
                recursos pagos continuará até o final do período de cobrança atual.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-3">
            7. Propriedade Intelectual
          </h4>
          <p className="mb-3">
            Todos os direitos de propriedade intelectual da plataforma pertencem à 
            ArremataAI ou seus licenciadores. Isso inclui:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Software e código-fonte</li>
            <li>Design e interface</li>
            <li>Algoritmos e metodologias</li>
            <li>Marcas e logotipos</li>
            <li>Conteúdo e documentação</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-3">
            8. Limitação de Responsabilidade
          </h4>
          <p className="mb-3">
            A ArremataAI fornece a plataforma "como está" e não garante:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Disponibilidade ininterrupta dos serviços</li>
            <li>Precisão absoluta das informações</li>
            <li>Adequação para fins específicos</li>
            <li>Ausência de erros ou falhas</li>
          </ul>
          <p className="mb-3">
            A plataforma ArremataAI não se responsabiliza por quaisquer danos, perdas ou prejuízos decorrentes do uso da plataforma, incluindo perdas associadas a qualquer negócio imobiliário realizado pelo usuário cuja informação tenha sido obtida através da plataforma.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-3">
            9. Indenização
          </h4>
          <p>
            Você concorda em indenizar e isentar a ArremataAI de qualquer reclamação, 
            dano ou despesa decorrente do seu uso da plataforma ou violação destes termos.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-3">
            10. Modificações dos Termos
          </h4>
          <p>
            Reservamos o direito de modificar estes termos a qualquer momento. 
            Alterações significativas serão comunicadas com antecedência de 30 dias.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-3">
            11. Rescisão
          </h4>
          <p className="mb-3">
            Podemos suspender ou encerrar sua conta se:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Você violar estes termos</li>
            <li>Houver atividade suspeita ou fraudulenta</li>
            <li>Por razões legais ou regulamentares</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-3">
            12. Lei Aplicável
          </h4>
          <p>
            Estes termos são regidos pelas leis brasileiras. Disputas serão resolvidas 
            nos tribunais competentes de São Paulo, SP.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-3">
            13. Contato
          </h4>
          <p className="mb-3">
            Para dúvidas sobre estes termos, entre em contato:
          </p>
          <ul className="list-none space-y-1">
          <li><strong>E-mail:</strong> contato@arremata.ai</li>
            <li><strong>Telefone:</strong> (21) 99856-8900</li>
            <li><strong>Endereço:</strong> Al. Rio Negro, 1030 - Barueri, SP</li>
          </ul>
        </div>

        <div className="pt-4 border-t border-secondary-200">
          <p className="text-sm text-secondary-500">
            Ao continuar usando nossa plataforma, você confirma que leu, entendeu e 
            concorda com estes Termos de Uso.
          </p>
        </div>
      </div>
    </div>
  );
}