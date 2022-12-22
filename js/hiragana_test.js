/*quiz data */
const quizData = [
    {
      question: 'Who is the current CEO of Google ?',
      a: 'Sunder Pichai',
      b: 'Larry Page ',
      c: 'Jhon Brown',
      correct: 'a',
    },
    {
      question: 'Who is the current CEO of Amazon ?',
      a: 'Jeff Bezos',
      b: 'Warren Buffet ',
      c: 'Andy Jassy',
      correct: 'c',
    },
    {
      question: 'Who is the current CEO of Tesla ?',
      a: 'Jeffry Black',
      b: 'Elon Musk ',
      c: 'Jhon Brown',
      correct: 'b',
    },
    {
      question: 'Who is the current CEO of Microsoft ?',
      a: 'Satya Nadella ',
      b: 'Tom Klington',
      c: 'Jhon Brown',
      correct: 'a',
    },
    {
      question: 'Which of the company is owned by Mark Zkerburg ?',
      a: 'Neuralink ',
      b: 'Meta Platforms Inc ',
      c: 'Metaverse LLC ',
      correct: 'b',
    },
  ];

  /*Grabing all the elements */
const question = document.getElementById('question');
const a = document.getElementById('a+');
const b = document.getElementById('b+');
const c = document.getElementById('c+');
const btn = document.getElementById('submit');
const all_answer = document.querySelectorAll('.answer');