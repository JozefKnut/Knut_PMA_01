import { Text, StyleSheet, Pressable } from "react-native";

export default function TaskItem({ item, handleDoneItem }) {
  return (
    <Pressable
      onPress={() => handleDoneItem(item)}
      style={item.done ? styles.taskContainerDone : styles.taskContainer}
    >
      <Text>{item.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "red",
    margin: 4,
    padding: 10,
    borderRadius: 8,
  },
  taskContainerDone: {
    backgroundColor: "green",
    margin: 4,
    padding: 10,
    borderRadius: 8,
  },
});