export type TsetTasks = {
  setTasks: React.Dispatch<
    React.SetStateAction<
      {
        task: string;
        created_at: Date;
        expire_at: Date;
      }[]
    >
  >;
};

export type TTaskType = {
  task: string;
  expire_at: Date;
  created_at: Date;
};

export type TdeleteTask = {deleteTask: (index: number) => void};
type Tindex = {index: number};

export type TAddTaskProp = TsetTasks & {
  pendingTask: string;
  setPendingTask: React.Dispatch<React.SetStateAction<string>>;
};

export type TDateContainerProp = {
  creationDate: Date;
  setCreationDate: React.Dispatch<React.SetStateAction<Date>>;
  expiryDate: Date;
  setExpiryDate: React.Dispatch<React.SetStateAction<Date>>;
};

export type TDatePickerComponentProps = {
  title: string;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};

export type TDisplayTasksProps = {tasks: TTaskType[]} & TsetTasks;

export type TListTasksProp = {tasks: TTaskType[]} & TdeleteTask;

export type TTaskProp = TdeleteTask &
  Tindex & {
    task: TTaskType;
  };

export type TDeleteTaskButton = TdeleteTask & Tindex;

export type TAddTaskButton = TAddTaskProp & {
  creationDate: Date;
  expiryDate: Date;
};
