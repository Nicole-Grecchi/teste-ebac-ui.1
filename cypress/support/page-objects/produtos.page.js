class ProdutosPage {

  visitarUrl() {
    cy.visit('/')
     cy.get('input[placeholder="Enter your search ..."]', { timeout: 15000 })
     .should('be.visible')
  }

  buscarProduto(nomeProduto) {
    cy.get('input[placeholder="Enter your search ..."]')
      .clear()
      .type(nomeProduto)

    cy.get('button[value="Search"]').click()
  }

  buscarProdutosLista(nomeProduto) {
    cy.get('.products .woocommerce-loop-product__title', { timeout: 10000 })
      .contains(nomeProduto)
      .click()
  }

  visitarProduto(nomeProduto) {
    const urlFormatada = nomeProduto.replace(/ /g, '-')
    cy.visit(`produtos/${urlFormatada}`)
  }

  addProdutoCarrinho(tamanho, cor, quantidade) {
    cy.get(`.button-variable-item-${tamanho}`).click()
    cy.get(`.button-variable-item-${cor}`).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
  }
}

export default new ProdutosPage()
