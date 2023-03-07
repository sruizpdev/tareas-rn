import React, {useState} from 'react';

import {Text, StyleSheet, View, Button} from 'react-native';

const Task = ({task, setTask, deleteTask}) => {
  const {id, taskName} = task;

  const handleDelete = () => {
    console.log(task);
    deleteTask(id);
  };

  return (
    <View style={styles.container}>
      <Text>{taskName}</Text>
      <Button onPress={handleDelete} title="Editar" color="#841584" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default Task;
