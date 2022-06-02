const {model, Schema} = require('mongoose');
const bcrypt = require('bcrypt');

const User = new Schema({
    name : { type : String, required:true},
    email : {type : String, required:true},
    password : {type: String, required:true},
})

User.methods.PasswordEncrypt = async password => {
    const minim = await bcrypt.genSalt(10);
    return bcrypt.hash(password, minim);
}

User.methods.comparePassword = function(password){
    return bcrypt.compare(password , this.password)
}


module.exports = model("Usuario", User);