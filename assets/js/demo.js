let currentQuestion = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
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

var que = document.getElementById('total');
que.innerHTML = currentQuestion + 1 + '/' + questions.length;
let seconds = 0;
let minutes = 0;
let timerId;

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            // hours++;
        }
    }
    const formattedTime = formatTime(minutes) + ":" + formatTime(seconds);
    document.getElementById("timer").innerText = formattedTime;
}

function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
}

timerId = setInterval(updateTimer, 1000);

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please select an option.');
        return;
    }
    const answer = selectedOption.value;
    if (answer === questions[currentQuestion].answer) {
        resultElement.textContent = 'Correct! ' + questions[currentQuestion].answer;

    } else {
        resultElement.textContent = 'Incorrect! The correct answer is ' + questions[currentQuestion].answer;
    }
    document.getElementById('btn2').style.display = 'block';

}

var timerElement = document.getElementById('timer');

function next() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        resultElement.innerHTML = '';
        document.getElementById('btn2').style.display = "none";
        que.innerHTML = currentQuestion + 1 + '/' + questions.length;
        //    clearInterval(timerId);

    } else {
        // resultElement.textContent = 'Quiz completed :)';
        // document.getElementById('btn2').style.display = "none";
        // document.getElementById('btn2').textContent = 'Print';
        var print = document.getElementById('btn2');
        print.textContent = 'Print';
        print.addEventListener('click',()=>{
            window.print();
        });
        document.getElementById('btn1').style.display = "none";
        optionsElement.textContent = '';
        questionElement.textContent = 'Quiz completed :)';
        resultElement.textContent = '';
        document.getElementById('time').textContent = 'Total Time: ';
        document.getElementById('que').textContent = 'Total Question: '
        clearInterval(timerId);
        var score = 0;

      
        // Assuming you want to display the final score after all questions are processed
        // questionElement.textContent = 'Final Score: ' + score;
        
        
    }

// startTime = 0;
//         clearInterval(timerId);
//         timerElement.textContent = '00:00';
}

// Load the first question
loadQuestion();



// setTimeout(() => {
//   clearInterval(timerId);
// }, 1000);


// total quetion
// var counter = 0;

//         // Get the button element by its ID
//         var button = document.getElementById("clickButton");

//         // Add an event listener to the button for the "click" event
//         button.addEventListener("click", function() {
//             // Increment the counter
//             counter++;

//             // Print the current value of the counter
//             console.log("Clicked " + counter + " times.");
//         });

//print document

// var a = document.getElementById('print');

// a.addEventListener('click',()=>{
//     window.print();
// })

// if(answer === questions[currentQuestion].answer)
//     {
//         var score = 0 ;
//         score = score + 1;
//         optionsElement.innerHTML = score;
//     }
//     else
//     {
//         var score = 0 ;
//         score = score + 1;
//         resultElement.innerHTML = score;
//     }