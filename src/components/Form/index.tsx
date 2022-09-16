import { TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = {
  taskName: string;
  onChangeTaskName: (value: string) => void;
  onAddTaskPress: () => void;
};

export function Form({ taskName, onChangeTaskName, onAddTaskPress }: Props) {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#6B6B6B"
        value={taskName}
        onChangeText={onChangeTaskName}
      />

      <TouchableOpacity style={styles.button} onPress={onAddTaskPress}>
        <Ionicons name="add-circle-outline" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
}
