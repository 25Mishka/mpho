let currentQuestion = 1;

function checkAnswer(questionNumber, correctAnswer) {
  const userAnswer = document
    .getElementById(`answer${questionNumber}`)
    .value.trim()
    .toLowerCase();

  const isCorrect = userAnswer === correctAnswer;

  if (isCorrect) {
    document
      .getElementById(`question${questionNumber}`)
      .classList.add("hidden");
    if (questionNumber < 3) {
      currentQuestion++;
      document
        .getElementById(`question${currentQuestion}`)
        .classList.remove("hidden");
    } else {
      showResult(true); // Show result with correct answer
    }
  } else {
    showResult(false); // Show result with incorrect answer
  }
}

function showResult(isCorrect) {
  document.getElementById("result-container").classList.remove("hidden");
  const chuckyImage = document.getElementById("chucky");
  const speechBubble = document.getElementById("speech-bubble");

  chuckyImage.classList.remove("hidden");

  if (isCorrect) {
    speechBubble.innerHTML = "You got it! Happy Creepy Birthday!";
  } else {
    speechBubble.innerHTML =
      "You didn't get it... Not so happy creepy birthday to you!";
  }
}

function playAudio() {
  var audio = document.getElementById("spookyAudio");
  audio.play();
}

function pauseAudio() {
  var audio = document.getElementById("spookyAudio");
  audio.pause();
}

// Add your checkAnswer function and other logic here if not already included
