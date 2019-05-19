import React from 'react';
import { Modal, View, Text, Button, TouchableOpacity } from 'react-native';

const TaskEdit = (props) => {
  let modalContent = null;
  console.log(props.selectedTask)
  if(props.selectedTask) {
    modalContent = (
      <View>
        <TouchableOpacity onPress={() => props.editTaskDate("tomorrow")}>
          <Text>tomorrow</Text>
        </TouchableOpacity>
        <Text>{props.selectedTask.taskName}</Text>
      </View>
    );
  }
  return(
    <Modal animationType ="slide" visible={props.selectedTask !== null}>
      <View>
        {modalContent}
        <View>
          <Button title="Close" onPress={() => props.deselectTask()}/>
        </View>
      </View>
    </Modal>
  );
};

export default TaskEdit;
