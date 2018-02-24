// ./expressjs-admin-server/routes/manufacturer.server.route.ts
import * as express from 'express';
import manufacturerController from '../controllers/manufacturer.server.controller';

const setmanufacturerRoutes = (app) => {
    const router = express.Router();
    const mftrCtrl = new manufacturerController();
    router.route('/manufacturer')
             .post(mftrCtrl.uploadMftrImage,mftrCtrl.createManufacturer);

    router.route('/manufacturer/:page/:limit')
            .get(mftrCtrl.fetchManufacturer);

    app.use('/api/manufacturer',router);
}

export default setmanufacturerRoutes;

