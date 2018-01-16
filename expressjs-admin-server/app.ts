/*
  Main file of the server
  ./expressjs-admin-server/app.ts
*/
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as logger from 'morgan';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';

import setUserRoutes from './routes/user.server.route';
import setCategoryRoutes from './routes/category.server.route';

const app = express();
dotenv.load({ path: '.env' });

//allow cors
app.use((req,res,next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
   next();
})

//configure App
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', (process.env.PORT || 3001));

let mongodbURI;
if(process.env.NODE_ENV === 'dev'){
  mongodbURI = process.env.MONGODB_DEV_URI;
}else{
  mongodbURI = process.env.MONGODB_URI;
}

mongoose.Promise = global.Promise;
const mongodb = mongoose.connect(mongodbURI);

mongodb
.then(db => {
  console.log(`Connected to MongoDb on ${db.host}:${db.port}`);
  setUserRoutes(app);
  setCategoryRoutes(app);

  app.get('/', (req,res) => {
    return res.end('Api working');
  })

  // catch 404
  app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
  });

  app.listen(app.get('port'), () => {
    console.log(`Mern Shopping Cart Admin server Listening on ${app.get('port')}`);
  })
})
.catch(err => {
  console.log(err);
});

export { app };
