import { Tstudent } from "../../types";
import { pool } from "../../utils";

class StudentInsert {
  static async save({
    firstName,
    lastName,
    email,
    dateOfBirth,
    phoneNumber,
    address,
  }: Tstudent) {
    let values = [firstName, lastName, email, new Date(dateOfBirth)];
    let placeholders = "?, ?, ?, ?";
    let columns = "first_name, last_name, email, date_of_birth";
    if (phoneNumber) {
      placeholders += ", ?";
      columns += ", phone_number";
      values.push(phoneNumber);
    }
    if (address) {
      placeholders += ", ?";
      columns += ", address";
      values.push(address);
    }
    const sql = `INSERT INTO students(${columns}) VALUES (${placeholders})`;
    const [result]: any = await pool.query(sql, values);
    return result.insertId;
  }
}
export default StudentInsert;
