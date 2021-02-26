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

    totalSalaryArs.innerText = `AR$ ${participante.salario}`;
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

    totalSalaryArs.innerText = `AR$ ${participante.salario}`;
});

rolSelected.addEventListener("change", (event) => {
    const idRol = parseInt(event.target.value, 10);
    const descriptionRol =
        event.target.options[event.target.selectedIndex].text;
    const rol = new Rol(idRol, descriptionRol);

    participante.setRol(rol);

    setSalaryItem(event, "puestoSelectedDescription", "");

    totalSalaryArs.innerText = `AR$ ${participante.salario}`;
});
