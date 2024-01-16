import "./index.css";
import { useState } from "react";
export default function App() {
  return (
    <div>
      <Flashcards />
    </div>
  );
}

const questions = [
  {
    id: 345,
    question: "What language is react based on?",
    answer: "Javascript",
  },

  {
    id: 34556,
    question: "What are the building blocks of react app?",
    answer: "Components",
  },

  {
    id: 2109876,
    question: "What is the name of the syntax use to describe UI in react?",
    answer: "JSX",
  },
  {
    id: 3423,
    question: "How do you pass data from parent to child component in react?",
    answer: "Props",
  },
];

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {selectedId === question.id ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
