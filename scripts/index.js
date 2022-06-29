
function inicio(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><div class=\"PSI_MainCard\">" +
    "Bienvenido a la app MiEmpresa. Usted podrá agendar citas de manera sencilla"+
    " y revisar las citas de modo fácil y rápido. Además podrá llevar registro"+
    " de sus engresos e ingresos. La app MiEmpresa le permitirá tener más control "+
    " sobre su negocio y facilitar su oferta de modo eficiente para satisfacer"+ 
    " a sus clientes y optimizar su gestión."+                          
    "</div><br><br><br>";
}

function citas(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><h2>Citas</h2><form name=\"citasForms\" action=\"\" onsubmit=\"return citasSubmit()\" method=\"post\">" +
    "<label for=\"fname\">Cliente:</label><br>" +
    "<input type=\"text\" id=\"citasCliente\" name=\"citasCliente\" value=\"\"><br>" +
    "<label for=\"lname\">Servicio:</label><br>" +
    "<input type=\"text\" id=\"citasServicio\" name=\"citasServicio\" value=\"\"><br>" +
    "<label for=\"lname\">Fecha:</label><br>" +
    "<input type=\"date\" id=\"citasFecha\" name=\"citasFecha\"><br>" +
    "<label for=\"lname\">Hora:</label><br>" +
    "<table id=\"calendar\" cellspacing=\"0\" align=\"center\"><tr>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>Dia/Hora</b></br>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>L</b></br></td>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>K</b></br></td>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>M</b></br></td>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>J</b></br></td>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>V</b></br></td>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>S</b></br></td>"+
    "<td align=\"center\" height=\"30\" width=\"100\"><br><b>D</b></br></td></tr>"+
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
    "<br><br><br><h2>Reporte Citas</h2><br><br><br><form name=\"citasReporteForms\" action=\"\" onsubmit=\"return citasReporte()\" method=\"post\"><input type=\"submit\" value=\"Reporte\"><br>" +
    "</form><br><br><br>";
}

function ingresos(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><h2>Ingresos</h2><form name=\"ingresosForms\" action=\"\" onsubmit=\"return ingresosSubmit()\" method=\"post\">" +
    "<label for=\"fname\">Artículo:</label><br>" +
    "<input type=\"text\" id=\"ingresoArticulo\" name=\"ingresoArticulo\" value=\"\"><br>" +
    "<label for=\"lname\">Precio:</label><br>" +
    "<input type=\"text\" id=\"ingresoPrecio\" name=\"ingresoPrecio\" value=\"\"><br>" +
    "<label for=\"lname\">Cantidad:</label><br>" +
    "<input type=\"text\" id=\"ingresoCantidad\" name=\"ingresoCantidad\" value=\"\"><br><br>" +
    "<input type=\"submit\" value=\"Ingresar\"><br>" +
    "</form><br><br><br><h2>Reporte Ingreso</h2><br><br><br><form name=\"ingresosReporteForms\" action=\"\" onsubmit=\"return ingresosReporte()\" method=\"post\"><input type=\"submit\" value=\"Reporte\"><br>" +
    "</form><br><br><br>";
}

function egresos(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><h2>Egresos</h2><form name=\"egresosForms\" action=\"\" onsubmit=\"return egresosSubmit()\" method=\"post\">" +
    "<label for=\"fname\">Artículo:</label><br>" +
    "<input type=\"text\" id=\"egresoArticulo\" name=\"egresoArticulo\" value=\"\"><br>" +
    "<label for=\"lname\">Precio:</label><br>" +
    "<input type=\"text\" id=\"egresoPrecio\" name=\"egresoPrecio\" value=\"\"><br>" +
    "<label for=\"lname\">Cantidad:</label><br>" +
    "<input type=\"text\" id=\"egresoCantidad\" name=\"egresoCantidad\" value=\"\"><br><br>" +
    "<input type=\"submit\" value=\"Ingresar\"><br>" +
    "</form><br><br><br><h2>Reporte Ingreso</h2><br><br><br><form name=\"egresosReporteForms\" action=\"\" onsubmit=\"return egresosReporte()\" method=\"post\"><input type=\"submit\" value=\"Reporte\"><br>" +
    "</form><br><br><br>";
}

function sesion(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML = "<br><br><br><h2>Iniciar Sesión</h2><form name=\"sesionForms\" action=\"\" onsubmit=\"return sesionSubmit()\" method=\"post\">" +
    "<label for=\"fname\">Usuario/Correo:</label><br>" +
    "<input type=\"text\" id=\"sesionUsuario\" name=\"sesionUsuario\" value=\"\"><br>" +
    "<label for=\"lname\">Contraseña:</label><br>" +
    "<input type=\"text\" id=\"sesionCredenciales\" name=\"sesionCredenciales\" value=\"\"><br><br>" +
    "<input type=\"submit\" value=\"Ingresar\"><br><br><br>" +
    "<input type=\"submit\" value=\"Registrar\"><br>" +
    "</form><br><br><br><br><h2>Reporte Sesiones</h2><br><br><br><form name=\"sesionReporteForms\" action=\"\" onsubmit=\"return sesionReporte()\" method=\"post\"><input type=\"submit\" value=\"Reporte\"><br></form><br><br><br>";
}

function tienda(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML ="<br><br><br><div class=\"PSI_MainCard\">" +
    "La tienda esta temporalmente cerrada. </div><br><br><br>";
}

