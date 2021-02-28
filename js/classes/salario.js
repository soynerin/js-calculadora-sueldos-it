/**
 * Representa un Salario de un Participante
 * @date 2021-02-28
 * @returns {any}
 */
class Salario {
    constructor() {
        this.paisSalario = 0;
        this.regionSalario = 0;
        this.rolSalario = 0;
        this.tecnologiaSalario = 0;
        this.lenguajeSalario = 0;
        this.frameworkSalario = 0;
        this.bbddSalario = 0;
        this.totalBruto = 0;

        this.setPaisSalario = function(valor) {
            this.paisSalario = valor;
        }

        this.setRegionSalario = function(valor) {
            this.regionSalario = valor;
        }

        this.setRolSalario = function(valor) {
            this.rolSalario = valor;
        }

        this.setTecnologiaSalario = function(valor) {
            this.tecnologiaSalario = valor;
        }

        this.setLenguajeSalario = function(valor) {
            this.lenguajeSalario = valor;
        }

        this.setFrameworkSalario = function(valor) {
            this.frameworkSalario = valor;
        }

        this.setBbddSalario = function(valor) {
            this.bbddSalario = valor;
        }

        this.setSalarioBruto = function(){
            this.totalBruto = this.paisSalario + this.regionSalario + this.rolSalario + this.tecnologiaSalario + this.lenguajeSalario + this.frameworkSalario + this.bbddSalario;
        }
    }
}