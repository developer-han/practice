import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Todo = ({todo}) => (
    <View style = {styles.todoContainer}>
        <Text style={styles.todoText}>
            {todo.title}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    todoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed'
    },
    todoText: {
        fontSize: 17
    }
})

export default Todo