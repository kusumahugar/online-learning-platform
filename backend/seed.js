require('dotenv').config();
const connectDB = require('./config/db');
const User = require('./models/User');
const Course = require('./models/Course');

const sampleCourses = [
  {
    title: 'Intro to JavaScript',
    description: 'Learn the fundamentals of JavaScript for frontend and backend development.',
    category: 'Programming',
    price: 29.99,
    instructor: 'Sofia Lee',
    published: true,
  },
  {
    title: 'React for Beginners',
    description: 'Build reactive UIs using React, Hooks, and modern component patterns.',
    category: 'Web Development',
    price: 39.99,
    instructor: 'Mateo Cruz',
    published: true,
  },
  {
    title: 'Data Structures & Algorithms',
    description: 'Master core computer science concepts and prepare for technical interviews.',
    category: 'Computer Science',
    price: 49.99,
    instructor: 'Priya Patel',
    published: false,
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    await Course.deleteMany();

    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@learning-platform.com',
      password: 'Admin@123',
      role: 'admin',
    });

    const studentUser = await User.create({
      name: 'Student User',
      email: 'student@learning-platform.com',
      password: 'Student@123',
      role: 'student',
    });

    const courses = sampleCourses.map((course) => ({
      ...course,
      createdBy: adminUser._id,
    }));

    await Course.insertMany(courses);

    console.log('Database seeded successfully');
    console.log('Admin login: admin@learning-platform.com / Admin@123');
    console.log('Student login: student@learning-platform.com / Student@123');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error);
    process.exit(1);
  }
};

seedDatabase();
