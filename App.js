import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'; 
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([])
    const [addModal, setAddModal] = useState(false)

    const addGoalHandler = (goalTitle) =>{
        setCourseGoals(currentGoals => [...currentGoals, {key : Math.random().toString(), value : goalTitle}])
        setAddModal(false)
    }
    const handleDeleteGoal = (goalId) => {
		setCourseGoals(currentGoals => {
		return currentGoals.filter((goal) => goal.key !== goalId);
    } 
      )
    }
    const handleCancelGoalAddition=() => {
      setAddModal(false)
    }
  return (
    <View style={styles.container}>
      <Button title = "Add Goal"  onPress = {() => setAddModal(true)}/>
    <GoalInput visible = {addModal} onAddGoal = {addGoalHandler} onCancel = {handleCancelGoalAddition}/>
      <FlatList 
          data={courseGoals} 
          renderItem={itemData => 
              <GoalItem value = {itemData.item.value} id = {itemData.item.key} onDeleteGoal ={handleDeleteGoal}/>
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