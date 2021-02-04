// function mostrarAlerta(message){
//     alert(message);
// }

// function mostrarPregunta(message, defaultAnswer){
//     return prompt(message, defaultAnswer);
// }

// function ejecutarLogicaTemporalBienvenida(){
//     if ( confirm("¿Querés probar nuestra página?")) {
//         var name = mostrarPregunta("¿Cuál es tu nombre?", "Invitado");
    
//         while (name !== null && name.length == 0) {
//             mostrarAlerta("¡Por favor, ingresá tu nombre!");
//             name = mostrarPregunta("¿Cuál es tu nombre?", "Invitado");
//         } 
    
//         mostrarAlerta(`Bienvenido ${name} a nuestra Calculadora de Sueldos`);
//     } else{
//         mostrarAlerta("¡¡Te esperamos la próxima!!");
//     }
// }

// var regiones = new Array();
// var roles = new Array();

function cargarListaProvincias(){     
    cargarComboPorJson('provincias', 'https://apis.datos.gob.ar/georef/api/provincias');
};

function cargarListaRoles(){
    cargarComboPorJson('roles', 'json/roles.json', false);
};

function cargrListaPataformas(){
    cargarComboPorJson('plataformas', 'json/plataformas.json', false);
};

function cargarListaLenguajesProgramacion(){
    cargarComboPorJson('lenguajes', 'json/lenguajes.json', false);
};

function cargarListaFrameworks(){
    cargarComboPorJson('frameworks', 'json/frameworks.json', false);
};

function cargarListaBasesDatos(){
    cargarComboPorJson('bbdd', 'json/bbdd.json', false);
}
  
// function iniciarCuestionario(){
//     let participante = new Participante();

//     let region = mostrarPregunta("¿De qué provincia o región sos?", "Buenos Aires");
//     participante.setRegion(region);

//     let rol = mostrarPregunta("¿Rol a desempeñar?", "Developer");
//     participante.setRol(rol);

// }

// ejecutarLogicaTemporalBienvenida();

cargarListaProvincias();
cargarListaRoles();
cargrListaPataformas();
cargarListaLenguajesProgramacion();
cargarListaFrameworks();
cargarListaBasesDatos();

// iniciarCuestionario();
