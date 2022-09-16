import { Text, View } from "react-native";

import { Task } from "../../screens/Home";
import { Counter } from "./Counter";

import { styles } from "./styles";

type Props = {
  provider: Task[];
};

export function TaskCount({ provider }: Props) {
  const total = provider.length;
  const done = provider.filter((item) => item.done).length;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.created}>Criadas</Text>
        <Counter value={total} />
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.done}>Concluídas</Text>
        <Counter value={done} />
      </View>
    </View>
  );
}
