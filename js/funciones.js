document.addEventListener("DOMContentLoaded", inicio, false);

function inicio() {
    $(".boton-enviar").click(recogerDatos);

    $(document).ready(function() {
        $("footer").animate({
            fontSize: '1rem'
        });

        $("#nube").animate({
            left: '-22rem',
            opacity: "0"
        });

        $("#nube2").animate({
            left: '22rem',
            opacity: "0"
        });

        $("main").hide();
        $("#deslizar").click(function() {
            $("main").slideToggle();
        });

        $("#aside").hide();
        $("#deslizar2").click(function() {
            $("#aside").slideToggle(400, function() {
                if ($(this).attr("data-activado") == "true") {
                    $(this).attr("data-activado", "false");
                    if($("#cabeceraypie").attr("data-activado") == "false"){
                        $("#enviar").removeAttr("hidden");
                    }
                } else {
                    $("#enviar").attr("hidden", "false");
                    $(this).attr("data-activado", "true");
                }
            });
        });

        $("#cabeceraypie").hide();
        $("#deslizar3").click(function() {
            $("#cabeceraypie").slideToggle(400, function() {
                if ($(this).attr("data-activado") == "true") {
                    $(this).attr("data-activado", "false");
                    $("#enviar2").removeAttr("hidden");
                    if($("#aside").attr("data-activado") == "false"){
                        $("#enviar").removeAttr("hidden");
                    }
                } else {
                    $("#enviar").attr("hidden", "false");
                    $("#enviar2").attr("hidden", "false");
                    $(this).attr("data-activado", "true");
                }
            });
        });
    });
}

function recogerDatos() {
    var datos = {
        alineamiento: $("#alinear").val(),
        fuente: $("#tipoFuente").val(),
        estilo: $("#estiloFuente").val(),
        fontSize: $("#fontSize").val(),
        coloresFondo: $("#colorFondo").val(),
        coloresLetra: $("#colorLetra").val(),
        titulo: $("#title").val(),
        cabecera: $("#cabecera").val(),
        central: $("#central").val(),
    };

    if ($("#aside").attr("data-activado") == "true") {
        datos.alineamiento2 = $("#alinear2").val();
        datos.fuente2 = $("#tipoFuente2").val();
        datos.estilo2 = $("#estiloFuente2").val();
        datos.fontSize2 = $("#fontSize2").val();
        datos.coloresFondo2 = $("#colorFondo2").val();
        datos.coloresLetra2 = $("#colorLetra2").val();
        datos.cabecera2 = $("#cabecera2").val();
        datos.central2 = $("#central2").val();
    }

    if ($("#cabeceraypie").attr("data-activado") == "true") {
        datos.alineamiento3 = $("#alinear3").val();
        datos.fuente3 = $("#tipoFuente3").val();
        datos.estilo3 = $("#estiloFuente3").val();
        datos.fontSize3 = $("#fontSize3").val();
        datos.coloresFondo3 = $("#colorFondo3").val();
        datos.coloresLetra3 = $("#colorLetra3").val();
        datos.cabecera3 = $("#cabecera3").val();

        datos.alineamiento4 = $("#alinear4").val();
        datos.fuente4 = $("#tipoFuente4").val();
        datos.estilo4 = $("#estiloFuente4").val();
        datos.fontSize4 = $("#fontSize4").val();
        datos.coloresFondo4 = $("#colorFondo4").val();
        datos.coloresLetra4 = $("#colorLetra4").val();
        datos.cabecera4 = $("#cabecera4").val();
    }

    pintarPagina(datos);
}

