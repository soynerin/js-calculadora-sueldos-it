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

    const request = new XMLHttpRequest();
    request.open('GET', 'https://apis.datos.gob.ar/georef/api/provincias', true);    

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            const data = JSON.parse(this.response);

            data.provincias.sort(function(a,b){
                return a.id - b.id;
            })

            data.provincias.map(function(x){
                const option = document.createElement("option");
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

    const roles = document.getElementById('roles');

    const request = new XMLHttpRequest();
    request.open('GET', 'json/roles.json', true);    

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            const data = JSON.parse(this.response);

            data.roles.sort(function(a,b){
                return a.id - b.id;
            })

            data.roles.map(function(x){
                const option = document.createElement("option");
                option.text = x.nombre;
                option.value = x.id;

                roles.appendChild(option);
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
  
function iniciarCuestionario(){
    let participante = new Participante();

    let region = mostrarPregunta("¿De qué provincia o región sos?", "Buenos Aires");
    participante.setRegion(region);

    let rol = mostrarPregunta("¿Rol a desempeñar?", "Developer");
    participante.setRol(rol);

}

// ejecutarLogicaTemporalBienvenida();
iniciarProvincias();
iniciarRoles();
// iniciarCuestionario();
