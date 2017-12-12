

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    color: String,
    hashed_password: String
});
mongoose.model('User', UserSchema);

var EntrySchema = new Schema({
    username: String,
    title: String,
    content: String,
});
mongoose.model('Entry', EntrySchema);
