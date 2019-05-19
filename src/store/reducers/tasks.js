import { ADD_TASK, COMPLETE_TASK, SELECT_TASK, DESELECT_TASK, EDIT_TASK_DATE } from '../actions/actionTypes';

const initialState = {
  tasks: [],
  selectedTask: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          tasks: state.tasks.concat({
            key: Math.random(),
            name: action.taskName,
            date: null
          })
        };
      case COMPLETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter(task => {
            return task.key !== action.key;
          })
        };
        case SELECT_TASK:
          return {
            ...state,
            selectedTask: state.tasks.find(task => {
              return task.key === action.key;
            })
          };
        case DESELECT_TASK:
          return {
            ...state,
            selectedTask: null
          };
        case EDIT_TASK_DATE:
          return {
            ...state,
            selectedTask: null
          };
    default:
      return state;
  }

};

export default reducer;
