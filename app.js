var express = require("express"),
    azuremobapps = require("azure-mobile-apps");

var app = express(),
    mobile = azuremobapps();

mobile.tables.import("./tables");
mobile.api.import("./api");

app.use(mobile);

app.listen(process.env.PORT || 3000);
