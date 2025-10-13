class ProdutosPage{

   visitarUrl() {
     cy.visit("produtos")
   }
    

  buscarProdutos(nomeProduto){
   
   cy.get('[name="color"]').eq(1).click().type(nomeProduto)
   cy.get('.button-search').eq(1).click()
  }

   buscarProdutosLista(nomeProduto) {
        cy.get(' .products > .row')
         .contains(nomeProduto)
        .click()
          
   }

   visitarProdutos(nomeProduto) {
      // cy.visit(`produtos/${nomeProduto}`)
       const urlFormatada =  nomeProduto.replace(/ /g, '-' )
       cy.visit(`produtos/${urlFormatada}`)


   }

   addProdutosCarrinho(tamanho, cor, quantidade) {
      cy.get('.button-variable-item-' + tamanho ).click()
      cy.get(`.button-variable-item-${cor}`).click()
      cy.get('.input-text').clear().type(quantidade)
      cy.get('.single_add_to_cart_button').click()

   }

}

export default new ProdutosPage()