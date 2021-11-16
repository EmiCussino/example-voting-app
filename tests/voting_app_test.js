Feature('voting_app');

Scenario('Ver opciones en pantalla de votos', ({ I }) => {
    I.amOnPage('http://localhost:5000/');
    I.see('CATS');
    I.see('DOGS');
});


Scenario('Titulo por defecto', ({ I }) => {
    I.amOnPage('http://localhost:5000/');
    I.see('Cats vs Dogs!');
    
});
Scenario('Vote perros', ({ I }) => {
    I.amOnPage('http://localhost:5000/');
    I.click('Dogs');    
});
Scenario('Vote Gatos', ({ I }) => {
    I.amOnPage('http://localhost:5000/');
    I.click('Cats');    
});



