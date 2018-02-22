// ./expressjs-admin-server/models/manufacturer.server.model.ts
import * as mongoose from 'mongoose';
var Schema = mongoose.Schema;

const manufacturerSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    image:String,
    sort_order:Number,
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Manufacturer = mongoose.model('Manufacturers', manufacturerSchema);
export default Manufacturer;