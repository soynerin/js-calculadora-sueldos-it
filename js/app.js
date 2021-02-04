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

function iniciarProvincias(){      

    const provinces = document.getElementById('provinces');

    var request = new XMLHttpRequest();
    request.open('GET', 'https://apis.datos.gob.ar/georef/api/provincias', true);    

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            var data = JSON.parse(this.response);

            data.provincias.sort(function(a,b){
                return a.id - b.id;
            })

            data.provincias.map(function(x){
                var option = document.createElement("option");
                option.text = x.nombre;
                option.value = x.id;

                provinces.appendChild(option);
            });
        } else {
            // We reached our target server, but it returned an error
        }
    };

    request.onerror = function(err) {
        // There was a connection error of some sort
        console.error(err);
    };

    request.send();
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

// ejecutarLogicaTemporalBienvenida();
iniciarProvincias();
// iniciarRoles();
// iniciarCuestionario();
