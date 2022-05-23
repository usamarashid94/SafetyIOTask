export class PrivacyPolicy 
{

  verifysection14()
  {
    cy.get('li[id^=lgpd-notice-old]').should('be.visible')
    cy.get('li[id^=lgpd-notice-old]').contains('Lei Geral de Proteção de Dados Pessoais (LGPD) Notice') 
  }

}