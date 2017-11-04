var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(tableInput, condition, cb) {

    // UPDATE table_name
    // SET column1=value, column2=value2,...
    // WHERE some_column=some_value 

  let query = "UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";"

  // console.log("UPDATE " + tableInput + "SET devoured=true WHERE id=" + condition + ";")
    connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";", function(err, result) {
      if (err) {
        throw err;
      }
     cb(result);
    })
  },

  create: function(tblname, vals, cb){
    
        var insertString = "INSERT INTO ?? SET ?;";
    
        connection.query(insertString, [tblname,{burger: vals.toString()}], function(err, result){
          if(err){
            throw err;
          }
          cb(result);
    })
  }
} 

// Export the orm object for the model (cat.js).
module.exports = orm;

// SELECT * FROM burgers;
// INSERT INTO burgers  
// INSERT INTOburgers VALUES ('undefined');
