import React, { useState } from "react";
import { fb } from "../config/firebase-config";

const TestComponent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fb.firestore().collection("Test").add({
      title: title,
      content: content,
    });

    setTitle("");
    setContent("");

    setNotification("Created");

    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  return (
    <div style={{ paddingLeft: "20px" }}>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title
          <br />
          <input
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Content
          <br />
          <textarea
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>

      {notification}
    </div>
  );
};

export default TestComponent;
