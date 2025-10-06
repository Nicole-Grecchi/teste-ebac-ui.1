/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('funcionalidade: produtos', () => {

    beforeEach(() => {
       produtosPage.visitarUrl()
    });
    it('deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutosLista("Argus All-Weather Tank")
          cy.get('#tab-title-description > a').should("contain" , "Descrição")
        
    });
    
    it.only('deve buscar um produto com sucesso', () => {
        produtosPage.buscarProdutos('Ingrid Running Jacket')
        cy.get('.product_title').should('contain' , 'Ingrid Running Jacket')
    });

    it('deve visitar a pagina do produto', () => {
        
    });

    it('deve adicionar produto ao carrinho ', () => {
        
    });

});