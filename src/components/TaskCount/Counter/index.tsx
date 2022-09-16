import { Text, View } from "react-native";

import { styles } from "./styles";

type Props = {
  value: number;
};

export function Counter({ value }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
