addEventListener('load', inicializarEventos, false);

function inicializarEventos(){
    //Como solo tengo un botón, solo iniciarlizaría el botón
    var objeto = document.getElementById('btn_libros');
    objeto.addEventListener('click',presionEnlace, false);
}

function presionEnlace(e){
    e.preventDefault();
    var url= e.target.getAttribute('href');
    cargarContenido(url);
    //window.alert(url);
}

var conexion;
function cargarContenido(url){
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open("GET", url, true);
    conexion.send();
}

function procesarEventos(){
    var zonavideos = document.getElementById('zonavideos');
    if(conexion.readyState == 4){
        zonavideos.innerHTML = conexion.responseText;
    }
    else{
        zonavideos.innerHTML = "Cargando..."
    }
}

