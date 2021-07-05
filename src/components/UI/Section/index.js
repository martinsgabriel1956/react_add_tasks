import { Container } from './styles';

export function Section({children, ...props}) {
  return (
    <Container>
      {children}
    </Container>
  );
};