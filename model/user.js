const mongoose = require ('mongoose');
const userSchema = mongoose.Schema({         
    username: { type: String, required: true, unique : true },
    password: { type: String, required: true }
   
})
const adminSchema = mongoose.Schema({         
    username: { type: String, required: true, unique : true },
    password: { type: String, required: true }
   
})
module.exports = mongoose.model('User',userSchema);
module.exports = mongoose.model('Admin',adminSchema);