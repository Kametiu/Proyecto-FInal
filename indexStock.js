


function ingresar(){
    var codigoProducto = document.getElementById('codigoBarra').value;
//alert(codigoProducto);

var producto = document.getElementById('descripcion').value;
//alert(producto);

var precioProducto = document.getElementById('precio').value;
//alert(precioProducto);

var vencimientoProducto = document.getElementById('vencimiento').value;
//alert(vencimientoProducto);

var cantidadProducto = document.getElementById('cantidad').value;
//alert(cantidadProducto);

    
   if(codigoProducto && producto && precioProducto && vencimientoProducto && cantidadProducto ){

    alert("Ingresar " + producto + " " + "x" + cantidadProducto + "?");

    var node = document.createElement('td');
    node.appendChild(document.createTextNode(codigoProducto));
    document.querySelector('table').appendChild(node);

    var node = document.createElement('td');
    node.appendChild(document.createTextNode(producto));
    document.querySelector('table').appendChild(node);

    var node = document.createElement('td');
    node.appendChild(document.createTextNode(precioProducto));
    document.querySelector('table').appendChild(node);
    
    var node = document.createElement('td');
    node.appendChild(document.createTextNode(vencimientoProducto));
    document.querySelector('table').appendChild(node);
    
    var node = document.createElement('td');
    node.appendChild(document.createTextNode(cantidadProducto));
    document.querySelector('table').appendChild(node);

    var node = document.createElement('tr');
    document.querySelector('table').appendChild(node);
    
    let formulario = document.getElementById('formulario1'); 
    formulario.reset();

   }
else{alert("Por favor, complete todos los datos!")}
}


function ocultar(){
    let estado1 =  document.getElementById('form1').style.display = 'none';
  }
  
  function mostrar() {
      let estado2 =  document.getElementById('form1').style.display = 'block';
   }