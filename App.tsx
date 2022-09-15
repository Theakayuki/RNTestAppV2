import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { useState } from 'react';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState<string[]>([]);

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoalText(enteredText);
    };

    const uniqueKey = () => {
        return Math.random().toString();
    };

    const addGoalHandler = () => {
        setCourseGoals((currentGoals) => [...currentGoals, enteredGoalText]);
    };
    return (
        <View style={styles.appContainer}>
            <View style={styles.textContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Enter your Goal 🥅'
                    onChangeText={goalInputHandler}
                    placeholderTextColor='white'
                />
                <Button title='Add Goal' onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => (
                        <View style={styles.goalItems}>
                            <Text style={styles.goalText}>{itemData.item}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: '#330303',
    },
    textContainer: {
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
    goalsContainer: {
        flex: 4,
    },
    goalItems: {
        padding: 8,
        marginVertical: 8,
        backgroundColor: '#161616',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4,
    },
    goalText: {
        color: 'white',
    },
});
