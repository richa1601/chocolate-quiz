
const allPairings = [
  // Dark Chocolate Combinations
  {
    chocolate: 'Dark',
    texture: 'Nuts & Crunchy',
    flavor: 'Spicy',
    pairing: 'Pair your dark chocolate with a bold red wine or espresso for the ultimate flavor experience.',
    whyItWorks: 'Dark chocolate contains antioxidants that can improve heart health!',
    image: 'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638'
  },
  {
    chocolate: 'Dark',
    texture: 'Plain',
    flavor: 'Spicy',
    pairing: 'Try dark chocolate with spicy flavors alongside a rich port wine or strong black tea.',
    whyItWorks: 'The tannins in red wine complement the bitterness of dark chocolate, while port wine\'s sweetness balances the spicy notes perfectly.',
    image: 'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638'
  },
  {
    chocolate: 'Dark',
    texture: 'Nuts & Crunchy',
    flavor: 'Coffee',
    pairing: 'Dark chocolate with nuts and coffee notes pairs wonderfully with a bold espresso or dark roast coffee.',
    whyItWorks: 'The crunchy nuts add texture and protein, while the coffee enhances the chocolate\'s natural bitterness, creating a complex and energizing combination.',
    image: 'https://stonestreetcoffee.com/cdn/shop/articles/flavored-chocolate-coffee_1600x.jpg?v=1726759186'
  },
  {
    chocolate: 'Dark',
    texture: 'Nuts & Crunchy',
    flavor: 'Boozy',
    pairing: 'Bold dark chocolate with nuts and boozy flavors pairs excellently with a rich whiskey or dark rum.',
    whyItWorks: 'The nuts provide a savory contrast to the sweetness, while the alcohol\'s warmth enhances the chocolate\'s depth and creates a sophisticated aftertaste.',
    image: 'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638'
  },
  {
    chocolate: 'Dark',
    texture: 'Smooth & Creamy',
    flavor: 'Spicy',
    pairing: 'Dark creamy chocolate with spicy notes pairs perfectly with a spicy red wine or hot chocolate with chili.',
    whyItWorks: 'The creamy texture soothes the heat while the dark chocolate\'s intensity matches the spice level, creating a balanced and exciting flavor experience.',
    image: 'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638'
  },
  {
    chocolate: 'Dark',
    texture: 'Nuts & Crunchy',
    flavor: 'Fruity',
    pairing: 'Dark chocolate with nuts and fruity notes pairs excellently with a fruity red wine or berry-infused tea.',
    whyItWorks: 'The nuts add texture and protein, while the fruit\'s acidity complements dark chocolate\'s bitterness, creating a complex and satisfying flavor profile.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'Dark',
    texture: 'Smooth & Creamy',
    flavor: 'Fruity',
    pairing: 'Dark creamy chocolate with fruity flavors pairs wonderfully with a light red wine or fresh berries.',
    whyItWorks: 'The creamy texture balances the fruit\'s acidity, while dark chocolate\'s depth enhances the fruit\'s natural sweetness, creating a luxurious and refreshing combination.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'Dark',
    texture: 'Smooth & Creamy',
    flavor: 'Boozy',
    pairing: 'Dark creamy chocolate with boozy notes pairs perfectly with a rich port wine or brandy.',
    whyItWorks: 'The creamy texture softens the alcohol\'s intensity, while dark chocolate\'s bitterness complements the wine\'s tannins, creating a sophisticated and indulgent pairing.',
    image: 'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638'
  },
  {
    chocolate: 'Dark',
    texture: 'Smooth & Creamy',
    flavor: 'Coffee',
    pairing: 'Dark creamy chocolate with coffee notes pairs perfectly with a strong espresso or dark roast coffee.',
    whyItWorks: 'The creamy texture softens the intensity of dark chocolate while the coffee\'s robust flavor enhances the chocolate\'s depth, creating a luxurious mouthfeel.',
    image: 'https://stonestreetcoffee.com/cdn/shop/articles/flavored-chocolate-coffee_1600x.jpg?v=1726759186'
  },
  {
    chocolate: 'Dark',
    texture: 'Smooth & Creamy',
    flavor: 'Classic Sweet',
    pairing: 'Dark creamy chocolate with classic sweetness pairs beautifully with a warm cup of black tea or coffee.',
    whyItWorks: 'The creamy texture enhances the chocolate\'s richness, while the classic sweetness balances dark chocolate\'s natural bitterness, creating a comforting and satisfying combination.',
    image: 'https://www.thehighfivecompany.com/wp-content/uploads/2022/01/THFC_BlogPost_24012022_900x600.jpg'
  },
  {
    chocolate: 'Dark',
    texture: 'Nuts & Crunchy',
    flavor: 'Classic Sweet',
    pairing: 'Dark chocolate with nuts and classic sweetness pairs excellently with a warm nut bread or coffee cake.',
    whyItWorks: 'The nuts add texture and protein, while the classic sweetness complements dark chocolate\'s intensity, creating a balanced and energizing flavor profile.',
    image: 'https://www.thehighfivecompany.com/wp-content/uploads/2022/01/THFC_BlogPost_24012022_900x600.jpg'
  },
  {
    chocolate: 'Dark',
    texture: 'Plain',
    flavor: 'Coffee',
    pairing: 'Dark chocolate and coffee are a match made in heaven - try them together for a rich, energizing treat.',
    whyItWorks: 'The darker the chocolate, the less sugar it contains. 70% dark chocolate has about 30% sugar, which balances perfectly with coffee\'s natural bitterness for a sophisticated flavor profile.',
    image: 'https://stonestreetcoffee.com/cdn/shop/articles/flavored-chocolate-coffee_1600x.jpg?v=1726759186'
  },
  {
    chocolate: 'Dark',
    texture: 'Plain',
    flavor: 'Boozy',
    pairing: 'Simple dark chocolate with boozy notes pairs wonderfully with a rich port wine or dark beer.',
    whyItWorks: 'The simplicity allows the alcohol\'s complex flavors to shine, while dark chocolate\'s bitterness complements the wine\'s tannins or beer\'s hops, creating a sophisticated pairing.',
    image: 'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638'
  },
  {
    chocolate: 'Dark',
    texture: 'Plain',
    flavor: 'Fruity',
    pairing: 'Simple dark chocolate with fruity notes pairs perfectly with a light red wine or fruit-infused water.',
    whyItWorks: 'The fruit\'s acidity cuts through dark chocolate\'s richness, while the simplicity allows both flavors to shine without overwhelming each other.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'Dark',
    texture: 'Plain',
    flavor: 'Classic Sweet',
    pairing: 'Simple dark chocolate with classic sweetness pairs perfectly with a strong cup of coffee or espresso.',
    whyItWorks: 'The simplicity allows both flavors to shine, while dark chocolate\'s bitterness balances the classic sweetness, creating a sophisticated and energizing combination.',
    image: 'https://stonestreetcoffee.com/cdn/shop/articles/flavored-chocolate-coffee_1600x.jpg?v=1726759186'
  },
  
  // Milk Chocolate Combinations
  {
    chocolate: 'Milk',
    texture: 'Smooth & Creamy',
    flavor: 'Classic Sweet',
    pairing: 'Enjoy your milk chocolate with a warm cup of lavendar tea or a glass of cold milk for the perfect cozy moment.',
    whyItWorks: 'The creamy texture of milk chocolate melts beautifully with warm tea, while lavender\'s floral notes enhance the chocolate\'s sweetness without overwhelming it.',
    image: 'https://www.thehighfivecompany.com/wp-content/uploads/2022/01/THFC_BlogPost_24012022_900x600.jpg'
  },
  {
    chocolate: 'Milk',
    texture: 'Plain',
    flavor: 'Classic Sweet',
    pairing: 'Classic milk chocolate is perfect with a glass of cold milk or a warm cookie.',
    whyItWorks: 'Milk chocolate was invented in Switzerland in 1875, and pairing it with milk creates a harmonious flavor profile that highlights its smooth, creamy nature.',
    image: 'https://www.thehighfivecompany.com/wp-content/uploads/2022/01/THFC_BlogPost_24012022_900x600.jpg'
  },
  {
    chocolate: 'Milk',
    texture: 'Smooth & Creamy',
    flavor: 'Coffee',
    pairing: 'Creamy milk chocolate with coffee notes pairs beautifully with a warm vanilla latte or cappuccino.',
    whyItWorks: 'The vanilla notes complement milk chocolate\'s sweetness, while the coffee adds depth and the warm temperature enhances the creamy texture, creating a comforting and energizing combination.',
    image: 'https://stonestreetcoffee.com/cdn/shop/articles/flavored-chocolate-coffee_1600x.jpg?v=1726759186'
  },
  {
    chocolate: 'Milk',
    texture: 'Nuts & Crunchy',
    flavor: 'Classic Sweet',
    pairing: 'Milk chocolate with nuts and classic sweetness goes perfectly with a warm cup of chai tea or hot chocolate.',
    whyItWorks: 'The spices in chai tea enhance the chocolate\'s flavor, while the nuts add texture and the warmth brings out the chocolate\'s creamy richness.',
    image: 'https://www.thehighfivecompany.com/wp-content/uploads/2022/01/THFC_BlogPost_24012022_900x600.jpg'
  },
  {
    chocolate: 'Milk',
    texture: 'Smooth & Creamy',
    flavor: 'Fruity',
    pairing: 'Creamy milk chocolate with fruity notes pairs wonderfully with a fruit smoothie or fresh orange juice.',
    whyItWorks: 'The fruit\'s natural acidity cuts through the chocolate\'s richness, while the creamy texture creates a smooth, refreshing combination that\'s both indulgent and light.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'Milk',
    texture: 'Nuts & Crunchy',
    flavor: 'Fruity',
    pairing: 'Milk chocolate with nuts and fruit goes perfectly with a light white wine or sparkling water.',
    whyItWorks: 'The combination of chocolate and nuts provides protein, making it more satisfying, while the fruity notes complement the wine\'s acidity and the nuts add a satisfying crunch that contrasts with the smooth chocolate.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'Milk',
    texture: 'Nuts & Crunchy',
    flavor: 'Spicy',
    pairing: 'Milk chocolate with nuts and spicy flavors pairs excellently with a spicy chai latte or ginger tea.',
    whyItWorks: 'The milk chocolate\'s sweetness balances the spice, while the nuts add texture and protein, creating a warming and satisfying combination that\'s both comforting and exciting.',
    image: 'https://media.istockphoto.com/id/157506007/photo/milk-chocolate-chunks.jpg?s=612x612&w=0&k=20&c=gUOS1APckPKIZymJY6H5qtFfcaoz_Npw_kKamtyA764='
  },
  {
    chocolate: 'Milk',
    texture: 'Nuts & Crunchy',
    flavor: 'Boozy',
    pairing: 'Milk chocolate with nuts and boozy notes pairs wonderfully with a creamy liqueur or Irish coffee.',
    whyItWorks: 'The nuts provide a savory contrast to the sweetness, while the alcohol enhances the chocolate\'s richness and creates a sophisticated, indulgent flavor profile.',
    image: 'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638'
  },
  {
    chocolate: 'Milk',
    texture: 'Plain',
    flavor: 'Fruity',
    pairing: 'Simple milk chocolate with fruity flavors pairs perfectly with fresh fruit or a fruit-based dessert wine.',
    whyItWorks: 'The simplicity of plain chocolate allows the fruit\'s natural sweetness to shine, while milk chocolate\'s creaminess creates a smooth, refreshing combination.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'Milk',
    texture: 'Nuts & Crunchy',
    flavor: 'Coffee',
    pairing: 'Milk chocolate with nuts and coffee notes pairs perfectly with a warm mocha or coffee with cream.',
    whyItWorks: 'The nuts add texture and protein, while the coffee enhances the chocolate\'s flavor, creating a satisfying and energizing combination that\'s both indulgent and comforting.',
    image: 'https://stonestreetcoffee.com/cdn/shop/articles/flavored-chocolate-coffee_1600x.jpg?v=1726759186'
  },
  {
    chocolate: 'Milk',
    texture: 'Smooth & Creamy',
    flavor: 'Spicy',
    pairing: 'Creamy milk chocolate with spicy flavors pairs excellently with a spicy chai latte or ginger tea.',
    whyItWorks: 'The creamy texture soothes the spice, while milk chocolate\'s sweetness balances the heat, creating a warming and comforting combination that\'s both exciting and familiar.',
    image: 'https://media.istockphoto.com/id/157506007/photo/milk-chocolate-chunks.jpg?s=612x612&w=0&k=20&c=gUOS1APckPKIZymJY6H5qtFfcaoz_Npw_kKamtyA764='
  },
  {
    chocolate: 'Milk',
    texture: 'Plain',
    flavor: 'Spicy',
    pairing: 'Simple milk chocolate with spicy notes pairs wonderfully with a spicy hot chocolate or Mexican chocolate drink.',
    whyItWorks: 'The simplicity allows the spice to shine, while milk chocolate\'s sweetness balances the heat, creating a warming and satisfying flavor profile.',
    image: 'https://media.istockphoto.com/id/157506007/photo/milk-chocolate-chunks.jpg?s=612x612&w=0&k=20&c=gUOS1APckPKIZymJY6H5qtFfcaoz_Npw_kKamtyA764='
  },
  {
    chocolate: 'Milk',
    texture: 'Plain',
    flavor: 'Boozy',
    pairing: 'Simple milk chocolate with boozy flavors pairs perfectly with a creamy liqueur or Bailey\'s Irish Cream.',
    whyItWorks: 'The simplicity allows the alcohol\'s flavors to shine, while milk chocolate\'s creaminess complements the liqueur, creating a smooth and indulgent combination.',
    image: 'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638'
  },
  {
    chocolate: 'Milk',
    texture: 'Plain',
    flavor: 'Coffee',
    pairing: 'Simple milk chocolate with coffee notes pairs beautifully with a warm latte or cappuccino.',
    whyItWorks: 'The simplicity allows both flavors to complement each other, while milk chocolate\'s sweetness balances coffee\'s bitterness, creating a harmonious and energizing combination.',
    image: 'https://stonestreetcoffee.com/cdn/shop/articles/flavored-chocolate-coffee_1600x.jpg?v=1726759186'
  },
  {
    chocolate: 'Milk',
    texture: 'Smooth & Creamy',
    flavor: 'Boozy',
    pairing: 'Creamy milk chocolate with boozy notes pairs beautifully with a creamy liqueur or Irish cream.',
    whyItWorks: 'The creamy liqueur enhances the chocolate\'s smoothness, while the alcohol adds sophistication to the familiar milk chocolate flavor, creating a nostalgic yet elegant combination.',
    image: 'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638'
  },
  
  // White Chocolate Combinations
  {
    chocolate: 'White',
    texture: 'Smooth & Creamy',
    flavor: 'Fruity',
    pairing: 'White chocolate pairs beautifully with fresh berries, especially with some sparkling wine and raspberries.',
    whyItWorks: 'White chocolate isn\'t technically chocolate - it\'s made from cocoa butter, which gives it a rich, buttery flavor that complements the acidity of fresh berries and the effervescence of sparkling wine.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'White',
    texture: 'Plain',
    flavor: 'Fruity',
    pairing: 'Simple white chocolate with fruity flavors pairs perfectly with fresh citrus fruits or a light fruit salad.',
    whyItWorks: 'The simplicity of plain white chocolate allows the fruit\'s natural flavors to shine, while the chocolate\'s sweetness balances the fruit\'s tartness beautifully.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'White',
    texture: 'Smooth & Creamy',
    flavor: 'Classic Sweet',
    pairing: 'Creamy white chocolate with classic sweetness pairs wonderfully with vanilla ice cream or a warm vanilla custard.',
    whyItWorks: 'Vanilla and white chocolate share similar flavor profiles, creating a harmonious and luxurious combination that feels indulgent yet familiar.',
    image: 'https://www.thehighfivecompany.com/wp-content/uploads/2022/01/THFC_BlogPost_24012022_900x600.jpg'
  },
  {
    chocolate: 'White',
    texture: 'Nuts & Crunchy',
    flavor: 'Fruity',
    pairing: 'White chocolate with nuts and fruit pairs excellently with a tropical fruit smoothie or coconut water.',
    whyItWorks: 'The tropical fruits complement white chocolate\'s buttery richness, while the nuts add texture and the combination creates a refreshing, exotic flavor profile.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'White',
    texture: 'Smooth & Creamy',
    flavor: 'Boozy',
    pairing: 'White chocolate with boozy flavors pairs excellently with champagne or even rum!.',
    whyItWorks: 'Chocolate and alcohol have been paired together for centuries! The sweetness of white chocolate balances the dryness of champagne, while rum\'s caramel notes enhance the chocolate\'s buttery richness.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'White',
    texture: 'Nuts & Crunchy',
    flavor: 'Boozy',
    pairing: 'White chocolate with nuts and boozy notes pairs wonderfully with a nutty liqueur or amaretto.',
    whyItWorks: 'The nuts complement the liqueur\'s flavor profile, while white chocolate\'s sweetness balances the alcohol\'s intensity, creating a harmonious and sophisticated pairing.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'White',
    texture: 'Plain',
    flavor: 'Boozy',
    pairing: 'Simple white chocolate with boozy flavors pairs perfectly with a light dessert wine or prosecco.',
    whyItWorks: 'The simplicity allows the alcohol\'s flavors to shine, while white chocolate\'s buttery richness complements the wine\'s effervescence and creates an elegant, refined combination.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'White',
    texture: 'Nuts & Crunchy',
    flavor: 'Spicy',
    pairing: 'White chocolate with nuts and spicy flavors pairs wonderfully with a spicy chai tea or ginger-infused drink.',
    whyItWorks: 'The nuts add texture and protein, while white chocolate\'s sweetness balances the spice, creating an unexpected and exciting flavor combination that\'s both warming and indulgent.',
    image: 'https://blog.skipscandies.com/wp-content/uploads/2019/05/white-Dark-and-Milk-chocolates.jpg?fit=1024%2C536&ssl=1'
  },
  {
    chocolate: 'White',
    texture: 'Nuts & Crunchy',
    flavor: 'Coffee',
    pairing: 'White chocolate with nuts and coffee notes pairs excellently with a white chocolate mocha or coffee with cream.',
    whyItWorks: 'The nuts add texture and protein, while the coffee complements white chocolate\'s buttery richness, creating a sophisticated and energizing combination.',
    image: 'https://stonestreetcoffee.com/cdn/shop/articles/flavored-chocolate-coffee_1600x.jpg?v=1726759186'
  },
  {
    chocolate: 'White',
    texture: 'Nuts & Crunchy',
    flavor: 'Classic Sweet',
    pairing: 'White chocolate with nuts and classic sweetness pairs perfectly with a warm vanilla latte or nut bread.',
    whyItWorks: 'The nuts complement the classic sweetness, while white chocolate\'s buttery flavor enhances the combination, creating a comforting and satisfying flavor profile.',
    image: 'https://www.thehighfivecompany.com/wp-content/uploads/2022/01/THFC_BlogPost_24012022_900x600.jpg'
  },
  {
    chocolate: 'White',
    texture: 'Smooth & Creamy',
    flavor: 'Spicy',
    pairing: 'Creamy white chocolate with spicy flavors pairs beautifully with a spicy hot chocolate or chai latte.',
    whyItWorks: 'The creamy texture soothes the spice, while white chocolate\'s sweetness balances the heat, creating a luxurious and warming combination that\'s both indulgent and exciting.',
    image: 'https://blog.skipscandies.com/wp-content/uploads/2019/05/white-Dark-and-Milk-chocolates.jpg?fit=1024%2C536&ssl=1'
  },
  {
    chocolate: 'White',
    texture: 'Smooth & Creamy',
    flavor: 'Coffee',
    pairing: 'Creamy white chocolate with coffee notes pairs wonderfully with a white chocolate latte or coffee with cream.',
    whyItWorks: 'The creamy texture enhances white chocolate\'s buttery richness, while the coffee adds depth and complexity, creating a sophisticated and energizing combination.',
    image: 'https://stonestreetcoffee.com/cdn/shop/articles/flavored-chocolate-coffee_1600x.jpg?v=1726759186'
  },
  {
    chocolate: 'White',
    texture: 'Plain',
    flavor: 'Spicy',
    pairing: 'Simple white chocolate with spicy notes pairs excellently with a spicy Mexican hot chocolate or ginger tea.',
    whyItWorks: 'The simplicity allows the spice to shine, while white chocolate\'s sweetness balances the heat, creating an unexpected and exciting flavor profile.',
    image: 'https://blog.skipscandies.com/wp-content/uploads/2019/05/white-Dark-and-Milk-chocolates.jpg?fit=1024%2C536&ssl=1'
  },
  {
    chocolate: 'White',
    texture: 'Plain',
    flavor: 'Coffee',
    pairing: 'Simple white chocolate with coffee flavors pairs perfectly with a warm latte or coffee with a splash of cream.',
    whyItWorks: 'The simplicity allows both flavors to complement each other, while white chocolate\'s buttery richness enhances the coffee, creating a smooth and energizing combination.',
    image: 'https://stonestreetcoffee.com/cdn/shop/articles/flavored-chocolate-coffee_1600x.jpg?v=1726759186'
  },
  {
    chocolate: 'White',
    texture: 'Plain',
    flavor: 'Classic Sweet',
    pairing: 'Simple white chocolate with classic sweetness pairs beautifully with vanilla ice cream or a warm vanilla custard.',
    whyItWorks: 'The simplicity allows both flavors to shine, while white chocolate\'s buttery richness complements the classic sweetness, creating a harmonious and indulgent combination.',
    image: 'https://www.thehighfivecompany.com/wp-content/uploads/2022/01/THFC_BlogPost_24012022_900x600.jpg'
  }
];

