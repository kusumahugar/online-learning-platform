const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Course = require('../models/Course');
const User = require('../models/User');

dotenv.config();
connectDB();

const sampleCourses = [
  {
    title: 'Full-Stack Web Development',
    description: 'Learn HTML, CSS, JavaScript, Node.js, Express, and MongoDB through project-based lessons.',
    instructor: 'Aisha Khan',
    duration: '10 weeks',
    price: 149.99,
    category: 'Development',
  },
  {
    title: 'Data Structures and Algorithms',
    description: 'Master the fundamentals of algorithms, complexity analysis, and coding interview strategies.',
    instructor: 'Daniel Lee',
    duration: '8 weeks',
    price: 129.99,
    category: 'Computer Science',
  },
  {
    title: 'Digital Marketing Essentials',
    description: 'Build skills in SEO, content marketing, social media and analytics.',
    instructor: 'Priya Patel',
    duration: '6 weeks',
    price: 99.99,
    category: 'Marketing',
  },
  {
    title: 'UI/UX Design Fundamentals',
    description: 'Design user experiences with wireframes, prototypes, and usability testing.',
    instructor: 'Miguel Torres',
    duration: '7 weeks',
    price: 119.99,
    category: 'Design',
  },
];

const seedData = async () => {
  try {
    await Course.deleteMany();
    await Course.insertMany(sampleCourses);
    console.log('Sample course data seeded successfully.');

    const adminEmail = 'admin@onlineplatform.com';
    const existingAdmin = await User.findOne({ email: adminEmail });
    if (!existingAdmin) {
      await User.create({
        name: 'Platform Admin',
        email: adminEmail,
        password: 'Admin@123',
        role: 'admin',
      });
      console.log('Admin user created: admin@onlineplatform.com / Admin@123');
    }

    process.exit();
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedData();
