import { useEffect, useState } from 'react';

import { NewTask } from '../../components/NewTask';
import { Tasks } from '../../components/Tasks';

import { useHTTP } from '../../hooks/useHTTP';

export function Home() {
  const [tasks, setTasks] = useState([]);

  function transformTasks(tasksObj) {
    const loadedTasks = [];

    for (const taskKey in tasksObj) loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });

    setTasks(loadedTasks);
  }

  const { isLoading, error, sendRequest: fetchTasks } = useHTTP({url: `https://react-fetch-movies-2bc13-default-rtdb.firebaseio.com/tasks.json`}, transformTasks);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

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