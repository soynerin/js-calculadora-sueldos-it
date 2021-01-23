/**
 * Representa una región de Argentina
 * @date 2021-01-22
 * @param {number} id
 * @param {string} descritcion
 * @returns {any}
 */
class Region {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }
}

/**
 * Representa el rol del Participante
 * @date 2021-01-22
 * @param {number} id
 * @param {string} description
 * @returns {any}
 */
function Rol(id, description){
    this.id = id;
    this.description = description;
}

// /**
//  * Representa la educación alcanzada por un Participante
//  * @date 2021-01-22
//  * @param {number} id
//  * @param {string} descripcion
//  * @returns {any}
//  */
// function Educacion(id, descripcion){
//     this.id = id;
//     this.descripcion = descripcion;
// }

// /**
//  * Representa el género de un Participante
//  * @date 2021-01-22
//  * @param {number} id
//  * @param {string} descripcion
//  * @returns {any}
//  */
// function Genero(id, descripcion){
//     this.id = id;
//     this.descripcion = descripcion;
// }

// /**
//  * Representa un puesto de trabajo
//  * @date 2021-01-22
//  * @param {number} id
//  * @param {string} descripcion
//  * @returns {any}
//  */
// function Puesto(id, descripcion){
//     this.id = id;
//     this.descripcion = descripcion;
// }

// /**
//  * Representa una Tecnología/Plataforma IT
//  * @date 2021-01-22
//  * @param {any} id
//  * @param {any} descripcion
//  * @returns {any}
//  */
// function Tecnologia(id, descripcion){
//     this.id = id;
//     this.descripcion = descripcion;
// }

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
function Participante(region, rol, experiencia, educacion, genero){
    this.region = region;
    this.rol = rol;
    this.experiencia = experiencia;
    this.educacion = educacion;
    this.genero = genero;
    this.salarioMinimo = 21600;
    this.salario = this.salarioMinimo;

    this.setRegion = function(description, id = null){

        let regionSeleccionada = regiones.find(x => x.description.toLowerCase() == description.toLowerCase());
        if (regionSeleccionada) {
            this.region = regionSeleccionada;
            this.actualizarSueldoPretendido(this.region);
            console.log(this);
            console.info(`La remuneración pretendida a solicitar (en bruto): $ ${this.salario}`);
        }
        else{
            console.error("La región ingresada no esta en nuestra base de datos");
        }
    }

    this.setRol = function(description, id = null){
        let rolSeleccionado = roles.find(x => x.description.toLowerCase() == description.toLowerCase());
        if (rolSeleccionado) {
            this.rol = rolSeleccionado;
            this.actualizarSueldoPretendido(this.rol);
            console.log(this);
            console.info(`La remuneración pretendida a solicitar (en bruto): $ ${this.salario}`);
        }
        else{
            console.error("El rol ingresado no esta en nuestra base de datos");
        }
    }

    this.actualizarSueldoSegunRegion = function(){
        switch (this.region.id) {
            case 1: // Buenos Aires
                this.salario = this.salarioMinimo * 1.25;
                break;
            case 2: // La Pampa
                this.salario = this.salarioMinimo * 1.05;
                break;
            default:
                break;
        }
    }

    this.actualizarSueldoSegunRol = function(){
        switch (this.rol.id) {
            case 1: // Developer
                this.salario *= 2.25;
                break;
            case 2: // SysAdmin
            case 3: // DevOps
            case 4: // SRE
                this.salario *= 3.40;
                break;
            default:
                break;
        }
    }

    this.actualizarSueldoPretendido = function(estado){
        if (estado instanceof Region) {
            this.actualizarSueldoSegunRegion();   
        }    
        
        if (estado instanceof Rol) {
            this.actualizarSueldoSegunRol();  
        }           
    }
}


// /**
//  * Representa un Salario de un Participante
//  * @date 2021-01-22
//  * @param {Region} region - Salarios, ajustes y nivel de conformidad
//  * @param {Puesto} puesto - Salarios según rol, experiencia e industrias
//  * @param {any} educacion - Salarios según nivel de educación
//  * @param {Tecnologia} tecnologia - Plataformas
//  * @param {any} contrato - Sueldos dolarizados vs. en pesoss
//  * @returns {any}
//  */
// function Salario(region, puesto, educacion, tecnologia, contrato){
//     this.region = region;
//     this.puesto = puesto;
//     this.educacion = educacion;
//     this.tecnologia = tecnologia;
//     this.contrato = contrato;
// }
