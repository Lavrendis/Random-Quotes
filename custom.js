const quotes = [{
    quote: `"Good people do not need law to tell them to act responsibly, while bad people will find a way around the laws."`,
    writer: `-PLATO`
}, {
    quote: `"Anybody can become angry - that is easy, but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way - that is not within everybody's power and is not easy."`,
    writer: `-ARISTOTLE`
}, {
    quote: `"You don't develop courage by being happy in your relationships everyday. You develop it by surviving difficult times and challenging adversity."`,
    writer: `-EPICURUS`
}, {
    quote: `"There is nothing permanent except change."`,
    writer: `-HERACLITUS`
}, {
    quote: `"By all means, get married: if you find a good wife, you'll be happy; if not, you'll become a philosopher."`,
    writer: `-SOCRATES`
}, {
    quote: `"I am indebted to my father for living, but to my teacher for living well."`,
    writer: `-ALEXANDER THE GREAT`
}, {
    quote: `"The real destroyer of the liberties of the people is he who spreads among them bounties, donations and benefits."`,
    writer: `-PLUTARCH`
}, {
    quote: `"Nothing exists except atoms and empty space; everything else is just opinion."`,
    writer: `-DEMOCRITUS`
},
]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML= quotes[random].writer;
    
})