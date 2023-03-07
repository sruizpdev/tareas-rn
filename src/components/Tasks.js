import React from 'react';
import { StyleSheet, View} from 'react-native';
import Task from './Task';


const Tasks = ({tasks, deleteTask, setTask}) => {
  return (
    <View style={styles.container}>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          setTask={setTask}
          deleteTask={deleteTask}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default Tasks;
