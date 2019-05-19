import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const taskList = props => {
  const tasksOutput = props.tasks.map((task) => (
    <ListItem key={task.key} taskKey={task.key} taskName={task.name} completeTask={props.completeTask} selectTask={props.onSelectTask}/>
  ));

  return (
    <View style={styles.listContainer}>{tasksOutput}</View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default taskList;
