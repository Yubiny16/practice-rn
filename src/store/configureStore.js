import { createStore, combineReducers } from 'redux';

import tasksReducer from './reducers/tasks';

const rootReducer = combineReducers({
  tasks: tasksReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
