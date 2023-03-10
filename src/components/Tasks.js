import React from 'react';
import { StyleSheet, View} from 'react-native';
import Task from './Task';


const Tasks = ({tasks, deleteTask}) => {
  return (
    <View style={styles.container}>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
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
