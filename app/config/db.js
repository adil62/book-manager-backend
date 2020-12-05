var mysql = require('mysql')

const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'books_dash'
}

// require () takes path and returns the module.exports object 

module.exports =  (db) => { 
  return connection = mysql.createConnection(config, {database: db} )
} ;