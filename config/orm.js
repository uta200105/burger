var connection = require("./connection.js");

var orm = {
    selectAll: function(table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.log(result);
            return results;
        });
    },
    insertOne: function(colToSearch, table) {
        var queryString = "INSERT INTO ?? FROM ??";
        connection.query(queryString, [colToSearch, table], function(err, result) {
            if (err) throw err;
            console.log(results);
            return results;
        });
    },
    updateOne: function(colToUpdate, table) {
    var queryString = "UPDATE ?? FROM ??";
    connection.query(querySting, [colToUpdate, table], function(err, result) {
        if (err) throw err;
        console.log(results);
        return results;
    });
    },
}

module.export = orm;