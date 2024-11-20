const {Schema, model } = require('mongoose')

const userSchema = new Schema({  // aqui delimitamos los campos que van a tener cada usuario
    username:{
        type: String,
        required: true, // quiero que este campo venga siempre y sino habrá un error 
    }, 
    email:{
        type:String,
        required: true
    }, 
    password:{
        type: String,
        required: true
    }, 
    role:{
        type: String,
        enum:['regular' ,'moderador','admin'],
        default: 'regular'  // si yo registro a un usuario sin rol el que se le va a poner por defecto es regular
    },
    cart: [{type: Schema.Types.ObjectId, ref: 'product'}]

},{ timestamps:true, versionKey: false})

const User = model('user', userSchema);

module.exports = User;