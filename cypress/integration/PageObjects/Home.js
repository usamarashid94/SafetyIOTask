export class Home 
{

  navigate()
  {
    cy.visit('https://weather.com/en-US/weather/today/')
  }

  clk_menu()
  {
    cy.get('button[id^=MainMenuTrigger]').click()
  }

  clk_privacypolicy()
  {
    cy.contains('Privacy Policy').click()
  }

}