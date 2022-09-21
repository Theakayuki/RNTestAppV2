import { Button, StyleSheet, TextInput, View } from 'react-native';

import { useState } from 'react';

type GoalInputProps = {
    onAddGoal: (enteredText: string) => void;
};

function GoalInput(props: GoalInputProps) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputText}
                placeholder='Enter your Goal 🥅'
                onChangeText={goalInputHandler}
                placeholderTextColor='white'
                value={enteredGoalText}
            />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
    },
    inputText: {
        width: '70%',
        borderWidth: 1,
        borderColor: 'black',
        padding: 8,
        marginRight: 8,
        borderRadius: 4,
        color: '#ffffff',
        backgroundColor: '#000000',
    },
});

export default GoalInput;
