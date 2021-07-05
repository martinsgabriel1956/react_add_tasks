import { useEffect, useState } from 'react';

import { NewTask } from '../../components/NewTask';
import { Tasks } from '../../components/Tasks';

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  async function fetchTasks(taskText) {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        'https://react-fetch-movies-2bc13-default-rtdb.firebaseio.com/tasks.json'
      );

      if (!res.ok) throw new Error('Request failed!');

      const data = await res.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  function handleTaskAdd (task) {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  
  return (
    <>
      <NewTask onAddTask={handleTaskAdd} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  );
}