import { Section } from '../UI/Section';
import { TaskForm } from '../NewTask/TaskForm';

import { useHTTP } from '.././../hooks/useHTTP';

export function NewTask(props) {
  const { error, isLoading, sendRequest: sendTaskRequest } = useHTTP();

  function createTask(taskText, taskData) {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  async function handleEnterTask(taskText) {
    sendTaskRequest({
      url: "https://react-fetch-movies-2bc13-default-rtdb.firebaseio.com/tasks.json", 
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        text: taskText
      }
    }, 
      createTask.bind(null, taskText)
    )
  }

  return (
    <Section>
      <TaskForm onEnterTask={handleEnterTask} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
}
