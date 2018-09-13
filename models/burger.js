var orm = require("./config/orm.js");

orm.selectAll("burgers");
orm.insertOne("burger_name", "burgers");
orm.updateOne("burger_name", "burgers");

