const cargarComboPorJson = function cargarComboPorJson(element, url, sortById = true) {
  const tagElement = document.getElementById(element);

  const request = new XMLHttpRequest();
  request.open('GET', url, true);    

  request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
          const data = JSON.parse(this.response);

          if (sortById) {
            data[element].sort(function(a,b){
              return a.id - b.id;
          }) 
          } else {
            data[element].sort(function(a,b){
              return a.nombre > b.nombre;
          })
          }

          data[element].map(function(x){
              const option = document.createElement("option");
              option.text = x.nombre;
              option.value = x.id;

              tagElement.appendChild(option);
          });
      } else {
          // We reached our target server, but it returned an error
      }
  };

  request.onerror = function(err) {
      // There was a connection error of some sort
      console.error(err);
  };

  request.send();
}

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