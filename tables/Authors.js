
var azureMobileApp = require("azure-mobile-apps");

// crear tabla

var table = azureMobileApps.table();

//creamos 2 columnas
table.columns = {
    "name" : "string",
    "surname" : "string"
};

// Permisos de acceso a la tabla

table.read.access = 'anonymous';
table.update.access = 'disable';

// Añade la tabla al módulo
module.exports =  table;