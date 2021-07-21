import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'; 
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const addGoalHandler = (goalTitle) =>{
    setCourseGoals(currentGoals => [...currentGoals, {key : Math.random().toString(), value : goalTitle}])
  }
  const handleDeleteGoal = () => {

  }
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal = {addGoalHandler}/>
      <FlatList 
          data={courseGoals} 
          renderItem={itemData => 
              <GoalItem value = {itemData.item.value} onDeleteGoal ={handleDeleteGoal}/>
            }
           />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding : 50
  },
});