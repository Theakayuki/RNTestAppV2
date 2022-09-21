import { FlatList, StyleSheet, View } from 'react-native';

import { Goal } from './src/types/interfaces';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { uniqueKey } from './src/utils/idGen';
import { useState } from 'react';

export default function App() {
    const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

    const addGoalHandler = (enteredGoalText: string) => {
        let newGoal: Goal = {
            id: uniqueKey(),
            value: enteredGoalText,
        };
        setCourseGoals((currentGoals) => [...currentGoals, newGoal]);
    };
    const deleteGoalHandler = (goalId: string) => {};

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={Object.values(courseGoals)}
                    renderItem={(itemData) => (
                        <GoalItem text={itemData.item.value} onDeleteItem={deleteGoalHandler} />
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

    goalsContainer: {
        flex: 4,
    },
});
