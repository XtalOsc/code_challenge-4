var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});
var path = require('path');
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/treatYoself';
//access public folder
app.use(express.static('/server/public/views'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//spin up server - listening on port 8080
app.listen('8081', function(){
  console.log('listening on port 8081');
});


// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'server/public/views/index.html' ) );
}); // end base url


// get tasks
app.get( '/treats', function( req, res ){
  console.log( 'in treats' );
  pg.connect( connectionString, function( err, client, done ){
    if( err ){
      console.log( err );
    } // end err
    else{
      console.log( 'connected to database in get treats');
      // array to hold our results to return to client
      var results=[];
      // get query results
      var queryResults = client.query( 'SELECT * FROM treat' );
      queryResults.on( 'row' , function( row ){
        // push each row into results array
        results.push( row );
      }); // end on row
      queryResults.on( 'end', function(){
        // done
        done();
        res.send( results );
      }); //end done
    } // end no err
  }); // end pg connect
}); // end treats get

app.post( '/treats', urlEncodedParser, function( req, res ){
  console.log( 'in treats post:', req.body );
  pg.connect( connectionString, function( err, client, done ){
    if( err ){
      console.log( err );
    }
    else{
      console.log( 'connected to database in post treats' );
      // insert new item to db
      client.query( 'INSERT INTO treat ( name, description, pic ) VALUES ( $1, $2, $3 )', [ req.body.name, req.body.description, req.body.pic ] );
    } // end no error
  }); // end pg connect
  res.send( true );
}); // end treats post
