var matriz =[codigoBarras,nombreProducto,precio,vence,cantidadStock];

var codigoBarras = [];
var aux1 = 0;

var nombreProducto =[];
var aux2 = 0;

 var precio = [];
var aux3 = 0;

 var vence =[];
var aux4 = 0;

 var cantidadStock =[];
var aux5= 0;

var matriz =[codigoBarras,nombreProducto,precio,vence,cantidadStock];

var nuevo;

function buscar(){
let buscarPorCodigo = document.getElementById('codigoBarra2').value;
var retorno = codigoBarras.indexOf(buscarPorCodigo);


if(retorno >= 0){
    var indice = "Producto: "+ nombreProducto[retorno]+ "_____________" + "   Precio: $" + precio[retorno]+ "   Vencimiento: " + vence[retorno]+ "   Stock Disponible: " + cantidadStock[retorno];
    nuevo = document.createElement('h2');
    nuevo.setAttribute("class", "buscado");
    nuevo.appendChild(document.createTextNode(indice));
    document.querySelector('#resultado').appendChild(nuevo);
    nuevo.onclick = function () {
    this.parentElement.removeChild(this);
    };
}
else{
    alert("Producto no encontrado!");
}
}


function ingresar(){
    
var codigoProducto = document.getElementById('codigoBarra').value;

var producto = document.getElementById('descripcion').value;

var precioProducto = document.getElementById('precio').value;

var vencimientoProducto = document.getElementById('vencimiento').value;

var cantidadProducto = document.getElementById('cantidad').value;

    
   if(codigoProducto && producto && precioProducto && vencimientoProducto && cantidadProducto ){

    alert("Ingresar " + producto + " " + "x" + cantidadProducto + "?");

    var node = document.createElement('td');
    node.appendChild(document.createTextNode(codigoProducto));
    document.querySelector('table').appendChild(node);
    
    let a = aux1;
    codigoBarras[a] = codigoProducto;
    a = aux1++;

    var node = document.createElement('td');
    node.appendChild(document.createTextNode(producto));
    document.querySelector('table').appendChild(node);

    let b = aux2;
    nombreProducto[b] = producto;
    b = aux2++;
    

    var node = document.createElement('td');
    node.appendChild(document.createTextNode("$"+ precioProducto));
    document.querySelector('table').appendChild(node);

    let c = aux3;
    precio[c] = precioProducto;
    c = aux3++;
   
    var node = document.createElement('td');
    node.appendChild(document.createTextNode(vencimientoProducto));
    document.querySelector('table').appendChild(node);
    
    let d = aux4;
    vence[d] = vencimientoProducto;
    d = aux4++;

    var node = document.createElement('td');
    node.appendChild(document.createTextNode(cantidadProducto));
    document.querySelector('table').appendChild(node);

    let e = aux5;
    cantidadStock[e] = cantidadProducto;
    e = aux5++;
   
  
    var node = document.createElement('tr');
    document.querySelector('table').appendChild(node);
    
    let formulario = document.getElementById('formulario1'); 
    formulario.reset();

   }
else{alert("Por favor, complete todos los datos!")}
}


function ocultar1(){
    let estado1 =  document.getElementById('form1').style.display = 'none';
  }
  
  function mostrar1() {
      let estado2 =  document.getElementById('form1').style.display = 'block';
   }

   function ocultar2(){
    let estado1 =  document.getElementById('form2').style.display = 'none';
  }
  
  function mostrar2() {
      let estado2 =  document.getElementById('form2').style.display = 'block';
   }