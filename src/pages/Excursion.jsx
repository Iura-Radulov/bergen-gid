import Container from 'react-bootstrap/Container';
import ExcursionList from 'components/ExcursionList';
import { Suspense } from 'react';

export default function Excursion() {
  return (
    <Container>
      <h2 className="p-5 text-center">Экскурсии</h2>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <ExcursionList />
      </Suspense>
    </Container>
  );
}
