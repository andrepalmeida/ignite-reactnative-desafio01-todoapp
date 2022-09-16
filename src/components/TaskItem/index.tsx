import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Task } from "../../screens/Home";

import { styles } from "./styles";

type Props = {
  task: Task;
  onRemoveTask: (id: number) => void;
  onToggleTask: (id: number) => void;
};

export function TaskItem({ task, onRemoveTask, onToggleTask }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onToggleTask(task.id)}>
        {task.done ? (
          <Ionicons name="ios-checkmark-circle" size={22} color="#8284FA" />
        ) : (
          <Ionicons name="ellipse-outline" size={22} color="#4EA8DE" />
        )}
      </TouchableOpacity>

      <Text
        style={{
          ...styles.name,
          textDecorationLine: task.done ? "line-through" : "none",
          color: task.done ? "#808080" : "#F2F2F2",
        }}
      >
        {task.name}
      </Text>

      <TouchableOpacity onPress={() => onRemoveTask(task.id)}>
        <Ionicons name="md-trash-outline" size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
