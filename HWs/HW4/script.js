console.log("Hi there!");
console.log("I am excited to talk to you.");
let bot;
bot = "teacherBot";

let botLocation = "Estonia";

console.log("Allow me to introduce myself.");

const botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

const botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

bot = "professorBot";

const nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);

bot = "awesomeTeacherBot";

const newNicknameGreeting =
  "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);

const favoriteSubject = "Computer Science";

const favoriteSubjectSentence =
  "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);

console.log("Well, it was nice to talk to you. Have a nice day!");

//  trivia bot

console.log("Hello! I'm your coding fun fact guide!");

let botName = "Emmita";
// const botLocation="Estonia";
const favoriteLanguage = "Javascript";

console.log("My name is " + botName + " and I live on " + botLocation + ".");

console.log(`My favorite programming language is ${favoriteLanguage}.`);

let codingFact =
  "I like coding when i'm bored and i enjoy solving complex problem using " +
  favoriteLanguage;

console.log(codingFact);

codingFact =
  "Though i learnt python and PHP my best programming language for web development is still " +
  favoriteLanguage;

console.log(codingFact);

codingFact =
  "The main reason i like " +
  favoriteLanguage +
  " is because of it multiple framework, but when i'm working on any machine learning project i use python";

console.log(codingFact);

console.log(
  `It was fun sharing these facts with you. Goodbye! - ${botName} from ${botLocation}.`
);

// Teacher chat bot
console.log("Hi there!");

const botName2 = "teacherBot";

const greeting = `My name is ${botName2}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(
  `Here is an example of using the length property on the word ${topic}.`
);
console.log(topic.length);

console.log(
  `Here is an example of accessing the first letter in the word ${subject}.`
);

console.log(subject[0]);

console.log(
  `Here is an example of accessing the second letter in the word ${subject}.`
);
console.log(subject[1]);

console.log(
  `Here is an example of accessing the last letter in the word ${subject}.`
);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log(
  "Here are examples of finding the positions of substrings in the sentence."
);

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));
console.log("I hope you enjoyed learning today");
