/**
 * Representa un Participante
 * @date 2021-01-22
 * @param {Pais} Pais -
 * @param {Region} region - Determinará el porcentaje de participantes por región de la Argentina
 * @param {Rol} rol - Porcentaje de participantes por tipo de rol
 * @param {number} experiencia - Años de experiencia
 * @param {Educacion} educacion - Nivel de estudios alcanzado y estado actual
 * @param {Genero} genero - Identidad de género
 * @returns {any}
 */
class Participante {
    constructor(pais, region, rol, experiencia, educacion, genero) {
        this.pais = pais;
        this.region = region;
        this.rol = rol;
        this.experiencia = experiencia;
        this.educacion = educacion;
        this.genero = genero;
        this.salarioMinimo = 21600;
        this.salario = this.salarioMinimo;
        this.salarioActualizado = 0;

        this.setPais = function (paisSeleccionado) {
            if (paisSeleccionado) {
                if (paisSeleccionado.id === 0) {
                    this.salario = this.salarioActualizado;
                } else {
                    this.pais = paisSeleccionado;
                    this.actualizarSueldoPretendido(this.pais);
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
                    this.salario = this.salarioActualizado;
                } else {
                    this.region = regionSeleccionada;
                    this.actualizarSueldoPretendido(this.region);
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
                    this.salario = this.salarioActualizado;
                } else {
                    this.rol = rolSeleccionado;
                    this.actualizarSueldoPretendido(this.rol);
                }
            } else {
                console.error(
                    "La rol ingresado no esta en nuestra base de datos"
                );
            }

            console.log(this);
        };

        this.actualizarSueldoPretendido = function (estado) {
            if (estado instanceof Pais) {
                this.salario = getSalarioPorPais(this.pais.id);
                this.salarioActualizado =
                    this.salarioActualizado + this.salario;
            }

            if (estado instanceof Region) {
                this.salario = getSalarioPorRegion(this.region.id);
                this.salarioActualizado =
                    this.salarioActualizado + this.salario;
            }

            if (estado instanceof Rol) {
                this.salario = getSalarioPorRol(this.rol.id);
                this.salarioActualizado =
                    this.salarioActualizado + this.salario;
            }
        };
    }
}
