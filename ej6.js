let miUrl = null;
let miObjeto = null;
 miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
try {
   
    miObjeto = parsearUrl (miUrl);
    console.log(miObjeto);
} catch (Exception) {
    console.error('Error al parsear la URL:', Exception.message);
}

function parsearUrl(laURL){
    //creamos un objeto y le pasamos la url que ya tenemos para dividirla en partes 
const url = new URL(laURL)
return {
    host: url.host,
    pathname: url.pathname,
    parametros: url.searchParams
};

}