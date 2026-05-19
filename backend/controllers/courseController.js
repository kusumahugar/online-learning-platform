const Course = require('../models/Course');

const getCourses = async (req, res) => {
  const courses = await Course.find().sort({ createdAt: -1 });
  res.json(courses);
};

const getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }
  res.json(course);
};

const createCourse = async (req, res) => {
  const { title, description, category, price, instructor, published } = req.body;

  const course = new Course({
    title,
    description,
    category,
    price,
    instructor,
    published: published || false,
    createdBy: req.user._id,
  });

  const createdCourse = await course.save();
  res.status(201).json(createdCourse);
};

const updateCourse = async (req, res) => {
  const { title, description, category, price, instructor, published } = req.body;
  const course = await Course.findById(req.params.id);

  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }

  course.title = title || course.title;
  course.description = description || course.description;
  course.category = category || course.category;
  course.price = price !== undefined ? price : course.price;
  course.instructor = instructor || course.instructor;
  course.published = published !== undefined ? published : course.published;

  const updatedCourse = await course.save();
  res.json(updatedCourse);
};

const deleteCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }

  await course.remove();
  res.json({ message: 'Course removed' });
};

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
