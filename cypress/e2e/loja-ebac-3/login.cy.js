/// <reference types="cypress"/>
const perfil= require("../../fixtures/perfil.json")


describe("funcionalidade login",()=> {


  beforeEach(() => {
    cy.visit("minha-conta")
    
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

   it('deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain" , "Olá, nicoleteste (não é nicoleteste? Sair)")
        
      
    });

     it.only('deve fazer login com sucesso - usando Fixture', () => {
        cy.fixture("perfil").then(dados=>{
           cy.get('#username').type(dados.usuario , {log: false})
           cy.get('#password').type(dados.senha , {log: false});
           cy.get('.woocommerce-form > .button').click()
           cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain" , "Olá, nicoleteste (não é nicoleteste? Sair)")
        
        })
      
    });

      

})