// Find the container div on the page where we want to show the pairings
let containerDiv = document.getElementById('pairings-container');

// Function to build HTML for one card
function buildCardHTML(pairing) {
  let cardHTML = '';
  cardHTML = cardHTML + '<div class="pairing-card">';
  cardHTML = cardHTML + '<div class="pairing-image">';
  cardHTML = cardHTML + '<img src="' + pairing.image + '" alt="chocolate pairing" />';
  cardHTML = cardHTML + '</div>';
  cardHTML = cardHTML + '<div class="pairing-content">';
  cardHTML = cardHTML + '<h3>' + pairing.chocolate + ' + ' + pairing.texture + ' + ' + pairing.flavor + '</h3>';
  cardHTML = cardHTML + '<p><strong>Pairing:</strong> ' + pairing.pairing + '</p>';
  cardHTML = cardHTML + '<p><strong>Why it works:</strong> ' + pairing.whyItWorks + '</p>';
  cardHTML = cardHTML + '</div>';
  cardHTML = cardHTML + '</div>';
  return cardHTML;
}

// Start with an empty string that will hold all our HTML
let allTheHTML = '';

// Group 1: Dark Chocolate
allTheHTML = allTheHTML + '<div class="chocolate-group">';
allTheHTML = allTheHTML + '<h2 class="chocolate-type-header">Dark Chocolate</h2>';
allTheHTML = allTheHTML + '<div class="pairings-grid">';

