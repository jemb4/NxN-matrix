// let num = 15






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
  
      }else if(n > 80){                                         //comprueba que no se le da un valor muy grande
  
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

//hacer que me muestre mi función:


//mostrar función en consola y en pantalla:

// let btn = document.getElementById('btn-1');

// btn.addEventListener("click", cons )

// function cons (){

//   console.log(generateMatrix(3))

//   console.log(3)

//   document.querySelector("#show-matrix").innerHTML = generateTable(3)
// }



// evento que toma el valor del input

function showMatrix () {

  let num = document.getElementById('input-matrix').value;

  console.log(num);
  
  document.querySelector("#show-matrix").innerHTML = generateTable(num);

  console.log(generateMatrix(num));

}

