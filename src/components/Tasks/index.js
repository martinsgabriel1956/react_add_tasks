import { Container } from './styles';

import { TaskItem } from './TaskItem';
import { Section } from '../UI/Section';

export function Tasks(props) {
  return (
    <Section>
      <Container>
        <ul>
          {props.items.length > 0 && props.items.map((task) => (
            <TaskItem key={task.id}>{task.text}</TaskItem>
          ))}
          {props.error && (
            <button onClick={props.onFetch}>Try again</button>
          )}
          {props.loading && (
            <p>Loading tasks...</p>
          )}
        </ul>
      </Container>
    </Section>
  );
};