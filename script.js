const quoute_card = document.getElementById('quote-card');
let quote_text = document.getElementById('quote');
let quote_author = document.getElementById('author');

let quotes = [
  { "quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs" },
  { "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill" },
  { "quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt" },
  { "quote": "Your time is limited, so don’t waste it living someone else’s life.", "author": "Steve Jobs" },
  { "quote": "The best way to predict the future is to invent it.", "author": "Alan Kay" },
  { "quote": "You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky" },
  { "quote": "Dream big and dare to fail.", "author": "Norman Vaughan" },
  { "quote": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius" },
  { "quote": "Everything you’ve ever wanted is on the other side of fear.", "author": "George Addair" },
  { "quote": "Hardships often prepare ordinary people for an extraordinary destiny.", "author": "C.S. Lewis" }
]

let currentIndex = 0;

let countdown = 10;
const countdownValue = document.getElementById('countdown-value');

function updateCountdown() {
    countdown--;
    if (countdown <= 0) {
        countdown = 10;
    }
    countdownValue.textContent = countdown;
}

setInterval(updateCountdown, 1000);

function changeQuote(){
    currentIndex = (currentIndex + 1) % quotes.length;
    quote_text.textContent = quotes[currentIndex].quote;
    quote_author.textContent = quotes[currentIndex].author;
    countdown = 10; 
}

quote_text.textContent = quotes[0].quote;
quote_author.textContent = quotes[0].author;

setInterval(changeQuote , 10000);

document.getElementById('copy-btn').addEventListener('click', function() {
    const quote = quotes[currentIndex].quote;
    const author = quotes[currentIndex].author;
    navigator.clipboard.writeText(`"${quote}" - ${author}`).then(function() {
        const toastEl = document.getElementById('copyToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    });
});

