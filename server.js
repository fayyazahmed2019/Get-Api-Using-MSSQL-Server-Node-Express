const sql = require("mssql");
const express = require('express');
const app = express();


app.get('/category', function (req, res) {

    // config for your database

    const config = {

        user: 'sa',
        password: 'pass',
        server: 'localhost',
        database: 'jsfay',

        options: {
          trustServerCertificate: true,
          encrypt: false,

      }

    };


    // connect to your database


    sql.connect(config, (err)=> {


        if (err) console.log(err);


        // create Request object


        const request = new sql.Request();


        // query to the database and get the records


        request.query('select  * from category',(err, recordset) => {


            if (err) console.log(err)
            // send records as a response
            res.send(recordset);
        });


    });

});


const server = app.listen(6000, () => {

    console.log('Server is running..');


});
