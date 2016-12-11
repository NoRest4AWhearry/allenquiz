/**
 * Created by Allen on 12/10/2016.
 */
var form = document.choicesForm;
var choicesDiv = document.querySelector('#choices');

// add question to document
function addQuestion(question) {
  var questChoices = question.choices;
  for (var i = 0; i<questChoices.length; i++) {
    document.querySelector('#theQuestion').innerHTML = question.quest;
    createInput(questChoices[i]);
  }
}

// create input tag for question choices
function createInput(val) {
  var div = document.createElement('div');
  div.className = 'container';
  var label = document.createElement('label');
  var span = document.createElement('span');
  var input = document.createElement('input');
  input.setAttribute('name', 'choices');
  input.type = 'radio';
  input.value = val;
  span.innerHTML = val;
  label.appendChild(span);
  div.appendChild(input);
  div.appendChild(label);
  choicesDiv.appendChild(div);
}

function loadQuestionsToDOM(questionArray) {
  // load first question
  var index = 0;
  addQuestion(questionArray[index]);
  // create next button function
  var onNext = function () {
    getUserSelectedAnswer(questionArray[index]);
    var containers = document.querySelectorAll('container');
    for ( var i = 0; i < containers.length; i++) {
      containers[i].parentElement.removeChild(containers[i]);
    }
    index++;
    addQuestion(questionArray[index]);
    if (index == questionArray.length -1) {
      form.nextQuestion.value = "Submit";
      form.nextQuestion.addEventListener('click', onTestSubmit)
    }
  };
  form.nextQuestion.addEventListener('click', onNext);
}

function getUserSelectedAnswer(question) {
  var inputChoices = document.choicesForm.choices;
  var i;
  for (i = 0; i < inputChoices.length; i++) {
    if (inputChoices[i].checked) {
      question.userAnswer = inputChoices[i].value;
    }
  }
  checkAnswer(question);
}

function checkAnswer(question) {
  if (question.userAnswer == question.correctAnswer) {
    correctAnswerCount++;
  }
}

function onTestSubmit() {
  var score = (correctAnswerCount / allQuestions.length * 100) + "%";
  var theScore = document.querySelector('#theScore');
  theScore.innerHTML = "Your score on this test: " + score + ".";
  createAnswerTable(allQuestions);
}

function createAnswerTable(questions) {
  var tableFinals = document.querySelector('#tableFinals');
  form.parentElement.removeChild(form);
  document.querySelector('#tables').style.visibility = 'visible';
  for (var i = 0; i < questions.length; i++) {
    var tableElems = [questions[i].quest, questions[i].userAnswer, questions[i].correctAnswer];
    var tr = document.createElement('tr');
    for (var j = 0; j < tableElems.length; j++) {
      var td = document.createElement('td');
      td.innerHTML = tableElems[j] == undefined ? "You did not answer." : tableElems[j];
      td.style.color = questions[i].userAnswer == questions[i].correctAnswer ? 'forestgreen' : 'darkred';
      tr.appendChild(td);
    }
    tableFinals.appendChild(tr);
  }
}
loadQuestionsToDOM(allQuestions);
