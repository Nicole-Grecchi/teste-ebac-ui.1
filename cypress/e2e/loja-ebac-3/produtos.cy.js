/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Buscar produto na loja Ebac', () => {
     beforeEach(() => {
       produtosPage.visitarUrl()
    });
    it('deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutosLista("Argus All-Weather Tank")
          cy.get('#tab-title-description > a').should("contain" , "Descrição")
        
    });
    
    it('deve buscar um produto com sucesso', () => {
        produtosPage.buscarProdutos('Ingrid Running Jacket')
        cy.get('.product_title').should('contain' , 'Ingrid Running Jacket')
    });

    it('deve visitar a pagina do produto', () => {
        produtosPage.visitarProdutos('Zeppelin Yoga Pant')
         cy.get('.product_title').should('contain' , 'Zeppelin Yoga Pant')
    });

    it('deve adicionar produto ao carrinho ', () => {
      let qtd = 7 
      produtosPage.buscarProdutos('Augusta Pullover Jacket')
      produtosPage.addProdutosCarrinho('XS', 'Blue', qtd)
      cy.get('.woocommerce-message').should("contain" ,   " “Augusta Pullover Jacket” foram adicionados no seu carrinho.")

        
    });

   
   it.only('deve adicionar produto ao carrinho buscando da massa de dados ', () => {
      cy.fixture('produtos').then(dados => {
      produtosPage.buscarProduto(dados[2].nomeProduto)
      produtosPage.buscarProdutosLista(dados[2].nomeProduto)
      produtosPage.addProdutoCarrinho(
        dados[2].tamanho,
        dados[2].cor,
        dados[2].quantidade)
      cy.get('.woocommerce-message').should("contain" , dados[2].nomeProduto  )

      })
  })
  });
      