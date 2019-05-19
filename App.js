import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { addTask, completeTask, selectTask, deselectTask, editTaskDate } from './src/store/actions/index';

import TaskList from './src/components/TaskList/TaskList';
import TaskInput from './src/components/TaskInput/TaskInput';
import TaskEdit from './src/components/TaskEdit/TaskEdit';

class App extends Component {

  render() {
    return (
      <View>
        <TaskEdit
          selectedTask={this.props.selectedTask}
          deselectTask={this.props.onDeselectTask}
          editTaskDate={this.props.onEditTaskDate} />
        <TaskInput onTaskAdded={this.props.onAddTask} />
        <TaskList tasks={this.props.tasks} completeTask={this.props.onCompleteTask} onSelectTask={this.props.onSelectTask}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
    selectedTask: state.tasks.selectedTask,
    date: state.tasks.date
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: (name) => dispatch(addTask(name)),
    onCompleteTask: (key) => dispatch(completeTask(key)),
    onSelectTask: (key) => dispatch(selectTask(key)),
    onDeselectTask: (key) => dispatch(deselectTask()),
    onEditTaskDate: (date) => dispatch(editTaskDate(date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
