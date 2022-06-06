function inicio(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><div class=\"PSI_MainCard\">" +
    "Bienvenido a la app ClyE. Usted podrá agendar citas de manera sencilla"+
    "y revisar las citas de modo fácil y rápido. Además podrá llevar registro"+
    "de sus engresos e ingresos, ya sean por servicios ofrecidos o por"+ 
    "ingreso de inventario. La app ClyE le permitirá tener más control "+
    "sobre su negocio y facilitar su oferta de modo eficiente para satisfacer"+ 
    "a sus clientes y optimizar su gestión."+                          
    "</div>";
}

function citas(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><h2>Citas</h2><form action=\"/action_page.php\">" +
    "<label for=\"fname\">First name:</label><br>" +
    "<input type=\"text\" id=\"fname\" name=\"fname\" value=\"John\"><br>" +
    "<label for=\"lname\">Last name:</label><br>" +
    "<input type=\"text\" id=\"lname\" name=\"lname\" value=\"Doe\"><br>" +
    "<label for=\"birthday\">Birthday:</label><br>" +
    "<input type=\"date\" id=\"birthday\" name=\"birthday\"> " +
    "<input type=\"submit\" value=\"Submit\"><br>" +
    "</form>";
}

function ingresos(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><h2>Ingresos</h2><form action=\"/action_page.php\">" +
    "<label for=\"fname\">First name:</label><br>" +
    "<input type=\"text\" id=\"fname\" name=\"fname\" value=\"John\"><br>" +
    "<label for=\"lname\">Last name:</label><br>" +
    "<input type=\"text\" id=\"lname\" name=\"lname\" value=\"Doe\"><br>" +
    "<input type=\"submit\" value=\"Submit\"><br>" +
    "<br><br><br><h2>Reporte Ingreso</h2><br><br><br><input type=\"submit\" value=\"Reporte\"><br>" +
    "</form>";
}

function egresos(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><h2>Egresos</h2><form action=\"/action_page.php\">" +
    "<label for=\"fname\">First name:</label><br>" +
    "<input type=\"text\" id=\"fname\" name=\"fname\" value=\"John\"><br>" +
    "<label for=\"lname\">Last name:</label><br>" +
    "<input type=\"text\" id=\"lname\" name=\"lname\" value=\"Doe\"><br>" +
    "<input type=\"submit\" value=\"Submit\"><br>" +
    "<br><br><br><h2>Reporte Ingreso</h2><br><br><br><input type=\"submit\" value=\"Reporte\"><br>" +
    "</form>";
}