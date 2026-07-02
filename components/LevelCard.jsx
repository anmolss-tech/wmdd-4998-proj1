import { Pressable, StyleSheet, Text, View } from "react-native";

export default function LevelCard({ title, subtitle, detail, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {detail ? <Text style={styles.detail}>{detail}</Text> : null}
      </View>
      <Text style={styles.arrow}>Open</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderColor: "#dddddd",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textBox: {
    flex: 1,
    paddingRight: 10
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222222"
  },
  subtitle: {
    fontSize: 14,
    color: "#555555",
    marginTop: 4
  },
  detail: {
    fontSize: 13,
    color: "#777777",
    marginTop: 6
  },
  arrow: {
    color: "#111111",
    fontWeight: "700"
  }
});
