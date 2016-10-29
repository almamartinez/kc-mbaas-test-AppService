
var azureMobileApp = require("azure-mobile-apps");

// crear tabla

var table = azureMobileApps.table();

//creamos 2 columnas
table.columns = {
    "name" : "string",
    "surname" : "string"
};

// Añade la tabla al módulo
module.exports =  table;