
// Store user's answers
let answer = {
  q1: null,
  q2: null,
  q3: null
};

// Get global elements
let startScreen = document.getElementById('start-screen');
let question1Screen = document.getElementById('question1-screen');
let question2Screen = document.getElementById('question2-screen');
let question3Screen = document.getElementById('question3-screen');
let resultsScreen = document.getElementById('results-screen');

// Get buttons
let startBtn = document.getElementById('start-btn');
let retakeBtn = document.getElementById('retake-btn');
let viewAllBtn = document.getElementById('view-all-btn');

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
    answer.q1 = button.getAttribute('data-value');
    showScreen(question2Screen);
  });
});

// Question 2 - click any texture
let question2Buttons = document.querySelectorAll('[data-question="2"]');
question2Buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    answer.q2 = button.getAttribute('data-value');
    showScreen(question3Screen);
  });
});

// Question 3 - click any flavor
let question3Buttons = document.querySelectorAll('[data-question="3"]');
question3Buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    answer.q3 = button.getAttribute('data-value');
    showResults();
  });
});


const personalities = [
  {
    title:'Bold Explorer',
    description:'You\'re adventurous and love intense flavors! You\'re not afraid to try new things and enjoy complex taste experiences.',
    image:'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638',
    combinations: [
      {
        matches: ['dark','nuts-crunchy','spicy'],
        pairing:'Pair your dark chocolate with a bold red wine or espresso for the ultimate flavor experience.',
        whyItWorks:'Dark chocolate contains antioxidants that can improve heart health!'
      },
      {
        matches: ['dark','plain','spicy'],
        pairing:'Try dark chocolate with spicy flavors alongside a rich port wine or strong black tea.',
        whyItWorks:'The tannins in red wine complement the bitterness of dark chocolate, while port wine\'s sweetness balances the spicy notes perfectly.'
      },
      {
        matches: ['dark','nuts-crunchy','coffee'],
        pairing:'Dark chocolate with nuts and coffee notes pairs wonderfully with a bold espresso or dark roast coffee.',
        whyItWorks:'The crunchy nuts add texture and protein, while the coffee enhances the chocolate\'s natural bitterness, creating a complex and energizing combination.'
      },
      {
        matches: ['dark','nuts-crunchy','boozy'],
        pairing:'Bold dark chocolate with nuts and boozy flavors pairs excellently with a rich whiskey or dark rum.',
        whyItWorks:'The nuts provide a savory contrast to the sweetness, while the alcohol\'s warmth enhances the chocolate\'s depth and creates a sophisticated aftertaste.'
      },
      {
        matches: ['dark','smooth-creamy','spicy'],
        pairing:'Dark creamy chocolate with spicy notes pairs perfectly with a spicy red wine or hot chocolate with chili.',
        whyItWorks:'The creamy texture soothes the heat while the dark chocolate\'s intensity matches the spice level, creating a balanced and exciting flavor experience.'
      },
      {
        matches: ['dark','nuts-crunchy','fruity'],
        pairing:'Dark chocolate with nuts and fruity notes pairs excellently with a fruity red wine or berry-infused tea.',
        whyItWorks:'The nuts add texture and protein, while the fruit\'s acidity complements dark chocolate\'s bitterness, creating a complex and satisfying flavor profile.'
      },
      {
        matches: ['dark','smooth-creamy','fruity'],
        pairing:'Dark creamy chocolate with fruity flavors pairs wonderfully with a light red wine or fresh berries.',
        whyItWorks:'The creamy texture balances the fruit\'s acidity, while dark chocolate\'s depth enhances the fruit\'s natural sweetness, creating a luxurious and refreshing combination.'
      },
      {
        matches: ['dark','smooth-creamy','boozy'],
        pairing:'Dark creamy chocolate with boozy notes pairs perfectly with a rich port wine or brandy.',
        whyItWorks:'The creamy texture softens the alcohol\'s intensity, while dark chocolate\'s bitterness complements the wine\'s tannins, creating a sophisticated and indulgent pairing.'
      },
      {
        matches: ['dark','smooth-creamy','classic-sweet'],
        pairing:'Dark creamy chocolate with classic sweetness pairs beautifully with a warm cup of black tea or coffee.',
        whyItWorks:'The creamy texture enhances the chocolate\'s richness, while the classic sweetness balances dark chocolate\'s natural bitterness, creating a comforting and satisfying combination.'
      },
      {
        matches: ['dark','nuts-crunchy','classic-sweet'],
        pairing:'Dark chocolate with nuts and classic sweetness pairs excellently with a warm nut bread or coffee cake.',
        whyItWorks:'The nuts add texture and protein, while the classic sweetness complements dark chocolate\'s intensity, creating a balanced and energizing flavor profile.'
      },
      {
        matches: ['dark','plain','classic-sweet'],
        pairing:'Simple dark chocolate with classic sweetness pairs perfectly with a strong cup of coffee or espresso.',
        whyItWorks:'The simplicity allows both flavors to shine, while dark chocolate\'s bitterness balances the classic sweetness, creating a sophisticated and energizing combination.'
      }
    ]
  },
  {
    title:'Classic Loyalist',
    description:'You appreciate the familiar and comforting. You love traditional flavors that bring back happy memories.',
    image:'https://www.thehighfivecompany.com/wp-content/uploads/2022/01/THFC_BlogPost_24012022_900x600.jpg',
    combinations: [
      {
        matches: ['milk','smooth-creamy','classic-sweet'],
        pairing:'Enjoy your milk chocolate with a warm cup of lavendar tea or a glass of cold milk for the perfect cozy moment.',
        whyItWorks:'The creamy texture of milk chocolate melts beautifully with warm tea, while lavender\'s floral notes enhance the chocolate\'s sweetness without overwhelming it.'
      },
      {
        matches: ['milk','plain','classic-sweet'],
        pairing:'Classic milk chocolate is perfect with a glass of cold milk or a warm cookie.',
        whyItWorks:'Milk chocolate was invented in Switzerland in 1875, and pairing it with milk creates a harmonious flavor profile that highlights its smooth, creamy nature.'
      },
      {
        matches: ['milk','smooth-creamy','coffee'],
        pairing:'Creamy milk chocolate with coffee notes pairs beautifully with a warm vanilla latte or cappuccino.',
        whyItWorks:'The vanilla notes complement milk chocolate\'s sweetness, while the coffee adds depth and the warm temperature enhances the creamy texture, creating a comforting and energizing combination.'
      },
      {
        matches: ['milk','nuts-crunchy','classic-sweet'],
        pairing:'Milk chocolate with nuts and classic sweetness goes perfectly with a warm cup of chai tea or hot chocolate.',
        whyItWorks:'The spices in chai tea enhance the chocolate\'s flavor, while the nuts add texture and the warmth brings out the chocolate\'s creamy richness.'
      },
      {
        matches: ['milk','smooth-creamy','fruity'],
        pairing:'Creamy milk chocolate with fruity notes pairs wonderfully with a fruit smoothie or fresh orange juice.',
        whyItWorks:'The fruit\'s natural acidity cuts through the chocolate\'s richness, while the creamy texture creates a smooth, refreshing combination that\'s both indulgent and light.'
      },
      {
        matches: ['milk','nuts-crunchy','coffee'],
        pairing:'Milk chocolate with nuts and coffee notes pairs perfectly with a warm mocha or coffee with cream.',
        whyItWorks:'The nuts add texture and protein, while the coffee enhances the chocolate\'s flavor, creating a satisfying and energizing combination that\'s both indulgent and comforting.'
      },
      {
        matches: ['milk','smooth-creamy','spicy'],
        pairing:'Creamy milk chocolate with spicy flavors pairs excellently with a spicy chai latte or ginger tea.',
        whyItWorks:'The creamy texture soothes the spice, while milk chocolate\'s sweetness balances the heat, creating a warming and comforting combination that\'s both exciting and familiar.'
      },
      {
        matches: ['milk','plain','spicy'],
        pairing:'Simple milk chocolate with spicy notes pairs wonderfully with a spicy hot chocolate or Mexican chocolate drink.',
        whyItWorks:'The simplicity allows the spice to shine, while milk chocolate\'s sweetness balances the heat, creating a warming and satisfying flavor profile.'
      },
      {
        matches: ['milk','plain','boozy'],
        pairing:'Simple milk chocolate with boozy flavors pairs perfectly with a creamy liqueur or Bailey\'s Irish Cream.',
        whyItWorks:'The simplicity allows the alcohol\'s flavors to shine, while milk chocolate\'s creaminess complements the liqueur, creating a smooth and indulgent combination.'
      },
      {
        matches: ['milk','plain','coffee'],
        pairing:'Simple milk chocolate with coffee notes pairs beautifully with a warm latte or cappuccino.',
        whyItWorks:'The simplicity allows both flavors to complement each other, while milk chocolate\'s sweetness balances coffee\'s bitterness, creating a harmonious and energizing combination.'
      }
    ]
  },
  {
    title:'Playful Dreamer',
    description:'You have refined taste and appreciate delicate, sophisticated flavors. You enjoy the finer things in life and live for fun.',
    image:'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316',
    combinations: [
      {
        matches: ['white','smooth-creamy','fruity'],
        pairing:'White chocolate pairs beautifully with fresh berries, especially with some sparkling wine and raspberries.',
        whyItWorks:'White chocolate isn\'t technically chocolate - it\'s made from cocoa butter, which gives it a rich, buttery flavor that complements the acidity of fresh berries and the effervescence of sparkling wine.'
      },
      {
        matches: ['white','plain','fruity'],
        pairing:'Simple white chocolate with fruity flavors pairs perfectly with fresh citrus fruits or a light fruit salad.',
        whyItWorks:'The simplicity of plain white chocolate allows the fruit\'s natural flavors to shine, while the chocolate\'s sweetness balances the fruit\'s tartness beautifully.'
      },
      {
        matches: ['white','smooth-creamy','classic-sweet'],
        pairing:'Creamy white chocolate with classic sweetness pairs wonderfully with vanilla ice cream or a warm vanilla custard.',
        whyItWorks:'Vanilla and white chocolate share similar flavor profiles, creating a harmonious and luxurious combination that feels indulgent yet familiar.'
      },
      {
        matches: ['white','nuts-crunchy','fruity'],
        pairing:'White chocolate with nuts and fruit pairs excellently with a tropical fruit smoothie or coconut water.',
        whyItWorks:'The tropical fruits complement white chocolate\'s buttery richness, while the nuts add texture and the combination creates a refreshing, exotic flavor profile.'
      },
      {
        matches: ['white','nuts-crunchy','spicy'],
        pairing:'White chocolate with nuts and spicy flavors pairs wonderfully with a spicy chai tea or ginger-infused drink.',
        whyItWorks:'The nuts add texture and protein, while white chocolate\'s sweetness balances the spice, creating an unexpected and exciting flavor combination that\'s both warming and indulgent.'
      },
      {
        matches: ['white','nuts-crunchy','coffee'],
        pairing:'White chocolate with nuts and coffee notes pairs excellently with a white chocolate mocha or coffee with cream.',
        whyItWorks:'The nuts add texture and protein, while the coffee complements white chocolate\'s buttery richness, creating a sophisticated and energizing combination.'
      },
      {
        matches: ['white','nuts-crunchy','classic-sweet'],
        pairing:'White chocolate with nuts and classic sweetness pairs perfectly with a warm vanilla latte or nut bread.',
        whyItWorks:'The nuts complement the classic sweetness, while white chocolate\'s buttery flavor enhances the combination, creating a comforting and satisfying flavor profile.'
      },
      {
        matches: ['white','smooth-creamy','spicy'],
        pairing:'Creamy white chocolate with spicy flavors pairs beautifully with a spicy hot chocolate or chai latte.',
        whyItWorks:'The creamy texture soothes the spice, while white chocolate\'s sweetness balances the heat, creating a luxurious and warming combination that\'s both indulgent and exciting.'
      },
      {
        matches: ['white','smooth-creamy','coffee'],
        pairing:'Creamy white chocolate with coffee notes pairs wonderfully with a white chocolate latte or coffee with cream.',
        whyItWorks:'The creamy texture enhances white chocolate\'s buttery richness, while the coffee adds depth and complexity, creating a sophisticated and energizing combination.'
      },
      {
        matches: ['white','plain','spicy'],
        pairing:'Simple white chocolate with spicy notes pairs excellently with a spicy Mexican hot chocolate or ginger tea.',
        whyItWorks:'The simplicity allows the spice to shine, while white chocolate\'s sweetness balances the heat, creating an unexpected and exciting flavor profile.'
      },
      {
        matches: ['white','plain','coffee'],
        pairing:'Simple white chocolate with coffee flavors pairs perfectly with a warm latte or coffee with a splash of cream.',
        whyItWorks:'The simplicity allows both flavors to complement each other, while white chocolate\'s buttery richness enhances the coffee, creating a smooth and energizing combination.'
      },
      {
        matches: ['white','plain','classic-sweet'],
        pairing:'Simple white chocolate with classic sweetness pairs beautifully with vanilla ice cream or a warm vanilla custard.',
        whyItWorks:'The simplicity allows both flavors to shine, while white chocolate\'s buttery richness complements the classic sweetness, creating a harmonious and indulgent combination.'
      }
    ]
  },
  {
    title:'Refined Connoisseur',
    description:'You value simplicity and quality. You prefer pure, uncomplicated flavors that speak for themselves.',
    image:'https://stonestreetcoffee.com/cdn/shop/articles/flavored-chocolate-coffee_1600x.jpg?v=1726759186',
    combinations: [
      {
        matches: ['dark','plain','coffee'],
        pairing:'Dark chocolate and coffee are a match made in heaven - try them together for a rich, energizing treat.',
        whyItWorks:'The darker the chocolate, the less sugar it contains. 70% dark chocolate has about 30% sugar, which balances perfectly with coffee\'s natural bitterness for a sophisticated flavor profile.'
      },
      {
        matches: ['dark','smooth-creamy','coffee'],
        pairing:'Dark creamy chocolate with coffee notes pairs perfectly with a strong espresso or dark roast coffee.',
        whyItWorks:'The creamy texture softens the intensity of dark chocolate while the coffee\'s robust flavor enhances the chocolate\'s depth, creating a luxurious mouthfeel.'
      },
      {
        matches: ['dark','plain','boozy'],
        pairing:'Simple dark chocolate with boozy notes pairs wonderfully with a rich port wine or dark beer.',
        whyItWorks:'The simplicity allows the alcohol\'s complex flavors to shine, while dark chocolate\'s bitterness complements the wine\'s tannins or beer\'s hops, creating a sophisticated pairing.'
      },
      {
        matches: ['dark','plain','fruity'],
        pairing:'Simple dark chocolate with fruity notes pairs perfectly with a light red wine or fruit-infused water.',
        whyItWorks:'The fruit\'s acidity cuts through dark chocolate\'s richness, while the simplicity allows both flavors to shine without overwhelming each other.'
      }
    ]
  },
  {
    title:'Playful Adventurer',
    description:'You love variety and excitement! You enjoy mixing textures and flavors for a fun, dynamic experience.',
    image:'https://media.istockphoto.com/id/157506007/photo/milk-chocolate-chunks.jpg?s=612x612&w=0&k=20&c=gUOS1APckPKIZymJY6H5qtFfcaoz_Npw_kKamtyA764=',
    combinations: [
      {
        matches: ['milk','nuts-crunchy','fruity'],
        pairing:'Milk chocolate with nuts and fruit goes perfectly with a light white wine or sparkling water.',
        whyItWorks:'The combination of chocolate and nuts provides protein, making it more satisfying, while the fruity notes complement the wine\'s acidity and the nuts add a satisfying crunch that contrasts with the smooth chocolate.'
      },
      {
        matches: ['milk','nuts-crunchy','spicy'],
        pairing:'Milk chocolate with nuts and spicy flavors pairs excellently with a spicy chai latte or ginger tea.',
        whyItWorks:'The milk chocolate\'s sweetness balances the spice, while the nuts add texture and protein, creating a warming and satisfying combination that\'s both comforting and exciting.'
      },
      {
        matches: ['milk','nuts-crunchy','boozy'],
        pairing:'Milk chocolate with nuts and boozy notes pairs wonderfully with a creamy liqueur or Irish coffee.',
        whyItWorks:'The nuts provide a savory contrast to the sweetness, while the alcohol enhances the chocolate\'s richness and creates a sophisticated, indulgent flavor profile.'
      },
      {
        matches: ['milk','plain','fruity'],
        pairing:'Simple milk chocolate with fruity flavors pairs perfectly with fresh fruit or a fruit-based dessert wine.',
        whyItWorks:'The simplicity of plain chocolate allows the fruit\'s natural sweetness to shine, while milk chocolate\'s creaminess creates a smooth, refreshing combination.'
      }
    ]
  },
  {
    title:'Quiet Edgy',
    description:'You take people by surprise. You love rich, decadent flavors that have a spark.',
    image:'https://blog.skipscandies.com/wp-content/uploads/2019/05/white-Dark-and-Milk-chocolates.jpg?fit=1024%2C536&ssl=1',
    combinations: [
      {
        matches: ['white','smooth-creamy','boozy'],
        pairing:'White chocolate with boozy flavors pairs excellently with champagne or even rum!.',
        whyItWorks:'Chocolate and alcohol have been paired together for centuries! The sweetness of white chocolate balances the dryness of champagne, while rum\'s caramel notes enhance the chocolate\'s buttery richness.'
      },
      {
        matches: ['white','nuts-crunchy','boozy'],
        pairing:'White chocolate with nuts and boozy notes pairs wonderfully with a nutty liqueur or amaretto.',
        whyItWorks:'The nuts complement the liqueur\'s flavor profile, while white chocolate\'s sweetness balances the alcohol\'s intensity, creating a harmonious and sophisticated pairing.'
      },
      {
        matches: ['white','plain','boozy'],
        pairing:'Simple white chocolate with boozy flavors pairs perfectly with a light dessert wine or prosecco.',
        whyItWorks:'The simplicity allows the alcohol\'s flavors to shine, while white chocolate\'s buttery richness complements the wine\'s effervescence and creates an elegant, refined combination.'
      }
    ]
  },
  {
    title:'Intense Perfectionist',
    description:'You seek depth and intensity in everything. You appreciate complex flavors and aren\'t afraid of bold choices.',
    image:'https://www.tasteofhome.com/wp-content/uploads/2025/02/GettyImages-2181217380-scaled-e1739904698896.jpg',
    combinations: [
      {
        matches: ['dark','smooth-creamy','coffee'],
        pairing:'Dark creamy chocolate with coffee notes pairs perfectly with a strong espresso or dark roast coffee.',
        whyItWorks:'Dark chocolate contains theobromine, which gives you a gentle energy boost without the crash! Combined with coffee\'s caffeine, this creates a sustained energy lift while the creamy texture balances the intensity of both flavors.'
      },
      {
        matches: ['dark','nuts-crunchy','spicy'],
        pairing:'Dark chocolate with nuts and spicy flavors pairs excellently with a bold red wine or spicy hot chocolate.',
        whyItWorks:'The nuts add protein and texture, while the spice creates an exciting contrast with dark chocolate\'s bitterness, resulting in a complex and energizing flavor combination.'
      },
      {
        matches: ['dark','plain','boozy'],
        pairing:'Simple dark chocolate with boozy notes pairs wonderfully with a rich port wine or dark beer.',
        whyItWorks:'The simplicity allows the alcohol\'s complex flavors to shine, while dark chocolate\'s bitterness complements the wine\'s tannins or beer\'s hops, creating a sophisticated pairing.'
      }
    ]
  },
  {
    title:'Nostalgic Traditionalist',
    description:'You cherish simple pleasures and classic flavors. You find joy in the familiar and timeless.',
    image:'https://blog.skipscandies.com/wp-content/uploads/2019/05/white-Dark-and-Milk-chocolates.jpg?fit=1024%2C536&ssl=1',
    combinations: [
      {
        matches: ['milk','plain','classic-sweet'],
        pairing:'Classic milk chocolate is perfect with a glass of cold milk or a warm cookie.',
        whyItWorks:'Milk chocolate is the most popular type of chocolate in the world! The cold milk enhances the chocolate\'s creaminess, while warm cookies create a comforting contrast of temperatures and textures that brings back childhood memories.'
      },
      {
        matches: ['milk','smooth-creamy','boozy'],
        pairing:'Creamy milk chocolate with boozy notes pairs beautifully with a creamy liqueur or Irish cream.',
        whyItWorks:'The creamy liqueur enhances the chocolate\'s smoothness, while the alcohol adds sophistication to the familiar milk chocolate flavor, creating a nostalgic yet elegant combination.'
      },
      {
        matches: ['milk','nuts-crunchy','classic-sweet'],
        pairing:'Milk chocolate with nuts and classic sweetness pairs perfectly with a warm nut bread or banana bread.',
        whyItWorks:'The nuts in both the chocolate and bread create a harmonious texture, while the warm bread enhances the chocolate\'s flavor and creates a satisfying, homey combination.'
      }
    ]
  },
];

