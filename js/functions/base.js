const cargarPais = (element, nombrePropiedad) => {
    const requestUrl = "https://restcountries.eu/rest/v2/all";
    const tagElement = $(`#${element}`);

    $.getJSON(requestUrl)
        .done(function (data) {
            const argentina = data.filter((pais) => pais.name == "Argentina");

            $.map(argentina, function (value, index) {
                tagElement.append(new Option(value.name, value.alpha2Code));
            });
        })
        .fail(function () {
            console.error("Tuvimos problemas para obtener los países.");
        })
        .always(function () {
            let retrievedObject = localStorage.getItem("participante");

            if (retrievedObject) {
                retrievedObject = JSON.parse(retrievedObject);

                if (retrievedObject[nombrePropiedad]) {
                    $("#country")
                        .find(
                            'option[value="' +
                                retrievedObject[nombrePropiedad].id +
                                '"]'
                        )
                        .attr("selected", "selected")
                        .trigger("change");
                }
            }
        });
};

const setSalaryItem = (event, idElementDescription) => {
    const valueOption = event.target.value;
    let textOption = "";

    if (event.target.options) {
        textOption = event.target.options[event.target.selectedIndex].text;
    } else {
        textOption = event.target.text;
    }

    $(`#${idElementDescription}`).text(valueOption != "" ? textOption : "");
};

const setItemComboByLocalStorage = (element, valueId) => {
    valueId = valueId.toString().padStart(2, "0");

    element
        .find('option[value="' + valueId.toString() + '"]')
        .attr("selected", "selected")
        .trigger("change");
};

const cargarComboPorJson = (element, requestUrl, sortById, nombrePropiedad) => {
    const tagElement = $(`#${element}`);

    $.getJSON(requestUrl)
        .done(function (data) {
            if (sortById) {
                data[element].sort(function (a, b) {
                    return a.id - b.id;
                });
            } else {
                data[element].sort(function (a, b) {
                    return a.nombre > b.nombre;
                });
            }

            $.map(data[element], function (value, index) {
                tagElement.append(new Option(value.nombre, value.id));
            });
        })
        .fail(function () {
            console.error("Tuvimos problemas.");
        })
        .always(function () {
            let retrievedObject = localStorage.getItem("participante");

            if (retrievedObject) {
                retrievedObject = JSON.parse(retrievedObject);

                if (retrievedObject[nombrePropiedad]) {
                    setItemComboByLocalStorage(
                        tagElement,
                        retrievedObject[nombrePropiedad].id
                    );
                }
            }
        });
};

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

const getQuoteOfTheDay = () => {
    var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

    $("#jquery").click(function () {
        $.getJSON(url)
            .done(function (data) {
                $("#quote").text(data);
            })
            .fail(function () {
                console.error("Something went wrong.");
            });
    });
};

const animateCSS = (element, animation, prefix = "animate__") =>
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve("Animation ended");
        }

        node.addEventListener("animationend", handleAnimationEnd, {
            once: true,
        });
    });

function cargarListaProvincias() {
    cargarComboPorJson(
        "provincias",
        "https://apis.datos.gob.ar/georef/api/provincias",
        true,
        "region"
    );
}

function cargarListaRoles() {
    cargarComboPorJson("roles", "json/roles.json", false, "rol");
}

function cargrListaPataformas() {
    cargarComboPorJson(
        "plataformas",
        "json/plataformas.json",
        false,
        "tecnologia"
    );
}

function cargarListaLenguajesProgramacion() {
    cargarComboPorJson("lenguajes", "json/lenguajes.json", false, "lenguaje");
}

function cargarListaFrameworks() {
    cargarComboPorJson(
        "frameworks",
        "json/frameworks.json",
        false,
        "framework"
    );
}

function cargarListaBasesDatos() {
    cargarComboPorJson("bbdd", "json/bbdd.json", false, "baseDatos");
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
        $("#salarioNeto").text(
            `AR$ ${(participante.salario.totalBruto * 0.83).toFixed(2)}`
        );
        animateCSS("#contenedorTotalSalarioNeto", "flash");
        animateCSS("#contenedorTotalSalarioBruto", "zoomIn");
    }
}

const getSalarioPorPais = (id) => {
    var salario = {
        AR: function () {
            // ARGENTINA
            return 54000;
        },
    };
    return salario[id]();
};

