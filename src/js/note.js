import Handlebars from 'handlebars';

class MyHandlebarsNote {
    constructor() {

    }
    showNote() {
        Handlebars.registerHelper('note', function(ocena) {
            return `Ocena czytelnika: ${ocena}`;
        })
    }
}

export default MyHandlebarsNote;