export type Tcourse = {
  id?: number;
  subjectID: number;
  code: string;
  duration: string;
  created_at?: Date;
  updated_at?: Date;
};

export type Tgrade = {
  id?: number;
  studentID: number;
  courseID: number;
  grade: number;
  created_at?: Date;
  updated_at?: Date;
};
export type Tstudent = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Tsubject = {
  id?: number;
  name: string;
  created_at?: Date;
  updated_at?: Date;
};
