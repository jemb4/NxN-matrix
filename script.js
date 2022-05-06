
// función que genera una matrix n

function generateMatrix (n){
  
    let aux = [];
    let matrix = [];  
    
    if(isNaN(n)){                                                 //comprueba que estoy dandole un número 

      return " Por favor inserte un número diferente de 0 "  

    }else if(n == 0){                                         //comprueba que no estoy dando un valor de 0

      return "No existen matrices con dimensión 0"

    }else {                                                   //me genera la matriz

      for (let i = 0; i < n; i++){
      for (let j = 0; j < n; j++){
          if(i == j || j + 1 == n - i){
            aux[j] = "X"
          } else {
            aux[j] = " "
          }
        }
        matrix.push(aux);
        aux = [];
      }
    }
    
    return matrix
  };


// función que me crea una tabla en html

function generateTable (n){
    let html = "<table>"


    if(isNaN(n)){                                                 //comprueba que estoy dandole un número 

        return " Por favor inserte un número diferente de 0 "  
  
      }else if(n == 0){                                         //comprueba que no estoy dando un valor de 0
  
        return "No existen matrices con dimensión 0"
  
      }else if(n > 65){                                         //comprueba que no se le da un valor muy grande
  
        return "La matriz es demasiado grande para mostrarse en pantalla"
  
      }else{                                                    //genera una tabla con los valores de n dados, poniendo las diagonales en negro
    for (let i = 0; i < n; i++){
        html += "<tr>"
        for (let j = 0; j < n; j++){
            if(i == j || j+1 == n-i){
                html += `<td class="diagonal">`
            } else {
                html += "<td>"
            }
            html += "</td>"
        }
        html += "</tr>"
    }

    html += "</table>"
      }

    return html
}

//hacer que se muestre todo lo realizado en la función:

function showMatrix () {

  let num = document.getElementById('input-matrix').value;

  console.log(num);
  
  document.querySelector("#show-matrix").innerHTML = generateTable(num);

  console.log(generateMatrix(num));

}

//Hacer que funcione pulsando enter en el input

let inputEnter = document.getElementById('input-matrix'); //convertimos el id en una variable solo por "estetica"
inputEnter.addEventListener('keyup', function onEvent(e) { //"escucha" cuando pulsamos un botón en el input y hace algo
    if (e.keyCode === 13) {  // el número 13 hace referencia al botón enter
        showMatrix()
    }
});

