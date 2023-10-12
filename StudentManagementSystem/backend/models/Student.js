const pool = require("../database");
const { formatdate } = require("../global");

class Student {
  constructor(firstName, lastName, email, dateOfBirth, phoneNumber, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.dateOfBirth = formatdate(dateOfBirth);
    this.email = email;
  }

  save() {
    const sql = `INSERT INTO students(first_name, last_name, email, date_of_birth, phone_number, address) VALUES (?, ?, ?, ?, ?, ?)`;
    const result = pool.query(sql, [
      this.firstName,
      this.lastName,
      this.email,
      this.dateOfBirth,
      this.phoneNumber,
      this.address,
    ]);
    return result;
  }

  // static checkSameEmail = (id, email) => {
  //   let sql = `SELECT * FROM students WHERE email = ? AND id = ?`;
  //   const result = pool.query(sql, [email, id]);
  //   return result;
  // };
  isEmail() {
    const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (this.email !== "" && this.email.match(emailFormat)) {
      return true;
    }

    return false;
  }
  isDuplicateEmail = async () => {
    const sql = `SELECT * FROM students WHERE email = ?`;
    const [result] = await pool.query(sql, [this.email]);
    return result.length !== 0;
  };

  // static edit(id, data) {
  //   let sql = `UPDATE students SET firstName = '${
  //     data.firstName
  //   }', last_name = '${data.last_name}', email = '${
  //     data.email
  //   }', date_of_birth = '${data.date_of_birth}', ${
  //     data.phone_number ? `phone_number = '${data.phone_number}', ` : ""
  //   }${data.address ? `address = '${data.address}'` : ""}WHERE id = ?`;
  //   console.log(sql);
  //   const result = pool.query(sql, [id]);
  //   return result;
  // }

  static edit(id, data) {
    const updated_at = formatdate();
    const sql = `UPDATE students SET first_name = ?, last_name = ?, email = ?, date_of_birth = ?, phone_number = ?, address = ?, updated_at = ? WHERE id = ?`;
    const result = pool.query(sql, [
      data.first_name,
      data.last_name,
      data.email,
      new Date(data.date_of_birth),
      data.phone_number,
      data.address,
      updated_at,
      id,
    ]);
    return result;
  }
  static findById(id) {
    const sql = `SELECT * FROM students WHERE id = ?`;
    const result = pool.query(sql, [id]);
    return result;
  }

  static findAll() {
    const sql = `SELECT * FROM students`;
    const result = pool.query(sql);
    return result;
  }

  static async delete(id) {
    const sql_grades = `DELETE FROM grades WHERE student_id = ?`;
    const result_grades = await pool.query(sql_grades, [id]);
    const sql_student = `DELETE FROM students WHERE id = ?`;
    const result_student = await pool.query(sql_student, [id]);
    return { result_student, result_grades };
    return result_student;
  }
}
module.exports = Student;
