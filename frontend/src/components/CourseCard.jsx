<<<<<<< HEAD
const CourseCard = ({ course }) => {
  return (
    <article className="course-card">
      <div className="course-headline">
        <h2>{course.title}</h2>
        <span className={`badge ${course.published ? 'badge-success' : 'badge-muted'}`}>
          {course.published ? 'Published' : 'Draft'}
        </span>
      </div>
      <p className="course-meta">Category: {course.category}</p>
      <p className="course-description">{course.description}</p>
      <div className="course-footer">
        <span>Instructor: {course.instructor}</span>
        <span className="course-price">${course.price.toFixed(2)}</span>
      </div>
    </article>
  );
};
=======
function CourseCard({ course }) {
  return (
    <article className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="course-meta">
        <span>Instructor: {course.instructor}</span>
        <span>Category: {course.category}</span>
      </div>
      <div className="course-meta">
        <span>Duration: {course.duration}</span>
        <span>Price: ${course.price.toFixed(2)}</span>
      </div>
    </article>
  );
}
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b

export default CourseCard;
