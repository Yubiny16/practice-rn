import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const listItem = (props) => (
  <View style={styles.listItem}>
    <TouchableOpacity style={styles.taskComplete} onPress={() => props.completeTask(props.taskKey)}/>
    <TouchableOpacity onPress={() => props.selectTask(props.taskKey)}>
      <Text style={styles.taskName}>{props.taskName}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    flexDirection: "row"
  },
  taskName: {
    fontSize: 18
  },
  taskComplete: {
    marginRight: 15,
    marginLeft: 40,
    marginBottom: 15,
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white"
  }
});

export default listItem;
