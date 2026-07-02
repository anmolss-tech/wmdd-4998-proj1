import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import LevelCard from "../../components/LevelCard";
import { getSentenceLevels } from "../../utils/courseData";

export default function SentenceLevelsScreen() {
  const [levels, setLevels] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadedLevels = getSentenceLevels();
    setLevels(loadedLevels);
    setIsLoading(false);
  }, []);

  const filteredLevels = levels.filter((level) => {
    const text = `${level.title} ${level.startCard}`.toLowerCase();
    return text.includes(searchText.toLowerCase());
  });

  function openLevel(level) {
    router.push({
      pathname: "/practice/sentence",
      params: {
        courseId: level.courseId,
        levelId: level.id
      }
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sentence Formation</Text>

      <TextInput
        style={styles.input}
        placeholder="Search levels"
        value={searchText}
        onChangeText={setSearchText}
      />

      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={filteredLevels}
          keyExtractor={(item) => `${item.courseId}-${item.id}`}
          renderItem={({ item }) => (
            <LevelCard
              title={item.title}
              subtitle={item.subtitle}
              detail={item.startCard}
              onPress={() => openLevel(item)}
            />
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>No levels found.</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 16
  },
  heading: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111111",
    marginBottom: 12
  },
  input: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 14,
    padding: 12
  },
  emptyText: {
    color: "#777777",
    marginTop: 20,
    textAlign: "center"
  }
});
