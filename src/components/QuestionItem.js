import React from "react";

function QuestionItem({ question, onDelete, onChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(){
    onDelete(id);
  }

  function handleChange(event){
    onChange(id, parseInt(event.target.value));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick = {handleDelete} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;