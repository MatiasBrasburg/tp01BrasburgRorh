import {OMDBSearchByPage, OMDBSearchComplete,OMDBGetByImdbID} from './src/modules/omdb-wrapped.js'
let resultado = null;
// Test de la función OMDBSearchByPage..

//EJERCICIO 1
//resultado = await OMDBSearchByPage("Back to the Future", 1);
//console.log("OMDBSearchByPage", resultado);

//EJERCICIO 2 
//resultado= await OMDBSearchComplete("Back to the Future")
//console.log("OMDBSearchComplete", resultado)

//EJERICIO 3 
resultado = await OMDBGetByImdbID("tt0088763")
console.log("OMDBGetByImdbID", resultado)
