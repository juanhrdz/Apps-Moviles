import { StyleSheet, View } from "react-native";
import Alumno from "./Alumno";

export default function App() {
  return (
    <View style={styles.container}>
      <Alumno nombre="Carlos Adrian Barragan Soriano" matricula="1920904" foto="https://www.shutterstock.com/image-photo/close-face-portrait-serious-calm-260nw-2603087229.jpg" />
      <Alumno nombre="Chuchito Mangano Atilano" matricula="2012520" foto="https://i.ytimg.com/vi/5AEcBqR_ufs/hq720.jpg?sqp=-oaymwExCK4FEIIDSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYSSBRKHIwDw==&rs=AOn4CLBb4HRw2MqG9FC8x2N2VqkKS9sUWA" />
      <Alumno nombre="Brayan Daniel Yatusabe" matricula="4658799" foto="https://img.magnific.com/foto-gratis/retrato-estudiante-masculino-libros_23-2148882426.jpg?semt=ais_hybrid&w=740&q=80" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#DCCDE8",
  },
});
