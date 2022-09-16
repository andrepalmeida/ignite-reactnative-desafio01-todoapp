import { useState } from "react";
import { Alert, FlatList, View } from "react-native";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { TaskCount } from "../../components/TaskCount";
import { TaskItem } from "../../components/TaskItem";
import { ListEmpty } from "../../components/ListEmpty";

import { styles } from "./styles";

export type Task = {
  id: number;
  name: string;
  done: boolean;
};

export function Home() {
  const [taskName, setTaskName] = useState("");
  const [provider, setProvider] = useState<Task[]>([]);

  function handleTaskAdd() {
    if (taskName === "") {
      Alert.alert("Atenção", "Nome de tarefa inválido");
      return;
    }

    const task: Task = {
      id: Math.floor(Math.random() * 1000),
      name: taskName,
      done: false,
    };

    setProvider((state) => [...state, task]);

    setTaskName("");
  }

  function handleTaskRemove(id: number) {
    Alert.alert("Atenção", "Deseja remover a tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setProvider((state) => state.filter((item) => item.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleToggleDoneTask(id: number) {
    const tasks = [...provider];
    const taskIndex = tasks.findIndex((item) => item.id === id);
    tasks[taskIndex].done = !tasks[taskIndex].done;

    setProvider(tasks);
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.wrapper}>
        <Form
          taskName={taskName}
          onChangeTaskName={setTaskName}
          onAddTaskPress={handleTaskAdd}
        />

        <TaskCount provider={provider} />

        <FlatList
          data={provider}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onRemoveTask={handleTaskRemove}
              onToggleTask={handleToggleDoneTask}
            />
          )}
          ListEmptyComponent={() => <ListEmpty />}
        />
      </View>
    </View>
  );
}
