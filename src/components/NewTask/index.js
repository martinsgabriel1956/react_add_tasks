import { useState } from "react";

import { Section } from '../UI/Section';
import { TaskForm } from '../NewTask/TaskForm';

export function NewTask(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleEnterTask(taskText) {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(
        "https://react-fetch-movies-2bc13-default-rtdb.firebaseio.com/tasks.json",
        {
          method: "POST",
          body: JSON.stringify({ text: taskText }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) throw new Error("Request failed!");

      const data = await res.json();

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }

  return (
    <Section>
      <TaskForm onEnterTask={handleEnterTask} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
}
