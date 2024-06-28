import ClaseA from './classes/ClaseA.js';
import ClaseB from './classes/ClaseB.js';

let main = {
    'ini': function(document) {
        console.log('Inicio')

        let claseA = new ClaseA();
        let claseB = new ClaseB();
    }
}

main.ini(document);