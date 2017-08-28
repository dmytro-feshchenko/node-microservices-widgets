const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null }
},
{
  versionKey: false
});

UserSchema.pre('save', next => {
  let now = new Date;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  this.updatedAt = now;
  next();
});

module.exports = mongoose.model('user', UserSchema);