for (let index = 0; index < allPairings.length; index = index + 1) {
  let currentPairing = allPairings[index];
  if (currentPairing.chocolate === 'Dark') {
    allTheHTML = allTheHTML + buildCardHTML(currentPairing);
  }
}

allTheHTML = allTheHTML + '</div>';
allTheHTML = allTheHTML + '</div>';

// Group 2: Milk Chocolate
allTheHTML = allTheHTML + '<div class="chocolate-group">';
allTheHTML = allTheHTML + '<h2 class="chocolate-type-header">Milk Chocolate</h2>';
allTheHTML = allTheHTML + '<div class="pairings-grid">';

for (let index = 0; index < allPairings.length; index = index + 1) {
  let currentPairing = allPairings[index];
  if (currentPairing.chocolate === 'Milk') {
    allTheHTML = allTheHTML + buildCardHTML(currentPairing);
  }
}

allTheHTML = allTheHTML + '</div>';
allTheHTML = allTheHTML + '</div>';

// Group 3: White Chocolate
allTheHTML = allTheHTML + '<div class="chocolate-group">';
allTheHTML = allTheHTML + '<h2 class="chocolate-type-header">White Chocolate</h2>';
allTheHTML = allTheHTML + '<div class="pairings-grid">';

for (let index = 0; index < allPairings.length; index = index + 1) {
  let currentPairing = allPairings[index];
  if (currentPairing.chocolate === 'White') {
    allTheHTML = allTheHTML + buildCardHTML(currentPairing);
  }
}

allTheHTML = allTheHTML + '</div>';
allTheHTML = allTheHTML + '</div>';

// Now put all the HTML we built into the container div on the page
containerDiv.innerHTML = allTheHTML;
