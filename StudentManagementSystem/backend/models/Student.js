const pool = require("../database");
const { formatdate } = require("../global");

class Student {
  constructor(
    first_name,
    last_name,
    email,
    date_of_birth,
    phone_number,
    address
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone_number = phone_number;
    this.address = address;
    this.date_of_birth = formatdate(date_of_birth);
    this.email = email;
  }

  save() {
    let sql = `INSERT INTO students(first_name, last_name, email, date_of_birth, phone_number, address) VALUES (?, ?, ?, ?, ?, ?)`;
    const result = pool.query(sql, [
      this.first_name,
      this.last_name,
      this.email,
      this.date_of_birth,
      this.phone_number,
      this.address,
    ]);
    return result;
  }

  static checkSameEmail = (id, email) => {
    let sql = `SELECT * FROM students WHERE email = ? AND id = ?`;
    const result = pool.query(sql, [email, id]);
    return result;
  };

  static checkDuplicateEmail = (id, email) => {
    let sql = `SELECT * FROM students WHERE email = ? AND id != ?`;
    const result = pool.query(sql, [email, id]);
    return result;
  };

  // static edit(id, data) {
  //   let sql = `UPDATE students SET first_name = '${
  //     data.first_name
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
    let updated_at = formatdate();
    let sql = `UPDATE students SET first_name = ?, last_name = ?, email = ?, date_of_birth = ?, phone_number = ?, address = ?, updated_at = ? WHERE id = ?`;
    const result = pool.query(sql, [
      data.first_name,
      data.last_name,
      data.email,
      data.date_of_birth,
      data.phone_number,
      data.address,
      updated_at,
      id,
    ]);
    return result;
  }
  static findById(id) {
    let sql = `SELECT * FROM students WHERE id = '${id}'`;
    const result = pool.query(sql);
    return result;
  }

  static findAll() {
    let sql = `SELECT * FROM students`;
    const result = pool.query(sql);
    return result;
  }
}
module.exports = Student;
