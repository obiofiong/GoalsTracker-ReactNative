import React, {useState} from 'react'
import {View, TextInput, Button,Modal, StyleSheet} from 'react-native'


function GoalInput ({visible, onAddGoal, onCancel}){
    const [enteredGoal, setEnteredGoal] = useState("")

    const goalInputHandler = (enteredText) =>{
        setEnteredGoal(enteredText)
    }   

    const addGoalHandler = () => {
        onAddGoal(enteredGoal)
        setEnteredGoal("")
    }
    return (
        <Modal visible = {visible} animationType = "slide" >
            <View style={styles.inputSection}>
                <TextInput 
                    placeholder = "Course Goal" 
                    style = {styles.inputText} 
                    onChangeText={goalInputHandler} 
                    value={enteredGoal} />
                <View style = {{flexDirection :'row', margin :5}}>
                    <Button title = "Cancel" color = "red" onPress = {onCancel} />
                    <Button title = "ADD" onPress={addGoalHandler}/>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
  inputSection: {
        flex:1,
        justifyContent : 'center', 
        alignItems: 'center'
},
  inputText: {
      borderBottomColor: 'black',
   borderBottomWidth:1, 
   width:"80%"
},
})
export default GoalInput;