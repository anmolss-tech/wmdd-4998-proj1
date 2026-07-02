import courseOneCards from "../data/course1.json";
import courseTwoCards from "../data/course2.json";
import { grammarTopics } from "../data/grammarTopics";

const CARDS_PER_LEVEL = 250;

const courses = [
  {
    id: "course1",
    title: "Course 1",
    description: "Basic sentence patterns",
    cards: courseOneCards
  },
  {
    id: "course2",
    title: "Course 2",
    description: "Restaurant and daily phrases",
    cards: courseTwoCards
  }
];


export function getSentenceLevel(courseId, levelId) {
  return getSentenceLevels().find(level => level.courseId === courseId && level.id === levelId);
}

export function getSentenceLevels() {
  return courses.reduce((allLevels, course) => {
    return allLevels.concat(makeLevels(course));
  }, []);
}

function makeLevels(course) {
  const levels = [];

  for (let i = 0; i < course.cards.length; i += CARDS_PER_LEVEL) {
    const cards = course.cards.slice(i, i + CARDS_PER_LEVEL);
    const levelNumber = levels.length + 1;

    levels.push({
      id: String(levelNumber),
      courseId: course.id,
      title: `${course.title} - Level ${levelNumber}`,
      subtitle: `${cards.length} cards`,
      startCard: cards[0]?.eng || "French practice",
      cards
    });
  }

  return levels;
}

// 4. Simplified grammar lookups using .find()
export function getGrammarTopic(topicId) {
  return grammarTopics.find(topic => topic.id === topicId);
}

export function getGrammarTopics() {
  return grammarTopics;
}