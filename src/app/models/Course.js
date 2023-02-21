const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
    name: {type: String, maxLength: 255},
    description: {type: String, maxLength: 600},
    image: {type: String},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
    slug: {type: String, slug: 'name', unique: true}
  });

  module.exports = mongoose.model('Course', Course)