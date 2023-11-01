import { formatdate } from "../../helpers";
import { Tstudent } from "../../types";
import { pool } from "../../utils";

class StudentUpdate {
  static edit({
    id,
    firstName,
    lastName,
    email,
    dateOfBirth,
    phoneNumber,
    address,
  }: Tstudent) {
    const updated_at = formatdate();
    const sql = `UPDATE students SET first_name = ?, last_name = ?, email = ?, date_of_birth = ?, phone_number = ?, address = ?, updated_at = ? WHERE id = ?`;
    const result = pool.query(sql, [
      firstName,
      lastName,
      email,
      new Date(dateOfBirth),
      phoneNumber,
      address,
      updated_at,
      id,
    ]);
    return result;
  }
}
export default StudentUpdate;
