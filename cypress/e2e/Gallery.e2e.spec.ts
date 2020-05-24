// TODO: Learn how to test content changes in cypress

function spyNetworkRequest() {
  cy.server()
  cy.route({
    method: 'GET',
    url: '/giphy/**',
  }).as('apiRequest')
}

function disableSmoothScroll() {
  cy.document().then(document => {
    const node = document.createElement('style')
    node.innerHTML = 'html { scroll-behavior: inherit !important; }'
    document.body.appendChild(node)
  })
}

describe('#Gallery.e2e', () => {
  beforeEach(() => {
    spyNetworkRequest()
    cy.visit('http://localhost:3000')
    disableSmoothScroll()
  })

  it('loads correctly a set of gifs', () => {
    cy.wait('@apiRequest')
    cy.findByTestId('gallery-image-grid').findAllByRole('img').should('be.visible')
  })
  it('displays extra information if an image is clicked', () => {
    cy.wait('@apiRequest')

    const testImage = cy.findByTestId('gallery-image-grid').findAllByRole('img').first()
    // Open details of image
    testImage.click({ force: true })
    // Check if the window opens
    const imageDetails = cy.findByTestId('gallery-image-details')
    imageDetails.findByTestId('gallery-image-details-actions-back').click()
    // Wait for the close animation
    cy.wait(1000)
    // Check if it's hidden
    imageDetails.should('not.be.visible')
  })
})
