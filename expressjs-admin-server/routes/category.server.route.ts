// ./expressjs-admin-server/routes/category.server.route.ts
import * as express from 'express';
import categoryController from '../controllers/category.server.controller';

const setCategoryRoutes = (app) => {
  const router = express.Router();
  const categoryCtrl = new categoryController();
  router.route('/category')
      .post(categoryCtrl.createCategory)
      .put(categoryCtrl.editCategory);
  router.route('/category/:page/:limit')
      .get(categoryCtrl.fetchCategory);

  router.route('/category/:id')
      .get(categoryCtrl.getCategory)
      .delete(categoryCtrl.getCategory);

  app.use('/api/category', router);
}

export default setCategoryRoutes;
