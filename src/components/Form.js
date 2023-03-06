import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert, Button, TextInput} from 'react-native';
import {generateId} from '../helpers';

const Form = ({task, setTask, tasks, setTasks}) => {
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(false);
  const handleTask = () => {
    if (taskName === '') {
      setError(true);
      return;
    }
    setError(false);
    const taskObject = {
      taskName,
    };

    if (task.id) {
      taskObject.id = task.id;
      const tasksUpdated = tasks.map(taskState =>
        taskState.id === task.id ? taskObject : taskState,
      );

      setTasks(tasksUpdated);
      setTask({});
    } else {
      taskObject.id = generateId();

      setTasks([...tasks, taskObject]);
    }
    setTaskName('');
  };
  return (
    <View style={styles.container}>
      <View sytle={styles.field}>
        <TextInput
          style={styles.input}
          placeholder="Introduce la tarea"
          value={taskName}
          onChangeText={setTaskName}
        />
        <Button onPress={handleTask} title="Nueva tarea" color="#841584" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 10},
  field: {},
  input: {
    borderWidth: 1,
    padding: 15,
    fontSize: 20,
    borderRadius: 10,
  },
});
export default Form;
