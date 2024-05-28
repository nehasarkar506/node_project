let currentQuestion = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'option';
        radioBtn.value = option;
        radioBtn.id = 'option' + index;

        const label = document.createElement('label');
        label.textContent = option;
        label.setAttribute('for', 'option' + index);

        optionsElement.appendChild(radioBtn);
        optionsElement.appendChild(label);
        optionsElement.appendChild(document.createElement('br'));
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        // alert('Please select an option.');
        // return;
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
    }
    const answer = selectedOption.value;
    if (answer === questions[currentQuestion].answer) {
        resultElement.textContent = 'Correct! ' + questions[currentQuestion].answer;
    } else {
        resultElement.textContent = 'Incorrect! The correct answer is ' + questions[currentQuestion].answer;
    }
      // var submitButton = document.getElementById('btn1');
    // submitButton.disabled = true;
   
}

function next() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        resultElement.innerHTML = "";
    } else {
        resultElement.textContent = 'Quiz completed!';
        optionsElement.innerHTML = '';
        questionElement.textContent = '';
    }
}
loadQuestion();


// document.addEventListener('DOMContentLoaded', (event) => {
//     const radioButtons = document.querySelectorAll('input[name="option"]');
//     const submitButton = document.getElementById('btn1');
//     var next = document.getElementById('btn2');
//         radioButtons.forEach((radioButton) => {
//         radioButton.addEventListener('change', () => {
//             if (radioButton.checked) {
//                 submitButton.style.cssText = `display:block`;
//                 next.style.cssText = `display:block`;
//             }
//             else {
//                 submitButton.style.cssText = `display:none`
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', (event) => {
    const radioButtons = document.querySelectorAll('input[name="option"]');
    const submitButton = document.getElementById('btn1');

     radioButtons.forEach((radioButton) => {
      radioButton.addEventListener('change', () => {
        if (radioButton.checked && radioButton.name === `option${currentQuestion}`) {
          submitButton.style.display = 'block';
        }
      });
    });

    // Hide the submit button when no option is selected
    radioButtons.forEach((radioButton) => {
      radioButton.addEventListener('click', () => {
        if (!radioButton.checked && radioButton.name === `option${currentQuestion}`) {
          submitButton.style.display = 'none';
        }
      });
    });
  });