// ./expressjs-admin-server/routes/manufacturer.server.route.ts
import * as express from 'express';
import manufacturerController from '../controllers/manufacturer.server.controller';

const setmanufacturerRoutes = (app) => {
    const router = express.Router();
    const mftrCtrl = new manufacturerController();

    router.route('/search/:q')
    .get(mftrCtrl.searchManufacturer);

    router.route('/')
             .post(mftrCtrl.uploadMftrImage,mftrCtrl.createManufacturer)
             .put(mftrCtrl.uploadMftrImage,mftrCtrl.updateManufacturer);

    router.route('/:page/:limit')
            .get(mftrCtrl.fetchManufacturer);

    app.use('/api/manufacturer',router);
}

export default setmanufacturerRoutes;

