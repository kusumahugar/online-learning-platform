const asyncHandler = require('express-async-handler');
const Course = require('../models/Course');

const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
});

const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }
  res.json(course);
});

const createCourse = asyncHandler(async (req, res) => {
  const { title, description, instructor, duration, price, category } = req.body;

  const course = new Course({
    title,
    description,
    instructor,
    duration,
    price,
    category,
  });

  const createdCourse = await course.save();
  res.status(201).json(createdCourse);
});

const updateCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  const updates = req.body;
  Object.assign(course, updates);
  const updatedCourse = await course.save();
  res.json(updatedCourse);
});

const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(404);
    throw new Error('Course not found');
  }

  await course.remove();
  res.json({ message: 'Course removed' });
});

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
