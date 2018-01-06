// ./expressjs-admin-server/routes/user.server.route.js
import * as express from 'express';
import userController from '../controllers/user.server.controller';

const setUserRoutes = (app) => {
  const router = express.Router();
  const userCtrl = new userController();

  router.route('/login').post(userCtrl.login);
  router.route('/user')
     .post(userCtrl.register);

  app.use('/api/user', router);
}

export default setUserRoutes;
