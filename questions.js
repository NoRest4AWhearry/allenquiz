/**
 * Created by Allen on 12/10/2016.
 */
var allQuestions = [];
var correctAnswerCount = 0;

function Question(quest, choices, correctAnswer ) {
  this.quest = quest;
  this.choices = choices;
  this.correctAnswer = choices[correctAnswer];
  var userAnswer;
  allQuestions.push(this);
}

var q1 = new Question("What is my name?",
  ["Allen", "Jones", "Peter", "Alex"],
  0);
var q2 = new Question("What is my favorite color?",
  ["Green", "Blue", "Purple", "Gold"],
  1);
var q3 = new Question("What is my middle name?",
  ["Hubert", "Gosling", "Elijah", "N/A"],
  3);
var q4 = new Question("What are the names of my two dogs?",
  ['Champ & Sosa', 'Luna & Ninja', 'Boston & Phoenix', 'Blackey & Foxy'],
  1);
var q5 = new Question("What state was I born in?",
  ["Maryland", "Pennsylvania", "New Jersey", "Virgina"],
  2);
var q6 = new Question("How many sisters do I have?",
  ["1", "2", "3", "None"],
  0);
var q7 = new Question("When was I born?",
  ["Mar 25, 1990", "May 26, 1989", "Oct 29, 1988", "Mar 26, 1990"],
  3);
var q8 = new Question("What college/university did I attend?",
  ["Morehead State", "Mississippi State", "Morehouse College", "Miami University"],
  2);
var q9 = new Question("How many tattoos do I have?",
  ["1", "5", "14", "None"],
  3);
var q10 = new Question("What were my main two track & field events in high school?",
  ["Long Jump & High Jump", "100m & 200m Dash", "Shot Put & Discus", "800m & 1500m Run"],
  2);