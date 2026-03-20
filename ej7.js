import { getCurrency } from 'currency-map-country'

let monedaDelPais, codigoPais;
codigoPais = 'ARS';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);


console.log(getCurrency(codigoPais))


function obtenerMoneda(codigoPais)

{
    let moneda = getCurrency(codigoPais).value
    return moneda
}