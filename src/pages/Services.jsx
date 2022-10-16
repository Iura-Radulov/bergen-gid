import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ServicesList from 'components/ServicesList';

export default function Services() {
  return (
    <div>
      <Container>
        <h2 className="p-5 text-center">Услуги</h2>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <ServicesList />

          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
}
