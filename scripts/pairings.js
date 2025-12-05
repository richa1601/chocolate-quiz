
const allPairings = [
  // Dark Chocolate Combinations
  {
    chocolate: 'Dark',
    texture: 'Nuts & Crunchy',
    flavor: 'Spicy',
    pairing: 'Dark chocolate bark with chili-roasted almonds and a smoky mezcal on the side.',
    whyItWorks: 'The chili\'s capsaicin makes the cocoa flavors taste deeper and richer, while roasted nuts add umami and crunch; mezcal\'s smoky notes mirror dark chocolate\'s earthy aromatics, so everything feels intentionally intense instead of just "too bitter."',
    image: 'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638'
  },
  {
    chocolate: 'Dark',
    texture: 'Plain',
    flavor: 'Spicy',
    pairing: 'Simple 70–80% dark chocolate with a chili–cinnamon hot chocolate or chili-infused black tea.',
    whyItWorks: 'With no extra toppings, you get a clean triangle of bitter + sweet + heat, where capsaicin heightens your perception of cocoa\'s fruity notes and the spice warmth lingers pleasantly instead of burning.',
    image: 'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638'
  },
  {
    chocolate: 'Dark',
    texture: 'Nuts & Crunchy',
    flavor: 'Coffee',
    pairing: 'Dark chocolate with hazelnuts alongside a short, intense espresso.',
    whyItWorks: 'Roasted nuts and coffee share similar Maillard "roasty" aromas with dark chocolate, so the combo feels layered but still coherent—like turning the volume up on the same flavor family, not mixing random tracks.',
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
    pairing: 'Dark chocolate ganache with a hint of chili, served with chai-spiced dark hot chocolate.',
    whyItWorks: 'The extra fat from cream buffers the spice, so you get a slow, cozy warmth instead of a harsh burn, and the spices (cardamom, ginger, cinnamon) echo chocolate\'s naturally warm, baked notes.',
    image: 'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638'
  },
  {
    chocolate: 'Dark',
    texture: 'Nuts & Crunchy',
    flavor: 'Fruity',
    pairing: 'Dark chocolate with hazelnuts and dried cherries, plus a medium-bodied red wine like Merlot.',
    whyItWorks: 'Cherries and red wine bring acidity and red-fruit aromas that cut through cocoa\'s bitterness, while the nuts add texture and a bit of fat to soften tannins in both the chocolate and the wine.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'Dark',
    texture: 'Smooth & Creamy',
    flavor: 'Fruity',
    pairing: 'Dark chocolate mousse with fresh raspberries and a splash of raspberry liqueur.',
    whyItWorks: 'The airy, creamy mousse softens dark chocolate\'s edge, and tart berries add brightness that keeps the dessert from feeling heavy, a classic sweet-acid balance used by chocolatiers.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'Dark',
    texture: 'Smooth & Creamy',
    flavor: 'Boozy',
    pairing: 'Pair creamy dark chocolate with brandy or tawny port.',
    whyItWorks: 'Port\'s dried-fruit notes echo cocoa\'s natural raisin aromas, while brandy\'s vanilla compounds complement chocolate\'s sweetness. The creaminess lowers alcohol burn, making each sip smoother.',
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
    whyItWorks: 'Tea tannins grip onto cocoa particles and create a longer, smoother finish.',
    image: 'https://www.thehighfivecompany.com/wp-content/uploads/2022/01/THFC_BlogPost_24012022_900x600.jpg'
  },
  {
    chocolate: 'Dark',
    texture: 'Nuts & Crunchy',
    flavor: 'Classic Sweet',
    pairing: 'Try dark chocolate with walnut banana bread or toasted nut loaf.',
    whyItWorks: 'Banana\'s esters bring out cocoa\'s tropical notes, and nuts provide contrast to dark chocolate\'s bitterness. Warm baked goods increase aromatic release — making the chocolate taste sweeter.',
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
    whyItWorks: 'The extra dairy echoes milk chocolate\'s creamy profile, while gentle floral/vanilla notes add complexity without adding more sugar. Studies on fat–sweetness interaction show that fat can dampen bitterness and make sweetness feel rounder and more "full," which is exactly what\'s happening in this cozy combo.',
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
    whyItWorks: 'Dairy fat suppresses perceived bitterness and tempers spice burn. That lets warm spices feel cozy and aromatic instead of aggressive, which is why "spiced hot chocolate" is such a common tradition.',
    image: 'https://media.istockphoto.com/id/157506007/photo/milk-chocolate-chunks.jpg?s=612x612&w=0&k=20&c=gUOS1APckPKIZymJY6H5qtFfcaoz_Npw_kKamtyA764='
  },
  {
    chocolate: 'Milk',
    texture: 'Plain',
    flavor: 'Spicy',
    pairing: 'Simple milk chocolate with spicy notes pairs wonderfully with a spicy hot chocolate or Mexican chocolate drink.',
    whyItWorks: 'Traditional Mexican chocolate drinks rely on exactly this trio: sweet cocoa, warm spice, gentle heat. Milk chocolate echoes that profile, so the pairing feels culturally natural and sensorially balanced.',
    image: 'https://media.istockphoto.com/id/157506007/photo/milk-chocolate-chunks.jpg?s=612x612&w=0&k=20&c=gUOS1APckPKIZymJY6H5qtFfcaoz_Npw_kKamtyA764='
  },
  {
    chocolate: 'Milk',
    texture: 'Plain',
    flavor: 'Boozy',
    pairing: 'Simple milk chocolate with boozy flavors pairs perfectly with a creamy liqueur or Bailey\'s Irish Cream.',
    whyItWorks: 'Cream liqueurs share milk chocolate\'s core flavors: dairy, vanilla, sweetness. Alcohol lifts aromatics and adds a warm finish so it feels more like a composed dessert than just "hot chocolate with a shot."',
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
    pairing: 'White chocolate panna cotta topped with raspberries and passion fruit.',
    whyItWorks: 'White chocolate is basically cocoa butter + sugar, so it loves acidity. Tart fruit cuts through the fat and makes the dessert taste bright instead of cloying. Many chocolatiers recommend pairing white chocolate with berries and tropical fruits for this reason.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'White',
    texture: 'Plain',
    flavor: 'Fruity',
    pairing: 'Simple white chocolate with a citrus salad (orange, lime, grapefruit).',
    whyItWorks: 'Acidic citrus juices and aromatic zest slice right through cocoa butter\'s richness and clean your palate between bites. Pairing guides often recommend citrus with white or milk chocolate for exactly this "refresh & reset" effect.',
    image: 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316'
  },
  {
    chocolate: 'White',
    texture: 'Smooth & Creamy',
    flavor: 'Classic Sweet',
    pairing: 'Creamy white chocolate with classic sweetness pairs wonderfully with vanilla ice cream or a warm vanilla custard.',
    whyItWorks: 'Vanilla doubles down on white chocolate\'s sweet, creamy profile, turning it into a "birthday cake / bakery" flavor. Soft bread or ice cream adds comforting texture and just enough starch or cold to keep it from feeling too rich.',
    image: 'https://www.thehighfivecompany.com/wp-content/uploads/2022/01/THFC_BlogPost_24012022_900x600.jpg'
  },
  {
    chocolate: 'White',
    texture: 'Nuts & Crunchy',
    flavor: 'Fruity',
    pairing: 'White chocolate with pistachios and dried cranberries, plus chilled coconut water or a spritzer.',
    whyItWorks: 'Salty, crunchy nuts keep sweetness in check, while dried fruit adds tang and chewiness. A light, refreshing drink (coconut water, spritzer) avoids piling on more sugar and helps reset your palate.',
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
    pairing: 'White chocolate bark with candied ginger and toasted pecans.',
    whyItWorks: 'Ginger\'s heat is more aromatic than aggressive; paired with nuts and creamy sweetness it feels warm, cozy, and complex. You get sweetness, spice, and crunch all in one bite.',
    image: 'https://blog.skipscandies.com/wp-content/uploads/2019/05/white-Dark-and-Milk-chocolates.jpg?fit=1024%2C536&ssl=1'
  },
  {
    chocolate: 'White',
    texture: 'Nuts & Crunchy',
    flavor: 'Coffee',
    pairing: 'White chocolate–macadamia biscotti with a latte or earthy Indonesian coffee.',
    whyItWorks: 'white chocolate with earthy, lower-acidity coffees (e.g., Indonesia) keep things from becoming too sharp. Nuts add a buttery crunch that matches the body of the coffee.',
    image: 'https://stonestreetcoffee.com/cdn/shop/articles/flavored-chocolate-coffee_1600x.jpg?v=1726759186'
  },
  {
    chocolate: 'White',
    texture: 'Nuts & Crunchy',
    flavor: 'Classic Sweet',
    pairing: 'White chocolate–cashew clusters with a sprinkle of flaky sea salt.',
    whyItWorks: 'Salty crunch stops white chocolate from feeling "one-note." Research shows sodium ions can suppress bitterness and boost perceived sweetness and fruity/floral notes in chocolate, which makes each bite taste more defined.',
    image: 'https://www.thehighfivecompany.com/wp-content/uploads/2022/01/THFC_BlogPost_24012022_900x600.jpg'
  },
  {
    chocolate: 'White',
    texture: 'Smooth & Creamy',
    flavor: 'Spicy',
    pairing: 'Creamy white chocolate with spicy flavors pairs beautifully with a spicy hot chocolate or chai latte.',
    whyItWorks: 'White chocolate adds body and sweetness; chai adds structure (tannins) and aromatic warmth. Because white chocolate has no cocoa solids, it "borrows" character from the spice blend and tea.',
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
