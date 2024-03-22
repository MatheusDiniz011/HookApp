import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const changeTxt = (txt) => {
    setName(`Seja Bem Vindo, ${txt}`);
  };

  useEffect(() => {
    if (name.length === 30) {
      alert("Aviso", "O nome atingiu 130 caracteres de comprimento!");
    }
  }, [name]);

  return (
    <View style={styles.container}>
      {/*       <Text>Contador: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
      <Button title="Decrement" onPress={decrementCount} /> */}
      <TextInput
        placeholder="Digite seu nome"
        style={{
          width: 300,
          padding: 10,
          borderWidth: 1,
          borderColor: "black",
        }}
        onChangeText={changeTxt}
      />
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
