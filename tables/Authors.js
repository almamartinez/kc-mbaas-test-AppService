
var azureMobileApps = require("azure-mobile-apps");

/* crear tabla*/

var table = azureMobileApps.table();

/*creamos 2 columnas*/
table.columns = {
    "name" : "string",
    "surname" : "string"
};

// Permisos de acceso a la tabla

//acceso anónimo
table.read.access = 'anonymous';
//acceso con autenticación
table.read.access = 'authenticated';
table.update.access = 'authenticated';
table.insert.access = 'authenticated';
table.delete.access = 'authenticated';

// No permite hacer updates
//table.update.access = 'disabled';


// Añade la tabla al módulo
module.exports =  table;