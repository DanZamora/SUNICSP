function inicio(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><div class=\"PSI_MainCard\">" +
    "Bienvenido a la app ClyE. Usted podrá agendar citas de manera sencilla"+
    " y revisar las citas de modo fácil y rápido. Además podrá llevar registro"+
    " de sus engresos e ingresos, ya sean por servicios ofrecidos o por"+ 
    " ingreso de inventario. La app ClyE le permitirá tener más control "+
    " sobre su negocio y facilitar su oferta de modo eficiente para satisfacer"+ 
    " a sus clientes y optimizar su gestión."+                          
    "</div><br><br><br>";
}

function citas(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><h2>Citas</h2><form>" +
    "<label for=\"fname\">Cliente:</label><br>" +
    "<input type=\"text\" id=\"fname\" name=\"fname\" value=\"\"><br>" +
    "<label for=\"lname\">Servicio:</label><br>" +
    "<input type=\"text\" id=\"lname\" name=\"lname\" value=\"\"><br>" +
    "<label for=\"birthday\">Fecha:</label><br>" +
    "<input type=\"date\" id=\"fecha\" name=\"fecha\"><br>" +
    "<label for=\"lname\">Hora:</label><br>" +
    "<input type=\"text\" id=\"lname\" name=\"lname\" value=\"\"><br><br>" +
    "<input type=\"submit\" value=\"Submit\"><br>" +
    "</form><br><br><br>";
}

function ingresos(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><h2>Ingresos</h2><form>" +
    "<label for=\"fname\">Artículo:</label><br>" +
    "<input type=\"text\" id=\"fname\" name=\"fname\" value=\"\"><br>" +
    "<label for=\"lname\">Precio:</label><br>" +
    "<input type=\"text\" id=\"lname\" name=\"lname\" value=\"\"><br>" +
    "<label for=\"lname\">Cantidad:</label><br>" +
    "<input type=\"text\" id=\"lname\" name=\"lname\" value=\"\"><br><br>" +
    "<input type=\"submit\" value=\"Submit\"><br>" +
    "<br><br><br><h2>Reporte Ingreso</h2><br><br><br><input type=\"submit\" value=\"Reporte\"><br>" +
    "</form><br><br><br>";
}

function egresos(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><h2>Egresos</h2><form>" +
    "<label for=\"fname\">Artículo:</label><br>" +
    "<input type=\"text\" id=\"fname\" name=\"fname\" value=\"\"><br>" +
    "<label for=\"lname\">Precio:</label><br>" +
    "<input type=\"text\" id=\"lname\" name=\"lname\" value=\"\"><br>" +
    "<label for=\"lname\">Cantidad:</label><br>" +
    "<input type=\"text\" id=\"lname\" name=\"lname\" value=\"\"><br><br>" +
    "<input type=\"submit\" value=\"Submit\"><br>" +
    "<br><br><br><h2>Reporte Ingreso</h2><br><br><br><input type=\"submit\" value=\"Reporte\"><br>" +
    "</form><br><br><br>";
}

function sesion(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><h2>Iniciar Sesión</h2><form>" +
    "<label for=\"fname\">Usuario/Correo:</label><br>" +
    "<input type=\"text\" id=\"fname\" name=\"fname\" value=\"\"><br>" +
    "<label for=\"lname\">Contraseña:</label><br>" +
    "<input type=\"text\" id=\"lname\" name=\"lname\" value=\"\"><br><br>" +
    "<input type=\"submit\" value=\"Ingresar\"><br>" +
    "</form><br><br><br>";
}

function tienda(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML ="<br><br><br><div class=\"PSI_MainCard\">" +
    "La tienda esta temporalmente cerrada. </div><br><br><br>";
}