function showPersonality(userData, appData)  {
  //console.log(Object.values(userData)[0]);
  let foundMatch = false;
  appData.forEach( item => {
    // Skip default personality (has empty combinations array)
    if (!item.combinations || item.combinations.length === 0) {
      return;
    }
    
    // Check each combination for this personality
    item.combinations.forEach( combo => {
      if (combo.matches[0] == Object.values(userData)[0] && combo.matches[1] == Object.values(userData)[1] && combo.matches[2] == Object.values(userData)[2]) {
        console.log('we have a match');
        // Pass both personality and the matched combination
        printMatch(item, combo);
        foundMatch = true;
        return;
      }  
      else {
        console.log('we do not have a match');
      }
    });
  });
  
  // If no match found, show error or default message
  if (!foundMatch) {
    console.log('No match found for combination:', userData);
  }
}

function printMatch(personality, combination){
  console.log(personality);
  console.log(combination);
  
  // Get all result elements
  let resultImage = document.querySelector('.result-emoji');
  let resultTitle = document.getElementById('personality-title');
  let resultDescription = document.getElementById('personality-description');
  let pairingSuggestion = document.getElementById('pairing-suggestion');
  let funFact = document.getElementById('fun-fact');

  resultImage.innerHTML = '<img src="' + personality.image + '" alt="Chocolate result">';
  resultTitle.textContent = personality.title;
  resultDescription.textContent = personality.description;
  // Use combination's pairing if available, otherwise use default message
  pairingSuggestion.textContent = combination ? combination.pairing : 'Take the risk and pair your chocolate with spicy salsa, sharp cheddar cheese, or a cold beer!';
  // Use combination's whyItWorks if available, otherwise use default message
  funFact.textContent = combination ? combination.whyItWorks : 'Chocolate makes you smarter, so if you like chocolate, you are smart!';
  
  // Show all sections
  resultDescription.style.display = 'block';
  document.querySelector('.pairing-section').style.display = 'block';
  document.querySelector('.fun-fact').style.display = 'block';
  
  showScreen(resultsScreen);
  
  // confetti 
  confetti({
    colors:[
      '#8C5A3C',
      '#d78f63ff',
      '#f2d9c9ff',
      '#2a1f18ff'
    ]
  });
}

// Show results page
function showResults() {
  showPersonality(answer, personalities);
}

// Retake quiz button - go back to start
if (retakeBtn) {
retakeBtn.addEventListener('click', function() {
    answer.q1 = null;
    answer.q2 = null;
    answer.q3 = null;
  showScreen(startScreen);
});
}

// View all chocolate pairings button - redirects to pairings page
if (viewAllBtn) {
  viewAllBtn.addEventListener('click', function() {
    window.location.href = 'pairings.html';
  });
}

