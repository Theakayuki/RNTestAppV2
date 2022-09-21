import { StyleSheet, Text, View } from 'react-native';

type GoalItemProps = {
    text: string;
    onDeleteItem: (goalId: string) => void;
};

function GoalItem(props: GoalItemProps) {
    return (
        <View style={styles.goalItems}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default GoalItem;
