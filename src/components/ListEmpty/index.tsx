import { Text, View } from "react-native";

import EmptyIcon from "../../../assets/empty.svg";

import { styles } from "./styles";

export function ListEmpty() {
  return (
    <View style={styles.container}>
      <EmptyIcon />

      <Text style={styles.messageBold}>
        Você ainda não tem tarefas cadastradas
      </Text>

      <Text style={styles.message}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
