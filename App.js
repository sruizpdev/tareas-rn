import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Form from './src/components/Form';
import Tasks from './src/components/Tasks';
import {mokData} from './src/mokData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('tasks');

        console.log(JSON.parse(jsonValue));
        
      } catch (e) {
        console.log('error al sacar el dato de AS');
      }
    };
    const saveData = async () => {
      const jsonValue = JSON.stringify(mokData);
      try {
        await AsyncStorage.setItem('tasks', jsonValue);
      } catch (e) {
        console.log('error al guardar');
      }
    };
    getData();
    saveData();

    setTasks(mokData);

    
  }, [tasks]);

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks([...updatedTasks]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tareas</Text>
      </View>
      <Form task={task} setTask={setTask} tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} deleteTask={deleteTask} setTask={setTask} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginVertical: 30,
  },
  title: {textAlign: 'center', fontSize: 30, color: 'grey'},
});

export default App;
