const setSalaryItem = (event, idElementDescription, idElementValue) => {
    const valueOption = event.target.value;
    const textOption = event.target.options[event.target.selectedIndex].text;
    const description = document.getElementById(idElementDescription);
    // const value = document.getElementById(idElementValue);

    description.innerText = valueOption != "" ? textOption : "";
    // value.innerText = `AR$ ${valueOption}`;
};

const updateTotalSalary = (id) => {
    return getSalarioPorRegion(id);
};

const cargarComboPorJson = (element, url, sortById = true) => {
    const tagElement = document.getElementById(element);

    const request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            const data = JSON.parse(this.response);

            if (sortById) {
                data[element].sort(function (a, b) {
                    return a.id - b.id;
                });
            } else {
                data[element].sort(function (a, b) {
                    return a.nombre > b.nombre;
                });
            }

            data[element].map(function (x) {
                const option = document.createElement("option");
                option.text = x.nombre;
                option.value = x.id;

                tagElement.appendChild(option);
            });
        } else {
            // We reached our target server, but it returned an error
        }
    };

    request.onerror = function (err) {
        // There was a connection error of some sort
        console.error(err);
    };

    request.send();
};

const getSalarioPorPais = (id) => {
    var salario = {
        0: function () {
            return 1;
        },
        54: function () {
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
