/// <reference types="cypress"/>


describe("funcionalidade login",()=> {


  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    
  });
  afterEach(() => {
    cy.screenshot()
  });

    it("deve fazer login com sucesso" , () => {
        cy.get('#username').type("nicoleteste@com.br")
        cy.get('#password').type("teste@123")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain" , "Olá, nicoleteste (não é nicoleteste? Sair)")
        
      })

 it('deve exibir uma mensagem de erro  ao inserir usuario invalido', () => {
        cy.get('#username').type("testenicole@com.br")
        cy.get('#password').type("teste@123")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should("exist")
 });
  
  it('deve exibir uma mensagem de senha invalida', () => {
        cy.get('#username').type("nicoleteste@com.br")
        cy.get('#password').type("nicole45")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should("contain" , "Erro: A senha fornecida para o e-mail nicoleteste@com.br está incorreta. Perdeu a senha?" )

        
        
  });
        

})