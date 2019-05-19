import { ADD_TASK, COMPLETE_TASK, SELECT_TASK, DESELECT_TASK, EDIT_TASK_DATE } from './actionTypes';

export const addTask = (taskName) => {
  return {
    type: ADD_TASK,
    taskName: taskName
  };
};

export const completeTask = (key) => {
  return {
    type: COMPLETE_TASK,
    key: key
  };
};

export const selectTask = (key) => {
  return {
    type: SELECT_TASK,
    key: key
  };
};

export const deselectTask = () => {
  return {
    type: DESELECT_TASK
  };
};

export const editTaskDate = (date) => {
  return {
    type: EDIT_TASK_DATE,
    date: date
  };
};
