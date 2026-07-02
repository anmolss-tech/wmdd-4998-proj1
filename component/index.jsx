import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>French Made Simple</Text>
      <Text style={styles.subtitle}>Choose what you want to study.</Text>

      <Pressable style={styles.button} onPress={() => router.push("/sentences")}>
        <Text style={styles.buttonTitle}>Learn Sentence Formation</Text>
        <Text style={styles.buttonText}>Practice English to French flashcards.</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push("/grammar")}>
        <Text style={styles.buttonTitle}>Learn Grammar</Text>
        <Text style={styles.buttonText}>Study simple grammar topics with examples.</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
    justifyContent: "center"
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111111",
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 24
  },
  button: {
    backgroundColor: "#ffffff",
    borderColor: "#dddddd",
    borderRadius: 8,
    borderWidth: 1,
    padding: 18,
    marginBottom: 14
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111111"
  },
  buttonText: {
    fontSize: 14,
    color: "#666666",
    marginTop: 6
  }
});
