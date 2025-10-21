/// <reference types="cypress" />

import produtosPage from "../../support/page-objects/produtos.page";

describe('Buscar produto na loja Ebac', () => {

  beforeEach(() => {
    produtosPage.visitarUrl()
  });

  it('deve selecionar um produto da lista', () => {
    produtosPage.buscarProdutosLista("Argus All-Weather Tank")
    cy.get('#tab-title-description > a').should("contain", "Descrição")
  });

  it('deve buscar um produto com sucesso', () => {
    produtosPage.buscarProduto('Ingrid Running Jacket')
    cy.get('.product_title').should('contain', 'Ingrid Running Jacket')
  });

  it('deve visitar a página do produto', () => {
    produtosPage.visitarProduto('Zeppelin Yoga Pant')
    cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
  });

  it('deve adicionar produto ao carrinho', () => {
    const qtd = 7
    produtosPage.buscarProduto('Augusta Pullover Jacket')
    produtosPage.buscarProdutosLista('Augusta Pullover Jacket')
    produtosPage.addProdutoCarrinho('XS', 'Blue', qtd)
    cy.get('.woocommerce-message')
      .should("contain", "“Augusta Pullover Jacket” foi adicionado no seu carrinho.")
  });

  it('deve adicionar produtos ao carrinho usando a massa de dados', () => {
    cy.fixture('produtos').then((dados) => {
      dados.forEach((produto) => {
        cy.log(`Testando produto: ${produto.nomeProduto}`)

        produtosPage.buscarProduto(produto.nomeProduto)
        produtosPage.buscarProdutosLista(produto.nomeProduto)
        produtosPage.addProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade)

        cy.get('.woocommerce-message', { timeout: 10000 })
          .should("contain", produto.nomeProduto)

        
        cy.visit('http://lojaebac.ebaconline.art.br/')
      })
    })
  })
})
