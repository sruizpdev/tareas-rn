import React, {useState} from 'react';

import {Text, StyleSheet, View, Button} from 'react-native';

const Task = ({task, deleteTask}) => {
  const {id, taskName} = task;
  return (
    <View style={styles.container}>
      <Text>{taskName}</Text>
      <Button onPress={()=>deleteTask(id)} title="Eliminar" color="#841584" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default Task;
