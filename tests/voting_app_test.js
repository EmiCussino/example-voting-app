Feature('voting_app');

Scenario('Ver opciones en pantalla de votos', ({ I }) => {
    I.amOnPage('http://localhost:5000/');
    I.see('CATS');
    I.see('DOGS');
});

Scenario('Ver opciones en pantalla de resultados', ({ I }) => {
    I.amOnPage('http://localhost:5001/');
    I.see('CATS');
    I.see('DOGS');
});