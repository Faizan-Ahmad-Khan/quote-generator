import { useState } from 'react';
import './App.css'

function App() {
  const[randomQuote, setRandomQuote] = useState("Click the button to generate a quote!")
 const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "In three words I can sum up everything I’ve learned about life: it goes on. – Robert Frost",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "The best way to predict the future is to create it. – Abraham Lincoln",
    "Dream big and dare to fail. – Norman Vaughan",
    "Life is what happens when you’re busy making other plans. – Allen Saunders",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Life is really simple, but we insist on making it complicated. – Confucius",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "The best revenge is massive success. – Frank Sinatra",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The secret of getting ahead is getting started. – Mark Twain",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein",
    "The greatest wealth is to live content with little. – Plato",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "The more that you read, the more things you will know. The more that you learn, the more places you’ll go. – Dr. Seuss",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. – Thomas A. Edison",
    "The only true wisdom is in knowing you know nothing. – Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    "The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart. – Helen Keller",
    "Life is short, and it’s up to you to make it sweet. – Sarah Louise Delany",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
    "The greatest gift of life is friendship, and I have received it. – Hubert H. Humphrey",
    "The only thing necessary for the triumph of evil is for good men to do nothing. – Edmund Burke",
    "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor. – Sholom Aleichem",
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    "Life is either a daring adventure or nothing at all. – Helen Keller",
    "The purpose of art is washing the dust of daily life off our souls. – Pablo Picasso",
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "If you can dream it, you can achieve it. – Zig Ziglar",
    "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    "Act as if what you do makes a difference. It does. – William James",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
    "The mind is everything. What you think you become. – Buddha",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "Keep your eyes on the stars, and your feet on the ground. – Theodore Roosevelt",
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    "The best way to predict your future is to create it. – Abraham Lincoln",
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
    "Perseverance is not a long race; it is many short races one after the other. – Walter Elliot",
    "The best preparation for tomorrow is doing your best today. – H. Jackson Brown, Jr.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha",
    "Life isn’t about finding yourself. Life is about creating yourself. – George Bernard Shaw",
    "The only impossible journey is the one you never begin. – Tony Robbins",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Do one thing every day that scares you. – Eleanor Roosevelt",
    "If you’re going through hell, keep going. – Winston Churchill",
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "Don’t judge each day by the harvest you reap but by the seeds that you plant. – Robert Louis Stevenson",
    "You can never cross the ocean until you have the courage to lose sight of the shore. – Christopher Columbus",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "You are the sum total of everything you’ve ever seen, heard, eaten, smelled, been told, forgot – it’s all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive. – Maya Angelou",
    "You can’t go back and change the beginning, but you can start where you are and change the ending. – C.S. Lewis",
    "We may encounter many defeats but we must not be defeated. – Maya Angelou",
    "I have not failed. I’ve just found 10,000 ways that won’t work. – Thomas Edison",
    "To succeed in life, you need two things: ignorance and confidence. – Mark Twain",
    "To accomplish great things, we must not only act, but also dream; not only plan, but also believe. – Anatole France",
    "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success. – James Cameron",
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson",
    "It is our choices that show what we truly are, far more than our abilities. – J.K. Rowling",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. – Steve Jobs",
    "The biggest risk is not taking any risk... In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks. – Mark Zuckerberg",
    "Success is not the result of spontaneous combustion. You must set yourself on fire. – Arnold H. Glasow",
    "If you really look closely, most overnight successes took a long time. – Steve Jobs",
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh, Alice in Wonderland",
    "The greater the obstacle, the more glory in overcoming it. – Molière",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "The harder the conflict, the greater the triumph. – George Washington",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "We generate fears while we sit. We overcome them by action. – Dr. Henry Link",
    "Whether you think you can or think you can’t, you’re right. – Henry Ford"
];

function handleQuoteGenerator() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  setRandomQuote(quotes[quoteIndex]);
}
  return (
    <div className='container'>
      <h1>Quote Generator</h1>
      <h3>{randomQuote}</h3>
      <button onClick={handleQuoteGenerator}>Generate</button>
      <footer>Created by Faizan</footer>
    </div>
  )
}

export default App