function citasSubmit(){
    ingresoArticulo = document.forms["citasForms"]["citasCliente"].value;
    console.log(ingresoArticulo);
    ingresoPrecio = document.forms["citasForms"]["citasServicio"].value;
    console.log(ingresoPrecio);
    ingresoCantidad = document.forms["citasForms"]["citasFecha"].value;
    console.log(ingresoCantidad); 
}
function ingresosSubmit(){
    ingresoArticulo = document.forms["ingresosForms"]["ingresoArticulo"].value;
    console.log(ingresoArticulo);
    ingresoPrecio = document.forms["ingresosForms"]["ingresoPrecio"].value;
    console.log(ingresoPrecio);
    ingresoCantidad = document.forms["ingresosForms"]["ingresoCantidad"].value;
    console.log(ingresoCantidad); 
}
function egresosSubmit(){
    egresoArticulo = document.forms["egresosForms"]["egresoArticulo"].value;
    console.log(egresoArticulo);
    egresoPrecio = document.forms["egresosForms"]["egresoPrecio"].value;
    console.log(egresoPrecio);
    egresoCantidad = document.forms["egresosForms"]["egresoCantidad"].value;
    console.log(egresoCantidad); 
}
function sesionSubmit(){
    sesionUsuario = document.forms["sesionForms"]["sesionUsuario"].value;
    console.log(sesionUsuario);
    sesionCredenciales = document.forms["sesionForms"]["sesionCredenciales"].value;
    console.log(sesionCredenciales); 
}
function citasReporte(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML += "<table><tr><th>Cliente</th><th>Sector</th><th>Servicio</th><th>Fecha</th><th>Hora</th></tr>"+
    "<tr><td>Alfredo Flores</td><td>Finanzas</td><td>Asesoria</td><td>22 de Junio</td><td>7:00 a.m.</td></tr>"+
    "<tr><td>Marta Sanchez</td><td>Estetico</td><td>Corte cabello</td><td>30 de Junio</td><td>9:00 a.m.</td></tr></table>"+
    "<br><br><br><select name=\"optionlist\" onChange=\"\"><option>Semanal</option><option>Quincenal</option><option>Mensual</option></select><div id=\"citasPlot\"></div>";
    var xArray = [50,60,70,80,90,100,110,120,130,140,150];
    var yArray = [7,8,8,9,9,9,10,11,14,14,15];

    // Define Data
    var data = [{
    x: xArray,
    y: yArray,
    mode:"lines"
    }];

    // Define Layout
    var layout = {
    xaxis: {range: [40, 160], title: "Fechas"},
    yaxis: {range: [5, 16], title: "Cantidad de Citas"},  
    title: "Citas"
    };

    // Display using Plotly
    Plotly.newPlot("citasPlot", data, layout);
}
function ingresosReporte(){ 
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML += "<table><tr><th>Articulo</th><th>Precio</th><th>Cantidad</th></tr>"+
    "<tr><td>Corte cabello/caballero</td><td>C. 5,000.00 </td><td>1</td></tr></table>"+
    "<br><br><br><select name=\"optionlist\" onChange=\"\"><option>Semanal</option><option>Quincenal</option><option>Mensual</option></select><div id=\"ingresosPlot\"></div>"; 
    var xArray = [50,60,70,80,90,100,110,120,130,140,150];
    var yArray = [7,8,8,9,9,9,10,11,14,14,15];

    // Define Data
    var data = [{
    x: xArray,
    y: yArray,
    mode:"lines"
    }];

    // Define Layout
    var layout = {
    xaxis: {range: [40, 160], title: "Fechas"},
    yaxis: {range: [5, 16], title: "Ingresos Totales"},  
    title: "Ingresos"
    };

    // Display using Plotly
    Plotly.newPlot("ingresosPlot", data, layout);
}
function egresosReporte(){
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML += "<table><tr><th>Articulo</th><th>Precio</th><th>Cantidad</th></tr>"+
    "<tr><td>Abastecimiento</td><td>C. 250,000.00</td><td>75</td></tr></table>"+
    "<br><br><br><select name=\"optionlist\" onChange=\"\"><option>Semanal</option><option>Quincenal</option><option>Mensual</option></select><div id=\"egresosPlot\"></div>";
    var xArray = [50,60,70,80,90,100,110,120,130,140,150];
    var yArray = [7,8,8,9,9,9,10,11,14,14,15];

    // Define Data
    var data = [{
    x: xArray,
    y: yArray,
    mode:"lines"
    }];

    // Define Layout
    var layout = {
    xaxis: {range: [40, 160], title: "Fechas"},
    yaxis: {range: [5, 16], title: "Egresos Totales"},  
    title: "Egresos"
    };

    // Display using Plotly
    Plotly.newPlot("egresosPlot", data, layout);
}
function sesionReporte(){ 
    const main = document.getElementsByClassName("PSI_Main")[0];
    main.innerHTML += "<table><tr><th>Usuario</th><th>Correo</th><th>Credenciales</th></tr>"+
    "<tr><td>Usuario #1</td><td>usuario@correo.com</td><td>Administrador</td></tr></table><br><br><br>"+
    "<label for=\"lname\">Usuario:</label><br>" +
    "<input type=\"text\" id=\"lname\" name=\"lname\" value=\"\"><br><br>" +
    "<input type=\"submit\" value=\"Eliminar\"><br><br>" +
    "<input type=\"submit\" value=\"Credenciales\"><br><br>" +
    "<input type=\"submit\" value=\"Agregar Usuario\"><br><br>" +
    "<br><br><br>"
}