const questions = [
  {
    question: 'HTML stands for -',
    options: ['HighText Machine Language','HyperText and links Markup Language','HyperText Markup Language','None of the above'],
    answer: 'HyperText Markup Language',
  },
  {
    question: '  The correct sequence of HTML tags for starting a webpage is -',
    options: ['Head, Title, HTML, body','HTML, Body, Title, Head','HTML, Head, Title, Body',' Head, Title, Body, HTML'],
    answer: 'HTML, Head, Title, Body',
  },
  {
    question: 'Which of the following element is responsible for making the text bold in HTML?',
    options: ['<pre>','<a>','<b>','<br>'],
    answer: '<b>',
  },
  {
    question: 'Which of the following tag is used for inserting the largest heading in HTML?',
    options: ['<h3>','<h1>','<h5>','<h6>'],
    answer: '<h1>',
  },
  {
    question: 'How to insert an image in HTML?',
    options: ['<img href = "jtp.png" />','<img url = "jtp.png" />','<img link = "jtp.png" />','<img src = "jtp.png" />'],
    answer: '<img src = "jtp.png" />',
  },
  {
    question: 'Which of the following attribute is used to provide a unique name to an element?',
    options: ['class','id','type','None of the above'],
    answer: 'id',
  },
  {
    question: ' The tags in HTML are -',
    options: ['case-sensitive','in upper case','not case sensitive','in lowercase'],
    answer: 'not case sensitive',
  },
  {
    question: 'Which of the following is the root tag of the HTML document?',
    options: ['<body>','<head>','<title>','<html>'],
    answer: '<html>',
  },
  {
    question: 'A program in HTML can be rendered and read by -',
    options: ['Web browser','Server','Interpreter','None of the above'],
    answer: 'Web browser',
  },
  {
    question: 'Which of the following is the paragraph tag in HTML?',
    options: ['<p>','<b>','<pre>','None of the above'],
    answer: '<p>',
  },
];

  // Assuming questions is an array of question objects
  questions.forEach((question, index) => {
    // Assuming resultElement, questionElement, and currentQuestion are defined elsewhere
    var result = '';
    score++;
    if (resultElement.textContent === 'Correct ' && question.answer) {
        result = 'Correct Answer: ' + score;
        optionsElement.innerHTML = result;
    } else {
        result = 'Incorrect Answer: ' + score;
        resultElement.textContent = result;
    }

    // Assuming you want to update the resultElement for each question
    
});


// document.addEventListener('DOMContentLoaded', (event) => {
//   const radioButtons = document.querySelectorAll('input[type="radio"]');
//   const btn1 = document.getElementById('btn1');

//   radioButtons.forEach((radioButton) => {
//     radioButton.addEventListener('change', () => {
//       if (radioButton.checked) {
//         btn1.style.cssText = `display:block`;
//       } else {
//         btn1.style.display = 'none';
//       }
//     });
//   });
// });
// Load the first question


// let currentQuestion = 0;
// let score = 0; 
// const questionElement = document.getElementById("question");
// const optionElements = document.querySelectorAll('.option');
// const resultElement = document.querySelector('.result');

// function displayQuestion() {
//   const questionStore = questions[currentQuestion];
//   questionElement.textContent = questionStore.question;
//     optionElements.forEach((option, index) => {
//     const radioInput = option.querySelector("input");
//     const label = option.querySelector("label");
//     radioInput.value = questionStore.options[index];
//     label.textContent = questionStore.options[index];
//     option.classList.remove("correct", "incorrect");
//     radioInput.checked = false;
//   });
// }

// function checkAnswer(selectedOption) {
//   const selectedAnswer = selectedOption.querySelector("input").value;
//   const correctAnswer = questions[currentQuestion].answer;
//   if (selectedAnswer === correctAnswer) {
//     selectedOption.classList.add("correct");
//     score++; 
//   } else {
//     selectedOption.classList.add("incorrect");
//   }
// }

// function nextQuestion() {
//   if (currentQuestion < questions.length - 1) {
//     currentQuestion++;
//     displayQuestion();
//   } else {
//     showResult();
//   }
// }

// function showResult() {
//   resultElement.textContent = `You scored ${score} out of ${questions.length}`;
// }

// displayQuestion(); 