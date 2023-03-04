import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert, Button, TextInput} from 'react-native';

const Form = ({task, setTask, tasks, setTasks}) => {
  return (
    <View style={styles.container}>
      <View sytle={styles.field}>
        <TextInput style={styles.input} placeholder="Introduce la tarea" />
        <Button
          onPress={() => Alert.alert('presionado')}
          title="Nueva tarea"
          color="#841584"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal:10},
  field: {
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    padding: 15,
    fontSize: 20,
  },
});
export default Form;
