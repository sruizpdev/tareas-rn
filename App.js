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
    const saveData = async () => {
      const jsonValue = JSON.stringify(mokData);
      try {
        await AsyncStorage.setItem('key', jsonValue);
      } catch (e) {
        console.log('error al guardar');
      }
    };

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('key');

        console.log(JSON.parse(jsonValue));
      } catch (e) {
        console.log('error al sacar el dato de AS');
      }
    };
    saveData();
    getData();

    setTasks(mokData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tareas</Text>
      </View>
      <Form task={task} setTask={setTask} tasks={tasks} setTasks={setTasks} />
      <Tasks />
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
