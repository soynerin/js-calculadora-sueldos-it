function mostrarAlerta(message){
    alert(message);
}

function ejecutarLogicaTemporalBienvenida(){
    if ( confirm("¿Querés probar nuestra página?")) {
        var name = prompt("¿Cuál es tu nombre?", "Invitado");
    
        while (name !== null && name.length == 0) {
            mostrarAlerta("¡Por favor, ingresá tu nombre!");
            name = prompt("¿Cuál es tu nombre?", "Invitado");
        } 
    
        mostrarAlerta(`Bienvenido ${name} a nuestra Calculadora de Sueldos`);
    } else{
        mostrarAlerta("¡¡Te esperamos la próxima!!");
    }
}

ejecutarLogicaTemporalBienvenida();