import React, {useState} from 'react';

import {Text, StyleSheet, View, Button, Pressable} from 'react-native';

const Task = ({task, setTask, deleteTask}) => {
  const {id, taskName} = task;
  const [selected, setSelected] = useState(false);

  const handleCheckbox = () => {
    setSelected(true);
    setTimeout(() => {
      deleteTask(id);
      setSelected(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.taskText}> {taskName}</Text>

      <Pressable onPress={() => setTask(task)} style={styles.btnEdit}>
        <Text style={styles.btnText}>e</Text>
      </Pressable>
      <Pressable onPress={handleCheckbox} style={styles.btnDelete}>
        <Text style={styles.btnText}>-</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  taskText: {
    fontSize: 20,
    width: '70%',
  },
  btnEdit: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDelete: {
    backgroundColor: 'red',
    borderRadius: 50,
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
  },
});
export default Task;
