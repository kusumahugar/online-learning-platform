const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'A description is required'],
    },
    instructor: {
      type: String,
      required: [true, 'Instructor name is required'],
    },
    duration: {
      type: String,
      required: [true, 'Duration is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      default: 0,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
