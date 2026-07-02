import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import LevelCard from "../../components/LevelCard";
import { getGrammarTopics } from "../../utils/courseData";

export default function GrammarScreen() {
  const [topics, setTopics] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadedTopics = getGrammarTopics();
    setTopics(loadedTopics);
    setIsLoading(false);
  }, []);

  const filteredTopics = topics.filter((topic) => {
    const text = `${topic.title} ${topic.subtitle} ${topic.explanation}`.toLowerCase();
    return text.includes(searchText.toLowerCase());
  });

  function openTopic(topic) {
    router.push({
      pathname: "/practice/grammar",
      params: {
        topicId: topic.id
      }
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Grammar Topics</Text>

      <TextInput
        style={styles.input}
        placeholder="Search grammar"
        value={searchText}
        onChangeText={setSearchText}
      />

      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={filteredTopics}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <LevelCard
              title={item.title}
              subtitle={item.subtitle}
              detail={item.explanation}
              onPress={() => openTopic(item)}
            />
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>No grammar topics found.</Text>}
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
