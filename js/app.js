const totalSalaryArs = $("#totalSalaryArs");
const participante = new Participante(); 

getQuoteOfTheDay();

function cargarListaProvincias() {
    cargarComboPorJson(
        "provincias",
        "https://apis.datos.gob.ar/georef/api/provincias"
    );
}

function cargarListaRoles() {
    cargarComboPorJson("roles", "json/roles.json", false);
}

function cargrListaPataformas() {
    cargarComboPorJson("plataformas", "json/plataformas.json", false);
}

function cargarListaLenguajesProgramacion() {
    cargarComboPorJson("lenguajes", "json/lenguajes.json", false);
}

function cargarListaFrameworks() {
    cargarComboPorJson("frameworks", "json/frameworks.json", false);
}

function cargarListaBasesDatos() {
    cargarComboPorJson("bbdd", "json/bbdd.json", false);
}

function showSalarioMobileDialog() {
    if ($(window).width() < 767) {
        Toast.fire({
            icon: "info",
            title: `Total Bruto: AR$ ${participante.salario.totalBruto}`,
        });
    }
}

function calcularRetenciones() {
    if (participante.salario.totalBruto > 0) {
        $("#salarioNeto").text(`AR$ ${participante.salario.totalBruto * 0.83}`);
        animateCSS('#contenedorTotalSalarioNeto', 'heartBeat');
    }

}

cargarPais("country");
cargarListaProvincias();
cargarListaRoles();
cargrListaPataformas();
cargarListaLenguajesProgramacion();
cargarListaFrameworks();
cargarListaBasesDatos();

$("#country").change(function (event) { 
    event.preventDefault();

    const id = event.target.value;
    const description = event.target.options[event.target.selectedIndex].text;
    const pais = new Pais(id, description);

    participante.setPais(pais);

    setSalaryItem(
        event,
        "countrySelectedDescription",
        "countrySelectedValueSalary"
    );

    participante.salario.setSalarioBruto();
    totalSalaryArs.text(`AR$ ${participante.salario.totalBruto}`);    

    calcularRetenciones();

    showSalarioMobileDialog();
});

$("#provincias").change(function (event) { 
    event.preventDefault();
    
    const idRegion = parseInt(event.target.value, 10);
    const descriptionRegion =
        event.target.options[event.target.selectedIndex].text;
    const region = new Region(idRegion, descriptionRegion);
    
    participante.setRegion(region);
    
    setSalaryItem(
        event,
        "regionSelectedDescription",
        "regionSelectedValueSalary"
    );
    
    participante.salario.setSalarioBruto();
    totalSalaryArs.text(`AR$ ${participante.salario.totalBruto}`);
    
    calcularRetenciones();
    
    showSalarioMobileDialog();
});

$("#roles").change(function (event) { 
    event.preventDefault();
    
    const idRol = parseInt(event.target.value, 10);
    const descriptionRol =
        event.target.options[event.target.selectedIndex].text;
    const rol = new Rol(idRol, descriptionRol);

    participante.setRol(rol);

    setSalaryItem(event, "puestoSelectedDescription", "");

    participante.salario.setSalarioBruto();
    totalSalaryArs.text(`AR$ ${participante.salario.totalBruto}`);

    calcularRetenciones();

    showSalarioMobileDialog();
});


$("#plataformas").change(function (event) { 
    event.preventDefault();
    
    const id = parseInt(event.target.value, 10);
    const description = event.target.options[event.target.selectedIndex].text;
    const tecnologia = new Tecnologia(id, description);

    participante.setTecnologia(tecnologia);

    setSalaryItem(event, "tecnologiaSelectedDescription", "");

    participante.salario.setSalarioBruto();
    totalSalaryArs.text(`AR$ ${participante.salario.totalBruto}`);

    calcularRetenciones();

    showSalarioMobileDialog();
});

$("#lenguajes").change(function (event) { 
    event.preventDefault();

    const id = parseInt(event.target.value, 10);
    const description = event.target.options[event.target.selectedIndex].text;
    const lenguaje = new Lenguaje(id, description);

    participante.setLenguaje(lenguaje);

    setSalaryItem(event, "lenguajeSelectedDescription", "");

    participante.salario.setSalarioBruto();
    totalSalaryArs.text(`AR$ ${participante.salario.totalBruto}`);    

    calcularRetenciones();

    showSalarioMobileDialog();
});

$("#frameworks").change(function (event) { 
    event.preventDefault();

    const id = parseInt(event.target.value, 10);
    const description = event.target.options[event.target.selectedIndex].text;
    const framework = new Framework(id, description);

    participante.setFramework(framework);

    setSalaryItem(event, "frameworkSelectedDescription", "");

    participante.salario.setSalarioBruto();
    totalSalaryArs.text(`AR$ ${participante.salario.totalBruto}`);

    calcularRetenciones();

    showSalarioMobileDialog();
});

$("#bbdd").change(function (event) { 
    event.preventDefault();
    
    const id = parseInt(event.target.value, 10);
    const description = event.target.options[event.target.selectedIndex].text;
    const bbdd = new BaseDato(id, description);

    participante.setBaseDato(bbdd);

    setSalaryItem(event, "bbddSelectedDescription", "");

    participante.salario.setSalarioBruto();
    totalSalaryArs.text(`AR$ ${participante.salario.totalBruto}`);

    calcularRetenciones();

    showSalarioMobileDialog();
});
