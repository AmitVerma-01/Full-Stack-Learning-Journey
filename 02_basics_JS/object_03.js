const course = {
    courseName : "JShindi",
    coursePrice : 999,
    courseInstructor : "hitesh"
}

// console.log(course.courseInstructor);
//de- structuring
const {courseInstructor : teacher} = course
const {coursePrice : rate} = course;

console.log(teacher);
console.log(rate);