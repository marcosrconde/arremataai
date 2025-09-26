export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose prose-secondary max-w-none">
        <div className="space-y-6 text-secondary-700">
          <div>
            <p className="text-sm text-secondary-500 mb-4">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>
            
            <p className="mb-4">
              A ArremataAI está comprometida em proteger sua privacidade. Esta Política de Privacidade 
              explica como coletamos, usamos, divulgamos e protegemos suas informações quando você 
              utiliza nossa plataforma.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-3">
              1. Informações que Coletamos
            </h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-secondary-800">1.1 Informações Pessoais</h5>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Nome completo e informações de contato</li>
                  <li>Endereço de e-mail e número de telefone</li>
                  <li>Informações de pagamento e faturamento</li>
                  <li>Documentos de identificação quando necessário</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-secondary-800">1.2 Informações de Uso</h5>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Dados de navegação e interação com a plataforma</li>
                  <li>Preferências de busca e filtros utilizados</li>
                  <li>Histórico de pesquisas e imóveis visualizados</li>
                  <li>Logs de sistema e informações técnicas</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-3">
              2. Como Utilizamos suas Informações
            </h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Fornecer e melhorar nossos serviços de análise de leilões</li>
              <li>Personalizar sua experiência na plataforma</li>
              <li>Enviar alertas e notificações relevantes</li>
              <li>Processar pagamentos e gerenciar sua conta</li>
              <li>Comunicar atualizações e novidades do serviço</li>
              <li>Cumprir obrigações legais e regulamentares</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-3">
              3. Compartilhamento de Informações
            </h4>
            <p className="mb-3">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
              exceto nas seguintes situações:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Com seu consentimento explícito</li>
              <li>Para cumprir obrigações legais</li>
              <li>Com prestadores de serviços que nos auxiliam na operação da plataforma</li>
              <li>Em caso de fusão, aquisição ou venda de ativos</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-3">
              4. Segurança dos Dados
            </h4>
            <p className="mb-3">
              Implementamos medidas de segurança técnicas e organizacionais para proteger 
              suas informações:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Criptografia de dados em trânsito e em repouso</li>
              <li>Controles de acesso rigorosos</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Auditorias regulares de segurança</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-3">
              5. Seus Direitos
            </h4>
            <p className="mb-3">
              De acordo com a LGPD, você tem os seguintes direitos:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Acesso aos seus dados pessoais</li>
              <li>Correção de dados incompletos ou incorretos</li>
              <li>Exclusão de dados desnecessários ou tratados em desconformidade</li>
              <li>Portabilidade dos dados</li>
              <li>Revogação do consentimento</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-3">
              6. Cookies e Tecnologias Similares
            </h4>
            <p className="mb-3">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência, 
              incluindo cookies essenciais, de desempenho e de personalização.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-3">
              7. Retenção de Dados
            </h4>
            <p className="mb-3">
              Mantemos suas informações pelo tempo necessário para cumprir as finalidades 
              descritas nesta política ou conforme exigido por lei.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-3">
              8. Contato
            </h4>
            <p className="mb-3">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
              entre em contato conosco:
            </p>
            <ul className="list-none space-y-1">
              <li><strong>E-mail:</strong> contato@arremata.ai</li>
              <li><strong>Telefone:</strong> (21) 99856-8900</li>
              <li><strong>Endereço:</strong> Al. Rio Negro, 1030 - Barueri, SP</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-secondary-200">
            <p className="text-sm text-secondary-500">
              Esta política pode ser atualizada periodicamente. Recomendamos que você 
              revise regularmente para se manter informado sobre como protegemos suas informações.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
