import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TStudents, TStudentFocus} from '../../types';
import {read, readSingle, setupEdit} from './read';
import {remove} from './delete';
import {create} from './create';
import {update} from './update';

class Students {
  students = observable.array<TStudents>();
  loading = observable.box<boolean>(false);
  isSubmitButtonDisabled = observable.box<boolean>(false);
  student = observable.object({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: new Date(),
    address: '',
  });
  // tempStudent = observable.object({
  //   id: 0,
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phoneNumber: '',
  //   dateOfBirth: new Date(),
  //   address: '',
  // });

  firstName = observable.box<string>('');
  lastName = observable.box<string>('');
  email = observable.box<string>('');
  phoneNumber = observable.box<string>('');
  dateOfBirth = observable.box<Date>(new Date());
  address = observable.box<string>('');

  studentFocus = observable.object<TStudentFocus>({
    firstName: false,
    lastName: false,
    email: false,
    dateOfBirth: false,
    address: false,
    phoneNumber: false,
  });

  fetchStudents = () => read();
  setupEdit = (id: number) => setupEdit(id);
  fetchStudent = (id: number) => readSingle(id);
  addStudent = () =>
    create({
      firstName: this.getTempFirstName,
      lastName: this.getTempLastName,
      email: this.getTempEmail,
      phoneNumber: this.getTempPhoneNumber,
      dateOfBirth: this.getTempDateOfBirth,
      address: this.getTempAddress,
    });
  editStudent = (id: number) =>
    update({
      id,
      firstName: this.getTempFirstName,
      lastName: this.getTempLastName,
      email: this.getTempEmail,
      phoneNumber: this.getTempPhoneNumber,
      dateOfBirth: this.getTempDateOfBirth,
      address: this.getTempAddress,
    });
  deleteStudent = (id: number) => remove({id});

  resetInput() {
    runInAction(() => {
      this.setTempFirstName('');
      this.setTempLastName('');
      this.setTempEmail('');
      this.setTempPhoneNumber('');
      this.setTempAddress('');
      this.setTempDateOfBirth(new Date());
      this.studentFocus.firstName = false;
      this.studentFocus.lastName = false;
      this.studentFocus.email = false;
      this.studentFocus.phoneNumber = false;
      this.studentFocus.address = false;
      this.studentFocus.dateOfBirth = false;
    });
  }
  setStudents(students: Array<TStudents>) {
    runInAction(() => {
      this.students.replace(students);
    });
  }
  get getFirstName() {
    return this.student.firstName;
  }
  get getLastName() {
    return this.student.lastName;
  }
  get getEmail() {
    return this.student.email;
  }
  get getPhoneNumber() {
    return this.student.phoneNumber;
  }
  get getAddress() {
    return this.student.address;
  }
  get getDateOfBirth() {
    return this.student.dateOfBirth;
  }

  setFirstNameFocus() {
    runInAction(() => {
      this.studentFocus.firstName = !this.studentFocus.firstName;
    });
  }
  setLastNameFocus() {
    runInAction(() => {
      this.studentFocus.lastName = !this.studentFocus.lastName;
    });
  }
  setEmailFocus() {
    runInAction(() => {
      this.studentFocus.email = !this.studentFocus.email;
    });
  }
  setPhoneNumberFocus() {
    runInAction(() => {
      this.studentFocus.phoneNumber = !this.studentFocus.phoneNumber;
    });
  }
  setAddressFocus() {
    runInAction(() => {
      this.studentFocus.address = !this.studentFocus.address;
    });
  }
  setDateFocus() {
    runInAction(() => {
      this.studentFocus.dateOfBirth = !this.studentFocus.dateOfBirth;
    });
  }

  get firstNameFocus() {
    return this.studentFocus.firstName;
  }
  get lastNameFocus() {
    return this.studentFocus.lastName;
  }
  get emailFocus() {
    return this.studentFocus.email;
  }
  get phoneNumberFocus() {
    return this.studentFocus.phoneNumber;
  }
  get addressFocus() {
    return this.studentFocus.address;
  }
  get dateOfBirthFocus() {
    return this.studentFocus.dateOfBirth;
  }

  get getIsSubmitButtonDisabled() {
    return this.isSubmitButtonDisabled.get();
  }
  get getStudents() {
    return this.students;
  }

  get getTempFirstName() {
    return this.firstName.get();
  }
  get getTempLastName() {
    return this.lastName.get();
  }
  get getTempEmail() {
    return this.email.get();
  }
  get getTempPhoneNumber() {
    return this.phoneNumber.get();
  }
  get getTempAddress() {
    return this.address.get();
  }
  get getTempDateOfBirth() {
    return this.dateOfBirth.get();
  }
  setTempFirstName(firstName: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.firstName.set(firstName);
    });
  }
  setTempLastName(lastName: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.lastName.set(lastName);
    });
  }
  setTempEmail(email: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.email.set(email);
    });
  }
  setTempAddress(address: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.address.set(address);
    });
  }
  setTempPhoneNumber(phoneNumber: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.phoneNumber.set(phoneNumber);
    });
  }
  setTempDateOfBirth(dateOfBirth: Date) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.dateOfBirth.set(dateOfBirth);
    });
  }
  setIsLoading(status: boolean) {
    runInAction(() => {
      this.loading.set(status);
    });
  }
  get isLoading() {
    return this.loading.get();
  }
  setIsSubmitButtonDisabled(status: boolean) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(status);
    });
  }
}
const createStudentInstance = memoize(
  () => new Students(),
  () => 1,
);
const studentStore = createStudentInstance();
export default studentStore;
