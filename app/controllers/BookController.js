const { response } = require('express');

const DB = require('../config/db')();

const create = (req, res) => {
    if (
        !req.body.values.bookName || 
        !req.body.values.bookPrice || 
        !req.body.values.bookAuthor
    ) {
        res.status(400).send({
            message: "Fields are empty!"
        });

        return;
    }

    DB.beginTransaction((err) => {
        const book = {
            book_name : req.body.values.bookName,
            book_description : req.body.values.bookDescription,
            book_author : req.body.values.bookAuthor,
            book_price : req.body.values.bookPrice
        };

        // Save Tutorial in the database
        DB.query('INSERT INTO `books` SET ? ', book , (error, results, fields) => {
            if (error) {
                return DB.rollback(() => {
                    throw error;
                });
            };
            
            DB.commit((err) => {
                if (err) {
                    return DB.rollback(() => {
                        throw err;
                    });
                }

                res.send({message: 'success'});
            });
        });
 
    });
}

const update = () => {

}

const deleteOne = () => {

}
 
const findAll = (req, res) => {
    let placeHolders =  [50, 0]; // limit, offset
    console.log( req.query )
    if (req.query.limit && req.query.offset) {
        console.log('limit && offset')
        placeHolders = [Number(req.query.limit), Number(req.query.offset)] 
    } else if (req.query.limit) {
        console.log('limit only')

        placeHolders = [Number(req.query.limit), 0] 
    }  
    
    DB.query('SELECT * from `books` limit ? offset ? ', placeHolders , (error, results, fields) => {
        if (error) {
            res
            .status(500)
            .send({message: 'fail', err : error.sqlMessage});
        }
        
        return res.send({message: 'success', books : results});
    });
}

const findOne = (req, res) => {
    const id = req.params.id ;

    DB.query('SELECT * FROM `books` WHERE `id` = ?', [id], (error, results, fields) => {
        if (error) throw error;
        
        res.send(results);
      
        DB.end()
    });
} 

module.exports = {
    findOne,
    create,
    findAll
}