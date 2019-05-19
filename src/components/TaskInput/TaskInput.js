import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class TaskInput extends Component {
  state = {
    taskName: ""
  };

  taskNameChangedHandler = val => {
    this.setState({
      taskName: val
    });
  };

  taskSubmitHandler = () => {
    if (this.state.taskName.trim() === "") {
      return;
    }

    this.props.onTaskAdded(this.state.taskName)
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a task here"
          value={this.state.taskName}
          onChangeText={this.taskNameChangedHandler}
          style={styles.taskInput}
        />
        <Button
          title="add"
          onPress={this.taskSubmitHandler}
          style={styles.taskButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    marginBottom: 35,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  taskInput: {
    width: "50%",
    height: "100%"
  },
  taskButton: {
    width: "30%"
  }
});

export default TaskInput;