function pintarPagina(datos) {
    var doc = document.implementation.createHTMLDocument(datos.titulo);
    var header = doc.createElement("header");
    var footer = doc.createElement("footer");
    var div = doc.createElement("div");
    var link = doc.createElement("link");
    var script = doc.createElement("script");
    var script2 = doc.createElement("script");
    var body = doc.createElement("body");
    var h1 = doc.createElement("h1");
    var p = doc.createElement("p");
    var p2 = doc.createElement("p");
    var a = doc.createElement("a");
    var article = doc.createElement("article");

    var textoLink = doc.createTextNode("VER EL FORMULARIO");
    var textoCabecera = doc.createTextNode(datos.cabecera3);
    var textoFooter = doc.createTextNode(datos.cabecera4);

    div.setAttribute("class", "clear");
    a.setAttribute("id", "open");

    var tituloMain = doc.createTextNode(datos.cabecera);
    var tituloCabecera = doc.createTextNode(datos.cabecera3);
    var textoCentral = doc.createTextNode(datos.central);

    var urlAbsoluta = document.location.toString();
    var urlAbsoluta2;
    var urlAbsoluta3;
    var urlAbsoluta4;

    if (urlAbsoluta.indexOf("index.html") != -1) {
        urlAbsoluta = urlAbsoluta.split("/");
        urlAbsoluta.pop();
        urlAbsoluta = urlAbsoluta.join("/");
    }

    urlAbsoluta4 = urlAbsoluta + "/img/close.png";
    urlAbsoluta3 = urlAbsoluta + "/libs/jquery-3.1.1.js";
    urlAbsoluta2 = urlAbsoluta + "/js/funciones2.js";
    urlAbsoluta += "/css/estilos2.css";

    script.setAttribute("type", "text/javascript");
    script2.setAttribute("type", "text/javascript");
    script2.setAttribute("src", urlAbsoluta3);
    script2.setAttribute("defer", "defer");
    script.setAttribute("src", urlAbsoluta2);
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", urlAbsoluta);
    body.setAttribute("id", "bodySegunda");

    h1.appendChild(tituloMain);
    p2.appendChild(textoCentral);
    a.appendChild(textoLink);
    article.appendChild(h1);
    article.appendChild(p2);
    doc.documentElement.appendChild(body);

    var ventana = window.open();
    ventana.document.documentElement.innerHTML = doc.documentElement.innerHTML;
    ventana.document.head.appendChild(link);
    ventana.document.head.appendChild(script2);

    var body2 = ventana.document.body;

    header.appendChild(textoCabecera);
    p.appendChild(textoFooter);
    footer.appendChild(p);

    body2.appendChild(header);
    body2.appendChild(a);
    body2.appendChild(article);

    article.style.textAlign = datos.alineamiento;
    article.style.backgroundColor = datos.coloresFondo;
    article.style.color = datos.coloresLetra;
    article.style.fontStyle = datos.estilo;
    article.style.fontSize = datos.fontSize;
    article.style.fontFamily = datos.fuente;

    if ($("#aside").attr("data-activado") == "true") {
        article.setAttribute("class", "articulo");

        var h2 = doc.createElement("h2");
        var p = doc.createElement("p");
        var aside = doc.createElement("aside");

        var textoCabecera = doc.createTextNode(datos.cabecera2);
        var textoCentral = doc.createTextNode(datos.central2);

        h2.appendChild(textoCabecera);
        p.appendChild(textoCentral);
        aside.appendChild(h2);
        aside.appendChild(p);
        body2.appendChild(aside);

        aside.style.textAlign = datos.alineamiento2;
        aside.style.backgroundColor = datos.coloresFondo2;
        aside.style.color = datos.coloresLetra2;
        aside.style.fontStyle = datos.estilo2;
        aside.style.fontSize = datos.fontSize2;
        aside.style.fontFamily = datos.fuente2;
    }

    if ($("#cabeceraypie").attr("data-activado") == "true") {
        header.style.textAlign = datos.alineamiento3;
        header.style.backgroundColor = datos.coloresFondo3;
        header.style.color = datos.coloresLetra3;
        header.style.fontStyle = datos.estilo3;
        header.style.fontSize = datos.fontSize3;
        header.style.fontFamily = datos.fuente3;

        footer.style.textAlign = datos.alineamiento4;
        footer.style.backgroundColor = datos.coloresFondo4;
        footer.style.color = datos.coloresLetra4;
        footer.style.fontStyle = datos.estilo4;
        footer.style.fontSize = datos.fontSize4;
        footer.style.fontFamily = datos.fuente4;
    }

    var divOverlay = document.createElement("div");
    divOverlay.setAttribute("class", "popup-overlay");

    body2.appendChild(pintarPopup(urlAbsoluta4, pintarFormulario()));
    body2.appendChild(divOverlay);
    body2.appendChild(div);
    body2.appendChild(footer);

    setTimeout(function(){
        ventana.document.head.appendChild(script);
    }, 1000);
}