const getSalarioPorRegion = (id) => {
    var salario = {
        0: function () {
            return 1;
        },
        2: function () {
            // CABA
            return 2000;
        },
        6: function () {
            // BUENOS AIRES
            return 6000;
        },
        54: function () {
            // MISIONES
            return 540;
        },
        74: function () {
            // SAN LUIS
            return 740;
        },
        70: function () {
            // SAN JUAN
            return 700;
        },
        30: function () {
            // ENTRE RIOS
            return 300;
        },
        78: function () {
            // SANTA CRUZ
            return 780;
        },
        62: function () {
            // RIO NEGRO
            return 620;
        },
        26: function () {
            // CHUBUT
            return 260;
        },
        14: function () {
            // CORDOBA
            return 1400;
        },
        50: function () {
            // MENDOZA
            return 5000;
        },
        46: function () {
            // LA RIOJA
            return 460;
        },
        10: function () {
            // CATAMARCA
            return 100;
        },
        42: function () {
            // LA PAMPA
            return 420;
        },
        86: function () {
            // SANTIAGO DEL ESTERO
            return 860;
        },
        18: function () {
            // CORRIENTES
            return 180;
        },
        82: function () {
            // SANTA FE
            return 820;
        },
        90: function () {
            // TUCUMAN
            return 900;
        },
        58: function () {
            // NEUQUEN
            return 580;
        },
        66: function () {
            // SALTA
            return 660;
        },
        22: function () {
            // CHACO
            return 220;
        },
        34: function () {
            // FORMOSA
            return 340;
        },
        38: function () {
            // JUJUY
            return 380;
        },
        94: function () {
            // TIERRA DEL FUEGO
            return 940;
        },
    };
    return salario[id]();
};

const getSalarioPorRol = (id) => {
    var salario = {
        1: function () {
            return 1000;
        },
        2: function () {
            return 2000;
        },
        3: function () {
            return 3000;
        },
        4: function () {
            return 4000;
        },
        5: function () {
            return 5000;
        },
        6: function () {
            return 6000;
        },
        7: function () {
            return 7000;
        },
        8: function () {
            return 8000;
        },
        9: function () {
            return 9000;
        },
        10: function () {
            return 10000;
        },
        11: function () {
            return 11000;
        },
        12: function () {
            return 12000;
        },
        13: function () {
            return 13000;
        },
        14: function () {
            return 14000;
        },
        15: function () {
            return 15000;
        },
        16: function () {
            return 16000;
        },
        17: function () {
            return 17000;
        },
        18: function () {
            return 18000;
        },
        19: function () {
            return 19000;
        },
        20: function () {
            return 20000;
        },
        21: function () {
            return 21000;
        },
        22: function () {
            return 22000;
        },
        23: function () {
            return 23000;
        },
        24: function () {
            return 24000;
        },
        25: function () {
            return 25000;
        },
        26: function () {
            return 26000;
        },
        27: function () {
            return 27000;
        },
        28: function () {
            return 28000;
        },
        29: function () {
            return 29000;
        },
        30: function () {
            return 30000;
        },
    };
    return salario[id]();
};

const getSalarioPorTecnologia = (id) => {
    var salario = {
        1: function () {
            return 1000;
        },
        2: function () {
            return 2000;
        },
        3: function () {
            return 3000;
        },
        4: function () {
            return 4000;
        },
        5: function () {
            return 5000;
        },
        6: function () {
            return 6000;
        },
        7: function () {
            return 7000;
        },
        8: function () {
            return 8000;
        },
        9: function () {
            return 9000;
        },
        10: function () {
            return 10000;
        },
        11: function () {
            return 11000;
        },
        12: function () {
            return 12000;
        },
        13: function () {
            return 13000;
        },
        14: function () {
            return 14000;
        },
        15: function () {
            return 15000;
        },
        16: function () {
            return 16000;
        },
        17: function () {
            return 17000;
        },
        18: function () {
            return 18000;
        },
        19: function () {
            return 19000;
        },
        20: function () {
            return 20000;
        },
        21: function () {
            return 21000;
        },
        22: function () {
            return 22000;
        },
        23: function () {
            return 23000;
        },
        24: function () {
            return 24000;
        },
        25: function () {
            return 25000;
        },
        26: function () {
            return 26000;
        },
        27: function () {
            return 27000;
        },
        28: function () {
            return 28000;
        },
        29: function () {
            return 29000;
        },
        30: function () {
            return 30000;
        },
        31: function () {
            return 31000;
        },
        32: function () {
            return 32000;
        },
        33: function () {
            return 33000;
        },
        34: function () {
            return 34000;
        },
        35: function () {
            return 35000;
        },
        36: function () {
            return 36000;
        },
        37: function () {
            return 37000;
        },
    };
    return salario[id]();
};

