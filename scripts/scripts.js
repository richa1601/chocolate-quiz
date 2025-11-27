// Store user's answers
let answer1 = '';
let answer2 = '';
let answer3 = '';

// Get all screens
let startScreen = document.getElementById('start-screen');
let question1Screen = document.getElementById('question1-screen');
let question2Screen = document.getElementById('question2-screen');
let question3Screen = document.getElementById('question3-screen');
let resultsScreen = document.getElementById('results-screen');

// Get buttons
let startBtn = document.getElementById('start-btn');
let retakeBtn = document.getElementById('retake-btn');
let shareBtn = document.getElementById('share-btn');

// Show a screen 
function showScreen(screen) {
  //  Hide all screens
  startScreen.classList.remove('active');
  question1Screen.classList.remove('active');
  question2Screen.classList.remove('active');
  question3Screen.classList.remove('active');
  resultsScreen.classList.remove('active');
  
  // Show the screen 
  screen.classList.add('active');
  
  // Scroll to top of page
  window.scrollTo(0, 0);
}

// Start button - go to question 1
startBtn.addEventListener('click', function() {
  showScreen(question1Screen);
});

// Question 1 - click any chocolate type
let question1Buttons = document.querySelectorAll('[data-question="1"]');
question1Buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    answer1 = button.getAttribute('data-value');
    showScreen(question2Screen);
  });
});

// Question 2 - click any texture
let question2Buttons = document.querySelectorAll('[data-question="2"]');
question2Buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    answer2 = button.getAttribute('data-value');
    showScreen(question3Screen);
  });
});

// Question 3 - click any flavor
let question3Buttons = document.querySelectorAll('[data-question="3"]');
question3Buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    answer3 = button.getAttribute('data-value');
    showResults();
  });
});

// Show results page
function showResults() {
  let resultImage = document.querySelector('.result-emoji');
  let resultTitle = document.getElementById('personality-title');
  
  // result image and title
  resultImage.innerHTML = '<img src="https://www.tasteofhome.com/wp-content/uploads/2025/02/GettyImages-2181217380-scaled-e1739904698896.jpg" alt="Chocolate result">';
  resultTitle.textContent = 'Bold Explorer';
  
  // Hide unused sections
  document.getElementById('personality-description').style.display = 'none';
  document.querySelector('.pairing-section').style.display = 'none';
  document.querySelector('.fun-fact').style.display = 'none';
  
  showScreen(resultsScreen);
}

// Retake quiz button - go back to start
retakeBtn.addEventListener('click', function() {
  answer1 = '';
  answer2 = '';
  answer3 = '';
  showScreen(startScreen);
});

// add animations 
// link share results to social media platforms
// generate different results based on answers
// add images for different results