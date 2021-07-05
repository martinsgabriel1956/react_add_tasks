import { Container } from './styles';

export function TaskItem({children, ...props}) {
  return (
    <Container>
      {children}
    </Container>
  );
};