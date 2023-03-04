import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Form from './src/components/Form';
import Tasks from './src/components/Tasks';

const App = () => {
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([]);

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
