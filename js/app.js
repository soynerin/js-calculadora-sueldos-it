function mostrarAlerta(message){
    alert(message);
}

function mostrarPregunta(message, defaultAnswer){
    return prompt(message, defaultAnswer);
}

function ejecutarLogicaTemporalBienvenida(){
    if ( confirm("¿Querés probar nuestra página?")) {
        var name = mostrarPregunta("¿Cuál es tu nombre?", "Invitado");
    
        while (name !== null && name.length == 0) {
            mostrarAlerta("¡Por favor, ingresá tu nombre!");
            name = mostrarPregunta("¿Cuál es tu nombre?", "Invitado");
        } 
    
        mostrarAlerta(`Bienvenido ${name} a nuestra Calculadora de Sueldos`);
    } else{
        mostrarAlerta("¡¡Te esperamos la próxima!!");
    }
}

var regiones = new Array();
var roles = new Array();

function iniciarRegiones(){    
    regiones.push(new Region(1, "CABA"));
    regiones.push(new Region(2, "Buenos Aires"));
    regiones.push(new Region(3, "Cordoba"));
    regiones.push(new Region(4, "Santa Fe"));
    regiones.push(new Region(5, "Mendoza"));
    regiones.push(new Region(6, "Entre Rios"));
    regiones.push(new Region(7, "Chaco"));
    regiones.push(new Region(8, "Tucuman"));
    regiones.push(new Region(9, "Neuquen"));
    regiones.push(new Region(10, "Misiones"));
    regiones.push(new Region(11, "Rio Negro"));
    regiones.push(new Region(12, "Chubut"));    
    regiones.push(new Region(13, "Corrientes"));    
    regiones.push(new Region(14, "Jujuy"));    
    regiones.push(new Region(15, "Salta"));    
    regiones.push(new Region(16, "La Rioja"));    
    regiones.push(new Region(17, "San Luis"));    
    regiones.push(new Region(18, "San Juan"));    
    regiones.push(new Region(19, "Tierra del Fuego"));    
    regiones.push(new Region(20, "Santiago del Estero"));    
    regiones.push(new Region(21, "Formosa"));    
    regiones.push(new Region(22, "Catamarca"));    
    regiones.push(new Region(23, "Santa Cruz"));    
    regiones.push(new Region(24, "La Pampa"));    
}

function iniciarRoles(){    
    roles.push(new Rol(1, "Developer"));
    roles.push(new Rol(2, "SysAdmin"));
    roles.push(new Rol(3, "DevOps"));
    roles.push(new Rol(4, "SRE"));
    roles.push(new Rol(5, "Technical Leader"));
    roles.push(new Rol(6, "QA"));
    roles.push(new Rol(7, "Tester"));
    roles.push(new Rol(8, "Manager"));
    roles.push(new Rol(9, "Director"));
    roles.push(new Rol(10, "HelpDesk"));
    roles.push(new Rol(11, "BI Analyst"));
    roles.push(new Rol(12, "Data Analyst"));    
    roles.push(new Rol(13, "Project Manager"));    
    roles.push(new Rol(14, "Consultant"));    
    roles.push(new Rol(15, "Architect"));   
}

function iniciarCuestionario(){
    let participante = new Participante();

    let region = mostrarPregunta("¿De qué provincia o región sos?", "Buenos Aires");
    participante.setRegion(region);

    let rol = mostrarPregunta("¿Rol a desempeñar?", "Developer");
    participante.setRol(rol);

}

ejecutarLogicaTemporalBienvenida();
iniciarRegiones();
iniciarRoles();
iniciarCuestionario();