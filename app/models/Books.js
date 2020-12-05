const DB = require("../config/db.js");

const DB = {
    create : () => {
        DB().query();
        
        console.log('created')
    },
    update : () => {
        console.log('update')

    },
    delete : () => {
        console.log('delete')

    },
    first : () => {
        console.log('first')

    }, 
    all : () => {
        console.log('all')

    } 
}
 

module.exports = DB;