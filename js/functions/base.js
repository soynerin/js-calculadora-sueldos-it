const getSalarioPorRegion = function getSalario (id) {
    var salario = {
      1: function () {
        return 5.25;
      },
      2: function () {
        return 2.25;
      },
    };
    return salario[id]();
}

const getSalarioPorRol = function getSalario (id) {
    var salario = {
      1: function () {
        return 2.25;
      },
      2: function () {
        return 3.4;
      },
    };
    return salario[id]();
}