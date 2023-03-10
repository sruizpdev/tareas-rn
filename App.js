import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Form from './src/components/Form';
import Tasks from './src/components/Tasks';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('tasks');
        return jsonValue != null ? JSON.parse(jsonValue) : [];
      } catch (e) {
        console.log(e);
      }
    };
    getData().then(response => setTasks(response));
    
    const getAllKeys = async () => {
      let keys = [];
      try {
        keys = await AsyncStorage.getAllKeys();
      } catch (e) {
        console.log(e);
      }
      console.log('Esto es lo que hay en AsyncStorage: ', keys);
    };
    getAllKeys();
  }, []);

  const deleteTask = id => {

    const storeData = async value => {
      try {
        const jsonValue = JSON.stringify(value);
        console.log('Justo antes de almacenar', jsonValue);
        await AsyncStorage.setItem('tasks', jsonValue);
      } catch (e) {
        console.log(e);
      }
    };

    
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks([...updatedTasks]);
    storeData(tasks);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tareas</Text>
      </View>
      <Form task={task} setTask={setTask} tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
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
