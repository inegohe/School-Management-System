type SchoolDataType = {
  id: string;
  name: string;
  address: string;
  principal: string;
  vicePrincipal: string;
  slogan: string;
  type: "PRIMARY" | "JUNIOR" | "SENIOR";
  startHour: string;
  closeHour: string;
  missionStatement: string;
  visionStatement: string;
  primaryColor: string;
  primaryColorLight: string;
  secondaryColor: string;
  secondaryColorLight: string;
  accentColor1: string;
  accentColor1Light: string;
  accentColor2: string;
  accentColor2Light: string;
  accentColor3: string;
  accentColor3Light: string;
  logo: string;
  admins: string[];
  timetableHtml: string;
};

interface StaffDataType {
  id: string;
  name: string;
  image?: string;
  email: string;
  oracleNo: string;
  registrationNo: string;
  designation: string;
  post: string;
  payrollNo: string;
  level: string;
  yearOfExit: number;
  address: string;
  phoneNo: string;
  yearOfService: number;
  teaching: boolean;
  admin: boolean;
  schoolId: string;
}

interface StudentDataType {
  id: string;
  name: string;
  image?: string;
  email: string;
  parentNo: string;
  parentName: string;
  registrationNo: string;
  DOA: string;
  birthdate: string;
  admissionNo: string;
  gender: "MALE" | "FEMALE";
  class: string;
  address: string;
  schoolId: string;
}

interface ParentDataType {
  id: string;
  name: string;
  email: string;
  phoneNo: string;
  address: string;
  schoolId: string;
}

interface ClassDataType {
  id: string;
  name: string;
  classTeacher: string;
  totalStudent: number;
  schoolId: string;
}

interface SubjectDataType {
  id: string;
  name: string;
  teachers: string[];
  schoolId: string;
}

interface TimetableType {
  id: string;
  class: string;
  day: string;
  period: number;
  periodSpan: number;
  subject: string;
  startTime: string;
  endTime: string;
  schoolId: string;
}

interface UserDataType {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "TEACHER" | "PARENT" | "STUDENT" | "AUTH";
  schoolId: string;
}
