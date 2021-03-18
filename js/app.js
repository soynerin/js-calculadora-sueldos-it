const totalSalaryArs = $("#totalSalaryArs");
const participante = new Participante();

getQuoteOfTheDay();

cargarPais("country", "pais");
cargarListaProvincias();
cargarListaRoles();
cargrListaPataformas();
cargarListaLenguajesProgramacion();
cargarListaFrameworks();
cargarListaBasesDatos();

$("#country").change(function (event) {
    event.preventDefault();

    const id = event.target.value;
    let description = "";

    if (event.target.options) {
        description = event.target.options[event.target.selectedIndex].text;
    } else {
        description = event.target.text;
    }

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

    let description = "";

    if (event.target.options) {
        description = event.target.options[event.target.selectedIndex].text;
    } else {
        description = event.target.text;
    }

    const region = new Region(idRegion, description);

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
    let description = "";

    if (event.target.options) {
        description = event.target.options[event.target.selectedIndex].text;
    } else {
        description = event.target.text;
    }

    const rol = new Rol(idRol, description);

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
    let description = "";

    if (event.target.options) {
        description = event.target.options[event.target.selectedIndex].text;
    } else {
        description = event.target.text;
    }

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
    let description = "";

    if (event.target.options) {
        description = event.target.options[event.target.selectedIndex].text;
    } else {
        description = event.target.text;
    }

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
    let description = "";

    if (event.target.options) {
        description = event.target.options[event.target.selectedIndex].text;
    } else {
        description = event.target.text;
    }

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
    let description = "";

    if (event.target.options) {
        description = event.target.options[event.target.selectedIndex].text;
    } else {
        description = event.target.text;
    }

    const bbdd = new BaseDato(id, description);

    participante.setBaseDato(bbdd);

    setSalaryItem(event, "bbddSelectedDescription", "");

    participante.salario.setSalarioBruto();
    totalSalaryArs.text(`AR$ ${participante.salario.totalBruto}`);

    calcularRetenciones();

    showSalarioMobileDialog();
});

$("#save-info").change(function () {
    if (this.checked) {
        localStorage.setItem("participante", JSON.stringify(participante));
    } else {
        localStorage.clear();
    }
});