function pintarFormulario(){
	var tabla = document.createElement("div");
    var nodos = {};

    tabla.setAttribute("class", "tabla-responsive");

    for(var i = 1; i < 5; i++){

        nodos["fila" + i] = document.createElement("div");
        nodos["divLabel" + i] = document.createElement("div");
        nodos["divInput" + i] = document.createElement("div");
        nodos["label" + i] = document.createElement("label");
        nodos["input" + i] = document.createElement("input");

        switch(i){
            case 1:
                nodos["textLabel" + i] = document.createTextNode("NOMBRE");
                nodos["label" + i].setAttribute("for", "nombre");
                nodos["input" + i].setAttribute("id", "nombre");
                nodos["input" + i].setAttribute("type", "text");
                break;
            case 2:
                nodos["textLabel" + i] = document.createTextNode("APELLIDOS");
                nodos["label" + i].setAttribute("for", "apellidos");
                nodos["input" + i].setAttribute("id", "apellidos");
                nodos["input" + i].setAttribute("type", "text");
                break;
            case 3:
                nodos["textLabel" + i] = document.createTextNode("CIUDAD");
                nodos["label" + i].setAttribute("for", "ciudad");
                nodos["input" + i].setAttribute("id", "ciudad");
                nodos["input" + i].setAttribute("type", "text");
                break;
            case 4:
                nodos["textLabel" + i] = document.createTextNode("CORREO");
                nodos["label" + i].setAttribute("for", "correo");
                nodos["input" + i].setAttribute("id", "correo");
                nodos["input" + i].setAttribute("type", "email");
                break;
        }

        //console.log(JSON.stringify(nodos));
        nodos["fila" + i].setAttribute("class", "fila");
        nodos["label" + i].appendChild(nodos["textLabel" + i]);
        nodos["divLabel" + i].appendChild(nodos["label" + i]);
        nodos["divInput" + i].appendChild(nodos["input" + i]);
        nodos["fila" + i].appendChild(nodos["divLabel" + i]);
        nodos["fila" + i].appendChild(nodos["divInput" + i]);
        tabla.appendChild(nodos["fila" + i]);
    }

    var boton = document.createElement("button");
    var textoBoton = document.createTextNode("ENVIAR");

    boton.appendChild(textoBoton);

    boton.setAttribute("type", "submit");
    boton.setAttribute("id", "botonFormulario");
    tabla.appendChild(boton);

	return tabla;
}

function pintarPopup(urlAbsoluta4, tabla){
	var divPrincipal = document.createElement("div");
	var divSecundario = document.createElement("div");
	var div3 = document.createElement("div");
	var div4 = document.createElement("div");
	var h2 = document.createElement("h2");
	var a = document.createElement("a");
	var img = document.createElement("img");
	var textoH2 = document.createTextNode("INTRODUCE TUS DATOS");
	
	divPrincipal.setAttribute("id", "popup");
	divPrincipal.setAttribute("style", "display: none;");
	divSecundario.setAttribute("class", "content-popup");
	div3.setAttribute("class", "close");
	a.setAttribute("href", "#");
	a.setAttribute("id", "close");
	img.setAttribute("src", urlAbsoluta4);
	img.setAttribute("title", "Cerrar ventana");

	h2.appendChild(textoH2);
	div4.appendChild(h2);
	a.appendChild(img);
	div3.appendChild(a);
	divSecundario.appendChild(div3);
	divSecundario.appendChild(div4);
	divSecundario.appendChild(tabla);
	divPrincipal.appendChild(divSecundario);

	return divPrincipal;
}