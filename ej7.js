import { getCurrency } from 'currency-map-country'

let monedaDelPais, codigoPais;
codigoPais = 'ARS';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais.name}`);
codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais.name}`);




function obtenerMoneda(codigoPais)

{
    let moneda = getCurrency(codigoPais)
    return moneda
}