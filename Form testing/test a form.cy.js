describe('automate form', () => {
    it('test case ', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.url().should('include','.azurewebsites')
        cy.get('#name').type('misbah')
        cy.get('#phone').type('0721502150')
        cy.get('#email').type('misbah@gmail.com')
        cy.get('#password').type('Jannat99')
        cy.get('#address').type('ramelsvag33')
        cy.get('body:nth-child(2) div.container.body-content:nth-child(2) div.card.border-success.mb-3:nth-child(3) div.card-body > button.btn.btn-primary:nth-child(6)').click()
        ///radio button
        cy.get('#male').click()
        /// checkbox
        cy.get('#monday').click()
        cy.get('#friday').click()
        ///dropdown button
        cy.get('.custom-select').select('Turkey')
        cy.get(':nth-child(1) > :nth-child(5) > .custom-control-label').click()
        cy.get(':nth-child(2) > :nth-child(2) > .custom-control-label').click()

        
       



    })
})
    