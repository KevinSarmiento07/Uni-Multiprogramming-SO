/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


const btnAgregar = document.getElementById("btnAgregar");
const contenedorCampos = document.getElementById("contenedorCampos");
const contenedorUni = document.getElementById("contenedorUni");
const contenedorMulti = document.getElementById("contenedorMulti");
//Matriz que contendrá los datos leídos en los input-text
let matrizDatos=[];

btnAgregar.addEventListener("click", function () {
  const divCampos = document.createElement("div");

  for (let i = 1; i <= 3; i++) {
    const inputCampo = document.createElement("input");
    inputCampo.type = "text";
    inputCampo.name = `campo${i}`;
    var m="";
    switch(i){
        
            case 1: m="Input Process ID";
                break;
                case 2: m="Input CPU Time";
                break;
                
                case 3: m="Input I/O Time";
                break;
    }
    
    inputCampo.placeholder=m;
    divCampos.appendChild(inputCampo);
  }

  contenedorCampos.appendChild(divCampos);
});



btnLeer.addEventListener("click", function () {
  const camposTexto = document.querySelectorAll("input[type=text]");

  const filaTabla = document.createElement("tr");
  const celdaIdProceso = document.createElement("td");
  const celdaTiempoCPU = document.createElement("td");
  const celdaTiempoIO = document.createElement("td");
  
  let filas=camposTexto.length/3;
  let col=0;
  let j=0;
  for (let i=0;i<filas;i++)
  {
      matrizDatos[i]=[];
      matrizDatos[i][j]=camposTexto[col].value;
      matrizDatos[i][j+1]=camposTexto[col+1].value;
      matrizDatos[i][j+2]=camposTexto[col+2].value;
      col+=3;
      
      
  }
  window.alert("The data read dynamically in the input-text is loaded into an array named matrizDatos of size nx3. \n You can use this array to solve your requirements. ");
  console.log(matrizDatos);
  createTable(matrizDatos);
});



function createTable(matrix) {
 let table = '<table border="1" align="center"><thead><tr><th>ID </th><th>CPU Time</th><th>I/O Time</th></tr></thead><tbody>';
  for (let i = 0; i < matrix.length; i++) {
    table += '<tr><td>' + matrix[i][0] + '</td><td>' + matrix[i][1] + '</td><td>' + matrix[i][2] + '</td></tr>';
  }
  table += '</tbody></table>';
  document.getElementById('tabla').innerHTML = table;
}



btnUni.addEventListener("click", function () {
     const nuevoParrafo = document.createElement("p");
    const textoParrafo = document.createTextNode("A table for Uniprogramming is printed below.");
    nuevoParrafo.appendChild(textoParrafo);
    contenedorUni.appendChild(nuevoParrafo);
});

btnMulti.addEventListener("click", function () {
     const nuevoParrafo = document.createElement("p");
    const textoParrafo = document.createTextNode("A table for Multiprogramming is printed below.");
    nuevoParrafo.appendChild(textoParrafo);
    contenedorMulti.appendChild(nuevoParrafo);
});