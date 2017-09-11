//alert("BIENVENIDO!");

$(document).ready(function(){
  $('#open').click(function(event){
        $('#popup').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        event.preventDefault();
    });
    
    $('#close').click(function(event){
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        event.preventDefault();
    });

        var fecha = new Date();
        $("#titulo").html(getSesion());
        $("#fecha").html("MENSAJE GENERADO: " + fecha.toLocaleString());
        document.getElementById("botonFormulario").addEventListener("click", procesarEmail, false);
});

function procesarEmail(evento) {
    var correo = "";
    correo = document.getElementById("correo").value;
    setSesion(correo);
    var ventana = window.open("http://www.royalhostel.es/mensaje.html");
    ventana.postMessage(correo, "*");
}

function setSesion(correo) {
    sessionStorage.setItem("email", correo);
}

function getSesion() {
    return sessionStorage.getItem("email");
}