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
  const levels = getSentenceLevels();

  for (let index = 0; index < levels.length; index++) {
    if (isSameSentenceLevel(levels[index], courseId, levelId)) {
      return levels[index];
    }
  }
  return undefined;
}

function isSameSentenceLevel(level, courseId, levelId) {
  return level.courseId === courseId && level.id === levelId;
}


export function getSentenceLevels() {
  const allLevels = [];

  for (let index = 0; index < courses.length; index++) {
    addCourseLevels(allLevels, courses[index]);
  }

  return allLevels;
}

function addCourseLevels(allLevels, course) {
  const courseLevels = makeLevels(course);

  for (let index = 0; index < courseLevels.length; index++) {
    allLevels.push(courseLevels[index]);
  }
}

function makeLevels(course) {
  const levels = [];
  let levelCards = [];
  let levelNumber = 1;

  for (let index = 0; index < course.cards.length; index++) {
    levelCards.push(course.cards[index]);

    if (shouldCreateLevel(levelCards, index, course.cards.length)) {
      addLevel(levels, course, levelNumber, levelCards);

      levelCards = [];
      levelNumber++;
    }
  }

  return levels;
}


function shouldCreateLevel(cards, cardIndex, totalCards) {
  const levelIsFull = cards.length === CARDS_PER_LEVEL;
  const isLastCard = cardIndex === totalCards - 1;

  return levelIsFull || isLastCard;
}


function addLevel(levels, course, levelNumber, cards) {
  const level = createLevel(course, levelNumber, cards);
  levels.push(level);
}


function createLevel(course, levelNumber, cards) {
  return {
    id: String(levelNumber),
    courseId: course.id,
    title: course.title + " - Level " + levelNumber,
    subtitle: cards.length + " cards",
    startCard: getStartCardText(cards),
    cards: cards
  };
}



export function getGrammarTopic(topicId) {
  for (let index = 0; index < grammarTopics.length; index++) {
    if (isSameGrammarTopic(grammarTopics[index], topicId)) {
      return grammarTopics[index];
    }
  }

  return undefined;
}



function isSameGrammarTopic(topic, topicId) {
  return topic.id === topicId;
}


export function getGrammarTopics() {
  return grammarTopics;
}

function getStartCardText(cards) {
  if (cards.length > 0 && cards[0].eng) {
    return cards[0].eng;
  }

  return "French practice";
}

