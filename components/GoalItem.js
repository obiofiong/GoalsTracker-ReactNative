
import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'


function GoalItem({value, onDeleteGoal, id}){
    return  (
        <TouchableOpacity activeOpacity = {0.8} onPress = {() => onDeleteGoal(id)}>

            <View style={styles.listItem} >
              <Text>{value}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoalItem;

const styles = StyleSheet.create({

  listItem: {
    padding : 10,
    backgroundColor : '#ccc',
    borderColor : "black",
    borderWidth : 1,
    marginVertical:10,
  }
})