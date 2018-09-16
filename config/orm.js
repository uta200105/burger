var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.log(result);
            return cb(result);
        });
    },
    insertOne: function(colToSearch, table, cb) {
        var queryString = "INSERT INTO ?? FROM ??";
        connection.query(queryString, [colToSearch, table], function(err, result) {
            if (err) throw err;
            console.log(results);
            return cb(results);
        });
    },
    updateOne: function(colToUpdate, table, cb) {
    var queryString = "UPDATE ?? FROM ??";
    connection.query(querySting, [colToUpdate, table], function(err, result) {
        if (err) throw err;
        console.log(results);
        return cb(results);
    });
    },
}

module.exports = orm;