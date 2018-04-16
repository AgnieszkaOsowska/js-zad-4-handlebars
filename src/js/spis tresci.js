import Handlebars from 'handlebars';

class SpisTresci {
    constructor() {
        
    }
    showSpisTresci() {
        Handlebars.registerHelper('spisTresciH', function(spis) {
            let wynik = '<ul>';
            for(let rozdzial of spis) {
                wynik += `<li> ${rozdzial.tytul} ${rozdzial.strona} </li>` 
            }
            return wynik += '</ul>';
        })
    }
}

export default SpisTresci;