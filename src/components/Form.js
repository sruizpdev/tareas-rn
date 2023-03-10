import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert, Button, TextInput} from 'react-native';
import {generateId, storeData} from '../helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    //todo / No tengo muy claro lo de tener aqui a 'task'
    //todo / quizá no sea necesario

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
      console.log('jjjjj', JSON.stringify(tasks));

      const storeData = async value => {
        try {
          const jsonValue = JSON.stringify(value);
          console.log('Justo antes de almacenar', jsonValue);
          await AsyncStorage.setItem('tasks', jsonValue);
        } catch (e) {
          console.log(e);
        }
      };

      storeData(tasks);
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
