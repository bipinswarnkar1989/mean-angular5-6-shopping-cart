import * as mongoose from 'mongoose';
var Schema = mongoose.Schema;

const productImageSchema = new Schema({
    product:{
        type:Schema.ObjectId,
        ref:'Product'
    },
    image:{
        type:String,
        required:true
    },
    sort_order:{
        type:Number
    }
})