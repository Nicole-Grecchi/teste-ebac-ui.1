/// <reference types="cypress" />

describe('Funcionalidade:  Detalhes da conta', () => {

beforeEach(() => {
    cy.visit("/minha-conta/edit-account")
    cy.fixture("perfil").then(login => {
       cy.login(login.usuario , login.senha)
    })
    
});

it('deve completar detalhes da conta co sucesso ', () => {
  cy.detalhesConta("Nicole" , "Grecchi" , "NicoleGrecchi")
  cy.get('.woocommerce-message').should("contain" , "Detalhes da conta modificados com sucesso.")

    
});
    
});