import gradeStore from '.';
import toastStore from '../Toast';
import {axiosHelper} from '../../helpers';
import courseStore from '../Course';

const create = async ({
  grade,
  course,
  studentID,
}: {
  grade: number;
  course: string;
  studentID: number;
}) => {
  try {
    if (!course) {
      toastStore.changeVisiblity({
        message: 'Course required.',
        error: true,
      });
      return;
    }
    gradeStore.setIsLoading(true);

    const response = await axiosHelper({
      method: 'post',
      data: {grade, course, studentID},
      path: 'grades/',
    });
    console.log(response.data);
    toastStore.changeVisiblity({
      message: response.data.message,
      error: false,
    });
    const courseID = courseStore.courses.find(c => c.code === course)?.id;
    const index = gradeStore.grades.findIndex(
      grade => grade.studentID === studentID && grade.courseID === courseID,
    );
    gradeStore.grades[index].grade = grade;
  } catch (error: any) {
    console.log(JSON.stringify(error.response.data, null, 3));
    toastStore.changeVisiblity({
      message: error.response.data.message,
      error: true,
    });
  } finally {
    gradeStore.setIsLoading(false);
    gradeStore.setIsSubmitButtonDisabled(true);
  }
};

export {create};
