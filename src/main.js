import ClaseA from './classes/ClaseA.js';
import ClaseB from './classes/ClaseB.js';
import ClaseC from './classes/ClaseC.js';

let main = {
    'ini': function(document) {
        console.log('Inicio')

        let claseA = new ClaseA();
        let claseB = new ClaseB();
        let claseC = new ClaseC();
    }
}

main.ini(document);