class ProdutosPage{


   visitarUrl() {
  cy.visit("http://lojaebac.ebaconline.art.br/produtos/");
}


 buscarProduto(nomeProduto) {
    cy.get('body').should('be.visible');
    cy.get('input[type="search"][name="s"]', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(nomeProduto);
    cy.get('button.button-search').click();
    cy.get('.woocommerce-loop-product__title', { timeout: 10000 })
      .contains(nomeProduto)
      .should('be.visible')
      .click();
  }




    buscarProdutosLista(nomeProduto) { 
cy.get('.products .name').contains(nomeProduto) .click() 
}

   visitarProduto(nomeProduto) {
      // cy.visit(`produtos/${nomeProduto}`)
       const urlFormatada =  nomeProduto.replace(/ /g, '-' )
       cy.visit(`produtos/${urlFormatada}`)


   }

   addProdutoCarrinho(tamanho, cor, quantidade) {
      cy.get('.button-variable-item-' + tamanho ).click()
      cy.get(`.button-variable-item-${cor}`).click()
      cy.get('.input-text').clear().type(quantidade)
      cy.get('.single_add_to_cart_button').click()

   }

}

export default new ProdutosPage()