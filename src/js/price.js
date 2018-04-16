import Handlebars from 'handlebars';

class MyHandlebarsPrice {
    constructor() {

    }
    showPrice() {
        Handlebars.registerHelper('price', function(cena) {
            return `Cena: ${cena} zł`;
        })
    }
}

export default MyHandlebarsPrice;