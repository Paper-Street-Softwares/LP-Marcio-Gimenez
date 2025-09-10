import React from "react";
import SectionArea from "../components/sectionElements/SectionArea";
import SectionWrapper from "../components/sectionElements/SectionWrapper";
import MotionDivDownToUp from "../components/animation/MotionDivDownToUp";

export default function Privacy() {
  return (
    <SectionArea id="Privacy" className={`transition-colors duration-1000`}>
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <div className="desktop1:w-full ">
          <div className="flex flex-col gap-8 desktop1:gap-0 desktop1:flex-row-reverse justify-between">
            <MotionDivDownToUp className="text-start desktop1:w-[50%] m-auto ">
              <h1 className="text-title5">Política de privacidade:</h1>
              <br />
              <p className="text-black/60">
                <strong className="text-black">
                  Em vigor a partir de [data da publicação no site]
                </strong>
                <br />
                <br />
                Marcio Gimenez Advocacia (“Escritório”) tem o compromisso de
                respeitar a privacidade dos Usuários e adota medidas para que o
                tratamento de Dados Pessoais ocorra em conformidade com a
                legislação aplicável, em especial a Lei Geral de Proteção de
                Dados – LGPD (Lei nº 13.709/2018).
                <br />
                <br />
                O objetivo desta Política é informar de maneira clara e
                transparente quais Dados Pessoais são coletados, para quais
                finalidades são utilizados, com quem podem ser compartilhados e
                quais são os direitos dos titulares.
                <br />
                <br />
                <strong className="text-black">
                  <p className="mb-1">1. Quais dados pessoais coletamos</p>
                </strong>
                Podemos coletar ou receber os seguintes Dados Pessoais:
                <br />
                <br />
                - Nome completo;
                <br />
                - Endereço de e-mail e telefone;
                <br />
                - Informações fornecidas voluntariamente pelo Usuário em
                formulários de contato;
                <br />
                - Endereço de IP, data e hora de acesso ao site;
                <br />
                - Outras informações fornecidas de forma espontânea pelo Usuário
                ao utilizar os canais de atendimento.
                <br />
                <br />
                <strong className="text-black">
                  <p className="mb-1">
                    {" "}
                    2. Para quais finalidades utilizamos os dados
                  </p>
                </strong>
                Os Dados Pessoais poderão ser utilizados para:
                <br />
                <br />
                - Responder solicitações enviadas pelos Usuários;
                <br />
                - Fornecer informações sobre serviços jurídicos e conteúdos
                institucionais;
                <br />
                - Enviar comunicações, newsletters ou convites para eventos,
                quando autorizado;
                <br />
                - Cumprir obrigações legais ou regulatórias.
                <br />
                Não utilizamos os Dados Pessoais para finalidades diversas das
                aqui descritas.
                <br />
                <br />
                <strong className="text-black">
                  <p className="mb-1">3. Compartilhamento dos dados</p>
                </strong>
                Os Dados Pessoais poderão ser compartilhados:
                <br />
                <br />
                - Com prestadores de serviços de tecnologia (hospedagem de site,
                e-mail, sistemas de contato);
                <br />
                - Com autoridades públicas, quando necessário para cumprimento
                de obrigações legais;
                <br />
                - Com parceiros contratados para apoio em eventos ou atividades
                institucionais.
                <br />
                Não realizamos a comercialização de Dados Pessoais.
                <br />
                <br />
                <strong className="text-black">
                  <p className="mb-1">4. Prazo de retenção</p>
                </strong>
                Os Dados Pessoais serão mantidos somente pelo período necessário
                para atender às finalidades descritas nesta Política, para
                cumprimento de obrigações legais ou para exercício regular de
                direitos.
                <br />
                <br />
                <strong className="text-black">
                  <p className="mb-1">5. Direitos do titular</p>
                </strong>
                Nos termos da LGPD, o Usuário tem direito a:
                <br />
                <br />
                - Confirmar se realizamos o tratamento de seus dados;
                <br />
                - Acessar seus Dados Pessoais;
                <br />
                - Corrigir dados incompletos, inexatos ou desatualizados;
                <br />
                - Solicitar a anonimização, bloqueio ou eliminação de dados
                desnecessários;
                <br />
                - Solicitar portabilidade dos dados, quando regulamentada;
                <br />
                - Revogar consentimentos concedidos;
                <br />
                - Opor-se a tratamentos realizados em desconformidade com a
                LGPD.
                <br />
                <br />
                As solicitações poderão ser encaminhadas para o e-mail:
                contato@marciogimenez.com.br
                <br />
                <br />
                Adotamos medidas técnicas e administrativas para proteger os
                Dados Pessoais contra acessos não autorizados, perdas,
                alterações ou qualquer forma de tratamento inadequado ou
                ilícito.
                <br />
                <br />
                <strong className="text-black">
                  <p className="mb-1"> 7. Alterações nesta política</p>
                </strong>
                Esta Política poderá ser alterada a qualquer tempo, sendo a
                versão atualizada publicada em nosso site com a respectiva data
                de atualização.
                <br />
                <br />
                <strong className="text-black">
                  <p className="mb-2">8. Contato</p>
                </strong>
                Para dúvidas ou solicitações relacionadas ao tratamento de Dados
                Pessoais, o Usuário poderá entrar em contato pelo e-mail:
                contato@marciogimenez.com.br.
                <br />
                <br />
                <br />
                <h1 className="text-title5">Termos de uso:</h1>
                <br />O website do{" "}
                <strong className="text-black">Marcio Gimenez Advocacia</strong>
                , localizado no endereço eletrônico marciogimenez.com.br, tem
                como finalidade exclusiva fornecer informações institucionais
                sobre o escritório, suas áreas de atuação e conteúdo de caráter
                informativo.
                <br />
                <br />
                Nenhum conteúdo disponibilizado neste website, incluindo
                artigos, publicações ou materiais institucionais, deve ser
                interpretado como aconselhamento jurídico individualizado. Para
                a obtenção de orientações legais, é imprescindível a consulta
                direta com nossos advogados, mediante contrato formal de
                prestação de serviços.
                <br />
                <br />
                <strong className="text-black">
                  <p className="mb-2">Direitos Autorais</p>
                </strong>
                Todo o conteúdo deste website, incluindo textos, imagens,
                logotipos, gráficos e materiais de apoio, está protegido pelas
                leis de Propriedade Intelectual e não pode ser reproduzido,
                distribuído ou utilizado para fins comerciais sem a expressa
                autorização prévia e por escrito de
                <br />
                <br />
                <br />
                <strong className="text-black">
                  <p className="mb-2">Marcio Gimenez Advocacia.</p>
                </strong>
                O uso indevido de qualquer material aqui disponibilizado poderá
                ensejar responsabilização civil e penal, nos termos da
                legislação aplicável.
                <br />
                <br />
                <br />
                <strong className="text-black">
                  <p className="mb-2">Informações de Terceiros</p>
                </strong>
                Este website pode conter links para páginas externas ou
                materiais de terceiros. O Marcio Gimenez Advocacia não se
                responsabiliza pelo conteúdo, precisão ou políticas de
                privacidade de sites de terceiros, sendo de inteira
                responsabilidade do usuário a verificação das informações ali
                disponíveis.
                <br />
                <br />
                Da mesma forma, não garantimos a exatidão ou atualização de
                informações referentes a seminários, eventos ou conteúdos
                produzidos por terceiros, ainda que divulgados em nosso website.
                <br />
                <br />
                <strong className="text-black">
                  <p className="mb-2"> Limitação de Responsabilidade</p>
                </strong>
                O{" "}
                <strong className="text-black">Marcio Gimenez Advocacia</strong>{" "}
                envida esforços para manter as informações do site sempre
                corretas e atualizadas, mas não garante a inexistência de erros,
                falhas técnicas ou interrupções. O uso das informações
                disponíveis neste website é de responsabilidade exclusiva do
                usuário.
                <br />
                <br />
                <strong className="text-black">
                  <p className="mb-2"> Alterações nos Termos de Uso</p>
                </strong>
                O{" "}
                <strong className="text-black">Marcio Gimenez Advocacia</strong>{" "}
                reserva-se o direito de alterar, atualizar ou revisar estes
                Termos de Uso a qualquer tempo, sem aviso prévio. Recomendamos
                que os usuários consultem regularmente esta página para
                verificar eventuais modificações.
              </p>
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
