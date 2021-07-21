import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'


function GoalInput ({onAddGoal}){
    const [enteredGoal, setEnteredGoal] = useState("")

    const goalInputHandler = (enteredText) =>{
        setEnteredGoal(enteredText)
    }   

    return (
        <View style={styles.inputSection}>
            <TextInput 
                placeholder = "Course Goal" 
                style = {styles.inputText} 
                onChangeText={goalInputHandler} 
                value={enteredGoal} />
            <Button title = "ADD" onPress={() => onAddGoal(enteredGoal)}/>
        </View>
    )
}


const styles = StyleSheet.create({
  inputSection: {
      flexDirection: 'row', 
    justifyContent : 'space-between', 
    alignItems: 'center'
},
  inputText: {
      borderBottomColor: 'black',
   borderBottomWidth:1, 
   width:"80%"
},
})
export default GoalInput;