const getSalarioPorLenguaje = (id) => {
    var salario = {
        1: function () {
            return 1000;
        },
        2: function () {
            return 2000;
        },
        3: function () {
            return 3000;
        },
        4: function () {
            return 4000;
        },
        5: function () {
            return 5000;
        },
        6: function () {
            return 6000;
        },
        7: function () {
            return 7000;
        },
        8: function () {
            return 8000;
        },
        9: function () {
            return 9000;
        },
        10: function () {
            return 10000;
        },
        11: function () {
            return 11000;
        },
        12: function () {
            return 12000;
        },
        13: function () {
            return 13000;
        },
        14: function () {
            return 14000;
        },
        15: function () {
            return 15000;
        },
        16: function () {
            return 16000;
        },
        17: function () {
            return 17000;
        },
        18: function () {
            return 18000;
        },
        19: function () {
            return 19000;
        },
        20: function () {
            return 20000;
        },
        21: function () {
            return 21000;
        },
        22: function () {
            return 22000;
        },
        23: function () {
            return 23000;
        },
        24: function () {
            return 24000;
        },
        25: function () {
            return 25000;
        },
        26: function () {
            return 26000;
        },
        27: function () {
            return 27000;
        },
        28: function () {
            return 28000;
        },
        29: function () {
            return 29000;
        },
        30: function () {
            return 30000;
        },
        31: function () {
            return 31000;
        },
        32: function () {
            return 32000;
        },
        33: function () {
            return 33000;
        },
        34: function () {
            return 34000;
        },
        35: function () {
            return 35000;
        },
        36: function () {
            return 36000;
        },
        37: function () {
            return 37000;
        },
        38: function () {
            return 38000;
        },
    };
    return salario[id]();
};

const getSalarioPorFramework = (id) => {
    var salario = {
        1: function () {
            return 1000;
        },
        2: function () {
            return 2000;
        },
        3: function () {
            return 3000;
        },
        4: function () {
            return 4000;
        },
        5: function () {
            return 5000;
        },
        6: function () {
            return 6000;
        },
        7: function () {
            return 7000;
        },
        8: function () {
            return 8000;
        },
        9: function () {
            return 9000;
        },
        10: function () {
            return 10000;
        },
        11: function () {
            return 11000;
        },
        12: function () {
            return 12000;
        },
        13: function () {
            return 13000;
        },
        14: function () {
            return 14000;
        },
        15: function () {
            return 15000;
        },
        16: function () {
            return 16000;
        },
        17: function () {
            return 17000;
        },
        18: function () {
            return 18000;
        },
        19: function () {
            return 19000;
        },
        20: function () {
            return 20000;
        },
        21: function () {
            return 21000;
        },
        22: function () {
            return 22000;
        },
        23: function () {
            return 23000;
        },
        24: function () {
            return 24000;
        },
        25: function () {
            return 25000;
        },
        26: function () {
            return 26000;
        },
        27: function () {
            return 27000;
        },
        28: function () {
            return 28000;
        },
        29: function () {
            return 29000;
        },
        30: function () {
            return 30000;
        },
        31: function () {
            return 31000;
        },
        32: function () {
            return 32000;
        },
        33: function () {
            return 33000;
        },
        34: function () {
            return 34000;
        },
        35: function () {
            return 35000;
        },
    };
    return salario[id]();
};

const getSalarioPorBbdd = (id) => {
    var salario = {
        1: function () {
            return 1000;
        },
        2: function () {
            return 2000;
        },
        3: function () {
            return 3000;
        },
        4: function () {
            return 4000;
        },
        5: function () {
            return 5000;
        },
        6: function () {
            return 6000;
        },
        7: function () {
            return 7000;
        },
        8: function () {
            return 8000;
        },
        9: function () {
            return 9000;
        },
        10: function () {
            return 10000;
        },
        11: function () {
            return 11000;
        },
        12: function () {
            return 12000;
        },
        13: function () {
            return 13000;
        },
        14: function () {
            return 14000;
        },
        15: function () {
            return 15000;
        },
        16: function () {
            return 16000;
        },
        17: function () {
            return 17000;
        },
        18: function () {
            return 18000;
        },
        19: function () {
            return 19000;
        },
        20: function () {
            return 20000;
        },
        21: function () {
            return 21000;
        },
        22: function () {
            return 22000;
        },
        23: function () {
            return 23000;
        },
        24: function () {
            return 24000;
        },
    };
    return salario[id]();
};
