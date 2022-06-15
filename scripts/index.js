function inicio(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><div class=\"PSI_MainCard\">" +
    "Bienvenido a la app SUNICSP. Usted podrá agendar citas de manera sencilla"+
    " y revisar las citas de modo fácil y rápido. Además podrá llevar registro"+
    " de sus engresos e ingresos. La app ClyE le permitirá tener más control "+
    " sobre su negocio y facilitar su oferta de modo eficiente para satisfacer"+ 
    " a sus clientes y optimizar su gestión."+                          
    "</div><br><br><br>";
}

function citas(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><h2>Citas</h2><form>" +
    "<label for=\"fname\">Cliente:</label><br>" +
    "<input type=\"text\" id=\"fname\" name=\"fname\" value=\"\"><br>" +
    "<label for=\"lname\">Sector:</label><br>" +
    "<select name=\"cars\" id=\"cars\"><option value=\"volvo\">Finanzas</option>"+
    "<option value=\"saab\">Legal</option><option value=\"opel\">Estetica</option>"+
    "<option value=\"audi\">Medico</option></select><br>" +
    "<label for=\"lname\">Servicio:</label><br>" +
    "<select name=\"cars\" id=\"cars\"><option value=\"volvo\">Asesoria</option>"+
    "<option value=\"saab\">Inversiones</option><option value=\"opel\">Ahorros</option>"+
    "<option value=\"audi\">Seguros</option></select><br>" +
    "<label for=\"birthday\">Fecha:</label><br>" +
    "<input type=\"date\" id=\"fecha\" name=\"fecha\"><br>" +
    "<label for=\"birthday\">Hora:</label><br>" +
    "<table cellspacing=\"0\" align=\"center\"><tr>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>Dia/Hora</b></br>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>Lunes</b></br></td>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>Martes</b></br></td>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>Miercoles</b></br></td>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>Jueves</b></br></td>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>Viernes</b></br></td>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>Sabado</b></br></td>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>Domingp</b></br></td></tr>"+
    "<tr><td align=\"center\" height=\"20\"><b>7:00 a.m.</b></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td> </tr>"+
    "<tr><td align=\"center\" height=\"20\"><b>8:00 a.m.</b></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td> </tr>"+
    "<tr><td align=\"center\" height=\"20\"><b>9:00 a.m.</b></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td> </tr>"+
    "<tr><td align=\"center\" height=\"20\"><b>10:00 a.m.</b></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td> </tr>"+
    "<tr><td align=\"center\" height=\"20\"><b>11:00 a.m.</b></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td> </tr>"+
    "<tr><td align=\"center\" height=\"20\"><b>12:00 m.d.</b></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td> </tr>"+
    "<tr><td align=\"center\" height=\"20\"><b>1:00 p.m.</b></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td> </tr>"+
    "<tr><td align=\"center\" height=\"20\"><b>2:00 p.m.</b></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td> </tr>"+
    "<tr><td align=\"center\" height=\"20\"><b>3:00 p.m.</b></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td> </tr>"+
    "<tr><td align=\"center\" height=\"20\"><b>4:00 p.m.</b></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td> </tr>"+
    "<tr><td align=\"center\" height=\"20\"><b>5:00 p.m.</b></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td> </tr>"+
    "<tr><td align=\"center\" height=\"20\"><b>6:00 p.m.</b></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td> </tr>"+
    "<tr><td align=\"center\" height=\"20\"><b>7:00 p.m.</b></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td><td align=\"center\" height=\"20\"></td> </tr>"+
    "</table><br><br><br>" +
    "<input type=\"submit\" value=\"Ingresar\"><br>" +
    "</form><br><br><br>"+
    "<br><br><br><h2>Reporte Citas</h2><br><br><br><input type=\"submit\" value=\"Reporte\"><br>" +
    "</form><br><br><br>"+
    "<table><tr><th>Cliente</th><th>Sector</th><th>Servicio</th><th>Fecha</th><th>Hora</th></tr>"+
    "<tr><td>Alfredo Flores</td><td>Finanzas</td><td>Asesoria</td><td>22 de Junio</td><td>7:00 a.m.</td></tr>"+
    "<tr><td>Marta Sanchez</td><td>Estetico</td><td>Corte cabello</td><td>30 de Junio</td><td>9:00 a.m.</td></tr></table>"+
    "<br><br><br>";
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
    "<input type=\"submit\" value=\"Ingresar\"><br>" +
    "<br><br><br><h2>Reporte Ingreso</h2><br><br><br><input type=\"submit\" value=\"Reporte\"><br>" +
    "</form><br><br><br>"+
    "<table><tr><th>Articulo</th><th>Precio</th><th>Cantidad</th></tr>"+
    "<tr><td>Corte cabello/caballero</td><td>C. 5,000.00 </td><td>1</td></tr></table>"+
    "<br><br><br>" ;
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
    "<input type=\"submit\" value=\"Ingresar\"><br>" +
    "<br><br><br><h2>Reporte Ingreso</h2><br><br><br><input type=\"submit\" value=\"Reporte\"><br>" +
    "</form><br><br><br>"+
    "<table><tr><th>Articulo</th><th>Precio</th><th>Cantidad</th></tr>"+
    "<tr><td>Abastecimiento</td><td>C. 250,000.00</td><td>75</td></tr></table>"+
    "<br><br><br>" ;
}

function sesion(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><h2>Iniciar Sesión</h2><form>" +
    "<label for=\"fname\">Usuario/Correo:</label><br>" +
    "<input type=\"text\" id=\"fname\" name=\"fname\" value=\"\"><br>" +
    "<label for=\"lname\">Contraseña:</label><br>" +
    "<input type=\"text\" id=\"lname\" name=\"lname\" value=\"\"><br><br>" +
    "<input type=\"submit\" value=\"Ingresar\"><br>" +
    "</form><br><br><br>"+
    "<table><tr><th>Usuario</th><th>Correo</th><th>Credenciales</th></tr>"+
    "<tr><td>Usuario #1</td><td>usuario@correo.com</td><td>Administrador</td></tr></table><br><br><br>"+
    "<label for=\"lname\">Usuario:</label><br>" +
    "<input type=\"text\" id=\"lname\" name=\"lname\" value=\"\"><br><br>" +
    "<input type=\"submit\" value=\"Ingresar Usuario\"><br><br>" +
    "<input type=\"submit\" value=\"Modificar Usuario\"><br><br>" +
    "<input type=\"submit\" value=\"Eliminar Usuario\"><br><br>" +
    "<br><br><br>";
}

function tienda(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML ="<br><br><br><div class=\"PSI_MainCard\">" +
    "La tienda esta temporalmente cerrada. </div><br><br><br>";
}