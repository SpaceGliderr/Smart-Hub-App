import React, { useState } from "react";
import { fb, rt } from "../config/firebase-config";

const TestComponent = () => {
  const [title, setTitle] = useState("");
  const [mode, setMode] = useState("");
  const [content, setContent] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // fb.firestore().collection("Test").add({
    //   title: title,
    //   content: content,
    // });

    rt.ref("light-strips")
      .child("06f40fa9-fc42-4086-85e9-d4a223000a79")
      .update({
        brightness: parseInt(title),
        lightMode: parseInt(mode),
      });

    setTitle("");
    setMode("");
    setContent("");

    setNotification("Created Notification");

    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Testing Title
          <br />
          <input
            type="number"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
          <input
            type="number"
            value={mode}
            onChange={({ target }) => setMode(target.value)}
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
