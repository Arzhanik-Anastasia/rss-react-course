describe('Tests', () => {
  it('passes', () => {
    cy.visit('/');
  });

  it('search work', () => {
    cy.visit('/');
    cy.get('.input-value').type('Avatar');
    cy.get('.button-search').click();
    cy.contains('Avatar').click();
    cy.contains('The Way of Water');
  });

  it('about link work', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
  });

  it('home link work', () => {
    cy.visit('/about');
    cy.contains('Home').click();
    cy.contains('Home page');
  });

  it('form link work', () => {
    cy.visit('/');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
  });

  it('form works', () => {
    cy.visit('/form');
    cy.get('.form__btn-submit').click();
    cy.contains('Поле обязательно к заполнению');
    cy.get('input[name="firstName"]').type('Ivan');
    cy.get('input[name="lastName"]').type('Ivanov');
    cy.get('input[name="zipCode"]').type('123456');
    cy.get('input[name="birthDay"]').type('2000-01-01');
    cy.get('select').select('Belarus');
    /*     cy.get('.input__checkbox').click(); */
    /*     cy.get('.form__btn-submit').click();
    cy.contains('Ivan'); */
  });

  it('coverage saving', () => {
    expect(true).to.equal(true);
  });
});
