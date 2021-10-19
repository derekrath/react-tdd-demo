describe(`My First Test`, function () {
    it(`Visits the kitchen sink`, function () {
        cy.visit(`https://example.cypress.io`)
    })
    it(`Finds an element`, function () {
        cy.contains(`type`)
    })
    it(`Clicks the element`, function () {
        cy.contains(`type`).click()
    })
    it(`Makes an assertion`, function () {
        cy.url()
            .should(`include`, `/commands`)
    })
    it(`Gets, types, asserts`, function () {
        cy.get(`.action-email`)
            .type(`fake@email.com`)
            .should(`have.value`, `fake@email.com`)
    })
})