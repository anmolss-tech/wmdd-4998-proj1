import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import { getGrammarTopic, getSentenceLevel } from "../../utils/courseData";

export default function PracticeScreen() {
  const { type, courseId, levelId, topicId } = useLocalSearchParams();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [cards, setCards] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [showFrench, setShowFrench] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (type === "sentence") {
      const level = getSentenceLevel(courseId, levelId);
      setTitle(level?.title || "Sentence Practice");
      setNote("Tap the card to show French.");
      setCards(level?.cards || []);
    }

    if (type === "grammar") {
      const topic = getGrammarTopic(topicId);
      setTitle(topic?.title || "Grammar Practice");
      setNote(topic?.explanation || "Tap the card to show French.");
      setCards(topic?.examples || []);
    }

    setCardIndex(0);
    setShowFrench(false);
    setIsLoading(false);
  }, [type, courseId, levelId, topicId]);

  const currentCard = cards[cardIndex];
  const visibleText = showFrench ? currentCard?.fre : currentCard?.eng;
  const isFirstCard = cardIndex === 0;
  const isLastCard = cardIndex === cards.length - 1;

  function showNextCard() {
    if (cardIndex < cards.length - 1) {
      setCardIndex(cardIndex + 1);
      setShowFrench(false);
    }
  }

  function showPreviousCard() {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setShowFrench(false);
    }
  }

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!currentCard) {
    return (
      <View style={styles.center}>
        <Text>No cards found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.practiceContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.note}>{note}</Text>
        <Text style={styles.counter}>
          Card {cardIndex + 1} of {cards.length}
        </Text>

        <View style={styles.cardRow}>
          <View style={styles.sideControls}>
            <Pressable
              style={({ pressed }) => [
                styles.arrowButton,
                pressed && styles.pressedArrow,
                isLastCard && styles.disabledArrow
              ]}
              onPress={showNextCard}
              disabled={isLastCard}
            >
              <Text style={styles.arrowText}>{">"}</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.arrowButton,
                pressed && styles.pressedArrow,
                isFirstCard && styles.disabledArrow
              ]}
              onPress={showPreviousCard}
              disabled={isFirstCard}
            >
              <Text style={styles.arrowText}>{"<"}</Text>
            </Pressable>
          </View>

          <Pressable style={styles.flashcard} onPress={() => setShowFrench(!showFrench)}>
            <Text style={styles.sideLabel}>{showFrench ? "French" : "English"}</Text>
            <Text style={styles.cardText}>{visibleText}</Text>
            <Text style={styles.tapText}>Tap to flip</Text>
          </Pressable>

          <View style={styles.sideControls}>
            <Pressable
              style={({ pressed }) => [
                styles.arrowButton,
                pressed && styles.pressedArrow,
                isLastCard && styles.disabledArrow
              ]}
              onPress={showNextCard}
              disabled={isLastCard}
            >
              <Text style={styles.arrowText}>{">"}</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.arrowButton,
                pressed && styles.pressedArrow,
                isFirstCard && styles.disabledArrow
              ]}
              onPress={showPreviousCard}
              disabled={isFirstCard}
            >
              <Text style={styles.arrowText}>{"<"}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 18
  },
  practiceContent: {
    flex: 1,
    justifyContent: "center"
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111111"
  },
  note: {
    color: "#555555",
    fontSize: 15,
    marginTop: 8
  },
  counter: {
    color: "#777777",
    marginTop: 18,
    marginBottom: 10
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  sideControls: {
    minHeight: 260,
    justifyContent: "center",
    gap: 10
  },
  arrowButton: {
    width: 42,
    height: 125,
    backgroundColor: "#999999",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  pressedArrow: {
    backgroundColor: "#111111"
  },
  disabledArrow: {
    backgroundColor: "#bbbbbb"
  },
  arrowText: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "800"
  },
  flashcard: {
    flex: 1,
    minHeight: 260,
    backgroundColor: "#ffffff",
    borderColor: "#dddddd",
    borderRadius: 8,
    borderWidth: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10
  },
  sideLabel: {
    color: "#777777",
    fontSize: 14,
    marginBottom: 18
  },
  cardText: {
    color: "#111111",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center"
  },
  tapText: {
    color: "#777777",
    fontSize: 13,
    marginTop: 22
  },
});
