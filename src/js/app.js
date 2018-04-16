import Handlebars from 'handlebars';
import MyHandlebarsPrice from './price';
import MyHandlebarsNote from './note';
import SpisTresci from './spis tresci';

(() => {
    'use strict';
    const BOOK_DATA = {
        title: 'Testowy tytul ksiazki',
       // author: 'Gal Anonim',
        name: 'Bla',
        //email: 'ala@wp.pl',
        www: 'www.wp.pl',
        adress: {
            street: 'Bukowa 35',
            postCode: '15-101',
            city: 'Bialystok'
        },
        spisTresci: [
            {tytul: 'Wstęp', strona: 3},
            {tytul:'Rozwinięcie', strona: 7},
            {tytul: 'Zakończenie', strona: 93}
        ],
        spis: ['cos', 'bos', 'gos']
    };
    const pokazCene = new MyHandlebarsPrice;
    pokazCene.showPrice();
    const pokazOcene = new MyHandlebarsNote;
    pokazOcene.showNote();
    const pokazSpis = new SpisTresci;
    pokazSpis.showSpisTresci();

    const bookCoverTemplate = document.getElementById('book-cover-template').innerHTML;
    const compileTemplate = Handlebars.compile(bookCoverTemplate);

    const generateData_coverBook = compileTemplate(BOOK_DATA);
    document.getElementById('book-cover').innerHTML = generateData_coverBook;
})();

