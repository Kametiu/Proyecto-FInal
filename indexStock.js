function mostrar() {
    var formulario = document.getElementById('form1');
    formulario.style.display = block;
}

function ingresar(){
    
    let codigoProducto = document.getElementById('codigoBarra').value;
    //alert(codigoProducto);

    let producto = document.getElementById('descripcion').value;
    //alert(producto);

    let precioProducto = document.getElementById('precio').value;
    //alert(precioProducto);

    let vencimientoProducto = document.getElementById('vencimiento').value;
    //alert(vencimientoProducto);
    
    let cantidadProducto = document.getElementById('cantidad').value;
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
}
else{alert("Por favor, complete todos los datos!")}
}