/**
 * Representa un Participante
 * @date 2021-01-22
 * @param {Region} region - Determinará el porcentaje de participantes por región de la Argentina
 * @param {Rol} rol - Porcentaje de participantes por tipo de rol
 * @param {number} experiencia - Años de experiencia
 * @param {Educacion} educacion - Nivel de estudios alcanzado y estado actual
 * @param {Genero} genero - Identidad de género
 * @returns {any}
 */
class Participante {
    constructor(region, rol, experiencia, educacion, genero) {
        this.region = region;
        this.rol = rol;
        this.experiencia = experiencia;
        this.educacion = educacion;
        this.genero = genero;
        this.salarioMinimo = 21600;
        this.salario = this.salarioMinimo;

        this.setRegion = function (description, id = null) {

            let regionSeleccionada = regiones.find(x => x.description.toLowerCase() == description.toLowerCase());
            if (regionSeleccionada) {
                this.region = regionSeleccionada;
                this.actualizarSueldoPretendido(this.region);
                console.log(this);
                console.log(`REGION: ${this.region.description}`);
                console.info(`La remuneración pretendida a solicitar (en bruto): $ ${this.salario}`);
            }
            else {
                console.error("La región ingresada no esta en nuestra base de datos");
            }
        };

        this.setRol = function (description, id = null) {
            let rolSeleccionado = roles.find(x => x.description.toLowerCase() == description.toLowerCase());
            if (rolSeleccionado) {
                this.rol = rolSeleccionado;
                this.actualizarSueldoPretendido(this.rol);
                console.log(this);
                console.log(`ROL: ${this.rol.description}`);
                console.info(`La remuneración pretendida a solicitar (en bruto): $ ${this.salario}`);
            }
            else {
                alert("El rol ingresado no esta en nuestra base de datos");
            }
        };

        this.actualizarSueldoPretendido = function (estado) {
            if (estado instanceof Region) {
                this.salario = this.salario * getSalarioPorRegion(this.region.id);
            }

            if (estado instanceof Rol) {
                this.salario = this.salario * getSalarioPorRol(this.rol.id);
            }
        };
    }
}