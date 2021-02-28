/**
 * Representa un Participante
 * @date 2021-01-22
 * @param {Pais} Pais -
 * @param {Region} region - Determinará el porcentaje de participantes por región de la Argentina
 * @param {Rol} rol - Porcentaje de participantes por tipo de rol
 * @param {Tecnologia} tecnologia - 
 * @param {Lenguaje} lenguaje - 
 * @param {Framework} framework - 
 * @param {BaseDato} baseDatos - 
 * @returns {any}
 */
class Participante {
    constructor(pais, region, rol, tecnologia, lenguaje, framework, baseDatos) {
        this.pais = pais;
        this.region = region;
        this.rol = rol;
        this.tecnologia = tecnologia;
        this.lenguaje = lenguaje;
        this.framework = framework;
        this.baseDatos = baseDatos;
        this.salarioMinimo = 21600;
        this.salario = new Salario();

        this.setPais = function (paisSeleccionado) {
            if (paisSeleccionado) {
                if (paisSeleccionado.id === 0) {
                    this.salario.setPaisSalario(0);
                } else {
                    this.pais = paisSeleccionado;
                    this.salario.setPaisSalario(getSalarioPorPais(this.pais.id));
                }
            } else {
                console.error(
                    "El país seleccionado no está en nuestra Base de Datos"
                );
            }

            console.log(this);
        };

        this.setRegion = function (regionSeleccionada) {
            if (regionSeleccionada) {
                if (regionSeleccionada.id === 0) {
                    this.salario.setRegionSalario(0);
                } else {
                    this.region = regionSeleccionada;
                    this.salario.setRegionSalario(getSalarioPorRegion(this.region.id));
                }
            } else {
                console.error(
                    "La región ingresada no esta en nuestra base de datos"
                );
            }

            console.log(this);
        };

        this.setRol = function (rolSeleccionado) {
            if (rolSeleccionado) {
                if (rolSeleccionado.id === 0) {
                    this.salario.setRolSalario(0);
                } else {
                    this.rol = rolSeleccionado;
                    this.salario.setRolSalario(getSalarioPorRol(this.rol.id));
                }
            } else {
                console.error(
                    "La rol ingresado no esta en nuestra base de datos"
                );
            }

            console.log(this);
        };

        this.setTecnologia = function (tecnologiaSeleccionada) {
            if (tecnologiaSeleccionada) {
                if (tecnologiaSeleccionada.id === 0) {
                    this.salario.setTecnologiaSalario(0);
                } else {
                    this.tecnologia = tecnologiaSeleccionada;
                    this.salario.setTecnologiaSalario(getSalarioPorTecnologia(this.tecnologia.id));
                }
            } else {
                console.error(
                    "La tecnología o plataforma ingresada no esta en nuestra base de datos"
                );
            }

            console.log(this);
        };

        this.setLenguaje = function (lenguajeSeleccionado) {
            if (lenguajeSeleccionado) {
                if (lenguajeSeleccionado.id === 0) {
                    this.salario.setLenguajeSalario(0);
                } else {
                    this.lenguaje = lenguajeSeleccionado;
                    this.salario.setLenguajeSalario(getSalarioPorLenguaje(this.lenguaje.id));
                }
            } else {
                console.error(
                    "El lenguaje ingresado no esta en nuestra base de datos"
                );
            }

            console.log(this);
        };

        this.setFramework = function (frameworkSeleccionado) {
            if (frameworkSeleccionado) {
                if (frameworkSeleccionado.id === 0) {
                    this.salario.setFrameworkSalario(0);
                } else {
                    this.framework = frameworkSeleccionado;
                    this.salario.setFrameworkSalario(getSalarioPorFramework(this.framework.id));
                }
            } else {
                console.error(
                    "El framework o librería ingresada no esta en nuestra base de datos"
                );
            }

            console.log(this);
        };

        this.setBaseDato = function (bbddSeleccionada) {
            if (bbddSeleccionada) {
                if (bbddSeleccionada.id === 0) {
                    this.salario.setBbddSalario(0);
                } else {
                    this.baseDatos = bbddSeleccionada;
                    this.salario.setBbddSalario(getSalarioPorBbdd(this.baseDatos.id));
                }
            } else {
                console.error(
                    "La Base de Datos ingresada no esta en nuestra base de datos"
                );
            }

            console.log(this);
        };
    }
}
