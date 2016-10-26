var express = require.("express"),
    azuremobapps = require.("azure-mobile-apps");

var app = express(),
    mobile = azuremobapps();

mobile.table.add("./tables");
mobile.api.add("./api");

app.use(mobile);

app.listen(process.env.PORT || 3000);
