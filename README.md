# German Vocabulary Quiz

A small interactive quiz I built to test German vocabulary. Built with vanilla HTML, CSS, and JavaScript — no frameworks.

## What it does

A 10-question quiz where each question shows a German word and you pick the correct meaning from 4 options. At the end, you see your final score along with a short message based on your percentage of correct answers.

## Features

- Three separate views: start screen, quiz screen, and result screen
- Progress bar showing how many questions are left
- Live score that updates as you answer
- Correct answer highlighted in green, your wrong pick (if any) highlighted in red
- "Try Again" button to restart the quiz

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks or libraries)

## How to Run

Open index.html in your browser. No installation needed.

## What I Learned / Practiced

- Managing multiple views (Start/Quiz/Result) by showing and hiding elements instead of reloading the page
- Structuring data as an array of objects (each question holds its options and the index of the correct answer)
- Basic state management (score, current question index, whether the current question has been answered)
- Attaching event listeners to elements created dynamically at runtime

## Possible Future Improvements

- Group questions by topic (e.g. work, travel, daily life)
- Save high score using localStorage
- Add a timer per question
- Load questions from a separate JSON file
