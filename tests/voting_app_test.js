Feature('voting_app');

Scenario('test something', ({ I }) => {
    I.amOnPage('http://localhost:5000/');
    I.seeElement('Cats');
    I.seeElement('Dogs');
});

