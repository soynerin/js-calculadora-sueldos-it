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

cargarListaProvincias();
cargarListaRoles();
cargrListaPataformas();
cargarListaLenguajesProgramacion();
cargarListaFrameworks();
cargarListaBasesDatos();

const totalSalaryArs = document.getElementById("totalSalaryArs");
const countrySelected = document.getElementById("country");
const regionSelected = document.getElementById("provincias");
const rolSelected = document.getElementById("roles");
const tecnologiaSelected = document.getElementById("plataformas");
const lenguajeSelected = document.getElementById("lenguajes");
const frameworkSelected = document.getElementById("frameworks");
const bbddSelected = document.getElementById("bbdd");

const participante = new Participante();

countrySelected.addEventListener("change", (event) => {
    const idPais = parseInt(event.target.value, 10);
    const pais = new Pais(
        idPais,
        event.target.options[event.target.selectedIndex].text
    );

    participante.setPais(pais);

    setSalaryItem(
        event,
        "countrySelectedDescription",
        "countrySelectedValueSalary"
    );

    participante.salario.setSalarioBruto();
    totalSalaryArs.innerText = `AR$ ${participante.salario.totalBruto}`;

    calcularRetenciones();
});

regionSelected.addEventListener("change", (event) => {
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
    totalSalaryArs.innerText = `AR$ ${participante.salario.totalBruto}`;

    calcularRetenciones();
});

rolSelected.addEventListener("change", (event) => {
    const idRol = parseInt(event.target.value, 10);
    const descriptionRol =
        event.target.options[event.target.selectedIndex].text;
    const rol = new Rol(idRol, descriptionRol);

    participante.setRol(rol);

    setSalaryItem(event, "puestoSelectedDescription", "");

    participante.salario.setSalarioBruto();
    totalSalaryArs.innerText = `AR$ ${participante.salario.totalBruto}`;

    calcularRetenciones();
});

tecnologiaSelected.addEventListener("change", (event) => {
    const id = parseInt(event.target.value, 10);
    const description =
        event.target.options[event.target.selectedIndex].text;
    const tecnologia = new Tecnologia(id, description);

    participante.setTecnologia(tecnologia);

    setSalaryItem(event, "tecnologiaSelectedDescription", "");

    participante.salario.setSalarioBruto();
    totalSalaryArs.innerText = `AR$ ${participante.salario.totalBruto}`;

    calcularRetenciones();
});

lenguajeSelected.addEventListener("change", (event) => {
    const id = parseInt(event.target.value, 10);
    const description =
        event.target.options[event.target.selectedIndex].text;
    const lenguaje = new Lenguaje(id, description);

    participante.setLenguaje(lenguaje);

    setSalaryItem(event, "lenguajeSelectedDescription", "");

    participante.salario.setSalarioBruto();
    totalSalaryArs.innerText = `AR$ ${participante.salario.totalBruto}`;

    calcularRetenciones();
});

frameworkSelected.addEventListener("change", (event) => {
    const id = parseInt(event.target.value, 10);
    const description =
        event.target.options[event.target.selectedIndex].text;
    const framework = new Framework(id, description);

    participante.setFramework(framework);

    setSalaryItem(event, "frameworkSelectedDescription", "");

    participante.salario.setSalarioBruto();
    totalSalaryArs.innerText = `AR$ ${participante.salario.totalBruto}`;

    calcularRetenciones();
});

bbddSelected.addEventListener("change", (event) => {
    const id = parseInt(event.target.value, 10);
    const description =
        event.target.options[event.target.selectedIndex].text;
    const bbdd = new BaseDato(id, description);

    participante.setBaseDato(bbdd);

    setSalaryItem(event, "bbddSelectedDescription", "");

    participante.salario.setSalarioBruto();
    totalSalaryArs.innerText = `AR$ ${participante.salario.totalBruto}`;

    calcularRetenciones();
});

function calcularRetenciones(){
    
    if (participante.salario.totalBruto > 0) {        
        $("#salarioNeto").text(`AR$ ${participante.salario.totalBruto * 0.83}`);
    }
}