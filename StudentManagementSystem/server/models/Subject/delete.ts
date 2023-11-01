import { pool } from "../../utils";

class SubjectDelete {
  static async delete({ id }: { id: number }) {
    const sql_courseID =
      "SELECT id FROM courses WHERE subject_id = ? AND status = 1";
    const [courseID] = await pool.query(sql_courseID, [id]);
    if (Array.isArray(courseID) && courseID.length) {
      console.log("we are deleting both grades and courses");
      const listOfCoursesID = courseID.map((course) => {
        if ("id" in course) return course.id;
      });
      console.log(courseID);
      console.log(listOfCoursesID);
      const sql_grades = "UPDATE grades SET status = 0 WHERE course_id IN (?)";
      await pool.query(sql_grades, [listOfCoursesID]);

      const sql_courses = "UPDATE courses SET status = 0 WHERE id IN (?)";
      await pool.query(sql_courses, [listOfCoursesID]);
    }
    const sql_subjects = "UPDATE subjects SET status = 0 WHERE id = ?";
    await pool.query(sql_subjects, [id]);
  }
}
export default SubjectDelete;
