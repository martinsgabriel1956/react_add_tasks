import { useRef } from 'react';
import { Container } from './styles';

export function TaskForm(props) {
  const taskInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) props.onEnterTask(enteredValue);
    
  };

  return (
    <Container onSubmit={handleSubmit}>
      <input type='text' ref={taskInputRef} />
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </Container>
  );
};