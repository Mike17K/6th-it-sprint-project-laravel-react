import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ApplicationEvaluationPage() {
  const { eventId, applicationId } = useParams();
  const [ratings, setRatings] = useState([]);

  // fetch here for the aplications of the event with id of eventId, only those who are beening authorized for this evaluator user
  // fetch for info about the event like: name , stats ...
  const eventName = "Event - " + applicationId;
  const question = [
    { id: 0, question: "question - 0", answer: "answer - 0" },
    { id: 1, question: "question - 1", answer: "answer - 1" },
    { id: 2, question: "question - 2", answer: "answer - 2" },
    { id: 3, question: "question - 3", answer: "answer - 3" },
    { id: 4, question: "question - 4", answer: "answer - 4" },
    { id: 5, question: "question - 5", answer: "answer - 5" },
    { id: 6, question: "question - 6", answer: "answer - 6" },
    { id: 7, question: "question - 7", answer: "answer - 7" },
    { id: 8, question: "question - 8", answer: "answer - 8" },
  ];

  function sumbitRating() {
    //fetch call for posting the ratings, user id and aplicant id
    // ratings , userid (not implemented) , applicationId , question id
  }

  function handleRatingChange(e, questionId) {
    let newRatings = ratings;
    if (newRatings.some((obj) => obj.id === questionId)) {
      newRatings = newRatings.filter((obj) => obj.id !== questionId);
    }
    newRatings.push({ id: questionId, rating: e.target.value }); // here i can change the atributes to whatever i need to pass to backend about the authorized users

    setRatings(newRatings);
  }

  return (
    <div>
      <h4>{eventName}</h4>
      <ul className="event-list">
        <li>Questions Answers Rating</li>
        {question.map((question, index) => (
          <div>
            <li key={question.id}>
              {question.question} {"=>"} {question.answer}
              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                onChange={(e) => {
                  handleRatingChange(e, question.id);
                }}
              />
            </li>
          </div>
        ))}
      </ul>
      <button onClick={sumbitRating}>Submit</button>
    </div>
  );
}

export default ApplicationEvaluationPage;
