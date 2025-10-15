class ProdutosPage{

   visitarUrl() {
     cy.visit("produtos")
   }
    

  buscarProdutos(nomeProduto){
   
   cy.get('[name="s"]').eq(1).click().type(nomeProduto)
   cy.get('.button-search').eq(1) 
  }

   buscarProdutosLista(nomeProduto) {
  cy.get('.products .product')
    .should('exist') 
    .contains('.woocommerce-loop-product__title', nomeProduto, { timeout: 10000 })
    .click();
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