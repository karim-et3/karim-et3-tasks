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
  tempStudent = observable.object({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: new Date(),
    address: '',
  });
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
  addStudent = () => create(this.tempStudent);
  editStudent = () => update(this.tempStudent);
  deleteStudent = (id: number) => remove({id});

  resetInput() {
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
  }

  get firstName() {
    return this.student.firstName;
  }
  get lastName() {
    return this.student.lastName;
  }
  get email() {
    return this.student.email;
  }
  get phoneNumber() {
    return this.student.phoneNumber;
  }
  get address() {
    return this.student.address;
  }
  get dateOfBirth() {
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

  get tempFirstName() {
    return this.tempStudent.firstName;
  }
  get tempLastName() {
    return this.tempStudent.lastName;
  }
  get tempEmail() {
    return this.tempStudent.email;
  }
  get tempPhoneNumber() {
    return this.tempStudent.phoneNumber;
  }
  get tempAddress() {
    return this.tempStudent.address;
  }
  get tempDateOfBirth() {
    return this.tempStudent.dateOfBirth;
  }
  setTempFirstName(firstName: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.tempStudent.firstName = firstName;
    });
  }
  setTempLastName(lastName: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.tempStudent.lastName = lastName;
    });
  }
  setTempEmail(email: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.tempStudent.email = email;
    });
  }
  setTempAddress(address: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.tempStudent.address = address;
    });
  }
  setTempPhoneNumber(phoneNumber: string) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.tempStudent.phoneNumber = phoneNumber;
    });
  }
  setTempDateOfBirth(dateOfBirth: Date) {
    runInAction(() => {
      this.isSubmitButtonDisabled.set(false);
      this.tempStudent.dateOfBirth = dateOfBirth;
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
}
const createStudentInstance = memoize(
  () => new Students(),
  () => 1,
);
const studentStore = createStudentInstance();
export default studentStore;
