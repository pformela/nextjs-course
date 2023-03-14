import { useRef, useState } from "react";

const HomePage = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        text: enteredFeedback,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const loadFeedbackHandler = () => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => setFeedbackItems(data.feedback));
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="email">Your feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send feedback</button>
        <hr />
        <button onClick={loadFeedbackHandler} type="button">
          Load feedback
        </button>
        <ul>
          {feedbackItems.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default HomePage;
