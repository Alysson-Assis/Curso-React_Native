import { StyleSheet } from "react-native";

function GoalItem() {
    return(
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    backgroundColor: "#1850fd",
    margin: 8,
    padding: 8,
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
});